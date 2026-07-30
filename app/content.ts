export type Locale = "en" | "tr";

export type PortfolioContent = {
  locale: Locale;
  languageName: string;
  switchLabel: string;
  switchHref: string;
  nav: {
    expertise: string;
    impact: string;
    projects: string;
    experience: string;
    background: string;
  };
  common: {
    downloadCv: string;
    viewExperience: string;
    viewProjects: string;
    emailMe: string;
    menuLabel: string;
    closeMenuLabel: string;
    backToTop: string;
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
    items: Array<{
      metric: string;
      title: string;
      context: string;
      copy: string;
    }>;
  };
  projects: {
    index: string;
    title: string;
    intro: string;
    contributionLabel: string;
    liveLabel: string;
    sourceLabel: string;
    items: Array<{
      title: string;
      kicker: string;
      year: string;
      copy: string;
      contribution: string;
      tags: string[];
      variant: "bit" | "rail";
      liveUrl: string;
      sourceUrl: string;
    }>;
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
    title: string;
    groups: Array<{ label: string; items: string[] }>;
  };
  contact: {
    location: string;
    eyebrow: string;
    title: string;
    copy: string;
    availability: string;
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
    projects: "Projects",
    experience: "Experience",
    background: "Background",
  },
  common: {
    downloadCv: "Download CV",
    viewExperience: "View experience",
    viewProjects: "View selected work",
    emailMe: "Email me",
    menuLabel: "Open navigation",
    closeMenuLabel: "Close navigation",
    backToTop: "Back to top",
  },
  hero: {
    role: "AI ENGINEER",
    eyebrow: "Production AI · Ankara",
    titleLead: "AI Engineer building",
    titleMiddle: "production computer vision,",
    titleAccent: "multimodal AI and agentic systems.",
    summary:
      "8+ years of experience taking machine-learning systems from architecture and optimization to edge deployment, large-scale image processing, and production integration.",
    proof: [
      { value: "8+ years", label: "Professional AI experience" },
      { value: "30 FPS", label: "Real-time edge inference" },
      { value: "1B+", label: "Images processed in ML pipelines" },
    ],
    systemLabels: ["VISION", "MULTIMODAL", "AGENTS"],
    coreLabel: "AI ENGINEERING",
    signalLabel: "Production systems",
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
    index: "04 — EXPERTISE & TOOLKIT",
    title: "Technical depth across the production ML lifecycle.",
    intro:
      "Experience across the machine-learning lifecycle, from model development and optimization to system integration and production delivery.",
    items: [
      {
        title: "Computer Vision",
        copy:
          "Development of image-processing, object-detection, and 2D/3D pose-estimation systems for real-time and research applications.",
        tags: ["Detection", "Pose", "Image processing"],
        accent: "violet",
      },
      {
        title: "Multimodal Generative AI",
        copy:
          "Design of systems that combine image and language models for context-aware generation, analysis, and product workflows.",
        tags: ["Vision-language", "Generation", "Fusion"],
        accent: "cyan",
      },
      {
        title: "Agentic AI",
        copy:
          "Architecture of tool-using agents that execute multi-step workflows through external services and APIs.",
        tags: ["Agents", "Tool use", "Orchestration"],
        accent: "amber",
      },
      {
        title: "Production ML & MLOps",
        copy:
          "Containerized services, reproducible model delivery, and engineering practices that support reliable iteration and deployment.",
        tags: ["MLOps", "Docker", "Microservices"],
        accent: "pink",
      },
      {
        title: "Edge AI",
        copy:
          "Model and inference optimization for constrained devices, real-time video pipelines, and IR-assisted perception systems.",
        tags: ["Optimization", "CUDA", "IR sensors"],
        accent: "green",
      },
      {
        title: "Semantic Search",
        copy:
          "Compact indexing and multimodal retrieval across image, audio, and natural-language queries.",
        tags: ["Retrieval", "Indexing", "Multimodal"],
        accent: "blue",
      },
    ],
  },
  impact: {
    index: "01 — SELECTED IMPACT",
    title: "Selected engineering outcomes.",
    accent: "Accuracy, efficiency, and scale.",
    intro:
      "Representative results from work on multi-task learning, real-time edge inference, and large-scale vision datasets.",
    items: [
      {
        metric: "30% / 40%",
        title: "Higher accuracy, lower compute",
        context: "Pavo Group · Multi-task perception",
        copy:
          "Developed multi-task architectures for 2D/3D pose estimation and object detection, improving accuracy by 30% while reducing computational cost by 40%.",
      },
      {
        metric: "30 FPS",
        title: "Real-time edge performance",
        context: "Pavo Group · Edge inference",
        copy:
          "Optimized machine-learning inference on edge devices to 30 FPS, achieving a threefold performance improvement.",
      },
      {
        metric: "1B+",
        title: "Large-scale vision data",
        context: "Large-scale ML data pipelines",
        copy:
          "Designed and operated machine-learning data pipelines handling more than one billion image records.",
      },
    ],
  },
  projects: {
    index: "02 — SELECTED PROJECTS",
    title: "Selected engineering projects.",
    intro:
      "Technical projects exploring efficient language-model inference and the delivery of complex native applications through modern web runtimes.",
    contributionLabel: "Engineering contribution",
    liveLabel: "Launch project",
    sourceLabel: "View source",
    items: [
      {
        title: "1bitllm",
        kicker: "IN-BROWSER AI",
        year: "2026",
        copy:
          "A browser-native playground for quantized Bonsai language models. It runs ONNX inference with WebGPU, streams generated tokens from a Web Worker, and caches model assets locally without a server-side inference backend.",
        contribution:
          "Designed and implemented the client-side inference flow, model lifecycle, streaming chat interface, and WebGPU capability checks.",
        tags: ["WebGPU", "Transformers.js", "ONNX", "Web Workers"],
        variant: "bit",
        liveUrl: "https://atalbayrak.github.io/1bitllm/",
        sourceUrl: "https://github.com/atalbayrak/1bitllm",
      },
      {
        title: "OpenTTD / Browser Port",
        kicker: "WEBASSEMBLY PORT",
        year: "2019",
        copy:
          "A browser port of OpenTTD compiled with Emscripten and WebAssembly, bringing the C++ simulation engine to a full-screen web canvas without a native installation.",
        contribution:
          "Ported and packaged OpenTTD for browser execution, integrating the WebAssembly runtime, asset bundle, loading states, and canvas-based application shell.",
        tags: ["C++", "WebAssembly", "Emscripten", "Canvas"],
        variant: "rail",
        liveUrl: "https://atalbayrak.github.io/openttd/",
        sourceUrl: "https://github.com/atalbayrak/openttd",
      },
    ],
  },
  experience: {
    index: "03 — EXPERIENCE",
    title: "Experience across production AI and applied research.",
    intro:
      "Professional work spanning multimodal systems, computer vision, edge inference, distributed computing, and semantic retrieval.",
    roles: [
      {
        company: "NuveMind Information Technologies",
        role: "AI Engineer & Co-Founder",
        location: "Ankara, Türkiye",
        period: "Mar 2025 — Present",
        summary:
          "Designing and integrating multimodal generative AI and agentic systems for production use.",
        bullets: [
          "Architect multimodal pipelines that integrate image-processing, language-model, and product-service components.",
          "Define tool interfaces and orchestration patterns for agents executing multi-step API workflows.",
          "Coordinate implementation across AI and software teams, defining integration and delivery practices.",
        ],
      },
      {
        company: "Pavo Group",
        role: "Senior Machine Learning Engineer",
        location: "Ankara, Türkiye",
        period: "Nov 2021 — Jan 2025",
        summary:
          "Developed and optimized production machine-learning systems for perception and edge deployment.",
        bullets: [
          "Developed multi-task architectures for 2D/3D pose estimation and object detection, improving accuracy by 30% while reducing computational cost by 40%.",
          "Optimized real-time edge inference to 30 FPS, delivering a threefold performance improvement.",
          "Integrated IR-camera data into machine-learning pipelines, increasing low-light data-collection capacity by 50%.",
        ],
      },
      {
        company: "TÜBİTAK Space Research Institute",
        role: "Researcher",
        location: "Ankara, Türkiye",
        period: "Jul 2020 — Nov 2021",
        summary:
          "Conducted machine-learning research focused on distributed computing, containerized services, and algorithm development.",
        bullets: [
          "Investigated volunteer computing for hyperparameter optimization and published the results at the 6th High Performance Computing Conference.",
          "Containerized microservices with Docker to improve deployment consistency and scalability.",
          "Developed machine-learning algorithms using Python, PyTorch, and MXNet.",
        ],
      },
      {
        company: "GCLab Engineering",
        role: "Computer Engineer",
        location: "Ankara, Türkiye",
        period: "Oct 2018 — Jul 2020",
        summary:
          "Developed computer-vision and multimodal retrieval systems with the TÜBİTAK UZAY image-processing team.",
        bullets: [
          "Developed vision-based systems and image-processing algorithms for research applications.",
          "Implemented faster and more compact semantic indexing for image and audio data.",
          "Supported multimodal user queries in internet-facing search systems.",
        ],
      },
    ],
  },
  background: {
    index: "05 — BACKGROUND",
    title: "Education, research, and recognition.",
    intro:
      "An academic foundation in computer engineering, supported by machine-learning research, a conference publication, and academic distinctions.",
    educationTitle: "Education",
    education: [
      {
        school: "Middle East Technical University",
        degree: "Graduate studies in Computer Engineering",
        period: "Sep 2021 — Sep 2023",
        detail: "CGPA 3.34 / 4.00 · On leave since Sep 2023",
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
      "Bilkent University Senior Project Data Science Award (2017–2018)",
      "Ranked 753rd in the quantitative track among approximately 1.8 million candidates in Türkiye’s national university entrance examination",
      "Enderun Science High School Salutatorian",
    ],
  },
  skills: {
    title: "Languages, tools, and specialization.",
    groups: [
      { label: "Programming", items: ["Python", "C++", "C", "MATLAB", "SQL"] },
      {
        label: "Machine Learning",
        items: ["PyTorch", "TensorFlow", "MXNet", "NumPy", "CUDA"],
      },
      {
        label: "Infrastructure",
        items: ["Docker", "Git", "MLOps", "Microservices"],
      },
      {
        label: "Specialization",
        items: [
          "Computer Vision",
          "Multimodal AI",
          "Agentic AI",
          "Edge AI",
          "Semantic Search",
        ],
      },
      {
        label: "Languages",
        items: ["Turkish · Native", "English · Professional"],
      },
    ],
  },
  contact: {
    location: "Ankara, Türkiye",
    eyebrow: "CONTACT",
    title: "Open to international AI engineering opportunities.",
    copy:
      "For roles and collaborations involving production computer vision, multimodal AI, agentic systems, and machine learning infrastructure.",
    availability: "Ankara · Remote · International",
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
    projects: "Projeler",
    experience: "Deneyim",
    background: "Geçmiş",
  },
  common: {
    downloadCv: "CV’yi indir",
    viewExperience: "Deneyimi gör",
    viewProjects: "Seçili projeleri gör",
    emailMe: "E-posta gönder",
    menuLabel: "Navigasyonu aç",
    closeMenuLabel: "Navigasyonu kapat",
    backToTop: "Yukarı dön",
  },
  hero: {
    role: "YAPAY ZEKÂ MÜHENDİSİ",
    eyebrow: "Üretim Odaklı AI · Ankara",
    titleLead: "AI Engineer olarak",
    titleMiddle: "üretim ölçeğinde bilgisayarlı görü,",
    titleAccent: "çok modlu AI ve ajan sistemleri geliştiriyorum.",
    summary:
      "Makine öğrenmesi sistemlerini mimari ve optimizasyondan edge dağıtımına, büyük ölçekli görüntü işlemeye ve üretim entegrasyonuna taşıyan 8+ yıllık deneyime sahibim.",
    proof: [
      { value: "8+ yıl", label: "Profesyonel AI deneyimi" },
      { value: "30 FPS", label: "Gerçek zamanlı edge çıkarımı" },
      { value: "1B+", label: "ML hatlarında işlenen görüntü" },
    ],
    systemLabels: ["GÖRÜ", "ÇOK MODLU", "AJANLAR"],
    coreLabel: "AI MÜHENDİSLİĞİ",
    signalLabel: "Üretim sistemleri",
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
    index: "04 — UZMANLIK & ARAÇLAR",
    title: "Üretim ML yaşam döngüsünün tamamında teknik derinlik.",
    intro:
      "Model geliştirme ve optimizasyondan sistem entegrasyonu ve üretime alma süreçlerine kadar makine öğrenmesi yaşam döngüsünün farklı aşamalarında deneyim sahibiyim.",
    items: [
      {
        title: "Bilgisayarlı Görü",
        copy:
          "Gerçek zamanlı ve araştırma uygulamaları için görüntü işleme, nesne tespiti ve 2B/3B poz tahmini sistemleri.",
        tags: ["Tespit", "Poz tahmini", "Görüntü işleme"],
        accent: "violet",
      },
      {
        title: "Çok Modlu Üretken AI",
        copy:
          "Görüntü ve dil modellerini bağlama duyarlı üretim, analiz ve ürün iş akışlarında birleştiren sistemler.",
        tags: ["Görüntü-dil", "Üretim", "Füzyon"],
        accent: "cyan",
      },
      {
        title: "Ajan Tabanlı AI",
        copy:
          "Harici servisler ve API’ler üzerinden çok adımlı iş akışları yürüten araç kullanımlı ajan mimarileri.",
        tags: ["Ajanlar", "Araç kullanımı", "Orkestrasyon"],
        accent: "amber",
      },
      {
        title: "Üretim ML ve MLOps",
        copy:
          "Konteyner servisleri, tekrarlanabilir model teslimi ve güvenilir iterasyonu destekleyen mühendislik pratikleri.",
        tags: ["MLOps", "Docker", "Mikroservisler"],
        accent: "pink",
      },
      {
        title: "Edge AI",
        copy:
          "Kısıtlı cihazlar, gerçek zamanlı video hatları ve IR destekli algı sistemleri için model ve çıkarım optimizasyonu.",
        tags: ["Optimizasyon", "CUDA", "IR sensörler"],
        accent: "green",
      },
      {
        title: "Semantik Arama",
        copy:
          "Görüntü, ses ve doğal dil sorguları için kompakt indeksleme ve çok modlu erişim.",
        tags: ["Erişim", "İndeksleme", "Çok modlu"],
        accent: "blue",
      },
    ],
  },
  impact: {
    index: "01 — SEÇİLİ ETKİLER",
    title: "Seçili mühendislik çıktıları.",
    accent: "Doğruluk, verimlilik ve ölçek odağında.",
    intro:
      "Çok görevli öğrenme, gerçek zamanlı edge çıkarımı ve büyük ölçekli görüntü verileri üzerinde yürütülen çalışmalardan ölçülebilir sonuçlar.",
    items: [
      {
        metric: "%30 / %40",
        title: "Daha yüksek doğruluk, daha düşük maliyet",
        context: "Pavo Group · Çok görevli algı",
        copy:
          "2B/3B poz tahmini ve nesne tespiti için doğruluğu %30 artırırken hesaplama maliyetini %40 azaltan çok görevli mimariler geliştirdim.",
      },
      {
        metric: "30 FPS",
        title: "Gerçek zamanlı edge performansı",
        context: "Pavo Group · Edge çıkarımı",
        copy:
          "Edge cihazlardaki makine öğrenmesi çıkarımını 30 FPS seviyesine optimize ederek üç kat performans artışı sağladım.",
      },
      {
        metric: "1B+",
        title: "Büyük ölçekli görüntü verisi",
        context: "Büyük ölçekli ML veri hatları",
        copy:
          "Bir milyardan fazla görüntü kaydını işleyen makine öğrenmesi veri hatları tasarladım ve yönettim.",
      },
    ],
  },
  projects: {
    index: "02 — SEÇİLİ PROJELER",
    title: "Seçili mühendislik projeleri.",
    intro:
      "Verimli dil modeli çıkarımı ve karmaşık native uygulamaların modern web çalışma ortamları üzerinden sunulmasına odaklanan teknik çalışmalar.",
    contributionLabel: "Mühendislik katkısı",
    liveLabel: "Projeyi aç",
    sourceLabel: "Kaynak kod",
    items: [
      {
        title: "1bitllm",
        kicker: "TARAYICI İÇİ AI",
        year: "2026",
        copy:
          "Kuantize edilmiş Bonsai dil modelleri için tarayıcı tabanlı bir deney ortamı. ONNX çıkarımını WebGPU ile çalıştırır, üretilen tokenları bir Web Worker üzerinden akıtır ve model dosyalarını sunucu tarafında bir çıkarım altyapısına ihtiyaç duymadan yerel olarak önbelleğe alır.",
        contribution:
          "İstemci taraflı çıkarım akışını, model yaşam döngüsünü, streaming sohbet arayüzünü ve WebGPU yetenek kontrollerini tasarlayıp geliştirdim.",
        tags: ["WebGPU", "Transformers.js", "ONNX", "Web Workers"],
        variant: "bit",
        liveUrl: "https://atalbayrak.github.io/1bitllm/",
        sourceUrl: "https://github.com/atalbayrak/1bitllm",
      },
      {
        title: "OpenTTD / Tarayıcı Portu",
        kicker: "WEBASSEMBLY PORTU",
        year: "2019",
        copy:
          "OpenTTD’nin Emscripten ve WebAssembly ile derlenmiş tarayıcı portu. C++ tabanlı simülasyon motorunu native kurulum gerektirmeden tam ekran web canvas üzerinde çalıştırır.",
        contribution:
          "OpenTTD’yi tarayıcı ortamına portlayıp paketledim; WebAssembly çalışma ortamını, asset paketini, yükleme durumlarını ve canvas tabanlı uygulama kabuğunu entegre ettim.",
        tags: ["C++", "WebAssembly", "Emscripten", "Canvas"],
        variant: "rail",
        liveUrl: "https://atalbayrak.github.io/openttd/",
        sourceUrl: "https://github.com/atalbayrak/openttd",
      },
    ],
  },
  experience: {
    index: "03 — DENEYİM",
    title: "Üretim sistemleri ve uygulamalı araştırma deneyimi.",
    intro:
      "Çok modlu sistemler, bilgisayarlı görü, edge çıkarımı, dağıtık hesaplama ve semantik erişimi kapsayan profesyonel deneyim.",
    roles: [
      {
        company: "NuveMind Bilgi Teknolojileri",
        role: "Yapay Zekâ Mühendisi & Kurucu Ortak",
        location: "Ankara, Türkiye",
        period: "Mar 2025 — Günümüz",
        summary:
          "Çok modlu üretken AI ve ajan tabanlı sistemleri üretim kullanımı için tasarlıyor ve entegre ediyorum.",
        bullets: [
          "Görüntü işleme, dil modeli ve ürün servisi bileşenlerini birleştiren çok modlu hatlar tasarlıyorum.",
          "Çok adımlı API iş akışları yürüten ajanlar için araç arayüzleri ve orkestrasyon örüntüleri tanımlıyorum.",
          "AI ve yazılım ekipleri arasındaki uygulama çalışmalarını koordine ederek entegrasyon ve teslim pratiklerini tanımlıyorum.",
        ],
      },
      {
        company: "Pavo Group",
        role: "Kıdemli Makine Öğrenmesi Mühendisi",
        location: "Ankara, Türkiye",
        period: "Kas 2021 — Oca 2025",
        summary:
          "Algı ve edge dağıtımı için üretim makine öğrenmesi sistemleri geliştirdim ve optimize ettim.",
        bullets: [
          "2B/3B poz tahmini ve nesne tespiti için doğruluğu %30 artırırken hesaplama maliyetini %40 azaltan çok görevli mimariler geliştirdim.",
          "Gerçek zamanlı edge çıkarımını 30 FPS seviyesine optimize ederek üç kat performans artışı sağladım.",
          "IR kamera verisini makine öğrenmesi hatlarına entegre ederek düşük ışık veri toplama kapasitesini %50 artırdım.",
        ],
      },
      {
        company: "TÜBİTAK UZAY",
        role: "Araştırmacı",
        location: "Ankara, Türkiye",
        period: "Tem 2020 — Kas 2021",
        summary:
          "Dağıtık hesaplama, konteyner servisleri ve algoritma geliştirmeye odaklanan makine öğrenmesi araştırmaları yürüttüm.",
        bullets: [
          "Hiperparametre optimizasyonu için gönüllü hesaplama yaklaşımını araştırdım ve sonuçları 6. Yüksek Başarımlı Hesaplama Konferansı’nda yayımladım.",
          "Dağıtım tutarlılığını ve ölçeklenebilirliği geliştirmek için mikroservisleri Docker ile konteynerleştirdim.",
          "Python, PyTorch ve MXNet kullanarak makine öğrenmesi algoritmaları geliştirdim.",
        ],
      },
      {
        company: "GCLab Mühendislik",
        role: "Bilgisayar Mühendisi",
        location: "Ankara, Türkiye",
        period: "Eki 2018 — Tem 2020",
        summary:
          "TÜBİTAK UZAY görüntü işleme ekibiyle bilgisayarlı görü ve çok modlu erişim sistemleri geliştirdim.",
        bullets: [
          "Araştırma uygulamaları için görsel algı sistemleri ve görüntü işleme algoritmaları geliştirdim.",
          "Görüntü ve ses verileri için daha hızlı ve kompakt semantik indeksleme uyguladım.",
          "İnternete açık arama sistemlerinde çok modlu kullanıcı sorgularını destekledim.",
        ],
      },
    ],
  },
  background: {
    index: "05 — GEÇMİŞ",
    title: "Eğitim, araştırma ve başarılar.",
    intro:
      "Bilgisayar mühendisliği eğitimimi makine öğrenmesi araştırmaları, bir konferans yayını ve akademik başarılarla destekledim.",
    educationTitle: "Eğitim",
    education: [
      {
        school: "Orta Doğu Teknik Üniversitesi",
        degree: "Bilgisayar Mühendisliği lisansüstü çalışmaları",
        period: "Eyl 2021 — Eyl 2023",
        detail: "GNO 3,34 / 4,00 · Eyl 2023’ten beri izinli",
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
      "Bilkent Üniversitesi Bitirme Projesi Veri Bilimi Ödülü (2017–2018)",
      "Türkiye genelindeki üniversite giriş sınavında yaklaşık 1,8 milyon aday arasında sayısal alanda 753. sıra",
      "Enderun Fen Lisesi okul ikinciliği",
    ],
  },
  skills: {
    title: "Diller, araçlar ve uzmanlık alanları.",
    groups: [
      { label: "Programlama", items: ["Python", "C++", "C", "MATLAB", "SQL"] },
      {
        label: "Makine Öğrenmesi",
        items: ["PyTorch", "TensorFlow", "MXNet", "NumPy", "CUDA"],
      },
      {
        label: "Altyapı",
        items: ["Docker", "Git", "MLOps", "Mikroservisler"],
      },
      {
        label: "Uzmanlık",
        items: [
          "Bilgisayarlı Görü",
          "Çok Modlu AI",
          "Ajan Tabanlı AI",
          "Edge AI",
          "Semantik Arama",
        ],
      },
      {
        label: "Diller",
        items: ["Türkçe · Ana dil", "İngilizce · Profesyonel"],
      },
    ],
  },
  contact: {
    location: "Ankara, Türkiye",
    eyebrow: "İLETİŞİM",
    title: "Uluslararası AI mühendisliği fırsatlarına açığım.",
    copy:
      "Üretim bilgisayarlı görü, çok modlu AI, ajan sistemleri ve makine öğrenmesi altyapısı odaklı roller ve iş birlikleri için.",
    availability: "Ankara · Uzaktan · Uluslararası",
  },
};

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: english,
  tr: turkish,
};
