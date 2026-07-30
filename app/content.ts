export type Locale = "en" | "tr";

export type PortfolioContent = {
  locale: Locale;
  languageName: string;
  switchLabel: string;
  switchHref: string;
  nav: {
    expertise: string;
    impact: string;
    experience: string;
    background: string;
  };
  common: {
    downloadCv: string;
    viewExperience: string;
    getInTouch: string;
    backToTop: string;
    present: string;
  };
  hero: {
    role: string;
    eyebrow: string;
    titleLead: string;
    titleMiddle: string;
    titleAccent: string;
    summary: string;
    proof: Array<{ value: string; label: string }>;
    systemLabels: [string, string, string];
    coreLabel: string;
    signalLabel: string;
  };
  marquee: string[];
  expertise: {
    index: string;
    title: string;
    intro: string;
    items: Array<{
      title: string;
      copy: string;
      tags: string[];
      accent: "violet" | "cyan" | "amber" | "pink" | "green" | "blue";
    }>;
  };
  impact: {
    index: string;
    title: string;
    accent: string;
    intro: string;
    items: Array<{ metric: string; title: string; copy: string }>;
  };
  experience: {
    index: string;
    title: string;
    intro: string;
    roles: Array<{
      company: string;
      role: string;
      location: string;
      period: string;
      summary: string;
      bullets: string[];
    }>;
  };
  background: {
    index: string;
    title: string;
    intro: string;
    educationTitle: string;
    education: Array<{
      school: string;
      degree: string;
      period: string;
      detail: string;
    }>;
    publicationTitle: string;
    publication: string;
    awardsTitle: string;
    awards: string[];
  };
  skills: {
    index: string;
    title: string;
    groups: Array<{ label: string; items: string[] }>;
  };
  manifesto: {
    lead: string;
    accent: string;
    metaLeft: string;
    metaRight: string;
  };
  contact: {
    index: string;
    title: string;
    intro: string;
    location: string;
  };
};

const english: PortfolioContent = {
  locale: "en",
  languageName: "English",
  switchLabel: "TR",
  switchHref: "/tr/",
  nav: {
    expertise: "Expertise",
    impact: "Impact",
    experience: "Experience",
    background: "Background",
  },
  common: {
    downloadCv: "Download CV",
    viewExperience: "View experience",
    getInTouch: "Get in touch",
    backToTop: "Back to top",
    present: "Present",
  },
  hero: {
    role: "AI ENGINEER",
    eyebrow: "Applied AI · Ankara",
    titleLead: "I build AI that",
    titleMiddle: "sees. Understands.",
    titleAccent: "Acts.",
    summary:
      "I architect and ship multimodal AI systems that turn images, language and signals into production decisions — across computer vision, generative AI and autonomous agents.",
    proof: [
      { value: "8+ years", label: "Building production AI" },
      { value: "30 FPS", label: "Optimized edge inference" },
      { value: "1M+", label: "Images processed" },
    ],
    systemLabels: ["VISION", "MULTIMODAL", "AGENTS"],
    coreLabel: "APPLIED AI",
    signalLabel: "Production intelligence",
  },
  marquee: [
    "COMPUTER VISION",
    "MULTIMODAL AI",
    "AGENTIC SYSTEMS",
    "MLOPS",
    "EDGE INFERENCE",
    "SEMANTIC SEARCH",
  ],
  expertise: {
    index: "01 — EXPERTISE",
    title: "Deep AI expertise. Built for the real world.",
    intro:
      "From model architecture to production infrastructure, I connect research depth with reliable engineering and measurable outcomes.",
    items: [
      {
        title: "Computer Vision",
        copy:
          "Real-time detection, image processing, pose estimation and vision systems designed for demanding environments.",
        tags: ["Detection", "Pose", "Image processing"],
        accent: "violet",
      },
      {
        title: "Multimodal Generative AI",
        copy:
          "Systems that combine image and language understanding to create useful, context-aware product experiences.",
        tags: ["Vision-language", "Generation", "Fusion"],
        accent: "cyan",
      },
      {
        title: "Agentic AI",
        copy:
          "Autonomous workflows that reason across complex tasks and interact safely with external tools and APIs.",
        tags: ["Agents", "Tool use", "Orchestration"],
        accent: "amber",
      },
      {
        title: "MLOps & Deployment",
        copy:
          "Repeatable model delivery, containerized services and production practices that accelerate iteration.",
        tags: ["MLOps", "Docker", "Microservices"],
        accent: "pink",
      },
      {
        title: "Edge AI",
        copy:
          "Low-latency inference and model optimization for constrained devices, real-time video and sensor pipelines.",
        tags: ["Optimization", "CUDA", "IR sensors"],
        accent: "green",
      },
      {
        title: "Semantic Search",
        copy:
          "Compact indexing and multimodal retrieval across images, audio and natural-language user queries.",
        tags: ["Retrieval", "Indexing", "Multimodal"],
        accent: "blue",
      },
    ],
  },
  impact: {
    index: "02 — SELECTED IMPACT",
    title: "Research depth.",
    accent: "Production results.",
    intro:
      "The strongest AI work is not only accurate. It is fast, scalable and useful under real constraints.",
    items: [
      {
        metric: "30% / 40%",
        title: "More accurate, leaner models",
        copy:
          "Designed multi-task 2D/3D pose and detection models with 30% higher accuracy and 40% lower computational cost.",
      },
      {
        metric: "30 FPS",
        title: "Real-time edge inference",
        copy:
          "Delivered a 3× performance improvement for real-time machine-learning algorithms on edge devices.",
      },
      {
        metric: "1M+",
        title: "Images processed",
        copy:
          "Built large-scale preprocessing and analysis pipelines that contributed to a 35% accuracy improvement.",
      },
    ],
  },
  experience: {
    index: "03 — EXPERIENCE",
    title: "From applied research to AI leadership.",
    intro:
      "Eight years across research institutes and product teams — always focused on turning advanced AI into dependable systems.",
    roles: [
      {
        company: "NuveMind Information Technologies",
        role: "AI Engineer",
        location: "Ankara, Türkiye",
        period: "Mar 2025 — Present",
        summary:
          "Leading the architecture and productionization of multimodal and agentic AI products.",
        bullets: [
          "Designed end-to-end multimodal generative AI solutions spanning advanced image processing and natural-language technologies.",
          "Architected autonomous agent systems that execute complex workflows through external tools and APIs.",
          "Coordinated AI and software teams, shaping a sustainable integration and delivery lifecycle.",
        ],
      },
      {
        company: "Pavo Group",
        role: "Senior Machine Learning Engineer",
        location: "Ankara, Türkiye",
        period: "Nov 2021 — Jan 2025",
        summary:
          "Built and optimized production machine-learning systems across MLOps, edge inference and perception.",
        bullets: [
          "Designed multi-task architectures for 2D/3D pose estimation and object detection, improving accuracy by 30% while reducing computational cost by 40%.",
          "Optimized real-time edge algorithms to 30 FPS, a 3× performance improvement.",
          "Integrated IR-camera data into machine-learning pipelines, expanding low-light data collection by 50%.",
        ],
      },
      {
        company: "TÜBİTAK Space Research Institute",
        role: "Researcher",
        location: "Ankara, Türkiye",
        period: "Jul 2020 — Nov 2021",
        summary:
          "Explored scalable machine-learning research and production-oriented service architecture.",
        bullets: [
          "Researched distributed volunteer computing for hyperparameter optimization and published the results.",
          "Containerized microservices with Docker to simplify deployment and improve scalability.",
          "Developed research algorithms using Python, PyTorch and MXNet.",
        ],
      },
      {
        company: "GCLab Engineering",
        role: "Computer Engineer",
        location: "Ankara, Türkiye",
        period: "Oct 2018 — Jul 2020",
        summary:
          "Developed computer-vision and multimodal retrieval capabilities with the TÜBİTAK UZAY image-processing team.",
        bullets: [
          "Built vision-based systems and image-processing algorithms for research applications.",
          "Implemented faster, more compact semantic indexing for images and sound.",
          "Supported multimodal user queries for internet-facing search systems.",
        ],
      },
    ],
  },
  background: {
    index: "04 — BACKGROUND",
    title: "A foundation in engineering and research.",
    intro:
      "Computer-engineering training, peer-reviewed research and a long-standing drive to solve difficult technical problems.",
    educationTitle: "Education",
    education: [
      {
        school: "Middle East Technical University",
        degree: "M.Sc. in Computer Engineering",
        period: "Sep 2021 — Sep 2023",
        detail: "CGPA 3.34 / 4.00 · On leave",
      },
      {
        school: "Bilkent University",
        degree: "B.Sc. in Computer Engineering",
        period: "Sep 2013 — Jun 2018",
        detail: "CGPA 3.32 / 4.00",
      },
    ],
    publicationTitle: "Publication",
    publication:
      "A.T. Albayrak, İ. Atıl, “Hyper Parameter Optimization for Deep Learning using Volunteer Computing,” 6th High Performance Computing Conference, 2020.",
    awardsTitle: "Recognition",
    awards: [
      "Bilkent University Senior Project Data Science Award, 2017–2018",
      "Ranked 753rd in Mathematics and Science among approximately 1.8 million university-admission candidates",
      "Enderun Science High School Salutatorian Award",
    ],
  },
  skills: {
    index: "05 — TOOLKIT",
    title: "The tools behind the work.",
    groups: [
      { label: "Programming", items: ["Python", "C++", "C", "MATLAB", "SQL"] },
      {
        label: "Machine Learning",
        items: ["PyTorch", "TensorFlow", "MXNet", "NumPy", "CUDA"],
      },
      {
        label: "Systems",
        items: ["Docker", "Git", "MLOps", "Microservices", "Edge AI"],
      },
      {
        label: "Focus",
        items: [
          "Computer Vision",
          "Multimodal AI",
          "Agentic AI",
          "Semantic Search",
        ],
      },
    ],
  },
  manifesto: {
    lead: "The best AI does not stop at a benchmark.",
    accent: "It earns its place in the real world.",
    metaLeft: "AHMET TAHA ALBAYRAK / ANKARA",
    metaRight: "RESEARCH THINKING · PRODUCTION DISCIPLINE",
  },
  contact: {
    index: "LET’S CONNECT",
    title: "Building serious AI?",
    intro:
      "I am open to global AI engineering opportunities where ambitious research meets production-scale impact.",
    location: "Ankara, Türkiye",
  },
};

const turkish: PortfolioContent = {
  locale: "tr",
  languageName: "Türkçe",
  switchLabel: "EN",
  switchHref: "/",
  nav: {
    expertise: "Uzmanlık",
    impact: "Etki",
    experience: "Deneyim",
    background: "Geçmiş",
  },
  common: {
    downloadCv: "CV’yi indir",
    viewExperience: "Deneyimi gör",
    getInTouch: "İletişime geç",
    backToTop: "Yukarı dön",
    present: "Günümüz",
  },
  hero: {
    role: "YAPAY ZEKÂ MÜHENDİSİ",
    eyebrow: "Uygulamalı AI · Ankara",
    titleLead: "Gören, anlayan",
    titleMiddle: "ve harekete geçen",
    titleAccent: "yapay zekâ.",
    summary:
      "Görüntü, dil ve sinyal verilerini üretim kararlarına dönüştüren çok modlu yapay zekâ sistemleri tasarlıyor ve hayata geçiriyorum — bilgisayarlı görüden üretken yapay zekâya ve otonom ajanlara.",
    proof: [
      { value: "8+ yıl", label: "Üretim odaklı yapay zekâ" },
      { value: "30 FPS", label: "Optimize edge çıkarımı" },
      { value: "1M+", label: "İşlenen görüntü" },
    ],
    systemLabels: ["GÖRÜ", "ÇOK MODLU", "AJANLAR"],
    coreLabel: "UYGULAMALI AI",
    signalLabel: "Üretim zekâsı",
  },
  marquee: [
    "BİLGİSAYARLI GÖRÜ",
    "ÇOK MODLU AI",
    "AJAN SİSTEMLERİ",
    "MLOPS",
    "EDGE ÇIKARIMI",
    "SEMANTİK ARAMA",
  ],
  expertise: {
    index: "01 — UZMANLIK",
    title: "Derin AI uzmanlığı. Gerçek dünya için.",
    intro:
      "Model mimarisinden üretim altyapısına kadar araştırma derinliğini güvenilir mühendislik ve ölçülebilir sonuçlarla buluşturuyorum.",
    items: [
      {
        title: "Bilgisayarlı Görü",
        copy:
          "Zorlu ortamlar için gerçek zamanlı tespit, görüntü işleme, poz tahmini ve görsel algı sistemleri.",
        tags: ["Tespit", "Poz tahmini", "Görüntü işleme"],
        accent: "violet",
      },
      {
        title: "Çok Modlu Üretken AI",
        copy:
          "Görüntü ve dil anlayışını birleştirerek bağlama duyarlı, kullanışlı ürün deneyimleri oluşturan sistemler.",
        tags: ["Görüntü-dil", "Üretim", "Füzyon"],
        accent: "cyan",
      },
      {
        title: "Ajan Tabanlı AI",
        copy:
          "Karmaşık görevlerde akıl yürüten, harici araçlar ve API’lerle güvenli şekilde çalışan otonom iş akışları.",
        tags: ["Ajanlar", "Araç kullanımı", "Orkestrasyon"],
        accent: "amber",
      },
      {
        title: "MLOps ve Dağıtım",
        copy:
          "Model iterasyonunu hızlandıran tekrarlanabilir teslim süreçleri, konteyner servisleri ve üretim pratikleri.",
        tags: ["MLOps", "Docker", "Mikroservisler"],
        accent: "pink",
      },
      {
        title: "Edge AI",
        copy:
          "Kısıtlı cihazlar, gerçek zamanlı video ve sensör hatları için düşük gecikmeli çıkarım ve model optimizasyonu.",
        tags: ["Optimizasyon", "CUDA", "IR sensörler"],
        accent: "green",
      },
      {
        title: "Semantik Arama",
        copy:
          "Görüntü, ses ve doğal dil sorgularında kompakt indeksleme ve çok modlu erişim.",
        tags: ["Erişim", "İndeksleme", "Çok modlu"],
        accent: "blue",
      },
    ],
  },
  impact: {
    index: "02 — SEÇİLİ ETKİLER",
    title: "Araştırma derinliği.",
    accent: "Üretim sonuçları.",
    intro:
      "En güçlü yapay zekâ yalnızca doğru değildir; gerçek kısıtlar altında hızlı, ölçeklenebilir ve kullanışlıdır.",
    items: [
      {
        metric: "%30 / %40",
        title: "Daha doğru, daha verimli modeller",
        copy:
          "2B/3B poz tahmini ve tespit için doğruluğu %30 artırırken hesaplama maliyetini %40 azaltan çok görevli modeller tasarladım.",
      },
      {
        metric: "30 FPS",
        title: "Gerçek zamanlı edge çıkarımı",
        copy:
          "Edge cihazlardaki gerçek zamanlı makine öğrenmesi algoritmalarında 3 kat performans artışı sağladım.",
      },
      {
        metric: "1M+",
        title: "İşlenen görüntü",
        copy:
          "Doğrulukta %35 artışa katkı sağlayan büyük ölçekli ön işleme ve analiz hatları geliştirdim.",
      },
    ],
  },
  experience: {
    index: "03 — DENEYİM",
    title: "Uygulamalı araştırmadan AI liderliğine.",
    intro:
      "Araştırma enstitüleri ve ürün ekiplerindeki sekiz yıllık deneyimim boyunca ileri yapay zekâyı güvenilir sistemlere dönüştürmeye odaklandım.",
    roles: [
      {
        company: "NuveMind Bilgi Teknolojileri",
        role: "Yapay Zekâ Mühendisi",
        location: "Ankara, Türkiye",
        period: "Mar 2025 — Günümüz",
        summary:
          "Çok modlu ve ajan tabanlı AI ürünlerinin mimarisine ve üretime alınmasına liderlik ediyorum.",
        bullets: [
          "İleri görüntü işleme ve doğal dil teknolojilerini birleştiren uçtan uca çok modlu üretken AI çözümleri tasarladım.",
          "Harici araçlar ve API’lerle karmaşık iş akışları yürüten otonom ajan sistemleri geliştirdim.",
          "AI ve yazılım ekiplerini koordine ederek sürdürülebilir entegrasyon ve teslim süreçleri oluşturdum.",
        ],
      },
      {
        company: "Pavo Group",
        role: "Kıdemli Makine Öğrenmesi Mühendisi",
        location: "Ankara, Türkiye",
        period: "Kas 2021 — Oca 2025",
        summary:
          "MLOps, edge çıkarımı ve algı alanlarında üretim makine öğrenmesi sistemleri geliştirdim ve optimize ettim.",
        bullets: [
          "2B/3B poz tahmini ve nesne tespiti için doğruluğu %30 artırırken hesaplama maliyetini %40 azaltan çok görevli mimariler geliştirdim.",
          "Gerçek zamanlı edge algoritmalarını 30 FPS seviyesine çıkararak 3 kat performans artışı sağladım.",
          "IR kamera verisini makine öğrenmesi hatlarına entegre ederek düşük ışık veri toplama kapasitesini %50 artırdım.",
        ],
      },
      {
        company: "TÜBİTAK UZAY",
        role: "Araştırmacı",
        location: "Ankara, Türkiye",
        period: "Tem 2020 — Kas 2021",
        summary:
          "Ölçeklenebilir makine öğrenmesi araştırmaları ve üretim odaklı servis mimarileri üzerinde çalıştım.",
        bullets: [
          "Hiperparametre optimizasyonu için dağıtık gönüllü hesaplamayı araştırdım ve sonuçlarını yayımladım.",
          "Dağıtımı kolaylaştırmak ve ölçeklenebilirliği artırmak için mikroservisleri Docker ile konteynerleştirdim.",
          "Python, PyTorch ve MXNet ile araştırma algoritmaları geliştirdim.",
        ],
      },
      {
        company: "GCLab Mühendislik",
        role: "Bilgisayar Mühendisi",
        location: "Ankara, Türkiye",
        period: "Eki 2018 — Tem 2020",
        summary:
          "TÜBİTAK UZAY görüntü işleme ekibiyle bilgisayarlı görü ve çok modlu erişim yetenekleri geliştirdim.",
        bullets: [
          "Araştırma uygulamaları için görsel algı sistemleri ve görüntü işleme algoritmaları geliştirdim.",
          "Görüntü ve ses için daha hızlı, kompakt semantik indeksleme uyguladım.",
          "İnternete açık arama sistemlerinde çok modlu kullanıcı sorgularını destekledim.",
        ],
      },
    ],
  },
  background: {
    index: "04 — GEÇMİŞ",
    title: "Mühendislik ve araştırma temeli.",
    intro:
      "Bilgisayar mühendisliği eğitimi, hakemli araştırma ve zorlu teknik problemleri çözmeye yönelik uzun soluklu bir motivasyon.",
    educationTitle: "Eğitim",
    education: [
      {
        school: "Orta Doğu Teknik Üniversitesi",
        degree: "Bilgisayar Mühendisliği Yüksek Lisans",
        period: "Eyl 2021 — Eyl 2023",
        detail: "GNO 3,34 / 4,00 · İzinli",
      },
      {
        school: "Bilkent Üniversitesi",
        degree: "Bilgisayar Mühendisliği Lisans",
        period: "Eyl 2013 — Haz 2018",
        detail: "GNO 3,32 / 4,00",
      },
    ],
    publicationTitle: "Yayın",
    publication:
      "A.T. Albayrak, İ. Atıl, “Hyper Parameter Optimization for Deep Learning using Volunteer Computing,” 6. High Performance Computing Conference, 2020.",
    awardsTitle: "Başarılar",
    awards: [
      "Bilkent Üniversitesi Bitirme Projesi Veri Bilimi Ödülü, 2017–2018",
      "Üniversite giriş sınavında yaklaşık 1,8 milyon aday arasında sayısal alanda 753.",
      "Enderun Fen Lisesi okul ikinciliği",
    ],
  },
  skills: {
    index: "05 — ARAÇ SETİ",
    title: "Çalışmanın arkasındaki araçlar.",
    groups: [
      { label: "Programlama", items: ["Python", "C++", "C", "MATLAB", "SQL"] },
      {
        label: "Makine Öğrenmesi",
        items: ["PyTorch", "TensorFlow", "MXNet", "NumPy", "CUDA"],
      },
      {
        label: "Sistemler",
        items: ["Docker", "Git", "MLOps", "Mikroservisler", "Edge AI"],
      },
      {
        label: "Odak",
        items: [
          "Bilgisayarlı Görü",
          "Çok Modlu AI",
          "Ajan Tabanlı AI",
          "Semantik Arama",
        ],
      },
    ],
  },
  manifesto: {
    lead: "En iyi yapay zekâ bir benchmark sonucunda kalmaz.",
    accent: "Gerçek dünyada yerini kazanır.",
    metaLeft: "AHMET TAHA ALBAYRAK / ANKARA",
    metaRight: "ARAŞTIRMA BAKIŞI · ÜRETİM DİSİPLİNİ",
  },
  contact: {
    index: "İLETİŞİME GEÇELİM",
    title: "Ciddi AI sistemleri mi geliştiriyorsunuz?",
    intro:
      "İddialı araştırmanın üretim ölçeğinde etkiyle buluştuğu global yapay zekâ mühendisliği fırsatlarına açığım.",
    location: "Ankara, Türkiye",
  },
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: english,
  tr: turkish,
};
