# Proje Tabanlı Yapay Zekâ Eğitim Kılavuzu

Öğretmenler için dört günlük uygulama kılavuzu. Eğitim günleri, araçların kullanım amaçları, örnek görevler ve istem atölyesi içerir.

## Geliştirme

Node.js 24 ile doğrulandı. Bağımlılık sürümleri `package-lock.json` ile sabitlenir.

```sh
npm ci
npm run dev
```

Express ve Vite, 3000 numaralı portta birlikte çalışır. Eğitim içerikleri ve istem atölyesi API anahtarı olmadan kullanılabilir.

Sohbet asistanı için sunucu ortamına `GEMINI_API_KEY` tanımlayın. Yerel çalışmada `.env` kullanılabilir; `.env.local` sunucu tarafından otomatik yüklenmez. Anahtarı tarayıcı koduna veya GitHub'a eklemeyin. Gemini erişimi için `generativelanguage.googleapis.com` adresine HTTPS erişimi gerekir.

## Kontroller ve üretim

```sh
npm run lint
npm run build
NODE_ENV=production npm run start
```

`lint`, TypeScript kontrolünü çalıştırır. Derleme, `dist/` altında arayüz dosyalarını ve `server.cjs` sunucu çıktısını oluşturur. Sunucuyu depo kökünden çalıştırın.

GitHub Pages yalnızca statik arayüzü barındırabilir. `/api/chat` kullanan tam uygulama için Node.js sunucusu veya uyarlanmış sunucu işlevleri gerekir. Yayın öncesinde mobil gezinme, bağlantılar, değerlendirme ve gerçek API yanıtı kontrol edilmelidir.

## GitHub Pages yayını

`.github/workflows/pages.yml`, `main` dalına gönderilen değişiklikleri kontrol eder, statik arayüzü derler ve GitHub Pages'e dağıtır. Depoda **Settings → Pages → Build and deployment → Source → GitHub Actions** seçili olmalıdır.

```sh
npm ci
npm run lint
npm run build:pages
```

Bu derleme yalnızca statik site dosyalarını içerir. Göreli dosya yolları, `/projetabanliklavuz/` altında yayınlanmayı destekler. Eğitim içerikleri, 30 araç, ilerleme takibi ve istem atölyesi çalışır. Sunucu gerektiren sohbet düğmesi Pages sürümünde gösterilmez; normal geliştirme ve Node.js üretim sürümünde kullanılabilir.

İş akışı başarılı olduktan sonra GitHub'ın deployment çıktısındaki site adresini açın. Ana sayfa, dört eğitim günü, araç filtreleri ve başvuru bağlantısını kontrol edin. API anahtarı Pages derlemesine veya Actions adımlarına eklenmemelidir.

## İçerik düzenleme

Güncel programın ve güne özel araçların ortak kaynağı `src/data/curriculum.ts` dosyasıdır. Site ve sohbet asistanı aynı program bilgisini kullanır. Kaynak belgelerin kapsamı ve gün dağılımı için `docs/icerik-kaynaklari.md` dosyasına bakın.

İlerleme bilgisi yalnızca kullanıcının tarayıcısındaki yerel depolamada saklanır; sunucuya gönderilmez.
