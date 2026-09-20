import { LocalizedString } from '../../types';

export interface MBTITypeProfile {
  type: string;
  title: LocalizedString;
  nickname: LocalizedString;
  description: LocalizedString;
  cognitiveStack: string[];
  strengths: LocalizedString[];
  growth: LocalizedString[];
}

export const MBTI_PROFILES: Record<string, MBTITypeProfile> = {
  INTJ: {
    type: 'INTJ',
    title: { id: 'Sang Arsitek Strategis', en: 'The Strategic Architect' },
    nickname: { id: 'Pemikir Visioner', en: 'Visionary Mastermind' },
    cognitiveStack: ['Ni', 'Te', 'Fi', 'Se'],
    description: {
      id: 'Pemikir analitis yang sangat mandiri, berorientasi masa depan, dan mampu merancang strategi jangka panjang dengan presisi tinggi. Selalu mencari pola dasar dan efisiensi sistem.',
      en: 'Analytical, highly independent, and forward-looking strategists who design intricate long-term plans with razor precision.',
    },
    strengths: [
      { id: 'Pemikiran strategis dan konseptual mendalam', en: 'Strategic, high-level conceptual thinking' },
      { id: 'Sangat mandiri dan percaya diri pada gagasannya', en: 'Fiercely self-directed and independent' },
      { id: 'Kemampuan eksekusi sistematis yang efisien', en: 'Systematic and efficient execution power' },
    ],
    growth: [
      { id: 'Belajar lebih sabar menghadapi orang yang berpikir lambat', en: 'Cultivating patience with emotional and relational nuances' },
      { id: 'Menghindari kecenderungan terlalu perfeksionis', en: 'Guarding against hyper-critical perfectionism' },
    ],
  },
  INTP: {
    type: 'INTP',
    title: { id: 'Sang Logikawan Inovator', en: 'The Innovative Logician' },
    nickname: { id: 'Filsuf Pemecah Masalah', en: 'Philosophical Troubleshooter' },
    cognitiveStack: ['Ti', 'Ne', 'Si', 'Fe'],
    description: {
      id: 'Pencari kebenaran objektif yang menyukai eksplorasi teori abstrak, membongkar asumsi lama, dan membangun model mental yang sangat rapi dan logis.',
      en: 'Truth-seekers fascinated by abstract theory, relentlessly questioning premises and building precise mental architectures.',
    },
    strengths: [
      { id: 'Analisis logika murni dan ketajaman konsep', en: 'Pure logical rigor and conceptual brilliance' },
      { id: 'Kreativitas tinggi dalam mencari solusi out-of-the-box', en: 'Out-of-the-box ingenuity in solving puzzles' },
      { id: 'Pikiran terbuka terhadap ide-ide revolusioner', en: 'Expansive openness to revolutionary paradigms' },
    ],
    growth: [
      { id: 'Mengubah ide-ide cemerlang menjadi eksekusi nyata', en: 'Bridging brilliant ideation into tangible reality' },
      { id: 'Memperhatikan ekspresi emosional dalam hubungan', en: 'Validating the emotional needs of loved ones' },
    ],
  },
  ENTJ: {
    type: 'ENTJ',
    title: { id: 'Sang Komandan Pemimpin', en: 'The Bold Commander' },
    nickname: { id: 'Pemimpin Visioner', en: 'Decisive Leader' },
    cognitiveStack: ['Te', 'Ni', 'Se', 'Fi'],
    description: {
      id: 'Pemimpin alami yang tegas, berkemauan keras, dan berorientasi pada hasil nyata. Memiliki bakat luar biasa dalam mengorganisir orang dan strategi besar.',
      en: 'Natural-born decisive leaders who formulate bold strategies and marshal human and material resources to conquer goals.',
    },
    strengths: [
      { id: 'Kepemimpinan tegas dan pengambilan keputusan cepat', en: 'Decisive executive presence and swift command' },
      { id: 'Visi masa depan yang berpadu dengan eksekusi nyata', en: 'Visionary foresight paired with practical execution' },
      { id: 'Ketahanan tinggi terhadap tekanan krisis', en: 'Unshakable resilience under critical pressure' },
    ],
    growth: [
      { id: 'Mendengarkan masukan emosional dari tim', en: 'Listening deeply to team sentiment and morale' },
      { id: 'Mengakui kerentanan pribadi tanpa merasa lemah', en: 'Embracing personal vulnerability without shame' },
    ],
  },
  ENTP: {
    type: 'ENTP',
    title: { id: 'Sang Pendebat Visioner', en: 'The Visionary Debater' },
    nickname: { id: 'Penggagas Inovasi', en: 'Trailblazing Instigator' },
    cognitiveStack: ['Ne', 'Ti', 'Fe', 'Si'],
    description: {
      id: 'Cerdas, cepat tanggap, dan gemar menantang status quo. Menikmati adu argumen intelektual dan melahirkan terobosan kreatif yang merombak aturan konvensional.',
      en: 'Quick-witted, agile innovators who challenge orthodoxy and thrive in the electric crossfire of intellectual debate.',
    },
    strengths: [
      { id: 'Kecerdasan verbal dan adaptabilitas kilat', en: 'Dazzling verbal agility and swift adaptability' },
      { id: 'Kemampuan melihat potensi baru dari setiap situasi', en: 'Innate knack for spotting unexplored frontiers' },
      { id: 'Karisma inspiratif dan antusiasme menular', en: 'Magnetic charisma and infectious enthusiasm' },
    ],
    growth: [
      { id: 'Menuntaskan proyek sebelum melompat ke ide berikutnya', en: 'Following projects to fruition before pivoting' },
      { id: 'Menjaga sensitivitas perasaan lawan bicara', en: 'Tempering blunt arguments with interpersonal tact' },
    ],
  },
  INFJ: {
    type: 'INFJ',
    title: { id: 'Sang Advokat Penasihat', en: 'The Insightful Advocate' },
    nickname: { id: 'Penyembuh Visioner', en: 'Mystic Counselor' },
    cognitiveStack: ['Ni', 'Fe', 'Ti', 'Se'],
    description: {
      id: 'Pribadi langka yang memadukan intuisi batin mendalam dengan kepedulian tulus terhadap kemanusiaan. Memiliki idealisme kuat untuk menciptakan perubahan bermakna.',
      en: 'A rare blend of profound intuitive insight and heartfelt compassion, driven by an unshakeable moral compass to uplift society.',
    },
    strengths: [
      { id: 'Empati mendalam dan pemahaman tajam motif manusia', en: 'Deep empathy and prophetic psychological insight' },
      { id: 'Dedikasi kuat pada misi kemanusiaan dan nilai luhur', en: 'Quiet yet relentless dedication to noble causes' },
      { id: 'Komunikator puitis dan inspiratif', en: 'Poetic, deeply inspiring communicator' },
    ],
    growth: [
      { id: 'Menetapkan batasan energi pribadi agar tidak lelah emosional', en: 'Setting firm emotional boundaries to prevent burnout' },
      { id: 'Tidak memikul beban dunia seorang diri', en: 'Releasing the burden of fixing everyone’s pain' },
    ],
  },
  INFP: {
    type: 'INFP',
    title: { id: 'Sang Mediator Idealis', en: 'The Poetic Mediator' },
    nickname: { id: 'Jiwa Autentik', en: 'Gentle Romantic' },
    cognitiveStack: ['Fi', 'Ne', 'Si', 'Te'],
    description: {
      id: 'Jiwa yang tulus, kreatif, dan berpegang erat pada nilai-nilai batin. Memiliki kekayaan imajinasi dan empati mendalam terhadap keindahan serta penderitaan hidup.',
      en: 'Authentic, idealistic, and deeply compassionate souls guided by rich internal values and boundless creative imagination.',
    },
    strengths: [
      { id: 'Keaslian diri (autentisitas) yang murni', en: 'Uncompromising moral integrity and authenticity' },
      { id: 'Kreativitas seni dan ekspresi literatur luar biasa', en: 'Rich artistic expression and poetic depth' },
      { id: 'Penerimaan hangat tanpa prasangka terhadap orang lain', en: 'Non-judgmental warmth and unconditional acceptance' },
    ],
    growth: [
      { id: 'Tidak terlalu memasukkan kritik ke dalam hati', en: 'Building resilience against perceived rejection' },
      { id: 'Mengambil langkah praktis untuk mewujudkan impian', en: 'Taking pragmatic daily steps to manifest ideals' },
    ],
  },
  ENFJ: {
    type: 'ENFJ',
    title: { id: 'Sang Protagonis Pendidik', en: 'The Inspiring Protagonist' },
    nickname: { id: 'Mentor Karismatik', en: 'Charismatic Mentor' },
    cognitiveStack: ['Fe', 'Ni', 'Se', 'Ti'],
    description: {
      id: 'Pemimpin karismatik yang penuh gairah, mampu melihat potensi terbesar dalam diri orang lain dan menginspirasi mereka untuk bersatu mencapai kebaikan.',
      en: 'Charismatic catalysts who ignite potential in others, weaving communities together with passion and inspiring vision.',
    },
    strengths: [
      { id: 'Kecerdasan emosional dan karisma sosial magnetik', en: 'Electrifying interpersonal EQ and warm presence' },
      { id: 'Bakat alami membimbing dan memotivasi orang', en: 'Intuitive talent for mentoring and unifying tribes' },
      { id: 'Orientasi kuat pada harmoni dan pertumbuhan bersama', en: 'Relentless drive for collective progress' },
    ],
    growth: [
      { id: 'Menyadari dan merawat kebutuhan pribadi sendiri', en: 'Honoring personal needs before sacrificing for others' },
      { id: 'Menerima bahwa tidak semua konflik bisa diselesaikan secara instan', en: 'Allowing space for unresolved disagreement' },
    ],
  },
  ENFP: {
    type: 'ENFP',
    title: { id: 'Sang Juru Kampanye Kreatif', en: 'The Spirited Campaigner' },
    nickname: { id: 'Katalis Penuh Gairah', en: 'Enthusiastic Catalyst' },
    cognitiveStack: ['Ne', 'Fi', 'Te', 'Si'],
    description: {
      id: 'Jiwa bebas yang penuh energi, imajinatif, dan ramah. Memandang hidup sebagai permadani kemungkinan yang menakjubkan dan selalu membawa optimisme ke mana pun.',
      en: 'Free-spirited, imaginative, and warm-hearted champions who see life as a vast tapestry of vibrant human possibilities.',
    },
    strengths: [
      { id: 'Energi positif yang membangkitkan semangat orang di sekitar', en: 'Infectious optimism and warm spontaneity' },
      { id: 'Kreativitas melimpah dan orisinalitas ide', en: 'Boundless creativity and intuitive connections' },
      { id: 'Ketulusan dalam menjalin ikatan antarpribadi', en: 'Genuine passion for authentic friendships' },
    ],
    growth: [
      { id: 'Menjaga fokus pada satu tujuan hingga tuntas', en: 'Honing sustained discipline through completion' },
      { id: 'Mengelola detail rutinitas administratif', en: 'Tending to unexciting procedural obligations' },
    ],
  },
  ISTJ: {
    type: 'ISTJ',
    title: { id: 'Sang Logistikus Teladan', en: 'The Diligent Logistician' },
    nickname: { id: 'Penjaga Integritas', en: 'Steadfast Inspector' },
    cognitiveStack: ['Si', 'Te', 'Fi', 'Ne'],
    description: {
      id: 'Pribadi yang bertanggung jawab, metodis, dan sangat dapat diandalkan. Menjunjung tinggi ketertiban, fakta nyata, dan komitmen dengan integritas tanpa kompromi.',
      en: 'Dutiful, methodical, and profoundly reliable stewards who uphold order, truth, and systematic duty with stoic integrity.',
    },
    strengths: [
      { id: 'Keandalan luar biasa dan etos kerja tanpa tanding', en: 'Ironclad dependability and tireless work ethic' },
      { id: 'Ketelitian tinggi terhadap detail dan presisi prosedural', en: 'Impeccable attention to detail and factual accuracy' },
      { id: 'Loyalitas sejati dan kepatuhan pada janji', en: 'Unfaltering loyalty and principled duty' },
    ],
    growth: [
      { id: 'Membuka diri terhadap inovasi dan perubahan tak terduga', en: 'Embracing innovative alternatives with flexibility' },
      { id: 'Mengekspresikan apresiasi hangat secara verbal', en: 'Communicating affectionate affirmation more openly' },
    ],
  },
  ISFJ: {
    type: 'ISFJ',
    title: { id: 'Sang Pelindung Setia', en: 'The Devoted Defender' },
    nickname: { id: 'Penjaga Kehangatan', en: 'Caring Guardian' },
    cognitiveStack: ['Si', 'Fe', 'Ti', 'Ne'],
    description: {
      id: 'Penyayang, setia, dan penuh dedikasi dalam menjaga orang-orang yang dicintainya. Bekerja keras di balik layar untuk memastikan kenyamanan dan kedamaian semua orang.',
      en: 'Deeply devoted, patient, and considerate caretakers who maintain social tranquility and care for loved ones with quiet grace.',
    },
    strengths: [
      { id: 'Kepedulian praktis yang sangat hangat dan telaten', en: 'Warm, pragmatic benevolence and patient attentiveness' },
      { id: 'Ingatan tajam akan kebutuhan dan kesukaan orang lain', en: 'Remarkable memory for specific personal details' },
      { id: 'Dapat diandalkan dalam situasi apa pun', en: 'Steadfast rock of support in family and community' },
    ],
    growth: [
      { id: 'Berani mengatakan "tidak" demi menjaga kesehatan diri', en: 'Learning to say "no" without guilt' },
      { id: 'Mengizinkan diri sendiri untuk menerima apresiasi', en: 'Allowing oneself to step into the light of recognition' },
    ],
  },
  ESTJ: {
    type: 'ESTJ',
    title: { id: 'Sang Eksekutif Pengarah', en: 'The Efficient Executive' },
    nickname: { id: 'Penata Ketertiban', en: 'Stalwart Administrator' },
    cognitiveStack: ['Te', 'Si', 'Ne', 'Fi'],
    description: {
      id: 'Administrator ulung yang terorganisir, praktis, dan berorientasi pada aturan yang jelas. Menjamin efisiensi sistem dan keadilan prosedural dalam kelompok.',
      en: 'Pragmatic, organized administrators who establish structure, enforce community standards, and guarantee efficiency.',
    },
    strengths: [
      { id: 'Keterampilan organisasi dan manajemen luar biasa', en: 'Superior organizational prowess and logistical mastery' },
      { id: 'Kejelasan komunikasi dan kepemimpinan langsung', en: 'Direct, honest, and unambiguous communication' },
      { id: 'Integritas tinggi dalam menjalankan tugas', en: 'Rock-solid dedication to communal stability' },
    ],
    growth: [
      { id: 'Menyadari bahwa tidak semua hal dapat diatur secara kaku', en: 'Accepting ambiguity and emotional subjectivity' },
      { id: 'Lebih peka terhadap perasaan individu yang sensitif', en: 'Softening directness with constructive empathy' },
    ],
  },
  ESFJ: {
    type: 'ESFJ',
    title: { id: 'Sang Konsul Pengayom', en: 'The Warm Consul' },
    nickname: { id: 'Penyatu Komunitas', en: 'Supportive Host' },
    cognitiveStack: ['Fe', 'Si', 'Ne', 'Ti'],
    description: {
      id: 'Sangat ramah, penuh perhatian, dan populer. Mahir menciptakan atmosfer yang bersahabat dan memastikan setiap orang merasa dihargai dan dirangkul.',
      en: 'Heartwarmingly attentive, sociable, and cooperative community builders who foster tight-knit harmony and mutual support.',
    },
    strengths: [
      { id: 'Keahlian sosial tinggi dan kemudahan bergaul', en: 'Magnetic interpersonal warmth and hospitality' },
      { id: 'Sensitivitas tinggi terhadap kebutuhan kelompok', en: 'Keen attunement to collective social rhythms' },
      { id: 'Dedikasi tanpa pamrih untuk kebahagiaan bersama', en: 'Tireless dedication to group cohesion and morale' },
    ],
    growth: [
      { id: 'Menghindari rasa cemas berlebihan terhadap opini orang', en: 'Detaching self-worth from social approval' },
      { id: 'Belajar menghadapi kritik dengan kepala dingin', en: 'Viewing constructive criticism objectively' },
    ],
  },
  ISTP: {
    type: 'ISTP',
    title: { id: 'Sang Virtuoso Mekanis', en: 'The Crafty Virtuoso' },
    nickname: { id: 'Pakar Praktis', en: 'Pragmatic Troubleshooter' },
    cognitiveStack: ['Ti', 'Se', 'Ni', 'Fe'],
    description: {
      id: 'Pengamat tenang dengan rasa ingin tahu praktis yang tinggi. Ahli dalam memahami cara kerja benda nyata, tenang saat krisis, dan cekatan memecahkan masalah mendadak.',
      en: 'Calm, observant mechanics and fearless experimenters who dissect how tangible systems operate and solve crises with quiet mastery.',
    },
    strengths: [
      { id: 'Ketenangan luar biasa saat menghadapi situasi darurat', en: 'Effortless cool-headed composure during emergencies' },
      { id: 'Keterampilan teknis dan adaptasi fisik yang tangkas', en: 'Dexterous technical mastery and tactile acuity' },
      { id: 'Pemikiran rasional dan efisien tanpa drama', en: 'Uncluttered, rational efficiency devoid of drama' },
    ],
    growth: [
      { id: 'Mengkomunikasikan rencana kepada rekan tim', en: 'Communicating intentions clearly before lone-wolfing' },
      { id: 'Memperhatikan komitmen jangka panjang', en: 'Nurturing enduring interpersonal commitments' },
    ],
  },
  ISFP: {
    type: 'ISFP',
    title: { id: 'Sang Petualang Seniman', en: 'The Artistic Adventurer' },
    nickname: { id: 'Pencipta Estetika', en: 'Sensitive Creator' },
    cognitiveStack: ['Fi', 'Se', 'Ni', 'Te'],
    description: {
      id: 'Artis sejati yang hidup di saat ini, peka terhadap keindahan visual dan sensorik, serta memiliki integritas batin yang lembut namun tak tergoyahkan.',
      en: 'Gentle, aesthetically gifted creators who live in the vibrant present, expressing their profound inner values through tactile artistry.',
    },
    strengths: [
      { id: 'Kepekaan estetika dan bakat artistik alami', en: 'Exquisite aesthetic taste and sensory artistry' },
      { id: 'Kehangatan yang tulus dan toleransi tinggi', en: 'Quiet kindness, tolerance, and grounded presence' },
      { id: 'Fleksibilitas hidup yang selaras dengan alam', en: 'Effortless harmony with nature and living beings' },
    ],
    growth: [
      { id: 'Menghadapi konflik secara langsung alih-alih menghindar', en: 'Addressing constructive conflict directly' },
      { id: 'Merencanakan masa depan keuangan dengan terstruktur', en: 'Building long-term financial and career blueprints' },
    ],
  },
  ESTP: {
    type: 'ESTP',
    title: { id: 'Sang Pengusaha Berani', en: 'The Daring Entrepreneur' },
    nickname: { id: 'Penerobos Batas', en: 'Dynamic Realist' },
    cognitiveStack: ['Se', 'Ti', 'Fe', 'Ni'],
    description: {
      id: 'Penuh energi, pemberani, dan pragmatis. Suka mengambil risiko yang terukur, membaca momen saat ini dengan cerdik, dan langsung beraksi membalikkan situasi.',
      en: 'Electrifying, action-driven pragmatists who read the room instantly, navigate real-time risks, and thrive at the cutting edge.',
    },
    strengths: [
      { id: 'Ketajaman membaca peluang dan bertindak seketika', en: 'Unrivaled ability to seize immediate opportunities' },
      { id: 'Karisma persuasif dan keberanian tinggi', en: 'Persuasive charm, bold confidence, and physical vitality' },
      { id: 'Solusi pragmatis yang cepat dan efektif', en: 'Rapid-fire real-world problem resolution' },
    ],
    growth: [
      { id: 'Mempertimbangkan konsekuensi jangka panjang', en: 'Pausing to ponder future second-order consequences' },
      { id: 'Menghormati aturan yang memiliki tujuan penting', en: 'Respecting regulations that protect long-term stability' },
    ],
  },
  ESFP: {
    type: 'ESFP',
    title: { id: 'Sang Penghibur Spontan', en: 'The Vibrant Entertainer' },
    nickname: { id: 'Bintang Kehidupan', en: 'Joyful Performer' },
    cognitiveStack: ['Se', 'Fi', 'Te', 'Ni'],
    description: {
      id: 'Sosok yang memikat, spontan, dan penuh vitalitas. Membawa kegembiraan ke dalam kehidupan orang lain dan menikmati segala keindahan yang ditawarkan dunia saat ini.',
      en: 'Spontaneous, vibrant, and delightfully warm entertainers who immerse themselves in worldly beauty and lift everyone’s spirits.',
    },
    strengths: [
      { id: 'Semangat hidup yang menular dan penuh canda tawa', en: 'Radiant joie de vivre and infectious enthusiasm' },
      { id: 'Kehangatan hati dan perhatian nyata pada sesama', en: 'Practical generosity and tenderhearted generosity' },
      { id: 'Kemampuan adaptasi spontan di lingkungan mana pun', en: 'Spontaneous agility in dynamic environments' },
    ],
    growth: [
      { id: 'Menghindari keputusan impulsif saat terdesak emosi', en: 'Exercising restraint before making impulsive leaps' },
      { id: 'Menyediakan waktu untuk refleksi diri yang hening', en: 'Carving out quiet space for solitary introspection' },
    ],
  },
};
