# [STUDY] 03-CSV-Deduplicator 🧹

### 🎯 Amaç
Ham CSV verisindeki mükerrer kayıtları ayıklayan ve "En Güncel Kayıt Kazanır" (Latest Record Wins) stratejisiyle veriyi tekilleştiren bir ETL akışı.

### 🛠️ Kullanılan Teknolojiler
- **n8n:** Low-code otomasyon ve orkestrasyon.
- **JavaScript (Node.js):** Code node içerisinde veri manipülasyonu.
- **Docker:** İzole çalışma ortamı.

### 🧠 Mühendislik Kararları
- **Neden Code Node?** n8n'in standart `Remove Duplicates` node'u sadece %100 aynı satırları siler. Burada ise `ogrenci_no` bazlı tarih kontrolü yapan bir iş mantığı (business logic) kurgulanmıştır.
- **Deduplication Mantığı:** Veriler bir `Map` objesinde tutularak $O(n)$ zaman karmaşıklığında işlenmiştir.

### 🚀 Çalıştırma
1. `students.csv` dosyasını `n8n_data` klasörüne ekleyin.
2. `workflow.json` dosyasını n8n arayüzüne sürükleyip bırakın.
3. Manuel tetikleme (Execute) yapın.