Bilgisayar mühendisliği 3. sınıf öğrencisi olarak geliştirdiğin bu "Akıllı Akademik Literatür Takipçisi" projesi, hem n8n yetkinliğini hem de Edge AI ve LLM entegrasyonu konusundaki teknik becerilerini sergilemek için harika bir portfolyo parçası.

Senin için profesyonel, "Mühendis işi" bir GitHub README.md taslağı hazırladım:

🎓 Akıllı Akademik Literatür Takipçisi (AI-Powered Research Assistant)
Bu proje, belirlenen teknik konularda (Edge AI, QML, GenAI vb.) en güncel akademik makaleleri ve araştırma raporlarını otomatik olarak tarayan, filtreleyen ve Llama 3 kullanarak teknik özetler çıkaran bir n8n otomasyon akışıdır.

🚀 Özellikler
Otomatik Tarama: Belirlenen aralıklarla (haftalık/günlük) akademik kaynakları ve teknoloji haberlerini tarar.

Akıllı Filtreleme: JavaScript tabanlı Code Node ile sadece son 7 güne ait güncel içerikleri ayıklar.

Yerel LLM Entegrasyonu: Veri gizliliğini korumak amacıyla özetleme işlemini yerel Ollama (Llama 3) sunucusu üzerinden gerçekleştirir.

Bulut Depolama: Üretilen teknik raporları otomatik olarak Google Drive klasörüne .docx formatında kaydeder.

🛠️ Kullanılan Teknolojiler
Otomasyon: n8n (Self-Hosted v2.8.3).

Yapay Zeka: Ollama / Llama 3 (Yerel Model).

Arama API: Tavily AI (Advanced Research Depth).

Programlama: JavaScript (Veri manipülasyonu ve tarih filtreleme için).

Depolama: Google Drive API (OAuth2).

📋 Kurulum ve Gereksinimler
1. Ollama Yapılandırması
Lokal modelin n8n (Docker) ile haberleşebilmesi için şu ortam değişkenlerini ayarlamanız gerekir:

Bash
OLLAMA_HOST=0.0.0.0
OLLAMA_ORIGINS=*
Ardından modeli indirin:

Bash
ollama pull llama3
2. n8n Akışı (Workflow)
workflow.json dosyasını n8n arayüzüne içe aktarın.

Tavily API anahtarınızı HTTP Request düğümüne ekleyin.

Google Drive kimlik bilgilerinizi (Credentials) tanımlayın.

🧪 Örnek Çıktı (Llama 3 Analizi)
Sistem, örneğin "AI Chips for Edge Applications 2026" raporunu analiz ettiğinde şu formatta çıktı üretir:

Teknik Problem: Kenar cihazlarda (Edge) VLA temel modellerinin ve humanoid AI çiplerinin (NVIDIA Jetson Thor vb.) optimizasyonu.

Kullanılan Teknolojiler: Edge AI, QML, XAI ve Sentetik Veri Üretimi.

Mühendislik Notu: Kaynak kısıtlı sistemlerde düşük gecikme süreli (low latency) çıkarım (inference) için kritik bir gelişme.