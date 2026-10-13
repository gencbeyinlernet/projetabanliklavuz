# İçerik kaynakları ve gün düzeni

## Güncel program

Kullanıcının paylaştığı afiş metni tarih ve gün dağılımı için esas alındı:

| Gün | Tarih | Akış |
| --- | --- | --- |
| 1 | 19 Ekim 2026 | Prompt tasarımı, Google ekosistemi, Claude Chat/Projects/Artifacts, Node.js, Gemini CLI ve terminal |
| 2 | 20 Ekim 2026 | Görsel, şablon, sunum, video, kısa film, seslendirme ve düzenleme |
| 3 | 21 Ekim 2026 | Akademik araştırma, PDF/Word/Excel ve müfredat analizi, öğretmen asistanı, Claude Code, Cowork ve otomasyon |
| 4 | 22 Ekim 2026 | Test ve rubrik, online sınav, eğitim ajanları, veri görselleştirme, API, veritabanı ve yayın |

Süre: 4 gün / 8 saat. Katılım: online, canlı eğitim + kayıt. Eğitmenler: Burak TURGUT ve Türker ÖRÜN. Başvuru ve iletişim: https://linktr.ee/gencbeyinlernet.

Günlük başlangıç saatleri, toplantı platformu, ücret, WhatsApp telefon numarası ve kanal adresi paylaşılmadı. E-posta metni maskeli olduğu için kullanılabilir bir e-posta adresi olarak eklenmedi. Başvuru ve iletişim, verilen Linktree adresine yönlendirilir.

## Word belgesinin kullanımı

Depodaki **Proje Tabanlı Yapay Zekâ Eğitimi Paylaşımlar.docx** belgesi önceki eğitimin 2. gün özetidir. Günlerin yeni takvimdeki sırası, son afiş metnine göre düzenlendi; geçmiş zamanda anlatılan uygulamalar “yapacağız/kullanacağız” diliyle yeniden yazıldı.

Belgedeki terminal ve Gemini CLI içeriği yeni programın 1. gününe taşındı. Ajan yönetimi, projeyi küçük görevlere bölme, dosyalarla çalışma, Antigravity ve hata ayıklama uygulamaları 3. güne; API bağlantısı ve anahtar güvenliği 4. güne yerleştirildi. İnsan kontrolü, eğitimsel uygunluk ve tekrar test etme yaklaşımı tüm aşamalarda korundu.

## 30 araç

Kullanıcı araç sayısının 30 olmasını istedi. Paylaşılan listelerdeki 20 araç ve içerikte adı geçen Cowork korundu. Liste, önceki kılavuz ve Word içeriğinden seçilen 9 araçla tamamlandı: Antigravity, Flowise, Napkin AI, STORM, Mendeley, Overleaf, Conker, Google Forms ve Wayground (Quizizz).

Toplam 30 benzersiz araç vardır. Claude Chat, Projects ve Artifacts özellikleri tek Claude aracının uygulamalarında açıklanır; toplamı artırmak için ayrı araç olarak sayılmaz. Bir araç farklı günlerde yeniden kullanılabilir; `alsoOnDays` kayıtları ve ortak filtre fonksiyonu bu ilişkiyi korur.

`src/data/curriculum.ts` tarihlerin, eğitmenlerin, programın ve araçların ortak kaynağıdır. Site ve sohbet asistanı aynı programı kullanır. Her araç kaydı açıklama, yapacağımız uygulama, kullanım nedeni ve resmî adres içerir. Ek deneme araçları alternatif çalışma yöntemleri için işaretlenir.

Araç özellikleri, ücretler, kullanım limitleri, donanım gereksinimleri ve erişim koşulları sağlayıcıya göre değişir. Zamanlanmış görev ve video üretimi gibi uygulamalar hesapta desteklenen özelliklerle anlatılır; ücretsiz veya sınırsız kullanım vaat edilmez.

## Yayın

GitHub Pages yayın iş akışı `.github/workflows/pages.yml` içindedir. Depodaki Pages kaynağı GitHub Actions seçildiğinde, main dalına gönderilen değişiklikler statik site olarak dağıtılır. Pages derlemesi sunucu gerektiren sohbet arayüzünü göstermez; tam Node.js sürümü sohbet özelliğini korur. Veritabanı kullanımı eğitim içeriğidir; kılavuzun kendisi veritabanı hizmeti gerektirmez. Canlı yayının başarılı olduğu ayrıca deployment sonucu ve site üzerinden doğrulanmalıdır.
