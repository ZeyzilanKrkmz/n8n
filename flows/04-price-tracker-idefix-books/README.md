Harika bir fikir! Lokal kurulumunda bu workflow'un ne işe yaradığını, nasıl çalıştığını ve ileride bir sorun çıkarsa ne yapman gerektiğini unutmaman için profesyonel bir README.md dosyası hazırladım.

Bunu workflow klasörüne veya notlarının arasına ekleyebilirsin:

📚 İdefix Fiyat Takip Otomasyonu (n8n)
Bu proje, Google Sheets üzerinde listelenen kitap linklerini tarayarak güncel fiyat ve isim bilgilerini çeken ve sonuçları tekrar bir Google Sheets tablosuna kaydeden bir n8n workflow'udur.

🚀 Özellikler
Dinamik Veri Çekme: Google Sheets'teki link listesini baz alır.

Süper Avcı (Regex) Modu: CSS selector değişimlerinden etkilenmez, sayfa kaynağından fiyatı cımbızla çeker.

Veri Temizleme: Ürün isimlerindeki yazar linklerini ve fiyatlardaki para birimi sembollerini temizler.

Hata Yönetimi: Veri çekilemediğinde tabloya "İsim Bulunamadı" ve "0" yazarak akışın durmasını engeller.

🛠️ Kurulum
Lokal n8n: n8n üzerinde yeni bir workflow açın ve paylaşılan JSON dosyasını içeri aktarın (Import).

Google Sheets Credentials: - Get row(s) ve Append row düğümlerinde Google API yetkilendirmesini (Service Account) kendi hesabınızla güncelleyin.

Takip edilecek linklerin olduğu Document ID'yi kontrol edin.

HTTP Request: İdefix bot korumasına takılmamak için User-Agent başlığı (header) eklenmiş durumdadır, değiştirmeyin.

📈 Veri Yapısı
Workflow çalıştıktan sonra hedef tabloda şu sütunlar oluşur:
| Tarih | Urun_Adi | Fiyat |
| :--- | :--- | :--- |
| 24.02.2026 23:15 | Sıfır Noktasındaki Kadın | 182.18 |

⚠️ Dikkat Edilmesi Gerekenler
Bloklanma: İdefix çok sık (saniyeler içinde binlerce kez) sorgulanırsa IP adresinizi geçici olarak engelleyebilir. Link sayınız çoksa araya Wait düğümü eklenmiştir.

Lokal Çalıştırma: Bu workflow'un otomatik çalışması için bilgisayarınızın ve n8n servisinin açık olması gerekir.