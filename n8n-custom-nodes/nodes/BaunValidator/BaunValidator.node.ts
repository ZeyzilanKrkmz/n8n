
import {
    IExecuteFunctions,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';


export class BaunValidator implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'University Email Validator',
        name: 'baunValidator',
        group: ['transform'],
        version: 1,
        description: 'BAUN öğrenci e-postalarını doğrular ve öğrenci numarasını ayıklar.',
        defaults: { name: 'BAUN Validator' },
        inputs: ['main'],
        outputs: ['main'],
        properties: [
            {
                displayName: 'Email Address',
                name: 'email',
                type: 'string',
                default: '',
                placeholder: 'ör: 2021001@ogr.balikesir.edu.tr',
                description: 'doğrulanacak e-posta adresi',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];

        for (let i = 0; i < items.length; i++) {
            try {
                const email = this.getNodeParameter('email', i) as string;
                const regex = /^(\d{8,10})@ogr\.balikesir\.edu\.tr$/i;
                const match = email.match(regex);

                if (match) {
                    returnData.push({
                        json: {
                            email,
                            isValid: true,
                            studentId: match[1],
                            year: match[1].substring(0, 4),

                        },
                    });
                } else {
                    returnData.push({
                        json: { email, isValid: false, error: 'Geçersiz BAUN e-postası' },

                    });
                }
            } catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ json: { error: error.message } });
                    continue;
                }
                throw error;
            }
        } return [returnData];
    }

}