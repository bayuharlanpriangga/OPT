import { LocalizedString } from '../../types';

export interface MBTIDeepDetail {
  temperamentGroup: 'analysts' | 'diplomats' | 'sentinels' | 'explorers';
  temperamentLabel: LocalizedString;
  quote: {
    text: LocalizedString;
    author: string;
  };
  overviewExtended: LocalizedString;
  romantic: {
    summary: LocalizedString;
    strengths: LocalizedString[];
    challenges: LocalizedString[];
  };
  friendships: {
    summary: LocalizedString;
    circleStyle: LocalizedString;
  };
  careers: {
    idealEnvironments: LocalizedString;
    topMatches: LocalizedString[];
  };
  workplace: {
    subordinate: LocalizedString;
    colleague: LocalizedString;
    manager: LocalizedString;
  };
}

export const MBTI_DEEP_DATA: Record<string, MBTIDeepDetail> = {
  INTJ: {
    temperamentGroup: 'analysts',
    temperamentLabel: { id: 'Analis (Analysts)', en: 'Analysts' },
    quote: {
      text: {
        id: 'Mereka yang memiliki alasan kuat untuk hidup dapat menanggung hampir segala cara hidup.',
        en: 'He who has a why to live can bear almost any how.',
      },
      author: 'Friedrich Nietzsche',
    },
    overviewExtended: {
      id: 'INTJ bergerak di dunia seperti pemain catur ulung. Mereka memproses realitas melalui Intuisi Introvert (Ni) yang memprediksi arah tren masa depan, didorong oleh Pemikiran Ekstrovert (Te) yang tanpa ampun mencari efisiensi sistematis.',
      en: 'INTJs navigate reality like seasoned chess grandmasters. They perceive through Introverted Intuition (Ni), projecting future horizons, executed via Extraverted Thinking (Te) with disciplined efficiency.',
    },
    romantic: {
      summary: {
        id: 'Dalam percintaan, INTJ mencari pasangan setara secara intelektual yang mandiri dan menghargai kejujuran tanpa drama manipulatif.',
        en: 'In romance, INTJs seek an intellectual equal who values autonomy, transparency, and personal growth over performative drama.',
      },
      strengths: [
        { id: 'Sangat setia dan berkomitmen jangka panjang jika telah memilih', en: 'Fiercely loyal and long-term committed once chosen' },
        { id: 'Mendukung pertumbuhan dan kemandirian pasangan secara penuh', en: 'Champions their partner’s independence and ambitions' },
      ],
      challenges: [
        { id: 'Cenderung menganalisis emosi alih-alih merasakannya bersama', en: 'Tendency to intellectualize feelings instead of empathizing' },
        { id: 'Sukar mengutarakan pujian verbal yang bersifat spontan', en: 'Reluctance to offer frequent verbal affirmation' },
      ],
    },
    friendships: {
      summary: {
        id: 'INTJ lebih menyukai 1–2 teman sejati yang dapat diajak berdiskusi tentang ide-ide filosofis dan strategi mendalam dibanding perkumpulan kasual yang bising.',
        en: 'INTJs maintain a tiny circle of confidants capable of engaging in deep conceptual discourse and mutual respect.',
      },
      circleStyle: {
        id: 'Lingkaran pertemanan sangat selektif, setia, dan berorientasi pada kualitas percakapan.',
        en: 'Hyper-selective, low-maintenance, and grounded in intellectual depth.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Organisasi otonom dengan hierarki datar yang menghargai inovasi strategis dan kompetensi murni.',
        en: 'Autonomous, merit-based environments free from excessive political maneuvering.',
      },
      topMatches: [
        { id: 'Software Architect, Peneliti AI, Konsultan Strategis', en: 'Software Architect, AI Researcher, Strategic Consultant' },
        { id: 'Banker Investasi, Analis Kebijakan Publik, Ilmuwan Data', en: 'Investment Banker, Policy Analyst, Chief Data Scientist' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Mandiri dan produktif jika diberi target jelas; membenci mikromanajemen dan aturan birokrasi tanpa esensi.',
        en: 'Self-directed when given autonomy; detests micromanagement and senseless procedural busywork.',
      },
      colleague: {
        id: 'Rekan kerja yang lugas, efisien, dan menuntut standar tinggi; tidak menyukai basa-basi rapat tanpa hasil nyata.',
        en: 'Direct, dependable, and demanding of competence; despises unproductive meetings.',
      },
      manager: {
        id: 'Pemimpin visioner yang menilai kinerja berdasarkan hasil terukur, bukan jam kehadiran di kantor.',
        en: 'Visionary commander judging success on merit and measurable outcomes rather than presenteeism.',
      },
    },
  },

  INTP: {
    temperamentGroup: 'analysts',
    temperamentLabel: { id: 'Analis (Analysts)', en: 'Analysts' },
    quote: {
      text: {
        id: 'Hal yang paling penting adalah jangan pernah berhenti bertanya. Rasa ingin tahu memiliki alasan keberadaannya sendiri.',
        en: 'The important thing is not to stop questioning. Curiosity has its own reason for existence.',
      },
      author: 'Albert Einstein',
    },
    overviewExtended: {
      id: 'INTP membanggakan perspektif orisinal dan ketajaman nalar filosofis mereka. Dipimpin oleh Pemikiran Introvert (Ti), mereka membongkar asumsi dasar dan menyusun kerangka logika yang murni dan presisi.',
      en: 'INTPs pride themselves on radical objectivity and vigorous intellect. Guided by Introverted Thinking (Ti), they tirelessly deconstruct assumptions to forge pristine logical architectures.',
    },
    romantic: {
      summary: {
        id: 'INTP mendekati asmara dengan rasa ingin tahu tulus. Mereka mendambakan pasangan yang menghargai ruang batin mereka dan menikmati obrolan teori larut malam.',
        en: 'INTPs approach romance with honest curiosity, seeking a companion who respects intellectual solitude and relishes midnight theoretical debates.',
      },
      strengths: [
        { id: 'Jujur, tanpa intrik palsu, dan sangat terbuka terhadap perbedaan', en: 'Transparent, unpretentious, and deeply open-minded' },
        { id: 'Penyelesai masalah kreatif yang tidak egois', en: 'Creative problem-solver dedicated to mutual understanding' },
      ],
      challenges: [
        { id: 'Sering larut dalam pikiran sendiri sehingga tampak acuh', en: 'Easily absorbed in thought, appearing detached' },
        { id: 'Menghindari konfrontasi emosional atau drama yang tidak rasional', en: 'Withdraws when confronted with irrational emotional outbursts' },
      ],
    },
    friendships: {
      summary: {
        id: 'INTP mencari teman yang dapat menstimulasi rasa ingin tahu mereka. Pertemanan mereka tidak menuntut kontak harian, namun langsung nyambung kapan pun bertemu.',
        en: 'INTPs bond over shared passions and intellectual puzzles. They need zero maintenance and pick up seamlessly after months apart.',
      },
      circleStyle: {
        id: 'Santai, egaliter, dan didorong oleh eksplorasi hobi atau gagasan cerdas.',
        en: 'Egalitarian, low-pressure, and ignited by geeky or philosophical interests.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Laboratorium riset, studio kreatif, atau tim teknologi di mana eksperimen pemikiran dihargai tinggi.',
        en: 'R&D labs, creative tech units, and open incubators where unconventional ingenuity thrives.',
      },
      topMatches: [
        { id: 'Peneliti Sains Murni, Programmer Algoritma, Filsuf', en: 'Theoretical Physicist, Algorithms Engineer, Philosopher' },
        { id: 'Analis Sistem Informasi, Desainer Game Mekanik, Akademisi Riset', en: 'Systems Analyst, Game Systems Designer, Academic Scholar' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Pemecah masalah brilian pada teka-teki sulit; butuh fleksibilitas jam kerja dan kebebasan metode.',
        en: 'Brilliant troubleshooters for labyrinthine puzzles; thrives on flexible schedules and loose oversight.',
      },
      colleague: {
        id: 'Rekan diskusi yang tajam dan tidak defensif; bersedia membedah kelemahan konsep tanpa baper.',
        en: 'Objective sounding board with zero ego attached to brainstorming conceptual flaws.',
      },
      manager: {
        id: 'Manajer yang mendelegasikan kebebasan penuh pada tim ahli, namun kurang menyukai beban pengawasan administratif harian.',
        en: 'Hands-off leader empowering competent teams, while minimizing tedious bureaucratic policing.',
      },
    },
  },

  ENTJ: {
    temperamentGroup: 'analysts',
    temperamentLabel: { id: 'Analis (Analysts)', en: 'Analysts' },
    quote: {
      text: {
        id: 'Saya tidak percaya pada keberuntungan; saya percaya pada persiapan dan kemauan yang pantang menyerah.',
        en: 'I do not believe in luck; I believe in preparation and unyielding resolve.',
      },
      author: 'Marcus Aurelius',
    },
    overviewExtended: {
      id: 'ENTJ adalah perwujudan kepemimpinan strategis dan efisiensi eksekusi. Dengan Te sebagai nahkoda, mereka memetakan rintangan sebagai peluang taktis dan menggerakkan tim menuju dominasi pasar.',
      en: 'ENTJs embody commanding executive presence and tactical velocity. Driven by Te, they dismantle operational roadblocks and align talent to conquer ambitious horizons.',
    },
    romantic: {
      summary: {
        id: 'ENTJ memandang komitmen asmara dengan serius dan terencana. Mereka menginginkan pasangan yang kuat, ambisius, dan memiliki integritas pendirian.',
        en: 'ENTJs take romantic commitment with resolute seriousness, seeking an equally driven partner who stands firm with courage.',
      },
      strengths: [
        { id: 'Protektif, penuh dedikasi memajukan kehidupan bersama', en: 'Fiercely protective and proactive in building shared prosperity' },
        { id: 'Komunikasi sangat jelas tanpa kode terselubung', en: 'Crystal-clear communication devoid of confusing mixed signals' },
      ],
      challenges: [
        { id: 'Dapat bersikap terlalu mendominasi tanpa disadari', en: 'Can inadvertently dominate conversations and decisions' },
        { id: 'Kurang sabar menghadapi keraguan emosional pasangan', en: 'Impatient with emotional hesitation or indecisiveness' },
      ],
    },
    friendships: {
      summary: {
        id: 'ENTJ berteman dengan mereka yang berani bertukar pikiran secara tajam dan saling memotivasi untuk mencapai prestasi puncak.',
        en: 'ENTJs connect with high-achievers who welcome robust challenge and push each other toward peak performance.',
      },
      circleStyle: {
        id: 'Dinamis, ambisius, saling menantang untuk tumbuh lebih hebat.',
        en: 'Dynamic, enterprising, and fueled by mutual acceleration.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Perusahaan skala besar, kantor hukum, atau startup tahap ekspansi dengan target pasar agresif.',
        en: 'High-growth enterprises, executive suites, and litigation arenas requiring bold command.',
      },
      topMatches: [
        { id: 'Chief Executive Officer (CEO), Managing Partner, Investor Modal Ventura', en: 'CEO / Founder, Managing Partner, Venture Capitalist' },
        { id: 'Konsultan Manajemen Papan Atas, Direktur Transformasi Bisnis', en: 'Top-tier Strategy Director, Business Transformation Lead' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Proaktif dan berkinerja tinggi, menantang wewenang yang tidak kompeten dengan data konkret.',
        en: 'Proactive and powerhouse performer; will challenge incompetent authority with hard data.',
      },
      colleague: {
        id: 'Penggerak momentum kerja yang memacu kecepatan tim; tidak menoleransi rekan pemalas.',
        en: 'Momentum catalyst raising team cadence; zero patience for coasting or slacking.',
      },
      manager: {
        id: 'Komandan karismatik yang menuntut standar kelas dunia namun melindungi dan mengangkat anak buah berprestasi.',
        en: 'Commanding general setting world-class bars while fiercely championing capable lieutenants.',
      },
    },
  },

  ENTP: {
    temperamentGroup: 'analysts',
    temperamentLabel: { id: 'Analis (Analysts)', en: 'Analysts' },
    quote: {
      text: {
        id: 'Kemajuan mustahil terjadi tanpa perubahan, dan mereka yang tidak bisa mengubah pikirannya tidak bisa mengubah apa pun.',
        en: 'Progress is impossible without change, and those who cannot change their minds cannot change anything.',
      },
      author: 'George Bernard Shaw',
    },
    overviewExtended: {
      id: 'ENTP adalah innovator tak kenal lelah yang selalu terpesona oleh kemungkinan baru (Ne). Mereka menyukai dialektika intelektual dan senang menguji ketahanan suatu ide dari segala sisi.',
      en: 'ENTPs are relentless innovators electrified by unexplored possibilities (Ne). They thrive in intellectual sparring and delight in testing dogmas from every angle.',
    },
    romantic: {
      summary: {
        id: 'Bagi ENTP, cinta adalah petualangan eksplorasi bersama yang seru. Mereka membutuhkan pasangan yang cerdas, tidak mudah tersinggung, dan fleksibel.',
        en: 'For ENTPs, love is a thrilling adventure of mutual discovery, requiring a witty, resilient partner who welcomes spontaneous surprises.',
      },
      strengths: [
        { id: 'Hubungan tidak pernah membosankan dan penuh percakapan cerdas', en: 'Vibrant, endlessly stimulating conversational chemistry' },
        { id: 'Sangat adaptif dan menghormati kebebasan pasangan', en: 'Wonderfully adaptable and honoring of partner independence' },
      ],
      challenges: [
        { id: 'Kadang mendebat hanya demi kesenangan berargumen', en: 'Argues purely for intellectual play, sometimes hurting feelings' },
        { id: 'Menunda komitmen praktis atau rutinitas domestik', en: 'Resistant to routine household chores and mundane domesticity' },
      ],
    },
    friendships: {
      summary: {
        id: 'ENTP mudah bergaul dan berteman luas dengan berbagai kalangan unik yang memiliki pandangan kontroversial atau keahlian eksentrik.',
        en: 'ENTPs attract eclectic, witty characters who can hold their own in lively debates and unexpected escapades.',
      },
      circleStyle: {
        id: 'Vibrant, penuh humor tajam, dan sarat eksperimen ide.',
        en: 'Fast-paced, satirical, intellectually adventurous.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Inkubator inovasi, agensi kreatif, atau venture builder yang menghargai disrupsi ide.',
        en: 'Venture studios, think-tanks, and creative agencies rewarding breakthrough ideation.',
      },
      topMatches: [
        { id: 'Serial Entrepreneur, Pengacara Litigasi / Negosiator, Konsultan Inovasi', en: 'Serial Tech Founder, Negotiator / Litigator, Innovation Lead' },
        { id: 'Kreator Konten Satir, Arsitek Produk Digital, Sutradara Kreatif', en: 'Product Architect, Satirical Commentator, Creative Director' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Melahirkan solusi out-of-the-box tercepat; butuh dampingan operasional untuk tahap eksekusi detail.',
        en: 'Sparks game-changing solutions instantly; best paired with strong finishers for follow-through.',
      },
      colleague: {
        id: 'Pemantik ide segar di sesi brainstorming yang menghidupkan suasana rapat.',
        en: 'Electrifying brainstormer who turns stale planning sessions into creative powerhouses.',
      },
      manager: {
        id: 'Pemimpin yang mendorong tim berani bereksperimen dan membongkar cara kerja kuno.',
        en: 'Inspirational disruptor encouraging subordinates to smash outdated protocols and iterate fast.',
      },
    },
  },

  INFJ: {
    temperamentGroup: 'diplomats',
    temperamentLabel: { id: 'Diplomat (Diplomats)', en: 'Diplomats' },
    quote: {
      text: {
        id: 'Kegelapan tidak bisa mengusir kegelapan; hanya cahaya yang bisa melakukannya. Kebencian tidak bisa mengusir kebencian; hanya cinta yang bisa melakukannya.',
        en: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
      },
      author: 'Martin Luther King Jr.',
    },
    overviewExtended: {
      id: 'INFJ adalah pembimbing visioner yang tenang dan idealis. Memadukan persepsi batin mendalam (Ni) dengan kepekaan empati tinggi (Fe), mereka berupaya menyembuhkan luka sosial dan mengarahkan manusia pada potensi terbaiknya.',
      en: 'INFJs are quiet, principled visionaries. Combining deep internal perception (Ni) with warm empathic resonance (Fe), they work tirelessly to illuminate human potential and heal collective fractures.',
    },
    romantic: {
      summary: {
        id: 'INFJ mendambakan ikatan belahan jiwa (soulmate) yang autentik dan transenden. Mereka mencari kedalaman spiritual dan komitmen suci.',
        en: 'INFJs seek profound soul connections marked by vulnerability, spiritual depth, and unconditional mutual loyalty.',
      },
      strengths: [
        { id: 'Empati tanpa batas dan dedikasi batin yang murni', en: 'Boundless psychological insight and pure devotion' },
        { id: 'Peka mendeteksi perasaan pasangan tanpa perlu banyak kata', en: 'Reads non-verbal cues and emotional states effortlessly' },
      ],
      challenges: [
        { id: 'Bisa melakukan "INFJ door-slam" jika dikhianati berulang kali', en: 'Can enact permanent "door-slam" when repeatedly betrayed' },
        { id: 'Sering menyimpan luka sendiri demi menjaga perasaan pasangan', en: 'Bottles up personal hurt to maintain immediate harmony' },
      ],
    },
    friendships: {
      summary: {
        id: 'INFJ sangat selektif dan menjaga lingkaran pertemanan yang sangat intim. Teman sejati bagi mereka adalah mereka yang bisa diajak berbicara dari hati ke hati.',
        en: 'INFJs curate a tiny circle of confidants where authentic heart-to-heart dialogue can unfold without fear.',
      },
      circleStyle: {
        id: 'Intim, penuh kepercayaan rahasia, dan saling memulihkan jiwa.',
        en: 'Intimate, soul-nourishing, and grounded in mutual sanctuary.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Lembaga konseling, yayasan kemanusiaan, atau penulisan kreatif yang berfokus pada kesejahteraan jiwa.',
        en: 'Holistic clinics, humanitarian foundations, and artistic spaces dedicated to collective healing.',
      },
      topMatches: [
        { id: 'Psikoterapis, Penulis Buku Filosofis, Konselor Organisasi', en: 'Psychotherapist, Author / Novelist, Organizational Counselor' },
        { id: 'Pengembang Bakat SDM, Pengarah Kebijakan Sosial, Kurator Seni', en: 'Human Potential Director, Social Ethicist, Art Curator' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Bekerja dengan integritas hening; sangat termotivasi jika misi pekerjaan selaras dengan nilai kemanusiaan.',
        en: 'Quietly dedicated; performs miracles when aligned with a noble human-centric mission.',
      },
      colleague: {
        id: 'Penengah konflik alami yang menciptakan kehangatan dan rasa aman dalam tim.',
        en: 'Natural mediator fostering psychological safety and warm collaboration.',
      },
      manager: {
        id: 'Mentor teladan yang memimpin dengan empati dan mendengarkan aspirasi batin setiap staf.',
        en: 'Servant leader nurturing individual staff growth through empathic listening.',
      },
    },
  },

  INFP: {
    temperamentGroup: 'diplomats',
    temperamentLabel: { id: 'Diplomat (Diplomats)', en: 'Diplomats' },
    quote: {
      text: {
        id: 'Bukan semua yang mengembara itu tersesat; apa yang ada di kedalaman tidak akan layu oleh embun beku.',
        en: 'Not all those who wander are lost; the old that is strong does not wither.',
      },
      author: 'J.R.R. Tolkien',
    },
    overviewExtended: {
      id: 'INFP dipandu oleh kompas moral batin yang murni (Fi) dan imajinasi luas (Ne). Mereka adalah penjaga keaslian jiwa dan keindahan puitis di tengah dunia yang bising.',
      en: 'INFPs are steered by an incorruptible inner moral compass (Fi) and expansive creative whimsy (Ne). They safeguard authenticity and poetic beauty in a noisy world.',
    },
    romantic: {
      summary: {
        id: 'Romantis sejati yang mencintai tanpa syarat. Mereka menghargai keunikan jati diri pasangan dan mendambakan keintiman emosional yang tulus.',
        en: 'True romantics offering unconditional acceptance, cherishing their partner’s unique quirks and emotional depth.',
      },
      strengths: [
        { id: 'Penerimaan penuh kasih tanpa menghakimi masa lalu', en: 'Non-judgmental loving presence and profound acceptance' },
        { id: 'Mengekspresikan cinta melalui karya kreatif dan perhatian manis', en: 'Expresses affection through tailored artistic gestures' },
      ],
      challenges: [
        { id: 'Rentan mengidealisasi pasangan dan kecewa saat kenyataan berbeda', en: 'Prone to romantic idealization and disillusionment' },
        { id: 'Sukar membuka luka batin saat merasa tersinggung', en: 'Withdraws into emotional shell when feeling misunderstood' },
      ],
    },
    friendships: {
      summary: {
        id: 'INFP adalah sahabat setia yang mendengarkan tanpa menghakimi. Mereka membela teman-temannya yang terasing atau sedang menderita.',
        en: 'INFPs are steadfast friends who listen without judgment, offering warm refuge to the misunderstood.',
      },
      circleStyle: {
        id: 'Penuh empati, menghargai keanehan kreatif, dan saling menguatkan.',
        en: 'Gentle, emotionally validating, and creatively eccentric.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Studio penulisan, organisasi pelestarian alam, atau praktik terapi mandiri tanpa tekanan korporat kaku.',
        en: 'Publishing, creative arts, non-profit causes, and independent therapy practices.',
      },
      topMatches: [
        { id: 'Penyair / Penulis Skenario, Konselor Terapi Seni, Aktivis Konservasi', en: 'Novelist / Screenwriter, Art Therapist, Conservation Advocate' },
        { id: 'Ilustrator Kreatif, Penerjemah Sastra, Psikolog Perkembangan', en: 'Illustrator, Literary Translator, Developmental Psychologist' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Berdedikasi jika pekerjaannya memiliki makna jiwa; membutuhkan apresiasi tulus atas karya orisinalnya.',
        en: 'Conscientious when tasks carry moral weight; requires authentic validation of their creative input.',
      },
      colleague: {
        id: 'Rekan yang ramah, tidak egois, dan tidak menyukai persaingan saling sikut antar karyawan.',
        en: 'Kind-hearted team ally allergic to cutthroat corporate politics.',
      },
      manager: {
        id: 'Pemimpin demokratis yang mengutamakan kenyamanan jiwa anggota tim di atas target angka semata.',
        en: 'Empathetic leader prioritizing human well-being and creative autonomy over rigid micro-targets.',
      },
    },
  },

  ENFJ: {
    temperamentGroup: 'diplomats',
    temperamentLabel: { id: 'Diplomat (Diplomats)', en: 'Diplomats' },
    quote: {
      text: {
        id: 'Jika tindakan Anda menginspirasi orang lain untuk bermimpi lebih banyak, belajar lebih banyak, dan menjadi lebih banyak, Anda adalah seorang pemimpin.',
        en: 'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.',
      },
      author: 'John Quincy Adams',
    },
    overviewExtended: {
      id: 'ENFJ adalah katalis sosial yang penuh gairah dan karisma. Dengan Fe sebagai fungsi dominan, mereka memiliki bakat luar biasa dalam menyatukan kelompok yang terpecah menuju satu visi luhur.',
      en: 'ENFJs are charismatic communal catalysts. Driven by dominant Fe, they weave fractured groups into harmonious, purposeful movements.',
    },
    romantic: {
      summary: {
        id: 'Penuh perhatian dan ekspresif dalam mencintai. ENFJ berinvestasi penuh pada kebahagiaan pasangan dan masa depan bersama.',
        en: 'Warm, attentive, and demonstrative partners who invest wholeheartedly in their partner’s fulfillment and shared growth.',
      },
      strengths: [
        { id: 'Komitmen emosional yang tak kenal lelah dan sangat suportif', en: 'Tireless emotional commitment and proactive support' },
        { id: 'Mampu mengutarakan apresiasi cinta secara indah dan hangat', en: 'Articulates love and gratitude with radiant eloquence' },
      ],
      challenges: [
        { id: 'Bisa terlalu memaksakan bantuan atau solusi pada pasangan', en: 'Can become overly involved in trying to "fix" partner’s life' },
        { id: 'Mengabaikan kebutuhan diri sendiri hingga kelelahan total', en: 'Neglects own well-being to sustain external harmony' },
      ],
    },
    friendships: {
      summary: {
        id: 'ENFJ adalah pusat gravitasi sosial yang selalu merangkul semua orang agar merasa dihargai dan dilibatkan.',
        en: 'ENFJs are natural social anchors ensuring everyone feels seen, cherished, and embraced.',
      },
      circleStyle: {
        id: 'Hangat, suportif, inklusif, dan saling menginspirasi.',
        en: 'Vibrant, inclusive, encouraging, and rich in camaraderie.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Institusi pendidikan, manajemen perubahan organisasi, yayasan publik, dan diplomasi.',
        en: 'Educational institutions, public diplomacy, talent development, and community mobilization.',
      },
      topMatches: [
        { id: 'Direktur SDM & Budaya Kerja, Pendidik Inspiratif, Pelatih Kepemimpinan', en: 'Chief People Officer, Inspirational Educator, Executive Coach' },
        { id: 'Diplomat Budaya, Pengarah Kampanye Sosial, Hubungan Masyarakat', en: 'Diplomat, Public Affairs Director, Non-Profit Executive' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Pekerja tim yang antusias dan sangat peka terhadap dinamika kelompok.',
        en: 'Enthusiastic team player attentive to collective morale and team cohesion.',
      },
      colleague: {
        id: 'Penyemangat yang membangun atmosfer kerja harmonis dan penuh kolaborasi.',
        en: 'Cheerleader cultivating a warm, psychologically safe team environment.',
      },
      manager: {
        id: 'Mentor karismatik yang membangkitkan talenta tersembunyi bawahan melalui dorongan positif.',
        en: 'Transformational leader unlocking hidden potentials through uplifting empowerment.',
      },
    },
  },

  ENFP: {
    temperamentGroup: 'diplomats',
    temperamentLabel: { id: 'Diplomat (Diplomats)', en: 'Diplomats' },
    quote: {
      text: {
        id: 'Dua puluh tahun dari sekarang Anda akan lebih menyesali hal-hal yang tidak Anda lakukan daripada yang Anda lakukan. Lepaskan talinya, berlayarlah menjauhi pelabuhan yang aman.',
        en: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. Sail away from the safe harbor.',
      },
      author: 'Mark Twain',
    },
    overviewExtended: {
      id: 'ENFP memandang dunia sebagai panggung keajaiban yang penuh dengan kemungkinan manusia yang tak berbatas (Ne + Fi). Mereka membawa api optimisme yang menghidupkan setiap ruangan.',
      en: 'ENFPs see the world as a radiant tapestry of human possibilities (Ne + Fi). They radiate spontaneous warmth and uninhibited creative vitality wherever they roam.',
    },
    romantic: {
      summary: {
        id: 'Antusias, penuh kejutan, dan berjiwa bebas. ENFP mendambakan koneksi batin yang mendalam sekaligus petualangan bersama yang menggairahkan.',
        en: 'Spontaneous, passionate, and open-hearted partners seeking deep emotional intimacy paired with playful exploration.',
      },
      strengths: [
        { id: 'Selalu menyalakan semangat dan kegembiraan dalam hubungan', en: 'Injects continuous novelty, wonder, and joy into love' },
        { id: 'Empatik dan sangat mendukung impian pasangan', en: 'Fiercely supportive of their partner’s wildest dreams' },
      ],
      challenges: [
        { id: 'Bisa merasa terkungkung oleh rutinitas domestik yang kaku', en: 'Struggles with rigid domestic predictability' },
        { id: 'Cenderung overthinking terhadap perubahan nada bicara pasangan', en: 'Overthinks subtle shifts in partner’s tone or energy' },
      ],
    },
    friendships: {
      summary: {
        id: 'ENFP berteman dengan spektrum manusia yang sangat luas, dari seniman nyentrik hingga ilmuwan cerdas.',
        en: 'ENFPs curate eclectic friendships, effortlessly connecting across age, culture, and social background.',
      },
      circleStyle: {
        id: 'Ekspresif, penuh tawa, dan siap diajak menjelajah spontan.',
        en: 'Playful, emotionally expressive, adventurous, and warm.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Media kreatif, jurnalisme investigatif, panggung seni, atau agensi periklanan yang serba cepat.',
        en: 'Creative media, investigative journalism, design studios, and fast-paced communication agencies.',
      },
      topMatches: [
        { id: 'Kreator Konten / Podcaster, Creative Strategist, Konsultan Perubahan', en: 'Creative Director, Podcaster / Storyteller, Cultural Strategist' },
        { id: 'Pelatih Pengembangan Pribadi, Jurnalis Human Interest, Pengusaha Kreatif', en: 'Personal Growth Coach, Feature Journalist, Venture Creative' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Mesin penghasil ide inovatif; berkinerja terbaik dengan supervisi berbasis hasil, bukan absensi ketat.',
        en: 'Ideation machine thriving on outcome-based milestones rather than micromanaged hours.',
      },
      colleague: {
        id: 'Pencair ketegangan tim yang menghubungkan orang-orang berbeda latar belakang dengan kehangatannya.',
        en: 'Relational glue bridging cross-functional divisions with effortless charm.',
      },
      manager: {
        id: 'Pemimpin inspiratif yang memotivasi bawahan lewat antusiasme dan kebebasan berekspresi.',
        en: 'Inspirational coach rallying teams around noble creative visions.',
      },
    },
  },

  ISTJ: {
    temperamentGroup: 'sentinels',
    temperamentLabel: { id: 'Pengawal (Sentinels)', en: 'Sentinels' },
    quote: {
      text: {
        id: 'Integritas adalah melakukan hal yang benar, bahkan ketika tidak ada orang yang melihat.',
        en: 'Integrity is doing the right thing, even when no one is watching.',
      },
      author: 'C.S. Lewis',
    },
    overviewExtended: {
      id: 'ISTJ adalah pilar ketertiban dan stabilitas masyarakat. Berlandaskan Penginderaan Introvert (Si) dan Pemikiran Ekstrovert (Te), mereka menjalankan tugas dengan presisi dan loyalitas tanpa tanding.',
      en: 'ISTJs are the bedrock pillars of institutional stability. Grounded in Introverted Sensing (Si) and Extraverted Thinking (Te), they execute duty with impeccable fidelity and stoic honor.',
    },
    romantic: {
      summary: {
        id: 'ISTJ membuktikan cinta melalui tindakan nyata, kepastian finansial, dan kesetiaan seumur hidup.',
        en: 'ISTJs express love through tangible dependability, rock-solid security, and unwavering lifetime fidelity.',
      },
      strengths: [
        { id: 'Sangat dapat diandalkan dan menepati setiap janji', en: 'Immense reliability; words and vows are unbreakable' },
        { id: 'Penyedia rasa aman dan kestabilan rumah tangga yang kokoh', en: 'Builds enduring family and financial stability' },
      ],
      challenges: [
        { id: 'Jarang mengungkapkan emosi secara verbal puitis', en: 'Rarely articulates romantic sentiment in flowery prose' },
        { id: 'Bisa bersikap kaku terhadap perubahan rencana mendadak', en: 'Resistant to last-minute deviations from schedules' },
      ],
    },
    friendships: {
      summary: {
        id: 'Pertemanan ISTJ dibangun di atas rasa saling percaya dan pengujian waktu. Mereka adalah sahabat yang siap membantu secara praktis saat darurat.',
        en: 'ISTJ friendships are forged through years of proven loyalty and practical, non-performative assistance.',
      },
      circleStyle: {
        id: 'Langgeng, stabil, dan berbasis kegiatan praktis bersama.',
        en: 'Long-standing, grounded, quiet, and dependable.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Instansi hukum, lembaga audit keuangan, administrasi publik, dan keteknikan yang terstandarisasi.',
        en: 'Judicial systems, financial auditing, public administration, and precision engineering.',
      },
      topMatches: [
        { id: 'Auditor Keuangan Publik, Hakim / Notaris, Manajer Kepatuhan Regulasi', en: 'Certified Auditor, Legal Notary / Judge, Chief Compliance Officer' },
        { id: 'Insinyur Sistem Kualitas, Administrator Sistem Data, Manajer Logistik', en: 'Quality Systems Engineer, Logistics Director, Military Officer' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Karyawan teladan yang taat SOP, tepat waktu, dan menghasilkan pekerjaan yang akurat tanpa cela.',
        en: 'Exemplary subordinate executing SOPs punctually with zero careless errors.',
      },
      colleague: {
        id: 'Rekan kerja yang tenang dan selalu menepati bagian tugasnya tepat sebelum tenggat.',
        en: 'Dependable anchor delivering their deliverables reliably before deadlines.',
      },
      manager: {
        id: 'Pengawas yang adil, mengutamakan prosedur kerja baku dan menilai staf secara objektif.',
        en: 'Equitable supervisor enforcing clear benchmarks and rewarding proven consistency.',
      },
    },
  },

  ISFJ: {
    temperamentGroup: 'sentinels',
    temperamentLabel: { id: 'Pengawal (Sentinels)', en: 'Sentinels' },
    quote: {
      text: {
        id: 'Kebaikan adalah bahasa yang bisa didengar oleh orang tuli dan dilihat oleh orang buta.',
        en: 'Kindness is the language which the deaf can hear and the blind can see.',
      },
      author: 'Mark Twain',
    },
    overviewExtended: {
      id: 'ISFJ adalah pelindung yang berhati lembut dan telaten. Mereka mencurahkan energi untuk merawat kebutuhan orang-orang tercinta dengan kesetiaan yang hening dan tanpa pamrih.',
      en: 'ISFJs are devoted guardians who nurture loved ones with quiet grace, pragmatic compassion, and tireless attention to personal details.',
    },
    romantic: {
      summary: {
        id: 'Penyayang dan penuh perhatian. ISFJ mengingat setiap detail kecil kesukaan pasangan dan menciptakan kehangatan rumah tangga yang menentramkan.',
        en: 'Tender and exceptionally attentive partners who remember every milestone and craft a soothing sanctuary of home warmth.',
      },
      strengths: [
        { id: 'Dedikasi luar biasa dalam merawat kenyamanan pasangan', en: 'Unmatched attentiveness to practical comfort and needs' },
        { id: 'Sabar, setia, dan menjadi pendengar yang menenangkan', en: 'Patient, loyal, and a deeply soothing emotional presence' },
      ],
      challenges: [
        { id: 'Menahan rasa kesal demi menghindari konflik hingga menumpuk', en: 'Suppresses resentment to avoid conflict until overwhelmed' },
        { id: 'Sulit menerima perubahan besar yang mengganggu rutinitas keluarga', en: 'Struggles with sudden upheaval of family traditions' },
      ],
    },
    friendships: {
      summary: {
        id: 'ISFJ adalah sahabat yang selalu ingat hari ulang tahun, mengirim pesan hangat saat sakit, dan hadir di saat-saat paling genting.',
        en: 'ISFJs are the thoughtful friends who remember birthdays, send care packages, and show up during hard times.',
      },
      circleStyle: {
        id: 'Penuh kehangatan keluarga, setia, dan saling merawat.',
        en: 'Nurturing, familial, trustworthy, and enduring.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Rumah sakit, pelayanan sosial, konseling keluarga, dan administrasi pendidikan.',
        en: 'Healthcare institutions, primary education, social services, and historical archives.',
      },
      topMatches: [
        { id: 'Tenaga Medis / Perawat Spesialis, Guru Sekolah Dasar, Manajer Layanan Klien', en: 'Specialist Nurse, Elementary Educator, Client Care Director' },
        { id: 'Konselor Keluarga, Petugas Administrasi Rumah Sakit, Kurator Arsip', en: 'Family Counselor, Healthcare Administrator, Archival Curator' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Sangat teliti dan berdedikasi tinggi; bekerja keras di balik layar tanpa menuntut sorotan panggung.',
        en: 'Meticulous and deeply loyal; labors tirelessly behind the scenes without needing the spotlight.',
      },
      colleague: {
        id: 'Rekan kerja yang hangat, suportif, dan menjaga suasana kantor tetap harmonis.',
        en: 'Supportive colleague ensuring smooth workflow and emotional comfort for team members.',
      },
      manager: {
        id: 'Atasan yang mengayomi dan selalu memastikan kesejahteraan fisik dan mental stafnya terlindungi.',
        en: 'Protective leader shielding staff from undue stress and ensuring fair treatment.',
      },
    },
  },

  ESTJ: {
    temperamentGroup: 'sentinels',
    temperamentLabel: { id: 'Pengawal (Sentinels)', en: 'Sentinels' },
    quote: {
      text: {
        id: 'Ketertiban adalah fondasi dari segala hal yang baik di dunia.',
        en: 'Good order is the foundation of all good things.',
      },
      author: 'Edmund Burke',
    },
    overviewExtended: {
      id: 'ESTJ adalah administrator yang tegas, berpikiran praktis, dan berorientasi pada ketertiban hukum serta hasil konkret. Mereka memastikan masyarakat berjalan sesuai aturan yang adil.',
      en: 'ESTJs are decisive, practical administrators who uphold institutional order, factual reality, and disciplined execution.',
    },
    romantic: {
      summary: {
        id: 'ESTJ menawarkan stabilitas dan komitmen yang sangat jelas. Mereka memimpin urusan keluarga dengan dedikasi dan tanggung jawab penuh.',
        en: 'ESTJs bring rock-solid clarity and dependable commitment to relationships, leading household duties with industrious vigor.',
      },
      strengths: [
        { id: 'Sangat bertanggung jawab dan menjadi pilar penyedia keluarga', en: 'Pillar of strength and industrious family provider' },
        { id: 'Terbuka, jujur, dan tidak berbelit-belit dalam berkomunikasi', en: 'Candid, upfront, and straightforward in all matters' },
      ],
      challenges: [
        { id: 'Bisa terdengar terlalu kaku atau menggurui pasangan', en: 'Can sound authoritarian or excessively blunt' },
        { id: 'Perlu melatih empati saat pasangan butuh pelukan, bukan solusi teknis', en: 'Needs to offer empathy before rushing into mechanical solutions' },
      ],
    },
    friendships: {
      summary: {
        id: 'ESTJ gemar mengorganisir kumpul bersama, aktif dalam komunitas alumni, dan siap membela temannya secara nyata.',
        en: 'ESTJs actively rally communal events, civic groups, and alumni clubs, offering sturdy support.',
      },
      circleStyle: {
        id: 'Teratur, suportif secara praktis, dan berbasis kegiatan nyata.',
        en: 'Civic-minded, energetic, organized, and reliable.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Manajemen operasional korporasi, lembaga penegak hukum, militer, dan administrasi pemerintahan.',
        en: 'Corporate operations, law enforcement, construction oversight, and governance.',
      },
      topMatches: [
        { id: 'Chief Operating Officer (COO), Hakim Militer / Kepolisian, Manajer Proyek', en: 'COO / Operations Director, Enforcement Officer, Senior Project Manager' },
        { id: 'Direktur Bank Komersial, Pengawas Konstruksi Sipil, Kepala Sekolah', en: 'Commercial Banking Director, Construction Superintendent, Principal' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Taat hierarki, cepat menyelesaikan target kerja, dan menghargai arahan pimpinan yang tegas.',
        en: 'Respectful of chain-of-command; executes targets swiftly and demands clear instructions.',
      },
      colleague: {
        id: 'Pendorong produktivitas yang menjaga ritme kerja agar tidak ada proyek yang molor.',
        en: 'Productivity driver keeping projects on track and holding everyone accountable.',
      },
      manager: {
        id: 'Atasan yang tegas, terorganisir, dan menghargai kejujuran serta ketepatan waktu di atas segalanya.',
        en: 'Authoritative organizer who rewards honesty, punctuality, and concrete metrics.',
      },
    },
  },

  ESFJ: {
    temperamentGroup: 'sentinels',
    temperamentLabel: { id: 'Pengawal (Sentinels)', en: 'Sentinels' },
    quote: {
      text: {
        id: 'Cinta tidak terdiri dari saling memandang, melainkan melihat bersama ke arah yang sama.',
        en: 'Love does not consist in gazing at each other, but in looking outward together in the same direction.',
      },
      author: 'Antoine de Saint-Exupéry',
    },
    overviewExtended: {
      id: 'ESFJ adalah tuan rumah kehidupan sosial yang ramah dan penuh cinta. Dengan Fe dan Si, mereka merawat keharmonisan komunitas dan memastikan semua orang merasa dirangkul.',
      en: 'ESFJs are the warm hosts of community life. Driven by Fe and Si, they curate social harmony and ensure every neighbor feels welcomed.',
    },
    romantic: {
      summary: {
        id: 'Setia, ekspresif, dan sangat suportif. ESFJ mendambakan hubungan yang harmonis dengan keterbukaan emosional dan penghargaan timbal balik.',
        en: 'Devoted, demonstrative, and deeply supportive partners who thrive in shared traditions and reciprocal affection.',
      },
      strengths: [
        { id: 'Mencurahkan kasih sayang melimpah dan perhatian detail', en: 'Showers partner with abundant affection and thoughtful surprises' },
        { id: 'Sangat setia dan pandai menjaga kehangatan hubungan', en: 'Steadfast loyalty and active champion of relationship harmony' },
      ],
      challenges: [
        { id: 'Sensitif terhadap kritik dan penolakan sosial', en: 'Vulnerable to perceived social disapproval or criticism' },
        { id: 'Bisa terlalu mencemaskan apa yang dipikirkan tetangga atau kerabat', en: 'Prone to worrying excessively about social appearances' },
      ],
    },
    friendships: {
      summary: {
        id: 'ESFJ adalah perekat kelompok pertemanan. Mereka senang mengumpulkan teman-teman untuk makan malam dan merayakan momen penting bersama.',
        en: 'ESFJs are the glue of social circles, bringing people together for celebrations and shared memories.',
      },
      circleStyle: {
        id: 'Hangat, ramah, komunal, dan penuh acara silaturahmi.',
        en: 'Warm, hospitable, celebratory, and tightly knit.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Hubungan masyarakat, manajemen fasilitas kesehatan, pendidikan, dan layanan pelanggan perhotelan.',
        en: 'Hospitality, public relations, healthcare administration, and communal education.',
      },
      topMatches: [
        { id: 'Direktur Hubungan Masyarakat (PR), Manajer Acara & Protokol, Kepala Perawat', en: 'PR Director, Event & Protocol Lead, Healthcare Services Manager' },
        { id: 'Konselor Sekolah, Manajer Hubungan Tamu, Koordinator Komunitas', en: 'School Counselor, Hospitality Manager, Community Coordinator' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Sangat kooperatif, cepat memahami norma kantor, dan menghormati atasan yang ramah.',
        en: 'Highly cooperative, respectful of office etiquette, and thrives under encouraging leadership.',
      },
      colleague: {
        id: 'Sahabat kantor yang selalu membawa camilan dan menyemangati rekan yang sedang sedih.',
        en: 'Team harmonizer who brings warmth, treats, and emotional morale to the office.',
      },
      manager: {
        id: 'Pemimpin yang peduli pada kebahagiaan anak buah dan membangun budaya kerja kekeluargaan.',
        en: 'Supportive manager building a familial, cohesive, and celebratory work culture.',
      },
    },
  },

  ISTP: {
    temperamentGroup: 'explorers',
    temperamentLabel: { id: 'Penjelajah (Explorers)', en: 'Explorers' },
    quote: {
      text: {
        id: 'Katakan padaku dan aku akan lupa. Ajari aku dan aku akan ingat. Libatkan aku dan aku akan belajar.',
        en: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
      },
      author: 'Benjamin Franklin',
    },
    overviewExtended: {
      id: 'ISTP adalah ahli mekanik dan pemecah masalah praktis yang tenang di bawah krisis. Mereka memahami cara kerja dunia fisik melalui logika tajam (Ti) dan reaksi sensorik kilat (Se).',
      en: 'ISTPs are enigmatic craftsmen and tactical crisis solvers. They decipher physical mechanisms through internal logic (Ti) and lightning-fast reflexes (Se).',
    },
    romantic: {
      summary: {
        id: 'Tenang, santai, dan menghargai otonomi pribadi. ISTP membuktikan cinta melalui tindakan bantuan nyata dan petualangan bersama.',
        en: 'Cool, low-drama, and honoring of autonomy. ISTPs demonstrate affection through practical deeds and shared thrill.',
      },
      strengths: [
        { id: 'Sangat tenang dan dapat diandalkan dalam situasi darurat', en: 'Exceptionally unflappable and resourceful in acute emergencies' },
        { id: 'Memberikan ruang kebebasan penuh pada pasangan tanpa cemburu buta', en: 'Generously gives partners space without suffocating jealousy' },
      ],
      challenges: [
        { id: 'Sukar mengutarakan perasaan emosional secara verbal', en: 'Uncomfortable articulating complex emotional states' },
        { id: 'Perlu ruang kesendirian fisik yang tidak boleh diganggu', en: 'Requires inviolable solitary time to recharge hands-on' },
      ],
    },
    friendships: {
      summary: {
        id: 'ISTP berteman melalui aktivitas bersama: olahraga ekstrem, modifikasi kendaraan, bermain game, atau menjelajah alam bebas.',
        en: 'ISTPs bond side-by-side through shared action: sports, motorcycling, gaming, or hands-on crafting.',
      },
      circleStyle: {
        id: 'Santai, minim drama, dan berorientasi aksi langsung.',
        en: 'Low-maintenance, action-oriented, and zero pretense.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Pekerjaan lapangan, bengkel teknologi canggih, operasi tanggap darurat, atau keteknikan forensik.',
        en: 'Tactical field operations, aerospace workshops, forensic engineering, and emergency response.',
      },
      topMatches: [
        { id: 'Pilot Tempur / Maskapai, Insinyur Mekanik, Ahli Forensik Digital', en: 'Aviation Pilot, Mechanical Engineer, Digital Forensics Specialist' },
        { id: 'Dokter Bedah Darurat, Pengembang Perangkat Keras, Atlet Profesional', en: 'Trauma Surgeon, Hardware Systems Architect, Precision Craftsman' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Menyelesaikan kendala teknis tercepat tanpa banyak bicara; membenci rapat panjang yang tidak menghasilkan tindakan.',
        en: 'Fixes impossible technical glitches swiftly; allergic to long meetings without action items.',
      },
      colleague: {
        id: 'Rekan yang tenang, praktis, dan dapat diandalkan saat server atau mesin mengalami kerusakan.',
        en: 'Unflappable teammate who restores broken equipment or systems without panicking.',
      },
      manager: {
        id: 'Atasan yang memimpin dengan memberi contoh di lapangan, bukan dengan instruksi teoritis dari balik meja.',
        en: 'Pragmatic lead who solves crises alongside subordinates rather than micromanaging from an office.',
      },
    },
  },

  ISFP: {
    temperamentGroup: 'explorers',
    temperamentLabel: { id: 'Penjelajah (Explorers)', en: 'Explorers' },
    quote: {
      text: {
        id: 'Aku memimpikan lukisanku dan kemudian melukis impianku.',
        en: 'I dream my painting and I paint my dream.',
      },
      author: 'Vincent van Gogh',
    },
    overviewExtended: {
      id: 'ISFP adalah seniman sejati yang mengekspresikan nilai batin mendalam melalui estetika sensorik yang memesona (Fi + Se). Mereka hidup di saat ini dengan kerendahan hati dan kepekaan rasa.',
      en: 'ISFPs are authentic aesthetic souls channeling deep values into sensory beauty (Fi + Se). They live in the vivid present with gentle humility and artistic grace.',
    },
    romantic: {
      summary: {
        id: 'Lemah lembut, penuh kasih, dan sangat sensual. ISFP mencintai pasangan apa adanya dan menciptakan momen romantis yang indah.',
        en: 'Gentle, tender, and intensely sensual partners who celebrate their beloved with authentic acceptance and artistic beauty.',
      },
      strengths: [
        { id: 'Kehangatan batin yang tulus dan tidak menuntut kesempurnaan palsu', en: 'Pure non-judgmental acceptance and deep romantic warmth' },
        { id: 'Peka terhadap kenyamanan indrawi dan emosi pasangan', en: 'Deeply attuned to their partner’s physical and sensory comfort' },
      ],
      challenges: [
        { id: 'Cenderung memendam kekecewaan daripada berkonfrontasi', en: 'Tends to internalize conflict rather than speak out' },
        { id: 'Sukar membuat rencana keuangan atau komitmen kaku jangka panjang', en: 'Averse to overly rigid, restrictive long-term financial plans' },
      ],
    },
    friendships: {
      summary: {
        id: 'ISFP adalah sahabat santai yang menyenangkan untuk diajak nongkrong, mendengarkan musik, atau jalan-jalan menikmati pemandangan alam.',
        en: 'ISFPs are delightful companions for relaxed coffee chats, gallery visits, music concerts, and nature walks.',
      },
      circleStyle: {
        id: 'Artistik, ramah tanpa kepalsuan, dan bebas drama.',
        en: 'Authentic, visually attuned, and refreshingly peaceful.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Studio desain, industri mode dan kuliner seni, konservasi alam, atau klinik terapi holistik.',
        en: 'Design ateliers, culinary arts, fashion houses, wildlife sanctuaries, and boutique therapy.',
      },
      topMatches: [
        { id: 'Desainer Mode / Interior, Fotografer Artistik, Chef Gastronomi', en: 'Fashion / Interior Designer, Art Photographer, Fine Dining Chef' },
        { id: 'Terapis Hewan, Ahli Botani Lanskap, Musisi Studio', en: 'Veterinary Therapist, Landscape Architect, Studio Musician' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Bekerja dengan teliti dan cita rasa estetika tinggi; membutuhkan ruang kerja yang tenang dan tidak penuh bentakan.',
        en: 'Delivers exquisite aesthetic quality; needs a calm, respectful atmosphere free of abrasive shouting.',
      },
      colleague: {
        id: 'Rekan kerja yang menyenangkan, tidak banyak mengeluh, dan senang membantu sesama.',
        en: 'Quietly helpful team member who contributes aesthetic polish and harmonizing warmth.',
      },
      manager: {
        id: 'Pemimpin yang fleksibel dan menghargai gaya kerja unik setiap staf tanpa memaksakan keseragaman kaku.',
        en: 'Flexible leader honoring individual craftsmanship and fostering organic collaboration.',
      },
    },
  },

  ESTP: {
    temperamentGroup: 'explorers',
    temperamentLabel: { id: 'Penjelajah (Explorers)', en: 'Explorers' },
    quote: {
      text: {
        id: 'Hidup adalah petualangan yang berani atau tidak sama sekali.',
        en: 'Life is either a daring adventure or nothing at all.',
      },
      author: 'Helen Keller',
    },
    overviewExtended: {
      id: 'ESTP adalah penakluk momen yang penuh energi, berani mengambil risiko, dan bergerak cepat di lapangan (Se + Ti). Mereka memikat orang dengan karisma asertif dan kepandaian bernegosiasi.',
      en: 'ESTPs are electrifying dynamos who thrive on the adrenaline edge of reality (Se + Ti). They conquer fast-moving situations with quick wit and street-smart pragmatism.',
    },
    romantic: {
      summary: {
        id: 'Penuh gairah, menyenangkan, dan berani. ESTP mengisi hubungan dengan kencan seru dan kejutan spontan.',
        en: 'Passionate, thrilling, and spontaneous lovers who fill life with exhilarating dates and bold laughter.',
      },
      strengths: [
        { id: 'Daya tarik karismatik yang tinggi dan penuh percaya diri', en: 'High magnetic charm, playful banter, and bold confidence' },
        { id: 'Sangat tanggap menyelesaikan masalah praktis pasangan', en: 'Swiftly fixes physical problems and shields partner from harm' },
      ],
      challenges: [
        { id: 'Cepat bosan terhadap pembicaraan abstrak yang berlarut-larut', en: 'Becomes restless during lengthy abstract or theoretical talk' },
        { id: 'Perlu melatih kesabaran dalam menghadapi emosi yang lambat reda', en: 'Needs patience when navigating slow-moving emotional vulnerabilities' },
      ],
    },
    friendships: {
      summary: {
        id: 'ESTP adalah sosok yang menghidupkan setiap pesta. Mereka selalu punya ide untuk bersenang-senang dan mengajak teman mencoba hal baru.',
        en: 'ESTPs are the life of the party, always ready with a witty joke and an invitation to the next adventure.',
      },
      circleStyle: {
        id: 'Seru, penuh energi, gemar bertualang dan berolahraga bersama.',
        en: 'High-octane, action-heavy, spontaneous, and socially electric.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Lantai bursa saham, negosiasi penjualan besar, panggung hiburan, dan penanganan bencana darurat.',
        en: 'Trading floors, high-stakes sales, emergency management, and competitive athletic arenas.',
      },
      topMatches: [
        { id: 'Pialang Saham & Komoditas, Entrepreneur Lapangan, Negosiator Properti', en: 'Commodity Broker, Venture Builder, Real Estate Negotiator' },
        { id: 'Paramedis Gawat Darurat, Produser Hiburan Olahraga, Detektif Lapangan', en: 'Emergency Paramedic, Sports Marketing Producer, Field Detective' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Sangat sigap dan cerdik memecahkan krisis; membutuhkan proyek dinamis daripada meja kantor yang monoton.',
        en: 'Street-smart crisis solver; stagnates under sedentary desk-bound monotony.',
      },
      colleague: {
        id: 'Rekan yang memecah kebekuan dengan humor dan siap pasang badan menghadapi klien sulit.',
        en: 'Charismatic ally who diffuses tension with humor and handles difficult clients with ease.',
      },
      manager: {
        id: 'Pemimpin lapangan yang berani mengambil keputusan cepat dan mendorong tim memenangkan target kompetitif.',
        en: 'Action-oriented manager swift to capitalize on market opportunities and reward bold initiatives.',
      },
    },
  },

  ESFP: {
    temperamentGroup: 'explorers',
    temperamentLabel: { id: 'Penjelajah (Explorers)', en: 'Explorers' },
    quote: {
      text: {
        id: 'Tertawalah sebanyak yang Anda bisa, selalu katakan kebenaran, dan jangan pernah menyesali apa pun yang membuat Anda tersenyum.',
        en: 'Laugh as much as you can, always tell the truth, and never regret anything that made you smile.',
      },
      author: 'Audrey Hepburn',
    },
    overviewExtended: {
      id: 'ESFP adalah bintang penghibur alami yang mencintai kehidupan dan sesamanya (Se + Fi). Mereka menghadirkan kehangatan, keceriaan, dan estetika yang menyegarkan di setiap pertemuan.',
      en: 'ESFPs are vibrant performers radiating infectious warmth and joie de vivre (Se + Fi). They transform everyday existence into a joyful celebration of life.',
    },
    romantic: {
      summary: {
        id: 'Penuh cinta, mesra, dan murah hati. ESFP ingin pasangannya merasa paling istimewa dan bahagia setiap hari.',
        en: 'Affectionate, generous, and demonstrative lovers dedicated to making their partner feel adored and celebrated.',
      },
      strengths: [
        { id: 'Kehangatan emosional dan kemurahan hati yang melimpah', en: 'Abundant warmth, affectionate pampering, and generous heart' },
        { id: 'Kemampuan menikmati keindahan hidup bersama pasangan', en: 'Incredible ability to live joyously in the present together' },
      ],
      challenges: [
        { id: 'Cenderung menghindari pembicaraan konflik yang berat atau tidak menyenangkan', en: 'Avoids uncomfortable, heavy interpersonal confrontations' },
        { id: 'Butuh perhatian dan pengakuan konstan dari pasangan', en: 'Thrives on frequent reassurance and active appreciation' },
      ],
    },
    friendships: {
      summary: {
        id: 'ESFP memiliki teman di mana-mana dan memperlakukan setiap orang seperti teman lama yang dirindukan.',
        en: 'ESFPs collect friends effortlessly, welcoming strangers with immediate warmth and hospitality.',
      },
      circleStyle: {
        id: 'Gembira, ekspresif, hangat, dan penuh perayaan bersama.',
        en: 'Warm, theatrical, lively, and filled with shared laughter.',
      },
    },
    careers: {
      idealEnvironments: {
        id: 'Industri hiburan, perhotelan mewah, hubungan masyarakat, seni pertunjukan, dan konseling sosial.',
        en: 'Performing arts, luxury hospitality, event styling, public relations, and youth counseling.',
      },
      topMatches: [
        { id: 'Aktor / Presenter Televisi, Pengarah Acara Mewah, Humas Hubungan Publik', en: 'Performing Artist / Emcee, Luxury Event Stylist, PR Manager' },
        { id: 'Pendidik Usia Dini, Instruktur Kebugaran Karismatik, Fotografer Gaya Hidup', en: 'Early Childhood Specialist, Charismatic Fitness Coach, Lifestyle Photographer' },
      ],
    },
    workplace: {
      subordinate: {
        id: 'Antusias, ramah pada pelanggan, dan menciptakan atmosfer kerja yang menyenangkan.',
        en: 'Enthusiastic and customer-delighting presence making the workplace lively and fun.',
      },
      colleague: {
        id: 'Rekan kerja yang menyenangkan, selalu mendengarkan curhat, dan menghibur di kala lembur.',
        en: 'Supportive office pal who lifts morale with humor, warmth, and uplifting energy.',
      },
      manager: {
        id: 'Atasan yang membina hubungan akrab dengan tim dan memotivasi staf dengan apresiasi tulus.',
        en: 'Gregarious manager cultivating positive camaraderie and celebrating team milestones warmly.',
      },
    },
  },
};
