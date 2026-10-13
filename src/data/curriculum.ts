export interface LearningTool {
  id: string;
  name: string;
  label: string;
  day: number;
  url: string;
  description: string;
  activity: string;
  purpose: string;
  optional?: boolean;
  alsoOnDays?: number[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  steps: string[];
  output: string;
  prompt?: string;
  code?: string;
}

export interface TrainingDay {
  id: number;
  date: string;
  dateLabel: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  icon: 'Sparkles' | 'Terminal' | 'Palette' | 'Rocket';
  lessons: Lesson[];
}

export const trainingInfo = {
  "title": "Uygulamalı Proje Tabanlı Yapay Zekâ ile Ders Tasarımı Eğitimi",
  "dates": "19–22 Ekim 2026",
  "duration": "4 gün / 8 saat",
  "format": "Online · Canlı eğitim + kayıt",
  "toolCount": 30,
  "applicationUrl": "https://linktr.ee/gencbeyinlernet",
  "audience": "Tüm branşlardan öğretmenler ve öğretmen adayları",
  "trainers": [
    {
      "name": "Burak TURGUT",
      "role": "Bilişim Teknolojileri Öğretmeni & Yapay Zekâ Uzmanı",
      "initials": "BT"
    },
    {
      "name": "Türker ÖRÜN",
      "role": "Yapay Zekâ Uzmanı",
      "initials": "TÖ"
    }
  ]
} as const;

export const trainingDays: TrainingDay[] = [
  {
    "id": 1,
    "date": "2026-10-19",
    "dateLabel": "19 Ekim 2026",
    "title": "Prompt tasarımı, Google ekosistemi ve Claude",
    "subtitle": "İstemler, Claude & terminal",
    "description": "Etkili istem yazacak, Google araçlarıyla içerik ve doküman dönüşümleri yapacağız. Claude Chat, Projects ve Artifacts’i kullanacak; Node.js ve Gemini CLI ile terminalde ajanlara görev vereceğiz.",
    "outcome": "Ders içerikleri, bir Claude çalışma alanı ve terminalden çalışan ilk görevimizi hazırlayacağız.",
    "icon": "Sparkles",
    "lessons": [
      {
        "id": "ai-basics",
        "title": "Yapay zekâyı çalışma arkadaşımız yapacağız",
        "description": "ChatGPT, Gemini ve Claude ile aynı eğitim sorusunu deneyeceğiz. Yanıtları karşılaştıracak; doğruluk, yaş düzeyi ve ders hedefi açısından kontrol edeceğiz.",
        "steps": [
          "Bir ders ve kazanım seçeceğiz; yapay zekâdan üç etkinlik fikri isteyeceğiz.",
          "Önerileri kendi ders bilgimiz ve kaynaklarımızla karşılaştıracağız.",
          "Geliştirilmesi gereken yanıtı geri bildirim vererek yeniden hazırlatacağız."
        ],
        "output": "Kontrol edilmiş bir etkinlik fikri."
      },
      {
        "id": "rgb-prompt",
        "title": "Rol, hedef ve sınırlarla istem yazacağız",
        "description": "Ne istediğimizi anlaşılır biçimde anlatmak için rol, hedef, bağlam ve sınırları belirleyeceğiz. Aynı istemi farklı araçlarda kullanacağız.",
        "steps": [
          "Yapay zekânın rolünü ve öğrencilerimizin sınıf düzeyini belirleyeceğiz.",
          "Konu, kazanım, süre ve beklediğimiz çıktı biçimini yazacağız.",
          "İlk çıktıyı değerlendirecek; eksik noktalar için yeni talimat vereceğiz."
        ],
        "output": "Tekrar kullanabileceğimiz bir ders istemi.",
        "prompt": "Sen bir fen bilimleri öğretmenisin. 5. sınıf öğrencileri için fotosentezi anlatan 20 dakikalık bir etkinlik planı hazırla. Amaç, malzemeler, uygulama adımları ve 3 değerlendirme sorusu ekle. Dili sade tut; bilimsel doğruluğu kontrol et."
      },
      {
        "id": "google-content",
        "title": "Google araçlarıyla içerik ve doküman dönüşümü yapacağız",
        "description": "Gemini, Google AI Studio ve NotebookLM ile ders notlarını farklı içerik biçimlerine dönüştüreceğiz. Kaynağa dayalı özet, etkinlik taslağı ve soru hazırlayacağız.",
        "steps": [
          "Bir ders notunu kullanarak kısa özet ve kavram listesi hazırlayacağız.",
          "Aynı içeriği sunum akışı, çalışma kâğıdı ve soru taslağına dönüştüreceğiz.",
          "Google AI Studio ile bir model istemini deneyip çıktısını değerlendireceğiz.",
          "Kaynak bağlantısını ve bilgilerin doğruluğunu kontrol edeceğiz."
        ],
        "output": "Bir ders notundan üretilmiş, kontrol edilmiş içerik paketi."
      },
      {
        "id": "claude-workspace",
        "title": "Claude Chat, Projects ve Artifacts ile çalışacağız",
        "description": "Claude Chat ile fikir geliştireceğiz. Projects içinde ders kaynaklarımızı ve ortak talimatlarımızı düzenleyecek; Artifacts ile içerik veya etkileşimli bir taslağı ayrı çalışma alanında geliştireceğiz.",
        "steps": [
          "Chat üzerinden bir ders etkinliği taslağı hazırlayacağız.",
          "Projects içinde bir branş çalışma alanı kurup kaynak ve yönergelerimizi ekleyeceğiz.",
          "Artifacts ile çalışma kâğıdı veya etkileşimli içerik taslağı oluşturacağız.",
          "Yanıt biçimini sınıf düzeyine ve öğretmen olarak beklentilerimize göre özelleştireceğiz."
        ],
        "output": "Kaynakları, talimatları ve örnek çıktısı düzenlenmiş bir Claude çalışma alanı."
      },
      {
        "id": "terminal-cli",
        "title": "Terminali ve Gemini CLI’yi kullanacağız",
        "description": "Terminalin bilgisayara komut verdiğimiz bir çalışma alanı olduğunu göreceğiz. Bir proje klasörü açacak, Node.js ve npm’i kontrol edecek, Gemini CLI’yi çalıştıracağız.",
        "steps": [
          "İşletim sistemimizde terminal veya CMD açıp proje klasörüne geçeceğiz.",
          "Node.js ve npm sürümlerini kontrol edeceğiz; gerekirse resmî kurulum adımlarını uygulayacağız.",
          "Gemini CLI’yi kuracak, oturum açacak ve gemini komutuyla kullanılabilir olduğunu kontrol edeceğiz.",
          "PATH, klasör ve yetkilendirme hatalarında neyi kontrol edeceğimizi öğreneceğiz."
        ],
        "output": "Proje klasörümüzde çalışan bir Gemini CLI oturumu.",
        "code": "node --version\nnpm --version\nnpm install -g @google/gemini-cli\ngemini"
      },
      {
        "id": "agent-task",
        "title": "Sohbet etmekten görev vermeye geçeceğiz",
        "description": "Sohbet aracından fikir alacağız; ajana ise belirli bir ürün geliştirme görevi vereceğiz. Hedef, plan, uygulama, kontrol ve düzeltme adımlarını birlikte yürüteceğiz.",
        "steps": [
          "“Bir etkinlik fikri ver” ile “Etkileşimli bir etkinlik oluştur” görevlerini karşılaştıracağız.",
          "Ders, konu, kazanım, sınıf düzeyi, cihaz ve tasarım beklentilerimizi açıkça yazacağız.",
          "Ajanın planını inceleyip dosya değişikliklerini takip edeceğiz.",
          "Büyük projeyi küçük, kontrol edilebilir görevlere ayıracağız.",
          "Öğrencilerin yaş düzeyini ve ajan çıktısının eğitimsel uygunluğunu kontrol edeceğiz."
        ],
        "output": "Ajanın uygulayabileceği açık ve aşamalı bir görev tanımı.",
        "prompt": "5. sınıf fotosentez konusunu öğreten mobil uyumlu bir web uygulaması geliştireceğiz. Önce mevcut dosyaları incele ve plan öner. Konu anlatımı, etkileşimli etkinlik ve geri bildirimli üç soru ekle. Değişiklikleri küçük adımlarla yap; her adımda neyi test edeceğimizi belirt. Öğrenci kişisel verilerini toplama."
      }
    ]
  },
  {
    "id": 2,
    "date": "2026-10-20",
    "dateLabel": "20 Ekim 2026",
    "title": "Görsel, video ve ses üretimi",
    "subtitle": "Tasarım, kısa film & seslendirme",
    "description": "Afiş, ders görseli ve şablon hazırlayacağız. Metin ve görselleri videoya dönüştürecek, seslendirme ve düzenlemeyle kısa eğitim içerikleri oluşturacağız.",
    "outcome": "Görsel, sunum ve seslendirilmiş kısa video içeren bir materyal paketi hazırlayacağız.",
    "icon": "Palette",
    "lessons": [
      {
        "id": "visual-design",
        "title": "Kavramları görsellerle anlatacağız",
        "description": "Canva AI ve Adobe Firefly ile ders kazanımına uygun afiş, görsel ve yeniden kullanabileceğimiz şablonlar hazırlayacağız. Görsel üretimini konu anlatımına destek olacak şekilde yönlendireceğiz.",
        "steps": [
          "Görselin anlatacağı tek bir kavramı seçeceğiz.",
          "Firefly ile taslak üretecek, Canva ile başlık ve açıklamaları düzenleyeceğiz.",
          "Okunabilirliği, telif koşullarını ve yaş düzeyini kontrol edeceğiz."
        ],
        "output": "Dersimizde kullanacağımız bir görsel materyal."
      },
      {
        "id": "presentation-diagram",
        "title": "Sunum ve kavram haritası hazırlayacağız",
        "description": "Gamma ile konu akışımızı sunuma dönüştüreceğiz. Napkin AI ile metindeki ilişkileri diyagramlaştıracağız.",
        "steps": [
          "Dersin giriş, uygulama ve değerlendirme bölümünü planlayacağız.",
          "Gamma’da sunum taslağını oluşturup bilgi ve sıralamayı düzenleyeceğiz.",
          "Napkin AI ile bir süreç veya kavram haritası hazırlayıp projemize ekleyeceğiz."
        ],
        "output": "Kısa bir ders sunumu ve açıklayıcı bir diyagram."
      },
      {
        "id": "video-short-film",
        "title": "Metin ve görselden kısa eğitim videosu oluşturacağız",
        "description": "Önce kısa bir senaryo ve sahne planı yazacağız. Adobe Firefly’ın hesabımızda kullanılabilen video özelliklerini veya Canva’nın video düzenleyicisini kullanarak metin ve görselleri bir anlatımda birleştireceğiz.",
        "steps": [
          "Bir kazanımı anlatan 30–60 saniyelik kısa film fikri belirleyeceğiz.",
          "Giriş, olay ve sonuç için bir sahne listesi yazacağız.",
          "Metinden veya görselden video üretimini erişebildiğimiz özelliklerle deneyeceğiz.",
          "Klipleri, görselleri ve altyazıları Canva’da birleştirip çıktıyı kontrol edeceğiz."
        ],
        "output": "Dersimizde kullanabileceğimiz kısa bir eğitim videosu.",
        "prompt": "5. sınıf öğrencilerine fotosentezi anlatan 45 saniyelik bir kısa film senaryosu yaz. Üç sahne olsun. Her sahne için görsel tarif, anlatıcı metni ve yaklaşık süre belirt. Dili sade tut ve bilimsel doğruluğu kontrol et."
      },
      {
        "id": "audio-video",
        "title": "Kısa bir anlatımı seslendireceğiz",
        "description": "Bir dakikalık ders anlatımı yazacağız. ElevenLabs ile metni seslendirecek, Canva’da görsellerle birleştirerek kısa video hazırlayacağız.",
        "steps": [
          "Bir kavramı sade cümlelerle anlatan kısa senaryo yazacağız.",
          "Kullanım hakkı olan bir sesle örnek seslendirme yapacağız.",
          "Altyazı ekleyip telaffuz, bilgi doğruluğu ve süreyi kontrol edeceğiz."
        ],
        "output": "Altyazılı kısa bir ders anlatımı."
      }
    ]
  },
  {
    "id": 3,
    "date": "2026-10-21",
    "dateLabel": "21 Ekim 2026",
    "title": "Akademik analiz, AI sistemleri ve otomasyon",
    "subtitle": "Araştırma, Claude Code & iş akışları",
    "description": "Akademik araştırma ve belge analizi yapacağız. Müfredat ve verileri inceleyecek, öğretmen asistanı tasarlayacak; Claude Code ve Cowork ile üretim ve otomasyon akışları kuracağız.",
    "outcome": "Kaynaklı analiz, bir öğretmen asistanı taslağı ve tekrar kullanılabilir iş akışı oluşturacağız.",
    "icon": "Terminal",
    "lessons": [
      {
        "id": "research-material",
        "title": "Literatür taraması yapacak, makale ve proje raporu hazırlayacağız",
        "description": "Consensus ve STORM ile araştırma sorumuz için kaynak arayacağız. Mendeley ile kaynakçayı düzenleyecek, gerekiyorsa Overleaf ile rapor hazırlayacağız.",
        "steps": [
          "Ders veya proje konumuzla ilgili bir araştırma sorusu belirleyeceğiz.",
          "Consensus ve STORM ile makale arayıp önerilen kaynakların asıllarını okuyacağız.",
          "Bir makalenin yöntem, bulgu ve sınırlılıklarını analiz edeceğiz.",
          "Mendeley ile kaynakçayı düzenleyecek, Overleaf ile kaynaklı rapor taslağı hazırlayacağız."
        ],
        "output": "Kaynakları kontrol edilmiş bir materyal dosyası."
      },
      {
        "id": "document-data",
        "title": "Belge ve örnek verileri inceleyeceğiz",
        "description": "NotebookLM ve Claude ile PDF ve Word belgelerinden özet çıkaracağız. Julius AI ile kimlik bilgisi içermeyen Excel veya CSV tablosunu inceleyip müfredat kazanımlarıyla ilişkili bir analiz hazırlayacağız.",
        "steps": [
          "Ders notu, müfredat belgesi ve kimlik bilgisi içermeyen örnek veri tablosu kullanacağız.",
          "PDF ve Word belgelerindeki ana kavramları ve kazanımları çıkaracağız.",
          "Excel veya CSV verisinden başarı dağılımını ve destek gerektiren konuları belirleyeceğiz.",
          "Özet, tablo ve grafik sonuçlarını asıl kaynakla karşılaştıracağız."
        ],
        "output": "Kaynağa dayalı kısa özet ve örnek sınıf analizimiz."
      },
      {
        "id": "teacher-assistant",
        "title": "Branşımıza özel bir AI öğretmen asistanı tasarlayacağız",
        "description": "Asistanımızın hangi ders için ve hangi sınırlar içinde çalışacağını belirleyeceğiz. Claude Projects ile kaynak temelli bir örnek hazırlayacak; Flowise, LM Studio ve Ollama üzerinden farklı ajan ve model çalışma biçimlerini inceleyeceğiz.",
        "steps": [
          "Branş, sınıf düzeyi, kaynaklar ve yanıt kurallarını belirleyeceğiz.",
          "Asistana ders planı ve öğrenci sorusu gibi örnek görevler vereceğiz.",
          "Bilmediği konuyu belirtmesini ve cevap yerine ipucu vermesini test edeceğiz.",
          "Bilgisayarımız uygunsa yerel model örneğini bulut modeliyle karşılaştıracağız."
        ],
        "output": "Kendi branşımıza göre tanımlanmış bir öğretmen asistanı taslağı."
      },
      {
        "id": "automation-cowork",
        "title": "Cowork ile iş akışını ve zamanlanmış görevleri düzenleyeceğiz",
        "description": "Tekrar eden belge ve içerik işlerini küçük görevlere ayıracağız. Cowork ile dosya odaklı bir çalışma akışı hazırlayacak; hesabımızda destekleniyorsa zamanlanmış görev ve entegrasyon özelliklerini deneyeceğiz.",
        "steps": [
          "Haftalık ders özeti ve materyal düzenleme gibi tekrar eden bir iş seçeceğiz.",
          "Girdi dosyalarını, işlem adımlarını ve beklediğimiz çıktıyı tanımlayacağız.",
          "Görev planlama özelliği hesabımızda varsa çalışma zamanını ve kontrol adımını belirleyeceğiz.",
          "Örnek dosyalarla akışı çalıştırıp sonucu kontrol edeceğiz; otomatik gönderim öncesi insan onayı kullanacağız."
        ],
        "output": "Tekrar kullanılabilir ve kontrol noktaları belirli bir iş akışı."
      },
      {
        "id": "claude-code-project",
        "title": "Claude Code ile planlayacak, üretecek ve hata çözeceğiz",
        "description": "Claude Code’u proje klasörümüzde kullanarak bir uygulamanın dosyalarını geliştireceğiz. Word belgesindeki hedef → plan → görevler → uygulama → kontrol → düzeltme döngüsünü kullanacağız.",
        "steps": [
          "İlk günün uygulama fikrini ve eksiklerini değerlendireceğiz.",
          "Projeyi arayüz, içerik, etkileşim ve test görevlerine ayıracağız.",
          "Ajanın değiştirdiği dosyaları inceleyip uygulamayı çalıştıracağız.",
          "Hata mesajını okuyacak; sorunun kod, API, model veya bağlantı kaynaklı olduğunu belirleyip küçük bir düzeltmeyle yeniden test edeceğiz."
        ],
        "output": "Dosyaları ve test notları olan geliştirilebilir bir uygulama prototipi.",
        "prompt": "5. sınıf fotosentez konusunu öğreten mobil uyumlu bir web uygulaması geliştireceğiz. Önce mevcut dosyaları incele ve plan öner. Konu anlatımı, etkileşimli etkinlik ve geri bildirimli üç soru ekle. Değişiklikleri küçük adımlarla yap; her adımda neyi test edeceğimizi belirt. Öğrenci kişisel verilerini toplama."
      },
      {
        "id": "antigravity-project",
        "title": "Antigravity ile dosyalarımızı geliştireceğiz",
        "description": "Google Antigravity’de uygulamanın yapısını planlayacak, gerekli dosyaları oluşturacak ve arayüzü geliştireceğiz. Ajanı yalnızca kod yazan bir araç olarak değil, yönlendirdiğimiz bir çalışma ortağı olarak kullanacağız.",
        "steps": [
          "Proje klasörünü açıp uygulamanın amacını ve özelliklerini tarif edeceğiz.",
          "Arayüz, içerik ve etkileşimleri ayrı görevlerle hazırlayacağız.",
          "Dosyaların birbirine nasıl bağlandığını inceleyeceğiz.",
          "Uygulamayı çalıştıracak; tasarım ve özellikleri geri bildirimle iyileştireceğiz."
        ],
        "output": "Konu anlatımı ve etkileşimi çalışan ilk prototipimiz."
      }
    ]
  },
  {
    "id": 4,
    "date": "2026-10-22",
    "dateLabel": "22 Ekim 2026",
    "title": "Ölçme, değerlendirme ve yayınlama",
    "subtitle": "Test, veritabanı & yayın",
    "description": "Test ve rubrik hazırlayacak, eğitim ajanlarını ve sonuç grafiklerini geliştireceğiz. Uygulamamıza veritabanı ekleyip Firebase, Supabase ve Netlify ile yayın akışını test edeceğiz.",
    "outcome": "Değerlendirme etkinliği ve veritabanı bağlantısı olan, paylaşılabilir bir proje hazırlayacağız.",
    "icon": "Rocket",
    "lessons": [
      {
        "id": "assessment",
        "title": "Sorular ve değerlendirme rubriği hazırlayacağız",
        "description": "Conker ile kazanıma uygun soru taslağı oluşturacağız. Proje çıktısını değerlendirmek için açık ölçütleri olan bir rubrik hazırlayacağız.",
        "steps": [
          "Kazanım ve sınıf düzeyine göre sorular üreteceğiz.",
          "Cevap anahtarını ve çeldiricileri öğretmen olarak kontrol edeceğiz.",
          "Doğruluk, açıklama, yaratıcılık ve kullanılabilirlik için rubrik yazacağız."
        ],
        "output": "Kontrol edilmiş kısa test ve proje rubriği.",
        "prompt": "5. sınıf fotosentez konusu için 5 soruluk bir değerlendirme ve cevap anahtarı hazırla. Her sorunun ölçtüğü kazanımı belirt. Sonra öğrencinin etkileşimli uygulama projesi için doğruluk, anlaşılır anlatım ve kullanılabilirlik ölçütlerini içeren üç düzeyli bir rubrik oluştur."
      },
      {
        "id": "quiz-share",
        "title": "Değerlendirmeyi etkileşimli hâle getireceğiz",
        "description": "Conker ile hazırladığımız soruları kontrol edecek; Google Forms veya Wayground’da çevrimiçi bir değerlendirme etkinliğine dönüştüreceğiz.",
        "steps": [
          "Kazanım, soru türü ve geri bildirim beklentimizi belirleyeceğiz.",
          "Soruları seçtiğimiz aracın kendi düzenleyicisine aktaracağız.",
          "Bir örnek yanıtla doğru cevapları ve geri bildirimleri test edeceğiz.",
          "Sonuçları yorumlayıp hangi konuyu yeniden ele alacağımızı belirleyeceğiz."
        ],
        "output": "Paylaşılabilir bir değerlendirme etkinliği."
      },
      {
        "id": "education-agent",
        "title": "Eğitim amaçlı ajanı test edecek, sonuçları görselleştireceğiz",
        "description": "Cevabı doğrudan söylemek yerine öğrenciye ipucu veren bir ajan tasarlayacağız. Örnek değerlendirme verilerini Julius AI ile inceleyip Napkin AI ile öğrenme akışını görselleştireceğiz.",
        "steps": [
          "Asistanımız için örnek öğrenci soruları ve beklenen davranışlar yazacağız.",
          "Flowise veya kodladığımız uygulamada ipucu ve geri bildirim akışını deneyeceğiz.",
          "Örnek değerlendirme sonuçlarını grafikle göstereceğiz.",
          "Öğrencinin nerede desteğe ihtiyacı olduğunu öğretmen olarak değerlendireceğiz."
        ],
        "output": "Test edilmiş öğrenme asistanı akışı ve örnek sonuç grafiği."
      },
      {
        "id": "database-app",
        "title": "Uygulamamıza veritabanı ekleyeceğiz",
        "description": "Supabase veya Firebase ile uygulama verisini saklayan küçük bir örnek hazırlayacağız. Kullanıcının hangi veriye erişebileceğini belirleyip okuma ve yazma işlemlerini test edeceğiz.",
        "steps": [
          "Uygulamamızda hangi bilgiyi saklayacağımızı belirleyeceğiz; kişisel veri yerine örnek veri kullanacağız.",
          "Supabase’de tablo ve erişim kuralları veya Firebase’de veri yapısı ve güvenlik kuralları hazırlayacağız.",
          "Bir kayıt ekleme ve okuma işlemini uygulamadan deneyeceğiz.",
          "Yetkisiz erişimin engellendiğini ve gizli anahtarların sunucuda kaldığını kontrol edeceğiz."
        ],
        "output": "Örnek veriyi güvenli erişim kurallarıyla saklayan bir uygulama."
      },
      {
        "id": "api-integration",
        "title": "API ile yapay zekâyı uygulamamıza bağlayacağız",
        "description": "API’yi iki uygulamanın iletişim kurmasını sağlayan bağlantı olarak düşüneceğiz. Uygulamadan soru gönderecek, modelin cevabını tekrar ekranda göstereceğiz.",
        "steps": [
          "Kullanıcı → uygulama → sunucu → API → model → cevap akışını inceleyeceğiz.",
          "Google AI Studio üzerinden API erişimini ve kullanım koşullarını kontrol edeceğiz.",
          "API anahtarını sunucudaki ortam değişkeninde tutacağız; tarayıcı koduna veya GitHub’a eklemeyeceğiz.",
          "Bağlantıyı küçük bir örnek istekle test edip gelen yanıtı uygulamada göstereceğiz."
        ],
        "output": "Sunucu üzerinden yapay zekâ servisine bağlanan bir örnek akış."
      },
      {
        "id": "final-check",
        "title": "Ürünümüzü farklı ekranlarda test edeceğiz",
        "description": "Telefon ve bilgisayarda gezinmeyi, bağlantıları, soruları ve varsa API akışını kontrol edeceğiz. Yayından önce gizli bilgiler ve kişisel veriler için son incelemeyi yapacağız.",
        "steps": [
          "Ana sayfa, tüm düğmeler ve bağlantıları deneyeceğiz.",
          "Telefon ekranında okunabilirliği ve klavye ile kullanımı kontrol edeceğiz.",
          "API anahtarlarının kodda ve yayın dosyalarında bulunmadığını doğrulayacağız."
        ],
        "output": "Tamamlanmış bir yayın öncesi kontrol listesi."
      },
      {
        "id": "github-publish",
        "title": "GitHub ile saklayacak, uygun yöntemle yayımlayacağız",
        "description": "GitHub’da projemizin sürümlerini saklayacağız. Firebase ve Netlify’ın yayın seçeneklerini inceleyecek; Supabase bağlantısını ve varsa API sunucusunu uygun çalışma ortamında test edeceğiz.",
        "steps": [
          "Kaynak dosyaları ve kurulum açıklamalarını GitHub’a ekleyeceğiz.",
          "Anahtarları ve kişisel verileri depoya yüklemeyeceğiz; yayın ortamının güvenli ayarlarında tutacağız.",
          "Firebase veya Netlify ile arayüzü yayımlayacak, gerekiyorsa ayrı sunucu veya sunucu işlevi hazırlayacağız.",
          "Yayınlanan uygulamada veritabanına kayıt ve varsa API yanıtı akışını test edeceğiz."
        ],
        "output": "Sürümü kayıtlı proje ve doğrulanmış yayın planımız."
      }
    ]
  }
];

export const learningTools: LearningTool[] = [
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "label": "CG",
    "day": 1,
    "url": "https://chatgpt.com",
    "description": "Fikir ve metin geliştirmek için sohbet asistanı.",
    "activity": "Ders planı, etkinlik fikri ve soru taslağı hazırlayacağız.",
    "purpose": "İlk taslağı hızlı oluşturmak ve alternatifleri karşılaştırmak için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "gemini",
    "name": "Google Gemini",
    "label": "Ge",
    "day": 1,
    "url": "https://gemini.google.com",
    "description": "Metin ve dosyalarla çalışabileceğimiz yapay zekâ asistanı.",
    "activity": "Ders notlarını içerik taslaklarına dönüştürecek, görsel ve video çalışmalarımızın istemlerini hazırlayacağız.",
    "purpose": "Birden fazla öneriyi değerlendirip dersimize uygun olanı seçmek için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      2
    ]
  },
  {
    "id": "claude",
    "name": "Claude",
    "label": "Cl",
    "day": 1,
    "url": "https://claude.ai",
    "description": "Chat, Projects ve Artifacts ile sohbet, kaynak ve çıktı çalışma alanı.",
    "activity": "Ders içeriği üretecek, branş kaynaklarını Projects içinde düzenleyecek ve Artifacts ile etkileşimli taslak hazırlayacağız.",
    "purpose": "Kaynakları ve ortak talimatları bir araya getirip dersimize uygun çıktıları geliştirmek için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      3,
      4
    ]
  },
  {
    "id": "node",
    "name": "Node.js",
    "label": "JS",
    "day": 1,
    "url": "https://nodejs.org",
    "description": "JavaScript araçlarını bilgisayarımızda çalıştırma ortamı.",
    "activity": "Node.js ve npm’i kontrol edip geliştirme araçlarını çalıştıracağız.",
    "purpose": "Gemini CLI ve uygulama geliştirme ortamını hazırlamak için kullanacağız.",
    "optional": false
  },
  {
    "id": "gemini-cli",
    "name": "Gemini CLI",
    "label": ">_",
    "day": 1,
    "url": "https://geminicli.com/docs/get-started/installation/",
    "description": "Terminalden proje dosyalarıyla çalışan yapay zekâ ajanı.",
    "activity": "Proje klasörümüzde görev verecek, dosya oluşturup hataları inceleyeceğiz.",
    "purpose": "Sohbetten çalışan ürüne geçmek ve geliştirme sürecini yönetmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "aistudio",
    "name": "Google AI Studio",
    "label": "AI",
    "day": 1,
    "url": "https://aistudio.google.com",
    "description": "Gemini modellerini ve API erişimini inceleyeceğimiz ortam.",
    "activity": "İlk gün model istemlerini deneyecek, son gün uygulamamız için API bağlantısını hazırlayacağız.",
    "purpose": "Uygulamamızdan modele soru gönderip yanıt almak için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "canva",
    "name": "Canva",
    "label": "Ca",
    "day": 2,
    "url": "https://www.canva.com",
    "description": "Görsel, çalışma kâğıdı ve sunum tasarım aracı.",
    "activity": "Dersimiz için afiş, çalışma kâğıdı ve kısa video hazırlayacağız.",
    "purpose": "İçeriği okunabilir ve görsel olarak anlaşılır hâle getirmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "firefly",
    "name": "Adobe Firefly",
    "label": "Fi",
    "day": 2,
    "url": "https://firefly.adobe.com",
    "description": "Metinle tarif ederek görsel taslakları üretme aracı.",
    "activity": "Bir ders kavramı için örnek görsel üreteceğiz.",
    "purpose": "Anlatmak istediğimiz kavrama uygun görsel seçenekleri hazırlamak için kullanacağız.",
    "optional": false
  },
  {
    "id": "gamma",
    "name": "Gamma",
    "label": "Ga",
    "day": 2,
    "url": "https://gamma.app",
    "description": "İçeriği sunum ve belge taslağına dönüştürme aracı.",
    "activity": "Ders akışımızdan kısa bir sunum oluşturup düzenleyeceğiz.",
    "purpose": "Sunumun ilk taslağını hazırlamak ve içeriğe odaklanmak için kullanacağız.",
    "optional": false
  },
  {
    "id": "napkin",
    "name": "Napkin AI",
    "label": "Na",
    "day": 2,
    "url": "https://napkin.ai",
    "description": "Metindeki fikirleri diyagrama dönüştürme aracı.",
    "activity": "Bir süreci veya kavram ilişkisini şemayla anlatacağız.",
    "purpose": "Karmaşık ilişkileri öğrencilerimiz için görünür kılmak amacıyla kullanacağız.",
    "optional": true,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "elevenlabs",
    "name": "ElevenLabs",
    "label": "11",
    "day": 2,
    "url": "https://elevenlabs.io",
    "description": "Metinden sesli anlatım üretme aracı.",
    "activity": "Kısa ders metnimizi kullanım hakkı olan bir sesle seslendireceğiz.",
    "purpose": "Görsel materyale sesli anlatım eklemek için kullanacağız.",
    "optional": false
  },
  {
    "id": "notebooklm",
    "name": "NotebookLM",
    "label": "N",
    "day": 3,
    "url": "https://notebooklm.google.com",
    "description": "Eklediğimiz kaynaklar üzerinden çalışan araştırma yardımcısı.",
    "activity": "Ders notlarımızdan özet ve kaynaklara dayalı sorular hazırlayacağız.",
    "purpose": "Kendi kaynaklarımızla çalışmak ve yanıtın dayanağını kontrol etmek için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      1
    ]
  },
  {
    "id": "julius",
    "name": "Julius AI",
    "label": "J",
    "day": 3,
    "url": "https://julius.ai",
    "description": "Tabloları incelemeye ve grafik üretmeye yardımcı araç.",
    "activity": "Kimlik bilgisi içermeyen örnek başarı tablosunu analiz edeceğiz.",
    "purpose": "Veriden öğrenme ihtiyaçlarını görmek ve destek planlamak için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "antigravity",
    "name": "Google Antigravity",
    "label": "A",
    "day": 3,
    "url": "https://antigravity.google",
    "description": "Ajanlarla uygulama geliştirebileceğimiz çalışma ortamı.",
    "activity": "Eğitim uygulamamızın arayüzünü ve etkileşimlerini adım adım geliştireceğiz.",
    "purpose": "Fikrimizi çalıştırıp test edebileceğimiz bir prototipe dönüştürmek için kullanacağız.",
    "optional": true
  },
  {
    "id": "lmstudio",
    "name": "LM Studio",
    "label": "LM",
    "day": 3,
    "url": "https://lmstudio.ai",
    "description": "Uyumlu modelleri yerel bilgisayarda çalıştırma aracı.",
    "activity": "Bilgisayarımız uygunsa bir yerel model denemesi yapacağız.",
    "purpose": "Yerel model ile bulut servisi arasındaki farkı görmek için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "ollama",
    "name": "Ollama",
    "label": "O",
    "day": 3,
    "url": "https://ollama.com",
    "description": "Yerel modelleri terminalden çalıştırma aracı.",
    "activity": "Donanımımız uygunsa terminalden örnek bir model çalıştıracağız.",
    "purpose": "Model, terminal ve yerel API ilişkisini anlamak için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "consensus",
    "name": "Consensus",
    "label": "Co",
    "day": 3,
    "url": "https://consensus.app",
    "description": "Bilimsel araştırmaları bulmaya yardımcı arama aracı.",
    "activity": "Araştırma sorumuza ilişkin çalışmaları bulup asıllarını okuyacağız.",
    "purpose": "Ders materyalimizi araştırma bulgularıyla desteklemek için kullanacağız.",
    "optional": false
  },
  {
    "id": "storm",
    "name": "STORM",
    "label": "S",
    "day": 3,
    "url": "https://storm.genie.stanford.edu",
    "description": "Kaynaklarla araştırma taslağı oluşturma aracı.",
    "activity": "Konuya ilişkin kaynaklı bir araştırma taslağı inceleyeceğiz.",
    "purpose": "Konuya farklı açılardan bakmak ve kaynak araştırmasına başlamak için kullanacağız.",
    "optional": true
  },
  {
    "id": "mendeley",
    "name": "Mendeley",
    "label": "M",
    "day": 3,
    "url": "https://www.mendeley.com",
    "description": "Kaynakları ve kaynakçayı düzenleme aracı.",
    "activity": "Kullandığımız araştırmaları bir araya getirip kaynakça hazırlayacağız.",
    "purpose": "Materyallerimizin dayanaklarını düzenli saklamak için kullanacağız.",
    "optional": true
  },
  {
    "id": "overleaf",
    "name": "Overleaf",
    "label": "Ov",
    "day": 3,
    "url": "https://www.overleaf.com",
    "description": "LaTeX ile düzenli rapor yazabileceğimiz çevrimiçi editör.",
    "activity": "İhtiyaç duyarsak proje raporumuzu bir şablon üzerinde düzenleyeceğiz.",
    "purpose": "Araştırma çıktımızı düzenli bir rapora dönüştürmek için kullanacağız.",
    "optional": true
  },
  {
    "id": "claude-code",
    "name": "Claude Code",
    "label": "CC",
    "day": 3,
    "alsoOnDays": [
      4
    ],
    "url": "https://code.claude.com/docs/en/overview",
    "description": "Proje klasöründe kod ve dosyalarla çalışan geliştirme ajanı.",
    "activity": "Uygulama dosyalarını küçük görevlerle geliştirecek, hata mesajlarını inceleyip test edeceğiz.",
    "purpose": "Uygulama fikrimizi çalışan ürüne dönüştürmek ve geliştirme sürecini yönetmek için kullanacağız."
  },
  {
    "id": "cowork",
    "name": "Claude Cowork",
    "label": "Cw",
    "day": 3,
    "url": "https://claude.com/product/cowork",
    "description": "Dosya ve tekrar eden işler üzerinde görevlerle çalışma alanı.",
    "activity": "Materyal dosyalarını düzenleyecek ve desteklenen özelliklerle zamanlanmış görev taslağı oluşturacağız.",
    "purpose": "Tekrar eden işleri bir akışa dönüştürmek ve kontrol adımlarını belirlemek için kullanacağız."
  },
  {
    "id": "flowise",
    "name": "Flowise",
    "label": "F",
    "day": 4,
    "url": "https://flowiseai.com",
    "description": "Yapay zekâ iş akışlarını görsel olarak kurma aracı.",
    "activity": "Bir soru-cevap asistanının örnek akışını inceleyeceğiz.",
    "purpose": "Ajanın adımlarını ve araç bağlantılarını görerek anlamak için kullanacağız.",
    "optional": true,
    "alsoOnDays": [
      3
    ]
  },
  {
    "id": "conker",
    "name": "Conker",
    "label": "C",
    "day": 4,
    "url": "https://www.conker.ai",
    "description": "Öğretmenler için soru ve değerlendirme taslağı üretme aracı.",
    "activity": "Kazanımımıza uygun kısa test hazırlayıp cevapları kontrol edeceğiz.",
    "purpose": "Soru taslağı hazırlamak ve öğrenmeyi değerlendirmek için kullanacağız.",
    "optional": true
  },
  {
    "id": "forms",
    "name": "Google Forms",
    "label": "Fo",
    "day": 4,
    "url": "https://forms.google.com",
    "description": "Form ve çevrimiçi değerlendirme hazırlama aracı.",
    "activity": "Sorularımızı forma ekleyip örnek cevaplarla deneyeceğiz.",
    "purpose": "Yanıtları toplamak ve öğrenme durumunu görmek için kullanacağız.",
    "optional": true
  },
  {
    "id": "wayground",
    "name": "Wayground (Quizizz)",
    "label": "W",
    "day": 4,
    "url": "https://wayground.com",
    "description": "Etkileşimli alıştırma ve değerlendirme platformu.",
    "activity": "Kazanıma uygun bir tekrar etkinliği hazırlayacağız.",
    "purpose": "Öğrencilerin kendi hızlarında pratik yapmasını desteklemek için kullanacağız.",
    "optional": true
  },
  {
    "id": "github",
    "name": "GitHub",
    "label": "GH",
    "day": 4,
    "url": "https://github.com",
    "description": "Proje dosyalarını ve sürümlerini saklama platformu.",
    "activity": "Kaynak kodumuzu ve kurulum açıklamalarımızı düzenli olarak kaydedeceğiz.",
    "purpose": "Değişiklikleri takip etmek ve projemizi paylaşmak için kullanacağız.",
    "optional": false
  },
  {
    "id": "netlify",
    "name": "Netlify",
    "label": "Ne",
    "day": 4,
    "url": "https://www.netlify.com",
    "description": "Web arayüzlerini yayımlama platformu.",
    "activity": "Arayüzümüzü yayımlayacak, API gerekiyorsa sunucu işlevi veya ayrı sunucu gereksinimini değerlendireceğiz.",
    "purpose": "Hazırladığımız arayüzü bir bağlantıyla paylaşmak için kullanacağız.",
    "optional": false
  },
  {
    "id": "firebase",
    "name": "Firebase",
    "label": "Fb",
    "day": 4,
    "url": "https://firebase.google.com",
    "description": "Barındırma ve uygulama servisleri sunan platform.",
    "activity": "Örnek uygulamada veri saklama kurallarını ve web barındırma adımlarını deneyeceğiz.",
    "purpose": "Uygulamamızın veri ve yayın ihtiyaçlarına uygun bir altyapı hazırlamak için kullanacağız.",
    "optional": false
  },
  {
    "id": "supabase",
    "name": "Supabase",
    "label": "Su",
    "day": 4,
    "url": "https://supabase.com",
    "description": "Veritabanı ve kullanıcı erişimi için uygulama altyapısı.",
    "activity": "Uygulamamıza örnek veri tablosu ekleyecek, erişim kurallarını ve kayıt işlemlerini test edeceğiz.",
    "purpose": "Projemizin verisini saklamak ve kullanıcıların uygun kayıtlara erişmesini sağlamak için kullanacağız."
  }
];

export function toolAppearsOnDay(tool: LearningTool, day: number) {
  return tool.day === day || Boolean(tool.alsoOnDays?.includes(day));
}

export function toolDayLabel(tool: LearningTool) {
  return [tool.day, ...(tool.alsoOnDays || [])].sort((a, b) => a - b).map(day => `${day}. gün`).join(' · ');
}

// Shared program facts keep the assistant consistent with the site.
export const curriculumContext = `${trainingInfo.title}
Tarih: ${trainingInfo.dates}. Süre: ${trainingInfo.duration}. Katılım: ${trainingInfo.format}. Araç sayısı: ${trainingInfo.toolCount}.
Katılımcılar: ${trainingInfo.audience}. Temel dijital beceriler yeterlidir. Başvuru ve iletişim: ${trainingInfo.applicationUrl}.
Eğitmenler: ${trainingInfo.trainers.map(trainer => `${trainer.name}: ${trainer.role}`).join('; ')}.
` + trainingDays.map(day => `${day.id}. Gün (${day.dateLabel}): ${day.title}. ${day.description}
${day.lessons.map(lesson => `${lesson.title}: ${lesson.description}`).join('\n')}
Araçlar: ${learningTools.filter(tool => toolAppearsOnDay(tool, day.id)).map(tool => `${tool.name} (${tool.url}): ${tool.activity} ${tool.purpose}`).join('\n')}`).join('\n\n');
