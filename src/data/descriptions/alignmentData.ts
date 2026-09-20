import { LocalizedString } from '../../types';

export interface AlignmentDetail {
  alignment: string;
  order: 'Lawful' | 'Neutral' | 'Chaotic';
  morality: 'Good' | 'Neutral' | 'Evil';
  title: LocalizedString;
  motto: LocalizedString;
  description: LocalizedString;
  archetypes: LocalizedString[];
}

export const ALIGNMENT_DETAILS: Record<string, AlignmentDetail> = {
  'Lawful Good': {
    alignment: 'Lawful Good',
    order: 'Lawful',
    morality: 'Good',
    title: { id: 'Sang Kesatria Kebenaran (The Crusader)', en: 'The Crusader' },
    motto: { id: 'Keadilan, ketertiban, dan welas asih bagi semua.', en: 'Justice, duty, and mercy through righteous law.' },
    description: {
      id: 'Percaya bahwa tatanan hukum yang tertib dan disiplin adalah cara paling efektif untuk melindungi hak-hak kaum lemah dan menegakkan kebaikan universal.',
      en: 'Believes in a lawful, compassionate society where duty and honor safeguard the vulnerable against tyranny and chaos.',
    },
    archetypes: [
      { id: 'Paladin, Superman, Hakim yang Adil', en: 'Paladin, Superman, Righteous Arbiter' },
    ],
  },
  'Neutral Good': {
    alignment: 'Neutral Good',
    order: 'Neutral',
    morality: 'Good',
    title: { id: 'Sang Dermawan Sejati (The Benefactor)', en: 'The Benefactor' },
    motto: { id: 'Kebaikan di atas segalanya, tanpa terikat aturan kaku.', en: 'Doing the right thing, unimpeded by dogma.' },
    description: {
      id: 'Digerakkan oleh altruisme murni. Siap bekerja sama dengan aturan jika itu membantu, atau mengabaikannya jika menghalangi kebaikan sejati.',
      en: 'Devoted to altruism and healing. Cooperates with lawful authority when useful, but freely transcends it to do what is right.',
    },
    archetypes: [
      { id: 'Dokter Tanpa Batas, Gandalf, Spiderman', en: 'Healer without borders, Gandalf, Spider-Man' },
    ],
  },
  'Chaotic Good': {
    alignment: 'Chaotic Good',
    order: 'Chaotic',
    morality: 'Good',
    title: { id: 'Sang Pemberontak Mulia (The Rebel)', en: 'The Rebel' },
    motto: { id: 'Kebebasan batin dan perjuangan melawan tirani.', en: 'Freedom, compassion, and defiance of tyranny.' },
    description: {
      id: 'Mengikuti suara hati nurani pribadi tanpa mempedulikan aturan buatan manusia. Membenci penindasan dan birokrasi yang membelenggu jiwa.',
      en: 'Guided by personal conscience and fierce love for liberty. Bravely defies authoritarian structures to liberate others.',
    },
    archetypes: [
      { id: 'Robin Hood, V for Vendetta, Han Solo (setelah bergabung)', en: 'Robin Hood, V for Vendetta, Maverick Hero' },
    ],
  },
  'Lawful Neutral': {
    alignment: 'Lawful Neutral',
    order: 'Lawful',
    morality: 'Neutral',
    title: { id: 'Sang Penjaga Ketertiban (The Judge)', en: 'The Judge' },
    motto: { id: 'Hukum adalah hukum, tanpa pandang bulu.', en: 'Order, contracts, and honor above subjective emotion.' },
    description: {
      id: 'Menjunjung tinggi aturan, tradisi, dan kontrak kehormatan. Bagi mereka, kepastian hukum dan stabilitas jauh lebih penting daripada pertimbangan emosional.',
      en: 'Believes order and societal stability supersede subjective morality. Unwavering in keeping oaths and enforcing regulations.',
    },
    archetypes: [
      { id: 'Hakim Dredd, Prajurit Disiplin, Penjaga Gerbang', en: 'Judge Dredd, Stoic Sentinel, Disciplined Arbiter' },
    ],
  },
  'True Neutral': {
    alignment: 'True Neutral',
    order: 'Neutral',
    morality: 'Neutral',
    title: { id: 'Sang Penjaga Keseimbangan (The Naturalist)', en: 'The Naturalist' },
    motto: { id: 'Keseimbangan kosmik dan kebebasan alami.', en: 'Cosmic balance, detachment, and pragmatic pragmatism.' },
    description: {
      id: 'Menghindari fanatisme ekstrem dari sisi mana pun. Bersikap pragmatis, fleksibel, dan membiarkan alam semesta berjalan menurut siklus alaminya.',
      en: 'Steers clear of fanaticism, ideology, or moral absolutes. Observes reality with pragmatic detachment and values balance.',
    },
    archetypes: [
      { id: 'Druid Penjaga Hutan, Pengamat Netral, Petualang Mandiri', en: 'Forest Druid, Objective Observer, Lone Wanderer' },
    ],
  },
  'Chaotic Neutral': {
    alignment: 'Chaotic Neutral',
    order: 'Chaotic',
    morality: 'Neutral',
    title: { id: 'Sang Jiwa Merdeka (The Free Spirit)', en: 'The Free Spirit' },
    motto: { id: 'Tidak ada yang boleh mendikte langkah hidupku.', en: 'Individual autonomy and unfettered spontaneity.' },
    description: {
      id: 'Sangat menghargai kebebasan individual dan menolak batasan eksternal. Bertindak berdasarkan insting dan kesenangan tanpa niat jahat terencana.',
      en: 'Individualistic, unpredictable, and fiercely autonomous. Follows their own whims and resists social constraints.',
    },
    archetypes: [
      { id: 'Kapten Jack Sparrow, Trickster, Pengembara Liar', en: 'Captain Jack Sparrow, Trickster, Wild Nomad' },
    ],
  },
  'Lawful Evil': {
    alignment: 'Lawful Evil',
    order: 'Lawful',
    morality: 'Evil',
    title: { id: 'Sang Tirani Birokratis (The Dominator)', en: 'The Dominator' },
    motto: { id: 'Kekuasaan mutlak yang dilegitimasi oleh sistem.', en: 'Tyranny and subjugation through codified law.' },
    description: {
      id: 'Menggunakan celah hukum, struktur hierarki, dan kontrak yang mengikat untuk mengeksploitasi pihak lain demi kekuasaan dan dominasi pribadi.',
      en: 'Methodically exploits laws, traditions, and hierarchies to consolidate ruthless power and subservience.',
    },
    archetypes: [
      { id: 'Darth Vader, Penguasa Korporasi Kejam, Mafia Terorganisir', en: 'Darth Vader, Ruthless Tycoon, Machiavellian Sovereign' },
    ],
  },
  'Neutral Evil': {
    alignment: 'Neutral Evil',
    order: 'Neutral',
    morality: 'Evil',
    title: { id: 'Sang Oportunis Murni (The Opportunist)', en: 'The Opportunist' },
    motto: { id: 'Kepentingan pribadi di atas segalanya tanpa beban nurani.', en: 'Pure, unadulterated self-advancement without remorse.' },
    description: {
      id: 'Mengejar keuntungan pribadi dengan dingin tanpa terikat oleh aturan maupun keinginan merusak secara acak. Menghalalkan segala cara demi tujuan.',
      en: 'Ruthlessly self-serving. Lacks loyalty to either order or chaos, aligning with whoever advances personal survival and wealth.',
    },
    archetypes: [
      { id: 'Tentara Bayaran Tanpa Hati, Pembunuh Bayaran Dingin', en: 'Cold Mercenary, Self-Serving Betrayer' },
    ],
  },
  'Chaotic Evil': {
    alignment: 'Chaotic Evil',
    order: 'Chaotic',
    morality: 'Evil',
    title: { id: 'Sang Penghancur Anarki (The Destroyer)', en: 'The Destroyer' },
    motto: { id: 'Kekacauan total, kehancuran, dan kehendak liar.', en: 'Nihilism, destruction, and unchecked malice.' },
    description: {
      id: 'Didorong oleh nafsu perusakan liar, kebencian terhadap ketertiban, dan pemuasan hasrat kejam tanpa ampun terhadap siapa pun.',
      en: 'Driven by destructive impulses, primal rage, and arbitrary violence. Despises all law, authority, and compassion.',
    },
    archetypes: [
      { id: 'The Joker, Monster Liar, Agen Kekacauan Murni', en: 'The Joker, Lord of Chaos, Berserker' },
    ],
  },
};
