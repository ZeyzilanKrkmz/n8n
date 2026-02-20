🕵️‍♂️ Idefix Fiyat Takip Botu (n8n & Google Sheets)
Bu proje, belirli bir ürünün fiyatını saatlik olarak takip eden, verileri Google Sheets'e kaydeden ve fiyat değişimlerini izleyen düşük kodlu (low-code) bir otomasyon sistemidir.

🚀 Özellikler
Otomatik Tetikleme: Schedule Trigger ile her saat başı kontrol sağlar.

Dinamik Veri Kazıma: Idefix sayfa kaynağını HTTP Request ile indirir.

Akıllı Veri Ayıklama: JavaScript (Regex) kullanarak Next.js tabanlı sayfalardan gizli fiyat verisini çeker.

Veri Hafızası: Tüm fiyat hareketlerini Google Sheets üzerinde kayıt altında tutar.

🛠 Kullanılan Teknolojiler
n8n: İş akışı otomasyonu.

JavaScript: Regex ile veri manipülasyonu.

Google Sheets API: Veri depolama.

Idefix Web Scraper: Ürün bilgisi çekme.

🏗 İş Akışı (Workflow) Mimarisi
Schedule Trigger: Sistemin ne zaman çalışacağını belirler.

HTTP Request: Hedef ürün linkine GET isteği atar (Bot engeline takılmamak için User-Agent başlığı içerir).

Code Node (JavaScript): İndirilen devasa HTML kodunun içinden "sellingPrice" değerini cımbızla çeker.

Google Sheets (Append): Çekilen temiz fiyat verisini ve işlem tarihini tabloya yeni bir satır olarak ekler.

💻 Kullanılan Kritik Kod Bloğu
Fiyatı HTML içinden ayıklamak için kullanılan mıknatıs kod:

JavaScript
const html = $input.all()[0].json.data;
const priceMatch = html.match(/"sellingPrice"\s?:\s?(\d+\.?\d*)/) || 
                   html.match(/"price"\s?:\s?(\d+\.?\d*)/);

return {
    fiyat: priceMatch ? parseFloat(priceMatch[1]) : 0,
    durum: priceMatch ? "Başarılı" : "Fiyat Bulunamadı"
};
📝 Kurulum Notları
Headers: Idefix'in botları engellememesi için HTTP Request kısmında gerçek bir tarayıcı gibi davranan User-Agent bilgisi eklenmiştir.

Mapping: Google Sheets node'unda verilerin yazılması için {{ $node["Code"].json["fiyat"] }} ifadesi kullanılarak node'lar arası köprü kurulmuştur.