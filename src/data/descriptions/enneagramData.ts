import { LocalizedString } from '../../types';

export interface EnneagramTypeDetail {
  type: number;
  title: LocalizedString;
  center: 'gut' | 'heart' | 'head';
  centerLabel: LocalizedString;
  coreFear: LocalizedString;
  coreDesire: LocalizedString;
  description: LocalizedString;
}

export const ENNEAGRAM_CORE_PROFILES: Record<number, EnneagramTypeDetail> = {
  1: {
    type: 1,
    title: { id: 'Tipe 1: Sang Reformer / Perfeksionis', en: 'Type 1: The Reformer / Perfectionist' },
    center: 'gut',
    centerLabel: { id: 'Pusat Insting / Gut (Kemarahan)', en: 'Instinctive / Gut Center (Anger)' },
    coreFear: { id: 'Menjadi korup, cacat moral, atau berbuat salah', en: 'Being corrupt, evil, or fundamentally flawed' },
    coreDesire: { id: 'Memiliki integritas, keadilan, dan keseimbangan', en: 'To have integrity and be virtuous and good' },
    description: {
      id: 'Berprinsip tinggi, bertujuan jelas, disiplin, dan memiliki dorongan kuat untuk memperbaiki segala ketidaksempurnaan di dunia.',
      en: 'Principled, purposeful, self-controlled, and driven by an intense desire to improve themselves and the world.',
    },
  },
  2: {
    type: 2,
    title: { id: 'Tipe 2: Sang Penolong / Giver', en: 'Type 2: The Helper / Giver' },
    center: 'heart',
    centerLabel: { id: 'Pusat Hati / Heart (Rasa Malu)', en: 'Feeling / Heart Center (Shame)' },
    coreFear: { id: 'Tidak diinginkan, tidak dicintai, atau tidak berharga', en: 'Being unwanted, unworthy of being loved' },
    coreDesire: { id: 'Merasa dicintai dan dihargai apa adanya', en: 'To feel loved and deeply appreciated' },
    description: {
      id: 'Empatis, tulus, murah hati, dan rela berkorban untuk memenuhi kebutuhan orang lain, sering kali demi mendapatkan cinta.',
      en: 'Empathetic, affectionate, generous, and demonstrative, seeking love by nurturing and supporting others.',
    },
  },
  3: {
    type: 3,
    title: { id: 'Tipe 3: Sang Pencapai / Performer', en: 'Type 3: The Achiever / Performer' },
    center: 'heart',
    centerLabel: { id: 'Pusat Hati / Heart (Rasa Malu)', en: 'Feeling / Heart Center (Shame)' },
    coreFear: { id: 'Gagal, tidak berharga, atau dinilai medioker', en: 'Being worthless, failing, or lacking distinction' },
    coreDesire: { id: 'Merasa berharga melalui pencapaian dan kesuksesan', en: 'To feel valuable, competent, and admired' },
    description: {
      id: 'Ambisius, kompeten, adaptif, dan berorientasi pada hasil tinggi. Pandai membentuk citra diri dan memimpin pencapaian prestasi.',
      en: 'Adaptable, ambitious, and highly driven by milestones and public recognition for their competence.',
    },
  },
  4: {
    type: 4,
    title: { id: 'Tipe 4: Sang Individualis / Romantik', en: 'Type 4: The Individualist / Romantic' },
    center: 'heart',
    centerLabel: { id: 'Pusat Hati / Heart (Rasa Malu)', en: 'Feeling / Heart Center (Shame)' },
    coreFear: { id: 'Tidak memiliki identitas unik atau signifikansi pribadi', en: 'Having no personal identity or creative significance' },
    coreDesire: { id: 'Menemukan diri sejati dan mengekspresikan autentisitas', en: 'To discover their authentic identity and express soul depth' },
    description: {
      id: 'Ekspresif, dramatis, peka, dan jujur pada emosi batin. Merasa berbeda dari orang kebanyakan dan menghargai keindahan mendalam.',
      en: 'Sensitive, expressive, and introspective souls who cherish emotional authenticity, beauty, and unique identity.',
    },
  },
  5: {
    type: 5,
    title: { id: 'Tipe 5: Sang Peneliti / Pengamat', en: 'Type 5: The Investigator / Observer' },
    center: 'head',
    centerLabel: { id: 'Pusat Kepala / Head (Ketakutan)', en: 'Thinking / Head Center (Fear)' },
    coreFear: { id: 'Kewalahan, tidak kompeten, atau kehabisan energi', en: 'Being overwhelmed, helpless, or intellectually incompetent' },
    coreDesire: { id: 'Menguasai pengetahuan dan mampu bertahan mandiri', en: 'To possess mastery, knowledge, and self-sufficient understanding' },
    description: {
      id: 'Sangat jeli, analitis, menjaga privasi energi mental, dan suka mengkaji sistem yang rumit hingga tuntas secara objektif.',
      en: 'Perceptive, innovative, cerebral, and isolated truth-seekers dedicated to conceptual mastery and resource conservation.',
    },
  },
  6: {
    type: 6,
    title: { id: 'Tipe 6: Sang Loyalis / Skeptis', en: 'Type 6: The Loyalist / Guardian' },
    center: 'head',
    centerLabel: { id: 'Pusat Kepala / Head (Ketakutan)', en: 'Thinking / Head Center (Fear)' },
    coreFear: { id: 'Ditinggalkan tanpa dukungan atau kepastian keamanan', en: 'Being without support, guidance, or security' },
    coreDesire: { id: 'Memperoleh keamanan, kepastian, dan aliansi terpercaya', en: 'To experience security, dependable alliances, and trust' },
    description: {
      id: 'Setia, bertanggung jawab, waspada terhadap potensi bahaya, dan sangat menghargai komitmen serta kerja sama tim yang solid.',
      en: 'Reliable, hard-working, and safety-oriented thinkers who scan for risks and uphold steadfast loyalty to their tribe.',
    },
  },
  7: {
    type: 7,
    title: { id: 'Tipe 7: Sang Antusias / Pengelana', en: 'Type 7: The Enthusiast / Visionary' },
    center: 'head',
    centerLabel: { id: 'Pusat Kepala / Head (Ketakutan)', en: 'Thinking / Head Center (Fear)' },
    coreFear: { id: 'Terperangkap dalam rasa sakit, bosan, atau dibatasi', en: 'Being trapped in emotional pain, deprivation, or boredom' },
    coreDesire: { id: 'Menikmati hidup seutuhnya dan memiliki banyak pilihan', en: 'To be satisfied, happy, and fully engaged in novel possibilities' },
    description: {
      id: 'Spontan, serba bisa, optimis, dan selalu berburu pengalaman baru yang menggairahkan. Pandai melihat peluang cerah di masa depan.',
      en: 'Spontaneous, versatile, acquisitive, and optimistic seekers who weave joy and exciting ventures into every day.',
    },
  },
  8: {
    type: 8,
    title: { id: 'Tipe 8: Sang Penantang / Pemimpin Kuat', en: 'Type 8: The Challenger / Leader' },
    center: 'gut',
    centerLabel: { id: 'Pusat Insting / Gut (Kemarahan)', en: 'Instinctive / Gut Center (Anger)' },
    coreFear: { id: 'Dilecehkan, dikendalikan, atau dipaksa tunduk', en: 'Being harmed, controlled, or rendered powerless' },
    coreDesire: { id: 'Melindungi otonomi diri dan menentukan nasib sendiri', en: 'To protect autonomy, self-determination, and manifest strength' },
    description: {
      id: 'Percaya diri, berani, tegas, dan protektif. Tidak takut pada pertarungan, membenci kelemahan palsu, dan membela kaum yang tertindas.',
      en: 'Self-confident, assertive, and magnanimous leaders who command their space and champion justice fearlessly.',
    },
  },
  9: {
    type: 9,
    title: { id: 'Tipe 9: Sang Juru Damai / Mediator', en: 'Type 9: The Peacemaker / Mediator' },
    center: 'gut',
    centerLabel: { id: 'Pusat Insting / Gut (Kemarahan)', en: 'Instinctive / Gut Center (Anger)' },
    coreFear: { id: 'Perpecahan, kehilangan ikatan, dan konflik batin', en: 'Loss, fragmentation, separation, and inner conflict' },
    coreDesire: { id: 'Menjaga kedamaian batin, harmoni, dan ketenangan', en: 'To have inner peace, emotional equilibrium, and harmony' },
    description: {
      id: 'Menerima, menyenangkan, tenang, dan stabil. Mampu menyatukan orang yang bertikai dan melihat semua sudut pandang dengan damai.',
      en: 'Receptive, reassuring, agreeable, and accommodating anchors who synthesize viewpoints to maintain harmonious equilibrium.',
    },
  },
};

// Tritype archetypes by sorted digits key (e.g. '125', '458', etc.)
export const TRITYPE_ARCHETYPES: Record<string, { title: LocalizedString; description: LocalizedString }> = {
  '125': { title: { id: 'Sang Penasihat Berpengetahuan', en: 'The Mentor / Advisor' }, description: { id: 'Etis, penuh perhatian, dan analitis.', en: 'Ethical, observant, and deeply helpful.' } },
  '126': { title: { id: 'Sang Pendukung Setia', en: 'The Supporter' }, description: { id: 'Disiplin, loyal, dan berbakti pada komunitas.', en: 'Dutiful, loyal, and devoted to family and community.' } },
  '127': { title: { id: 'Sang Guru Inspiratif', en: 'The Inspiring Teacher' }, description: { id: 'Optimis, teratur, dan peduli pada kebaikan.', en: 'Optimistic, structured, and warmhearted.' } },
  '135': { title: { id: 'Sang Ahli Teknis Solutif', en: 'The Technical Expert' }, description: { id: 'Kompeten, sangat teliti, dan berorientasi hasil.', en: 'Analytical, competent, and relentlessly efficient.' } },
  '136': { title: { id: 'Sang Pengawas Prosedur', en: 'The Taskmaster' }, description: { id: 'Sistematis, teratur, dan taat integritas.', en: 'Disciplined, systematic, and duty-driven.' } },
  '137': { title: { id: 'Sang Pembangun Sistem', en: 'The Systems Builder' }, description: { id: 'Ambisius, energik, dan inovatif.', en: 'Ambitious, productive, and inventive.' } },
  '145': { title: { id: 'Sang Peneliti Idealis', en: 'The Researcher' }, description: { id: 'Introspektif, kritis, dan berdedikasi tinggi.', en: 'Introspective, philosophically rigorous, and principled.' } },
  '146': { title: { id: 'Sang Filsuf Moral', en: 'The Philosopher' }, description: { id: 'Cermat, berprinsip kokoh, dan peka.', en: 'Conscientious, morally astute, and reflective.' } },
  '147': { title: { id: 'Sang Visioner Humanis', en: 'The Visionary' }, description: { id: 'Kreatif, menjunjung standar tinggi, dan berjiwa bebas.', en: 'Creative, idealistic, and inspiring.' } },
  '258': { title: { id: 'Sang Strategis Murah Hati', en: 'The Strategist' }, description: { id: 'Protektif, analitis, dan suka memberdayakan sesama.', en: 'Protective, analytical, and generous.' } },
  '268': { title: { id: 'Sang Penyelamat Berani', en: 'The Rescuer' }, description: { id: 'Pelindung setia yang gigih membela orang tertindas.', en: 'Fiercely loyal protector of the underdog.' } },
  '278': { title: { id: 'Sang Penggerak Bebas', en: 'The Free Spirit' }, description: { id: 'Karisma tinggi, dermawan, dan penuh semangat.', en: 'Charismatic, generous, and adventurous.' } },
  '358': { title: { id: 'Sang Ahli Strategi Ulung', en: 'The Solution Master' }, description: { id: 'Berkuasa, kompeten, dan tak kenal lelah mencapai puncak.', en: 'Dominant, tactical, and singularly goal-focused.' } },
  '359': { title: { id: 'Sang Pemikir Objektif', en: 'The Thinker' }, description: { id: 'Tenang, produktif, dan logis dalam mencari kebenaran.', en: 'Calm, quietly ambitious, and analytical.' } },
  '368': { title: { id: 'Sang Keadilan Sejati', en: 'The Justice Fighter' }, description: { id: 'Berani, taktis, dan loyal pada aliansi.', en: 'Courageous, assertive, and duty-bound.' } },
  '369': { title: { id: 'Sang Pengadaptasi Sejati', en: 'The Mediator / Chameleon' }, description: { id: 'Ramah, fleksibel, dan sangat disukai banyak orang.', en: 'Affable, adaptable, and socially smooth.' } },
  '378': { title: { id: 'Sang Pengusaha Kuat', en: 'The Heavy Hitter' }, description: { id: 'Dinamis, penuh ambisi, dan dominan dalam memimpin.', en: 'Dynamic, enterprising, and magnetic leader.' } },
  '379': { title: { id: 'Sang Duta Harmoni', en: 'The Ambassador' }, description: { id: 'Optimis, ramah, dan piawai membangun jaringan.', en: 'Charming, upbeat, and collaborative.' } },
  '458': { title: { id: 'Sang Cendekiawan Mandiri', en: 'The Scholar / Dark Knight' }, description: { id: 'Misterius, analitis mendalam, dan memiliki pendirian baja.', en: 'Deeply insightful, idiosyncratic, and fiercely independent.' } },
  '459': { title: { id: 'Sang Kontemplator Misterius', en: 'The Contemplative' }, description: { id: 'Sangat introspektif, puitis, dan menyukai keheningan.', en: 'Quiet, deeply philosophical, and imaginative.' } },
  '468': { title: { id: 'Sang Pemberontak Kebenaran', en: 'The Truth Teller' }, description: { id: 'Vokal, reaktif, dan berani membongkar kepalsuan.', en: 'Fiercely intuitive, reactive, and authentic.' } },
  '469': { title: { id: 'Sang Pencari Kedamaian Batin', en: 'The Seeker' }, description: { id: 'Lembut, intuitif, dan peka terhadap emosi orang.', en: 'Gentle, emotionally sensitive, and peaceful.' } },
  '478': { title: { id: 'Sang Pembawa Pesan Berani', en: 'The Messenger' }, description: { id: 'Ekspresif, berani, penuh warna, dan menginspirasi.', en: 'Uninhibited, visionary, and emotionally audacious.' } },
  '479': { title: { id: 'Sang Pengelana Lembut', en: 'The Gentle Spirit' }, description: { id: 'Imajinatif, ceria, dan penuh estetika spiritual.', en: 'Ethereal, whimsical, and artistically compassionate.' } },
  '259': { title: { id: 'Sang Pendengar Sabar', en: 'The Problem Solver' }, description: { id: 'Penuh empati tenang, analitis, dan tidak menuntut.', en: 'Empathetic, quietly observant, and peaceful.' } },
  '269': { title: { id: 'Sang Sahabat Sejati', en: 'The Good Samaritan' }, description: { id: 'Sangat setia, hangat, dan selalu ada untuk orang lain.', en: 'Steadfastly warm, reliable, and humble helper.' } },
};

export function getTritypeProfile(t1: number, t2: number, t3: number) {
  const digits = [t1, t2, t3].sort((a, b) => a - b).join('');
  return TRITYPE_ARCHETYPES[digits] || {
    title: { id: `Tritype ${t1}-${t2}-${t3}`, en: `Tritype ${t1}-${t2}-${t3}` },
    description: { id: 'Sinergi unik antara kecerdasan Tubuh, Hati, dan Pikiran.', en: 'A dynamic synergy across Instinct, Emotion, and Mind.' },
  };
}
