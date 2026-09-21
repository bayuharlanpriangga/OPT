import { LocalizedString } from '../../types';

export interface Big5DimensionInfo {
  code: string;
  name: LocalizedString;
  highPole: { letter: string; label: LocalizedString; trait: LocalizedString };
  lowPole: { letter: string; label: LocalizedString; trait: LocalizedString };
  description: LocalizedString;
}

export const BIG5_DIMENSIONS: Record<string, Big5DimensionInfo> = {
  extraversion: {
    code: 'E',
    name: { id: 'Extraversion (S vs R)', en: 'Extraversion (S vs R)' },
    highPole: {
      letter: 'S',
      label: { id: 'Social (S)', en: 'Social (S)' },
      trait: { id: 'Sosial, ramah, suka keramaian, bertenaga ekspresif', en: 'Outgoing, gregarious, enthusiastic, assertive' },
    },
    lowPole: {
      letter: 'R',
      label: { id: 'Reserved (R)', en: 'Reserved (R)' },
      trait: { id: 'Pendiam, mandiri, menikmati keheningan, selektif', en: 'Introverted, quiet, reflective, independent' },
    },
    description: {
      id: 'Mengukur antusiasme sosial dan keterlibatan aktif dengan dunia luar.',
      en: 'Measures sociability, assertiveness, and outward enthusiasm.',
    },
  },
  neuroticism: {
    code: 'N',
    name: { id: 'Emotional Stability (C vs L)', en: 'Emotional Stability (C vs L)' },
    highPole: {
      letter: 'L',
      label: { id: 'Limbic (L)', en: 'Limbic (L)' },
      trait: { id: 'Sensitif, mudah cemas, reaktif, rentan terhadap stres', en: 'Emotionally reactive, prone to anxiety and mood shifts' },
    },
    lowPole: {
      letter: 'C',
      label: { id: 'Calm (C)', en: 'Calm (C)' },
      trait: { id: 'Tenang, stabil, tahan tekanan krisis, tidak mudah panik', en: 'Unflappable, emotionally stable, resilient under pressure' },
    },
    description: {
      id: 'Mengukur reaktivitas sistem saraf terhadap stres, kecemasan, dan ancaman.',
      en: 'Measures nervous system reactivity to threat, stress, and negative affect.',
    },
  },
  conscientiousness: {
    code: 'C',
    name: { id: 'Orderliness & Drive (O vs U)', en: 'Orderliness & Drive (O vs U)' },
    highPole: {
      letter: 'O',
      label: { id: 'Organized (O)', en: 'Organized (O)' },
      trait: { id: 'Sangat disiplin, teratur, metodis, berorientasi target', en: 'Methodical, disciplined, goal-driven, thorough' },
    },
    lowPole: {
      letter: 'U',
      label: { id: 'Unstructured (U)', en: 'Unstructured (U)' },
      trait: { id: 'Spontan, fleksibel, santai, menolak jadwal kaku', en: 'Spontaneous, adaptable, relaxed, unconventional' },
    },
    description: {
      id: 'Mengukur kendali impuls, keteraturan, dan ketekunan dalam mengejar tujuan.',
      en: 'Measures impulse control, systematic planning, and persistence toward goals.',
    },
  },
  agreeableness: {
    code: 'A',
    name: { id: 'Interpersonal Warmth (A vs E)', en: 'Interpersonal Warmth (A vs E)' },
    highPole: {
      letter: 'A',
      label: { id: 'Accommodating (A)', en: 'Accommodating (A)' },
      trait: { id: 'Empatik, kooperatif, hangat, mengutamakan orang lain', en: 'Empathetic, trusting, prosocial, cooperative' },
    },
    lowPole: {
      letter: 'E',
      label: { id: 'Egocentric (E)', en: 'Egocentric (E)' },
      trait: { id: 'Kompetitif, skeptis, membela kepentingan diri, asertif', en: 'Tough-minded, skeptical, competitive, self-interested' },
    },
    description: {
      id: 'Mengukur motivasi untuk memelihara hubungan sosial yang harmonis dan kooperatif.',
      en: 'Measures altruism, compassion, and cooperative social disposition.',
    },
  },
  openness: {
    code: 'O',
    name: { id: 'Intellect & Imagination (I vs N)', en: 'Intellect & Imagination (I vs N)' },
    highPole: {
      letter: 'I',
      label: { id: 'Inquisitive (I)', en: 'Inquisitive (I)' },
      trait: { id: 'Sangat ingin tahu, imajinatif, menyukai seni dan filosofi', en: 'Intellectually curious, creative, imaginative, open-minded' },
    },
    lowPole: {
      letter: 'N',
      label: { id: 'Non-curious (N)', en: 'Non-curious (N)' },
      trait: { id: 'Praktis, konvensional, menyukai hal konkret dan terbukti', en: 'Conventional, practical, down-to-earth, routine-oriented' },
    },
    description: {
      id: 'Mengukur keterbukaan kognitif terhadap gagasan baru, seni, dan pengalaman batin.',
      en: 'Measures breadth, depth, and curiosity in mental and experiential realms.',
    },
  },
};

export interface SloanProfile {
  title: LocalizedString;
  description: LocalizedString;
  traits: LocalizedString[];
  careerMatches: LocalizedString[];
  growthEdge: LocalizedString;
}

export const SLOAN_ARCHETYPES: Record<string, SloanProfile> = {
  // Reserved (R) + Calm (C)
  RCOAI: {
    title: { id: 'Sang Filsuf Stoik (The Stoic Sage)', en: 'The Stoic Sage' },
    description: {
      id: 'Tenang, sangat disiplin, berempati tulus, dan memiliki wawasan intelektual yang kaya. Bekerja mandiri dalam harmoni dan ketenangan batin.',
      en: 'Calm, highly organized, empathetic, and intellectually expansive. Works steadily with quiet integrity and internal equilibrium.',
    },
    traits: [
      { id: 'Tahan tekanan dan stabil secara emosional', en: 'Emotionally unflappable and highly stable' },
      { id: 'Sangat disiplin dan terstruktur dalam bekerja', en: 'Methodical, organized, and reliable' },
      { id: 'Kebaikan hati tanpa pamrih dan terbuka pada ide baru', en: 'Gentle altruism paired with intellectual curiosity' },
    ],
    careerMatches: [
      { id: 'Peneliti, Filsuf, Konselor Akademik, Arsitek Sistem', en: 'Researcher, Philosopher, Academic Counselor, Systems Architect' },
    ],
    growthEdge: {
      id: 'Berlatih lebih vokal dalam menyuarakan ide brilian Anda ke forum publik.',
      en: 'Practice speaking up more assertively in public forums to share your insights.',
    },
  },
  RCOAN: {
    title: { id: 'Sang Pengabdi Tenang (The Quiet Steward)', en: 'The Quiet Steward' },
    description: {
      id: 'Sangat dapat diandalkan, tenang, menjunjung tugas moral, dan fokus pada hal-hal konkret yang terbukti berhasil tanpa tertarik pada spekulasi abstrak.',
      en: 'Steadfast, orderly, calm, and grounded in proven practices. Dedicated to fulfilling duties with quiet devotion and humility.',
    },
    traits: [
      { id: 'Teliti, setia, dan taat pada komitmen', en: 'Conscientious, loyal, and committed' },
      { id: 'Tidak mudah panik dalam situasi darurat', en: 'Tranquil and composed in crises' },
      { id: 'Menyukai rutinitas teratur dan fakta teruji', en: 'Prefers clear routines and verified practical facts' },
    ],
    careerMatches: [
      { id: 'Akuntan, Arsiparis, Manajer Operasional, Spesialis Kepatuhan', en: 'Accountant, Archivist, Operations Manager, Compliance Officer' },
    ],
    growthEdge: {
      id: 'Buka ruang bagi inovasi baru agar tidak terjebak dalam kebiasaan lama.',
      en: 'Allow room for creative experiments and adapt to modern methodologies.',
    },
  },
  RCOEI: {
    title: { id: 'Sang Pemikir Mandiri (The Mastermind)', en: 'The Mastermind' },
    description: {
      id: 'Logis tanpa kompromi, tenang di bawah tekanan, metodis, dan mandiri. Mengejar efisiensi sistem tanpa terdistraksi oleh basa-basi emosional.',
      en: 'Highly autonomous, rigorously analytical, unshakeable under stress, and relentless in optimizing systems toward maximum efficiency.',
    },
    traits: [
      { id: 'Ketajaman logika strategis dan analitis', en: 'Strategic clarity and analytical precision' },
      { id: 'Kemandirian tinggi tanpa butuh persetujuan orang lain', en: 'Fierce independence immune to peer pressure' },
      { id: 'Fokus kuat pada kompetensi dan hasil nyata', en: 'Uncompromising focus on merit and competence' },
    ],
    careerMatches: [
      { id: 'Software Architect, Analis Kuantitatif, Konsultan Strategis', en: 'Software Architect, Quantitative Analyst, Strategic Consultant' },
    ],
    growthEdge: {
      id: 'Pertimbangkan faktor emosional rekan kerja saat mengambil keputusan teknis.',
      en: 'Factor in human and relational dynamics when rolling out technical decisions.',
    },
  },
  RCOEN: {
    title: { id: 'Sang Pengawas Praktis (The Traditionalist)', en: 'The Traditionalist' },
    description: {
      id: 'Tegas, tenang, berorientasi hasil praktis, dan berhati-hati. Memastikan standar keteraturan terjaga dengan pendekatan realistis dan tegas.',
      en: 'Pragmatic, orderly, detached, and tough-minded. Ensures institutional standards and tangible results are met without sentimentality.',
    },
    traits: [
      { id: 'Disiplin baja dan menuntut kualitas kerja tinggi', en: 'Iron discipline and high quality standards' },
      { id: 'Tidak mudah goyah oleh rayuan emosional', en: 'Objective, calm, and impervious to emotional appeals' },
      { id: 'Praktis dan menghargai kepastian prosedur', en: 'Practical realist prioritizing procedural stability' },
    ],
    careerMatches: [
      { id: 'Auditor, Manajer Keuangan, Pengawas Kualitas, Insinyur Sipil', en: 'Auditor, Financial Controller, QA Director, Civil Engineer' },
    ],
    growthEdge: {
      id: 'Latih empati dan dengarkan kebutuhan subjektif anggota tim.',
      en: 'Develop interpersonal empathy and listen to team members’ subjective needs.',
    },
  },
  RCUAI: {
    title: { id: 'Sang Bohemian Tenang (The Free Spirit)', en: 'The Free Spirit' },
    description: {
      id: 'Santai, berhati lembut, berpikiran luas, dan menikmati kebebasan hidup tanpa beban aturan kaku atau persaingan agresif.',
      en: 'Gentle, philosophically curious, tranquil, and resistant to rigid bureaucratic constraints. Enjoys open-ended creative exploration.',
    },
    traits: [
      { id: 'Pikiran terbuka, toleran, dan fleksibel', en: 'Open-minded, tolerant, and adaptable' },
      { id: 'Kedamaian batin tinggi dan tidak kompetitif', en: 'Inner peace and low interpersonal friction' },
      { id: 'Apresiasi tinggi pada seni dan keindahan alam', en: 'Rich aesthetic appreciation and organic living' },
    ],
    careerMatches: [
      { id: 'Seniman, Penulis Esai, Musisi, Konservasionis Lingkungan', en: 'Artist, Essayist, Musician, Environmental Conservationist' },
    ],
    growthEdge: {
      id: 'Tingkatkan komitmen pada tenggat waktu agar karya selesai optimal.',
      en: 'Build structure around deadlines to help your creative visions reach completion.',
    },
  },
  RCUAN: {
    title: { id: 'Sang Sahabat Sederhana (The Easygoing Neighbor)', en: 'The Easygoing Neighbor' },
    description: {
      id: 'Sederhana, tenang, ramah secara santai, dan tidak menuntut banyak. Menghargai kenyamanan hidup sehari-hari dan keharmonisan tanpa konflik.',
      en: 'Low-maintenance, peaceful, friendly, and undemanding. Values daily simple joys, tranquility, and harmony with minimal friction.',
    },
    traits: [
      { id: 'Penuh penerimaan dan tidak mudah marah', en: 'Accepting, easygoing, and patient' },
      { id: 'Menyukai kesederhanaan dan kepraktisan hidup', en: 'Grounded in pragmatic, everyday living' },
      { id: 'Rekan yang menenangkan di saat genting', en: 'A stabilizing, soothing presence in any group' },
    ],
    careerMatches: [
      { id: 'Dukungan Klien, Staf Administrasi Santai, Teknisi Lapangan', en: 'Client Support, Administrative Assistant, Field Technician' },
    ],
    growthEdge: {
      id: 'Bangun inisiatif pribadi dan tetapkan target hidup yang lebih menantang.',
      en: 'Cultivate proactive ambition and set stretching personal life goals.',
    },
  },
  RCUEI: {
    title: { id: 'Sang Individualis Santai (The Lone Wolf)', en: 'The Lone Wolf' },
    description: {
      id: 'Mandiri, tenang, skeptis, dan menikmati kebebasan intelektual tanpa terikat oleh konvensi masyarakat atau birokrasi formal.',
      en: 'Autonomous, calm, skeptical, and fiercely unconventional. Follows their own eccentric path without seeking social validation.',
    },
    traits: [
      { id: 'Pikiran kritis yang sangat independen', en: 'Fiercely independent and intellectually critical' },
      { id: 'Tidak terpengaruh tren populer atau opini publik', en: 'Immune to conformity and social trends' },
      { id: 'Mampu memecahkan masalah rumit secara mandiri', en: 'Self-sufficient problem solver in complex domains' },
    ],
    careerMatches: [
      { id: 'Programmer Freelance, Peneliti Lepas, Hacker Etis, Investor Mandiri', en: 'Freelance Developer, Independent Researcher, Ethical Hacker, Trader' },
    ],
    growthEdge: {
      id: 'Bangun aliansi dengan orang lain agar tidak terisolasi secara sosial.',
      en: 'Build strategic networks with trusted allies to prevent excessive isolation.',
    },
  },
  RCUEN: {
    title: { id: 'Sang Pengamat Netral (The Passive Observer)', en: 'The Passive Observer' },
    description: {
      id: 'Tenang, pasif, skeptis, dan menyukai gaya hidup minimalis yang bebas dari tuntutan orang lain maupun ambisi yang melelahkan.',
      en: 'Calm, detached, unbothered, and minimalist. Prefers staying under the radar with minimal social and professional entanglements.',
    },
    traits: [
      { id: 'Tingkat stres rendah dan tidak suka drama', en: 'Low stress reactivity and zero tolerance for drama' },
      { id: 'Realistis, pragmatis, dan hemat energi', en: 'Realistic, practical, and energy-conserving' },
      { id: 'Menjaga jarak aman dari keterikatan emosional', en: 'Guarded boundaries from emotional entanglements' },
    ],
    careerMatches: [
      { id: 'Pengawas Fasilitas, Pengemudi Logistik, Operator Mandiri', en: 'Facility Inspector, Logistics Operator, Night Dispatcher' },
    ],
    growthEdge: {
      id: 'Temukan gairah atau tujuan yang mampu membangkitkan motivasi aktif Anda.',
      en: 'Identify a meaningful passion or cause to ignite active purposeful drive.',
    },
  },

  // Reserved (R) + Limbic (L)
  RLOAI: {
    title: { id: 'Sang Seniman Introspektif (The Sensitive Artist)', en: 'The Sensitive Artist' },
    description: {
      id: 'Sangat peka, kreatif, teratur, dan penuh empati. Merasakan emosi mendalam dan berdedikasi tinggi pada karya seni atau pemaknaan batin yang autentik.',
      en: 'Deeply conscientious, creative, and empathetic yet prone to inner turmoil. Channels emotional depth into meaningful and evocative craft.',
    },
    traits: [
      { id: 'Kepekaan batin dan empati yang luar biasa', en: 'Exceptional emotional sensitivity and empathy' },
      { id: 'Ketekunan dalam menyempurnakan karya pribadi', en: 'Painstaking dedication to refining artistic creations' },
      { id: 'Introspeksi filosofis yang kaya', en: 'Rich philosophical introspection and authenticity' },
    ],
    careerMatches: [
      { id: 'Penulis Fiksi, Psikoterapis, Desainer Kreatif, Arsitek Konseptual', en: 'Novelist, Psychotherapist, Creative Designer, Conceptual Architect' },
    ],
    growthEdge: {
      id: 'Latih regulasi kecemasan dan jangan biarkan kritik orang melumpuhkan karya Anda.',
      en: 'Practice cognitive grounding and prevent constructive criticism from triggering shame.',
    },
  },
  RLOAN: {
    title: { id: 'Sang Penjaga Waspada (The Conscientious Worrier)', en: 'The Conscientious Worrier' },
    description: {
      id: 'Bertanggung jawab tinggi, sangat peduli pada keselamatan sesama, namun sering didera kecemasan akan kemungkinan kesalahan atau bencana.',
      en: 'Deeply conscientious, caring, and risk-averse. Vigilantly anticipates problems and protects others through careful preparation.',
    },
    traits: [
      { id: 'Sangat teliti dan tidak pernah meremehkan detail', en: 'Impeccable attention to detail and safety protocols' },
      { id: 'Setia, bertanggung jawab, dan dapat dipercaya', en: 'Fiercely dutiful, loyal, and trustworthy' },
      { id: 'Waspada terhadap risiko dan ketidakpastian', en: 'Highly vigilant toward vulnerabilities and risks' },
    ],
    careerMatches: [
      { id: 'Petugas Manajemen Risiko, Apoteker, Analis Kualitas, Kurator Data', en: 'Risk Officer, Pharmacist, Quality Analyst, Compliance Specialist' },
    ],
    growthEdge: {
      id: 'Pelajari teknik relaksasi mental dan terimalah bahwa tidak semua hal bisa dikontrol.',
      en: 'Practice mental relaxation and accept that uncertainty is an inevitable part of life.',
    },
  },
  RLOEI: {
    title: { id: 'Sang Peneliti Perfeksionis (The Driven Scholar)', en: 'The Driven Scholar' },
    description: {
      id: 'Berstandar luar biasa tinggi, analitis, waspada, dan bekerja keras membongkar kerumitan sistematis. Sangat kritis terhadap ketidakefisienan.',
      en: 'Hyper-vigilant, intellectually fierce, and meticulous. Demands absolute flawlessness from their craft and relentlessly attacks errors.',
    },
    traits: [
      { id: 'Ketajaman analitis yang tajam dan tak kenal ampun', en: 'Razor-sharp analytical rigor and intellectual depth' },
      { id: 'Perfeksionisme tinggi dan etos kerja intens', en: 'Relentless perfectionism and disciplined focus' },
      { id: 'Skeptis terhadap klaim tanpa bukti kuat', en: 'Constructive skepticism toward unsupported claims' },
    ],
    careerMatches: [
      { id: 'Ilmuwan Data, Peneliti Medis, Dosen Riset, Software QA Engineer', en: 'Data Scientist, Medical Researcher, Academic Scholar, Security Analyst' },
    ],
    growthEdge: {
      id: 'Turunkan ekspektasi absolut terhadap orang lain dan cegah kejenuhan (burnout).',
      en: 'Moderate impossibly high standards and guard proactively against mental burnout.',
    },
  },
  RLOEN: {
    title: { id: 'Sang Kritikus Skeptis (The Cautious Critic)', en: 'The Cautious Critic' },
    description: {
      id: 'Teliti, kaku, waspada, dan fokus mendeteksi kecacatan dalam prosedur. Menuntut kepatuhan tegas pada aturan demi menghindari bahaya.',
      en: 'Methodical, cautious, critical, and exacting. Focuses on rooting out flaws and enforcing stringent compliance to prevent failures.',
    },
    traits: [
      { id: 'Deteksi instan terhadap kelemahan sistem', en: 'Instant detection of structural flaws and vulnerabilities' },
      { id: 'Disiplin dan taat prosedur baku', en: 'Strict adherence to formal procedures and standards' },
      { id: 'Skeptis terhadap perubahan yang tidak teruji', en: 'Cautious and skeptical toward untested reforms' },
    ],
    careerMatches: [
      { id: 'Auditor Forensik, Pemeriksa Hukum, Inspektur Keselamatan Kerja', en: 'Forensic Auditor, Legal Examiner, Occupational Safety Inspector' },
    ],
    growthEdge: {
      id: 'Latih fleksibilitas dan berikan apresiasi positif sebelum melontarkan kritik.',
      en: 'Practice interpersonal warmth and deliver positive praise before offering critique.',
    },
  },
  RLUAI: {
    title: { id: 'Sang Pemimpi Melankolis (The Melancholic Dreamer)', en: 'The Melancholic Dreamer' },
    description: {
      id: 'Imajinatif, sangat peka, rentan terhadap kesedihan, dan berhati lembut. Menemukan keindahan dalam kerapuhan hidup dan seni yang emosional.',
      en: 'Ethereal, emotionally tender, imaginative, and vulnerable. Finds profound poetry and aesthetic resonance in the melancholy of life.',
    },
    traits: [
      { id: 'Kedalaman estetika dan ekspresi puitis', en: 'Deep artistic resonance and poetic imagination' },
      { id: 'Sangat empatik terhadap penderitaan sesama', en: 'Intensely compassionate toward wounded and marginalized souls' },
      { id: 'Menolak kepalsuan dan konvensi kaku', en: 'Aversion to shallow pretense and mechanical conformity' },
    ],
    careerMatches: [
      { id: 'Penyair, Ilustrator, Terapi Seni, Musisi Akustik', en: 'Poet, Illustrator, Art Therapist, Songwriter' },
    ],
    growthEdge: {
      id: 'Bangun rutinitas fisik dan struktur harian agar tidak larut dalam pusaran emosi.',
      en: 'Establish grounded daily routines to prevent getting swept into emotional spirals.',
    },
  },
  RLUAN: {
    title: { id: 'Sang Jiwa Rentan (The Vulnerable Wanderer)', en: 'The Vulnerable Wanderer' },
    description: {
      id: 'Lemah lembut, mudah merasa cemas, pemalu, dan sering merasa kewalahan oleh tuntutan dunia modern yang serba cepat dan keras.',
      en: 'Gentle, timid, anxious, and deeply sensitive. Often feels overwhelmed by the harsh pace and competitive demands of modern life.',
    },
    traits: [
      { id: 'Tulus, rendah hati, dan tidak menyakiti orang lain', en: 'Gentle, harmless, humble, and sincere' },
      { id: 'Sangat membutuhkan rasa aman dan perlindungan', en: 'Strong yearning for psychological safety and comfort' },
      { id: 'Peka terhadap ketegangan sosial di sekitarnya', en: 'Quickly absorbs emotional atmospheric tension' },
    ],
    careerMatches: [
      { id: 'Pustakawan, Pengrajin Seni Keramik, Asisten Perawatan Lansia', en: 'Librarian, Artisan Potter, Caregiving Assistant' },
    ],
    growthEdge: {
      id: 'Latih ketegasan diri (asertivitas) agar tidak mudah dimanfaatkan orang lain.',
      en: 'Practice boundaries and assertiveness to protect yourself from manipulation.',
    },
  },
  RLUEI: {
    title: { id: 'Sang Pemberontak Gelisah (The Restless Outsider)', en: 'The Restless Outsider' },
    description: {
      id: 'Cerdas namun gelisah, sinis terhadap kemunafikan sosial, impulsif, dan memiliki pemikiran tajam yang menolak tunduk pada otoritas sembarangan.',
      en: 'Cynical, restless, highly perceptive, and rebellious. Possesses keen critical intellect while refusing to submit to hypocritical authority.',
    },
    traits: [
      { id: 'Mampu melihat kepalsuan di balik topeng sosial', en: 'X-ray vision for institutional hypocrisy and phoniness' },
      { id: 'Mandiri dan tidak takut menjadi orang luar', en: 'Unapologetic outsider comfortable with nonconformity' },
      { id: 'Kreatif dan orisinal dalam sudut pandang', en: 'Idiosyncratic and brutally candid perspectives' },
    ],
    careerMatches: [
      { id: 'Jurnalis Investigasi Independen, Kritikus Film, Penulis Opini Tajam', en: 'Investigative Journalist, Film Critic, Satirist, Counterculture Writer' },
    ],
    growthEdge: {
      id: 'Salurkan ketidakpuasan Anda menjadi karya konstruktif daripada sekadar sinisme.',
      en: 'Channel righteous indignation into creative building rather than bitter cynicism.',
    },
  },
  RLUEN: {
    title: { id: 'Sang Eksil Terasing (The Disillusioned)', en: 'The Disillusioned' },
    description: {
      id: 'Cenderung pesimis, reaktif, menolak rutinitas teratur, dan menarik diri dari keterlibatan sosial karena merasa kecewa pada kenyataan.',
      en: 'Disaffected, reactive, skeptical, and disengaged. Tends toward pessimism and shelters behind defensive emotional walls.',
    },
    traits: [
      { id: 'Sensitif terhadap ketidakadilan dan kekecewaan', en: 'Hyper-aware of disappointments and societal flaws' },
      { id: 'Tidak mau dipaksa mengikuti ekspektasi sosial', en: 'Resistant to external coercion and conventional paths' },
      { id: 'Menyukai kesendirian tanpa tuntutan performa', en: 'Prefers solitary quietude away from performance demands' },
    ],
    careerMatches: [
      { id: 'Arsiparis Malam, Kurir Lepas, Pekerja Daring Mandiri', en: 'Night Archivist, Independent Gig Worker, Digital Cataloger' },
    ],
    growthEdge: {
      id: 'Temukan satu lingkungan kecil yang aman untuk membangun kembali kepercayaan pada manusia.',
      en: 'Cultivate one small, trustworthy community to gradually restore relational faith.',
    },
  },

  // Social (S) + Calm (C)
  SCOAI: {
    title: { id: 'Sang Pemimpin Humanis (The Compassionate Leader)', en: 'The Compassionate Leader' },
    description: {
      id: 'Karisma hangat, tenang, terstruktur, dan disukai banyak orang karena ketulusan serta visi intelektual yang luas. Menginspirasi orang melalui teladan.',
      en: 'Inspiring, composed, orderly, and broadly curious. Fosters collaborative team success with unshakeable warmth and visionary clarity.',
    },
    traits: [
      { id: 'Kepemimpinan tenang dan menenangkan di masa krisis', en: 'Composed and uplifting leadership under pressure' },
      { id: 'Empati sosial tinggi yang dipadukan perencanaan rapi', en: 'Prosocial warmth backed by disciplined follow-through' },
      { id: 'Terbuka pada inovasi dan pengembangan potensi anggota', en: 'Intellectually expansive and passionate about mentorship' },
    ],
    careerMatches: [
      { id: 'Direktur Eksekutif, Rektor, Pemimpin Lembaga Sosial, Diplomat', en: 'Executive Director, University Dean, NGO Leader, Diplomat' },
    ],
    growthEdge: {
      id: 'Jangan ragu mengambil keputusan sulit yang mungkin tidak menyenangkan semua pihak.',
      en: 'Do not hesitate to make hard, unpopular calls when collective principles demand it.',
    },
  },
  SCOAN: {
    title: { id: 'Sang Pilar Komunitas (The Community Pillar)', en: 'The Community Pillar' },
    description: {
      id: 'Penuh kehangatan, tenang, sangat bertanggung jawab, dan mengakar pada nilai-nilai tradisi. Menjadi perekat sosial yang menjaga ketertiban keluarga dan organisasi.',
      en: 'Warm, reliable, calm, and grounded in civic traditions. Serves as the dependable backbone of institutions, families, and communities.',
    },
    traits: [
      { id: 'Ramah, kooperatif, dan disukai banyak kalangan', en: 'Gregarious, cooperative, and universally respected' },
      { id: 'Organisator andal yang taat asas dan tepat waktu', en: 'Exceptional organizer with punctual execution' },
      { id: 'Fokus pada kebutuhan nyata masyarakat di sekitarnya', en: 'Attuned to tangible community welfare and stability' },
    ],
    careerMatches: [
      { id: 'Kepala Sekolah, Manajer SDM, Administrator Rumah Sakit, Tokoh Masyarakat', en: 'School Principal, HR Director, Healthcare Administrator, Civic Coordinator' },
    ],
    growthEdge: {
      id: 'Beri ruang untuk perubahan zaman dan jangan terlalu cepat menolak ide generasi muda.',
      en: 'Embrace progressive adaptations and welcome fresh ideas from younger peers.',
    },
  },
  SCOEI: {
    title: { id: 'Sang Pengarah Eksekutif (The Captain)', en: 'The Captain' },
    description: {
      id: 'Asertif, percaya diri, tenang menghadapi badai, teratur, dan fokus menaklukkan target besar. Ahli dalam memimpin strategi dan negosiasi berisiko tinggi.',
      en: 'Assertive, unflappable commander focused on tactical supremacy and strategic enterprise. Masters high-stakes negotiations effortlessly.',
    },
    traits: [
      { id: 'Karisma memimpin yang kuat dan berwibawa', en: 'Commanding presence and commanding leadership' },
      { id: 'Stabilitas emosi baja saat menghadapi persaingan ketat', en: 'Iron emotional resilience in competitive arenas' },
      { id: 'Visi strategis dan ketegasan dalam eksekusi', en: 'Strategic foresight and decisive operational drive' },
    ],
    careerMatches: [
      { id: 'CEO, Pengacara Korporasi, Banker Investasi, Konsultan Manajemen', en: 'Chief Executive, Corporate Litigator, Investment Banker, Management Consultant' },
    ],
    growthEdge: {
      id: 'Latih kesabaran mendengarkan masukan dari bawahan yang lebih berhati-hati.',
      en: 'Cultivate active listening toward subordinates who raise valid emotional or risk concerns.',
    },
  },
  SCOEN: {
    title: { id: 'Sang Administrator Tangguh (The Director)', en: 'The Director' },
    description: {
      id: 'Praktis, vokal, tenang, sangat terstruktur, dan berorientasi hasil tanpa basa-basi. Memastikan roda organisasi berputar efisien dan menghasilkan keuntungan konkret.',
      en: 'Pragmatic, direct, composed, and rigorously organized. Drives organizational machinery toward tangible productivity and operational profitability.',
    },
    traits: [
      { id: 'Ketegasan dalam menegakkan aturan dan target kerja', en: 'Decisive enforcement of productivity targets' },
      { id: 'Komunikasi langsung, jujur, dan tidak bertele-tele', en: 'Direct, unambiguous, and task-oriented communication' },
      { id: 'Sangat andal dalam manajemen rantai operasional', en: 'Exceptional command of logistics and operational execution' },
    ],
    careerMatches: [
      { id: 'Direktur Operasional, Komandan Lapangan, Manajer Properti Komersial', en: 'COO, Operations Director, Field Commander, Construction Executive' },
    ],
    growthEdge: {
      id: 'Pelajari gaya komunikasi yang lebih lembut agar bawahan tidak merasa tertekan.',
      en: 'Soft-skill training to ensure team morale is not eroded by excessive bluntness.',
    },
  },
  SCUAI: {
    title: { id: 'Sang Pengelana Ceria (The Adventurer)', en: 'The Adventurer' },
    description: {
      id: 'Spontan, sangat ramah, optimis, dan selalu siap mencoba hal-hal baru. Menularkan energi positif, menghidupkan suasana, dan mudah berteman dengan siapa saja.',
      en: 'Spontaneous, buoyant, warm, and endlessly curious about diverse cultures, ideas, and people. Naturally lights up any room they enter.',
    },
    traits: [
      { id: 'Kemampuan bergaul lintas kelompok yang luwes', en: 'Effortless social charm across diverse backgrounds' },
      { id: 'Antusiasme tinggi terhadap petualangan dan ide baru', en: 'Infectious enthusiasm for creative adventures' },
      { id: 'Sikap pemaaf dan tidak menyimpan dendam', en: 'Forgiving, generous, and emotionally resilient' },
    ],
    careerMatches: [
      { id: 'Pemandu Wisata Internasional, Event Host, Sutradara Kreatif, Kreator Konten', en: 'Travel Journalist, Event Emcee, Creative Producer, Documentary Host' },
    ],
    growthEdge: {
      id: 'Tingkatkan konsistensi dalam menyelesaikan rencana jangka panjang sebelum berpindah proyek.',
      en: 'Build follow-through discipline to finish existing ventures before jumping to new shiny ideas.',
    },
  },
  SCUAN: {
    title: { id: 'Sang Penghidup Suasana (The Socialite)', en: 'The Socialite' },
    description: {
      id: 'Ceria, santai, sangat ramah, menyukai pesta dan perkumpulan sosial. Menikmati hidup hari ini bersama teman-teman tanpa pusing memikirkan teori rumit.',
      en: 'Cheerful, gregarious, relaxed, and socially vibrant. Lives joyfully in the present moment, loving gatherings and lighthearted banter.',
    },
    traits: [
      { id: 'Kecerdasan interpersonal yang spontan dan hangat', en: 'Natural, spontaneous interpersonal warmth' },
      { id: 'Mudah mencairkan ketegangan dalam kelompok', en: 'Deft at diffusing social tension with humor' },
      { id: 'Praktis dan menikmati kenyamanan inderawi', en: 'Grounded in physical enjoyment and practical cheer' },
    ],
    careerMatches: [
      { id: 'Public Relations, Event Organizer, Agen Hubungan Tamu, Agen Real Estate', en: 'PR Specialist, Event Organizer, Hospitality Manager, Real Estate Agent' },
    ],
    growthEdge: {
      id: 'Buat rencana keuangan dan komitmen karier masa depan yang lebih matang.',
      en: 'Establish long-term financial budgeting and career stability safeguards.',
    },
  },
  SCUEI: {
    title: { id: 'Sang Pemberontak Karismatik (The Maverick)', en: 'The Maverick' },
    description: {
      id: 'Berani mendobrak tradisi, ramah, menikmati sensasi tantangan, dan memiliki pemikiran orisinal. Memikat orang dengan keberanian mengambil risiko besar.',
      en: 'Magnetic nonconformist who thrives on audacious challenges. Boldly disrupts stale traditions with charm, wit, and high risk tolerance.',
    },
    traits: [
      { id: 'Keberanian menantang status quo secara terbuka', en: 'Fearless willingness to challenge established orthodoxies' },
      { id: 'Karisma persuasif yang memikat banyak pengikut', en: 'Persuasive charisma that rallies adventurous followers' },
      { id: 'Ketahanan mental tinggi terhadap penolakan', en: 'High resilience against social rejection or failure' },
    ],
    careerMatches: [
      { id: 'Founder Startup Inovatif, Politisi Progresif, Produser Hiburan, Negosiator Bisnis', en: 'Startup Founder, Venture Builder, Entertainment Producer, Dealmaker' },
    ],
    growthEdge: {
      id: 'Jangan mengorbankan integritas etika demi kemenangan spektakuler sesaat.',
      en: 'Guard against cutting ethical corners in the pursuit of adrenaline-fueled victories.',
    },
  },
  SCUEN: {
    title: { id: 'Sang Pelaku Praktis (The Opportunist)', en: 'The Opportunist' },
    description: {
      id: 'Pandai bergaul, berorientasi materi, fleksibel, dan tanggap memanfaatkan setiap peluang yang menguntungkan tanpa dibebani teori rumit atau loyalitas buta.',
      en: 'Astute, street-smart, outgoing, and pragmatic. Swiftly capitalizes on real-world opportunities with minimal ideological baggage.',
    },
    traits: [
      { id: 'Kepekaan tinggi terhadap peluang bisnis cepat', en: 'Acute instincts for profitable, tangible opportunities' },
      { id: 'Adaptif dan lihai bernegosiasi di lapangan', en: 'Fast-talking negotiator adaptable to changing market tides' },
      { id: 'Tenang dan tidak gampang terpengaruh sentimen', en: 'Unflappable realism detached from emotional sentiment' },
    ],
    careerMatches: [
      { id: 'Sales Eksekutif, Pialang Komoditas, Manajer Bakat, Promotor Bisnis', en: 'Senior Sales Executive, Commodity Broker, Talent Agent, Commercial Promoter' },
    ],
    growthEdge: {
      id: 'Bangun hubungan yang didasarkan pada ketulusan batin, bukan sekadar asas manfaat.',
      en: 'Cultivate deep interpersonal bonds rooted in genuine loyalty rather than pure transactional gain.',
    },
  },

  // Social (S) + Limbic (L)
  SLOAI: {
    title: { id: 'Sang Advokat Penuh Gairah (The Passionate Advocate)', en: 'The Passionate Advocate' },
    description: {
      id: 'Energik, ekspresif, berdedikasi membela orang lain dengan api emosional dan kreativitas tinggi. Menghidupkan gerakan moral dengan kepedulian tulus.',
      en: 'Energetic, deeply feeling, organized champion of collective ideals and humanitarian movements. Stirs hearts with emotional conviction.',
    },
    traits: [
      { id: 'Api antusiasme moral yang menular ke orang banyak', en: 'Contagious moral passion that activates communities' },
      { id: 'Etos kerja terorganisir demi tujuan kemanusiaan', en: 'Structured follow-through applied to noble missions' },
      { id: 'Sensitivitas tinggi terhadap ketidakadilan', en: 'Acute sensitivity to suffering and systemic unfairness' },
    ],
    careerMatches: [
      { id: 'Aktivis Sosial, Pemimpin Kampanye Publik, Psikolog Komunitas, Penulis Buku Motivasi', en: 'Human Rights Advocate, Campaign Strategist, Community Psychologist, Motivational Author' },
    ],
    growthEdge: {
      id: 'Jaga batas emosional Anda agar tidak mengalami kelelahan empati (compassion fatigue).',
      en: 'Set firm emotional boundaries to prevent chronic compassion fatigue and emotional burnout.',
    },
  },
  SLOAN: {
    title: { id: 'Sang Pelindung Peduli (The Devoted Guardian)', en: 'The Devoted Guardian' },
    description: {
      id: 'Sangat ramah, teratur, setia, namun sering mencemaskan kesejahteraan orang-orang tercintanya. Menjadi benteng perlindungan yang aktif dan penuh pengorbanan.',
      en: 'Fiercely loving, conscientious, socially engaged, yet prone to worry. Protects loved ones through meticulous care and constant attentiveness.',
    },
    traits: [
      { id: 'Kedermawanan dan dedikasi sosial luar biasa', en: 'Boundless generosity and hands-on social dedication' },
      { id: 'Pekerja keras yang menjaga ketertiban rumah tangga/komunitas', en: 'Diligent guardian maintaining order, hygiene, and harmony' },
      { id: 'Sangat peka terhadap tanda-tanda bahaya bagi orang terdekat', en: 'Hyper-attentive to family and communal health and safety' },
    ],
    careerMatches: [
      { id: 'Perawat Kepala, Koordinator Pelayanan Sosial, Manajer Relawan', en: 'Nurse Supervisor, Social Services Coordinator, Volunteer Director' },
    ],
    growthEdge: {
      id: 'Hindari kecenderungan terlalu mengontrol (micromanaging) atas nama cinta dan kepedulian.',
      en: 'Refrain from smothering or micromanaging others out of well-intentioned anxiety.',
    },
  },
  SLOEI: {
    title: { id: 'Sang Penakluk Ambisius (The Overachiever)', en: 'The Overachiever' },
    description: {
      id: 'Digerakkan oleh ambisi membara, kompetitif, terorganisir rapi, dan intens. Menuntut hasil terbaik dari diri dan tim demi membuktikan keunggulan mutlak.',
      en: 'Fiercely ambitious, structured, high-intensity, and competitive. Relentlessly pushes boundaries to dominate their field and win honors.',
    },
    traits: [
      { id: 'Dorongan berprestasi yang sangat menggebu-gebu', en: 'Insatiable hunger for excellence and recognized mastery' },
      { id: 'Kedisiplinan eksekusi tingkat tinggi', en: 'Laser-focused execution discipline under immense pressure' },
      { id: 'Komunikasi asertif dan percaya diri di hadapan audiens', en: 'Commanding public assertiveness and persuasive drive' },
    ],
    careerMatches: [
      { id: 'Litigator Top, Managing Partner, Politisi Ambisius, Direktur Penjualan Global', en: 'Lead Litigator, Managing Partner, Ambitious Politician, Global Sales VP' },
    ],
    growthEdge: {
      id: 'Akui bahwa kegagalan sesekali adalah proses belajar, bukan akhir dari harga diri Anda.',
      en: 'Recognize that setbacks are learning data rather than catastrophic indictments of your self-worth.',
    },
  },
  SLOEN: {
    title: { id: 'Sang Penegak Standar Tegas (The Strict Enforcer)', en: 'The Strict Enforcer' },
    description: {
      id: 'Vokal, cemas akan ketidakteraturan, menuntut standar ketat, dan bersikap keras pada pelanggaran prosedur. Mengendalikan lingkungan sosial dengan ketegasan.',
      en: 'Vocal, high-strung, demanding, and procedurally uncompromising. Regulates social and professional spheres through stern accountability.',
    },
    traits: [
      { id: 'Pengawasan ketat terhadap efisiensi dan kepatuhan', en: 'Unrelenting oversight of punctuality and compliance' },
      { id: 'Kemauan kuat mengonfrontasi masalah di depan umum', en: 'Willingness to confront incompetence publicly and swiftly' },
      { id: 'Fokus pada hasil konkret tanpa toleransi alasan', en: 'Uncompromising zero-excuses focus on tangible deadlines' },
    ],
    careerMatches: [
      { id: 'Kepala Pengawas Disiplin, Manajer Pabrik Manufaktur, Auditor Lapangan', en: 'Chief Compliance Officer, Plant Operations Manager, Field Inspector' },
    ],
    growthEdge: {
      id: 'Kembangkan kehangatan emosional dan kurangi kecenderungan menyalahkan rekan kerja.',
      en: 'Develop relational grace and replace punitive reactions with constructive coaching.',
    },
  },
  SLUAI: {
    title: { id: 'Sang Romantis Dramatis (The Dramatic Romantic)', en: 'The Dramatic Romantic' },
    description: {
      id: 'Ekspresif, artistik, mudah terhanyut emosi, ramah, dan mendambakan koneksi batin yang magis. Menjalani hidup dengan intensitas drama puitis.',
      en: 'Expressive, artistic, emotionally volatile, and deeply affectionate. Lives life as a vibrant theatrical journey filled with poetic passion.',
    },
    traits: [
      { id: 'Daya tarik emosional yang menyala dan memikat', en: 'Magnetism driven by heartfelt, unfiltered emotional expression' },
      { id: 'Imajinasi kreatif yang kaya dan tidak konvensional', en: 'Rich aesthetic, artistic, and storytelling brilliance' },
      { id: 'Keramahan hangat dan keterbukaan jiwa', en: 'Radical emotional honesty and warmth toward others' },
    ],
    careerMatches: [
      { id: 'Aktor Panggung, Desainer Mode, Sutradara Teater, Penulis Biografi', en: 'Stage Actor, Fashion Designer, Theatre Director, Creative Essayist' },
    ],
    growthEdge: {
      id: 'Tingkatkan stabilitas emosi dan jangan membuat keputusan penting saat suasana hati sedang ekstrem.',
      en: 'Cultivate emotional sobriety and avoid impulsive decisions during mood swings.',
    },
  },
  SLUAN: {
    title: { id: 'Sang Pencari Kasih Emosional (The Clinging Confidant)', en: 'The Clinging Confidant' },
    description: {
      id: 'Sangat ramah, emosional, mendambakan pengakuan kasih sayang, dan takut diabaikan. Selalu ingin berada di tengah lingkaran orang-orang terdekat.',
      en: 'Affectionate, socially dependent, emotional, and anxious about rejection. Seeks perpetual affirmation and intimacy within trusted social pods.',
    },
    traits: [
      { id: 'Kehangatan relasional yang tulus dan mengayomi', en: 'Tender, affectionate, and emotionally demonstrative' },
      { id: 'Sangat loyal pada kelompok sahabatnya', en: 'Deeply loyal to their chosen circle of friends' },
      { id: 'Peka terhadap perubahan ekspresi orang lain', en: 'Hyper-attuned to shifts in loved ones’ moods' },
    ],
    careerMatches: [
      { id: 'Koordinator Komunitas, Resepsionis Hangat, Fasilitator Dukungan Sosial', en: 'Community Coordinator, Hospitality Host, Support Group Facilitator' },
    ],
    growthEdge: {
      id: 'Bangun kemandirian batin agar kebahagiaan Anda tidak sepenuhnya bergantung pada respons orang lain.',
      en: 'Foster self-soothing resilience so your happiness does not hinge entirely on external validation.',
    },
  },
  SLUEI: {
    title: { id: 'Sang Provokator Spontan (The Volatile Rebel)', en: 'The Volatile Rebel' },
    description: {
      id: 'Vokal, impulsif, kompetitif, cerdas, dan reaktif. Cepat bereaksi terhadap provokasi dan berani mendobrak aturan demi kepuasan tantangan.',
      en: 'Vocal, high-energy, volatile, and intellectually provocative. Confronts opposition boldly, thrives on adrenaline, and hates being reined in.',
    },
    traits: [
      { id: 'Kemampuan berdebat yang tajam dan berani bersuara keras', en: 'Electrifying debating prowess and bold public courage' },
      { id: 'Penuh energi, tidak gentar menghadapi konfrontasi', en: 'High stamina, unafraid of fiery interpersonal clashes' },
      { id: 'Inovatif dan tidak terikat oleh dogma kaku', en: 'Creative disruptor untethered to dogma' },
    ],
    careerMatches: [
      { id: 'Debater Politik, Komika Stand-up, Jurnalis Kontroversial, Pengusaha Spekulatif', en: 'Political Debater, Stand-up Comedian, Satirical Commentator, Venture Disruptor' },
    ],
    growthEdge: {
      id: 'Kendalikan amarah dan impulsivitas sebelum kata-kata Anda merusak hubungan jangka panjang.',
      en: 'Learn emotional impulse control before sharp tongue damages irreplaceable bridges.',
    },
  },
  SLUEN: {
    title: { id: 'Sang Pencari Sensasi Impulsif (The Impulsive Hedonist)', en: 'The Impulsive Hedonist' },
    description: {
      id: 'Sangat sosial, reaktif, spontan, dan terdorong oleh kepuasan instan. Menyukai keriuhan dan sensasi langsung tanpa memusingkan konsekuensi panjang.',
      en: 'Restless, gregarious, reactive, and driven by sensory stimulation. Pursues instant gratification and lively excitement with little patience for long-term restraint.',
    },
    traits: [
      { id: 'Energi sosial yang spontan dan menghibur', en: 'Bubbly, spontaneous, and unapologetically entertaining' },
      { id: 'Tidak tahan bosan dan selalu mencari kegembiraan baru', en: 'Low boredom threshold and high sensory curiosity' },
      { id: 'Jujur pada apa yang diinginkannya saat ini', en: 'Unvarnished honesty about their current desires' },
    ],
    careerMatches: [
      { id: 'Promotor Hiburan Malam, Kreator Konten Viral, Pemandu Rekreasi Ekstrem', en: 'Nightlife Promoter, Viral Influencer, Adventure Sports Guide' },
    ],
    growthEdge: {
      id: 'Latih disiplin diri dan perencanaan masa depan agar tidak terjebak dalam siklus penyesalan.',
      en: 'Develop self-discipline, impulse budgeting, and long-term forethought.',
    },
  },
};

export function getSloanProfile(sloanCode: string) {
  return SLOAN_ARCHETYPES[sloanCode] || {
    title: { id: `Tipe SLOAN ${sloanCode}`, en: `SLOAN Type ${sloanCode}` },
    description: {
      id: `Profil kepribadian lima faktor dengan kode ${sloanCode}.`,
      en: `A multifaceted Big Five personality profile characterized by the SLOAN code ${sloanCode}.`,
    },
  };
}
