📈 Crypto Market Mover Report (n8n & Binance API)
Bu otomasyon, dünyanın en büyük kripto para borsası olan Binance üzerinden anlık piyasa verilerini çeker, analiz eder ve son 24 saatin "en hareketli" (en çok değer kazanan) varlıklarını şık bir tablo formatında Telegram üzerinden raporlar.

🛠️ Nasıl Çalışır?
Veri Kaynağı: Binance API üzerinden 2000'den fazla işlem çiftinin (ticker) 24 saatlik istatistikleri çekilir.

Filtreleme: Sadece USDT pariteleri ayıklanır ve % artış oranına göre büyükten küçüğe sıralanır.

Veri İşleme: JavaScript kullanılarak ham veriler temizlenir, fiyatlar 4 basamağa yuvarlanır ve görsel stabilite için metin hizalama (padding) uygulanır.

Raporlama: Telegram'ın HTML parse yeteneği kullanılarak, mobil cihazlarda mükemmel görünen bir tablo formatında kullanıcıya gönderilir.

🏗️ İş Akışı Bileşenleri (Nodes)
1. HTTP Request (Binance API)
Endpoint: https://api.binance.com/api/v3/ticker/24hr

Görev: Tüm piyasa verisini JSON formatında indirmek.

2. Code Node (Data Processing)
JavaScript
// Temel Mantık:
const topMovers = items
  .filter(i => i.symbol.endsWith('USDT'))
  .sort((a, b) => b.priceChangePercent - a.priceChangePercent)
  .slice(0, 10);
3. Code Node (HTML Table Generator)
Teknik: Telegram'ın sınırlı HTML desteğini aşmak için <pre> etiketi kullanılarak monospaced (eş aralıklı) bir tablo oluşturulur.

Hizalama: padEnd() fonksiyonu ile sütunların her satırda aynı hizada durması sağlanır.

4. Telegram Node
Parse Mode: HTML

İçerik: Dinamik olarak oluşturulan {{ $json.htmlReport }} değişkeni.

📸 Rapor Görünümü
Botun gönderdiği mesaj şu yapıdadır:

Plaintext
🚀 Günlük Kripto Raporu
Son 24 saatin en çok artanları:

Coin      | Fiyat    | Değişim
----------|----------|--------
BTC       | 52400.0  | +2.45% 📈
ETH       | 3120.5   | +1.80% 📈
...
⚙️ Kurulum
.json dosyasını n8n arayüzüne sürükleyin.

Telegram Credentials kısmına kendi Bot Token'ınızı girin.

Chat ID kısmına @userinfobot'tan aldığınız ID'yi yazın.

Schedule Trigger'ı istediğiniz rapor saatine (örn: sabah 09:00) ayarlayın.