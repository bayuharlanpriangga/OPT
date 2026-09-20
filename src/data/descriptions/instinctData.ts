import { LocalizedString } from '../../types';

export interface InstinctStackingProfile {
  stacking: string;
  title: LocalizedString;
  dominant: 'sp' | 'so' | 'sx';
  secondary: 'sp' | 'so' | 'sx';
  blindspot: 'sp' | 'so' | 'sx';
  description: LocalizedString;
  lifeStyle: LocalizedString;
  growthEdge: LocalizedString;
}

export const INSTINCT_PROFILES: Record<string, InstinctStackingProfile> = {
  'sp/so': {
    stacking: 'sp/so',
    title: { id: 'Pembangun Fondasi Komunitas', en: 'The Solid Citizen / Foundation Builder' },
    dominant: 'sp',
    secondary: 'so',
    blindspot: 'sx',
    description: {
      id: 'Sangat terstruktur, pragmatis, dan dapat diandalkan. Menggabungkan kemandirian pemeliharaan sumber daya fisik (sp) dengan tanggung jawab sosial (so).',
      en: 'Grounded, responsible, and civically conscientious. Combines personal security and resource conservation with communal duty.',
    },
    lifeStyle: {
      id: 'Menjaga rutinitas hidup sehat, mengamankan keuangan keluarga, dan aktif berkontribusi dalam organisasi yang stabil.',
      en: 'Maintains solid financial and health buffers while actively participating in structured community endeavors.',
    },
    growthEdge: {
      id: 'Mengizinkan spontanitas, gairah intens, dan kedekatan emosional satu lawan satu (sx) yang lebih dalam.',
      en: 'Cultivating room for one-on-one intimacy, fiery chemistry, and irrational passion.',
    },
  },
  'sp/sx': {
    stacking: 'sp/sx',
    title: { id: 'Misteri Benteng Batin', en: 'The Mystical Craftsman / Fortress of Passion' },
    dominant: 'sp',
    secondary: 'sx',
    blindspot: 'so',
    description: {
      id: 'Sangat mandiri dan privat. Menjaga tempat perlindungan pribadi (sp) yang diisi dengan intensitas gairah mendalam atau obsesi khusus satu lawan satu (sx).',
      en: 'Fiercely self-reliant and private. Protects an inviolable sanctuary imbued with smoldering one-on-one passion and deep obsessions.',
    },
    lifeStyle: {
      id: 'Membangun batas teritorial yang kokoh dan hanya mengizinkan segelintir orang terpilih masuk ke dalam lingkar intim mereka.',
      en: 'Creates firm territorial boundaries and invites only a rare few into their deeply intimate sanctum.',
    },
    growthEdge: {
      id: 'Membuka diri terhadap dinamika kelompok yang lebih luas dan tidak mengabaikan relasi sosial komunitas (so).',
      en: 'Connecting with broader social networks and collective causes without cynical detachment.',
    },
  },
  'so/sp': {
    stacking: 'so/sp',
    title: { id: 'Pemimpin Kohesi Publik', en: 'The Diplomat / Social Architect' },
    dominant: 'so',
    secondary: 'sp',
    blindspot: 'sx',
    description: {
      id: 'Piawai menavigasi struktur kelompok, hukum sosial, dan kepemimpinan institusional dengan dukungan fondasi hidup yang matang.',
      en: 'Adept at navigating group hierarchies, social ethos, and institutional leadership backed by solid pragmatic self-care.',
    },
    lifeStyle: {
      id: 'Menghubungkan orang-orang berharga, merawat reputasi publik, dan memastikan tata kelola komunitas berjalan efisien.',
      en: 'Fostering cultural networks, building public standing, and ensuring institutional stability.',
    },
    growthEdge: {
      id: 'Menyelami kerentanan personal yang mendalam tanpa memedulikan citra atau norma kelompok.',
      en: 'Embracing unfiltered personal intimacy and raw, transgressive emotional fire.',
    },
  },
  'so/sx': {
    stacking: 'so/sx',
    title: { id: 'Kupu-kupu Magnetik', en: 'The Cultural Catalyst / Radiant Connector' },
    dominant: 'so',
    secondary: 'sx',
    blindspot: 'sp',
    description: {
      id: 'Karisma tinggi, ekspresif, dan memikat. Menggunakan daya tarik pribadi yang intens (sx) untuk menggerakkan atau mempesona panggung sosial yang luas (so).',
      en: 'Charismatic, radiant, and culturally electric. Harnesses magnetic interpersonal allure to light up the communal stage.',
    },
    lifeStyle: {
      id: 'Selalu berada di pusat interaksi yang dinamis, menginspirasi perbincangan, dan merayakan persahabatan penuh gairah.',
      en: 'Thrives at the heart of dynamic social circles, sparking conversations and building exciting creative alliances.',
    },
    growthEdge: {
      id: 'Memperhatikan rutinitas dasar: waktu istirahat, manajemen keuangan, dan kesehatan fisik jangka panjang (sp).',
      en: 'Grounding into somatic self-care, consistent budgeting, and routine bodily replenishment.',
    },
  },
  'sx/sp': {
    stacking: 'sx/sp',
    title: { id: 'Api Alkimia Transformasi', en: 'The Intense Alchemist / Smoldering Fire' },
    dominant: 'sx',
    secondary: 'sp',
    blindspot: 'so',
    description: {
      id: 'Didorong oleh rasa lapar akan intensitas eksistensial, gairah magnetis, dan perubahan radikal, yang didukung oleh daya tahan fisik mandiri.',
      en: 'Propelled by existential intensity, magnetic attraction, and transformative chemistry, anchored by solitary stamina.',
    },
    lifeStyle: {
      id: 'Mengejar pengalaman puncak, ikatan jiwa yang tak terlupakan, dan karya-karya seni atau ideologis yang membara.',
      en: 'Chasing peak experiences, profound soul-mergers, and high-voltage creative or interpersonal breakthroughs.',
    },
    growthEdge: {
      id: 'Menghargai kontribusi kelompok yang tenang dan tidak cepat menganggap remeh konvensi sosial.',
      en: 'Appreciating the gentle value of broad community belonging and mundane social civility.',
    },
  },
  'sx/so': {
    stacking: 'sx/so',
    title: { id: 'Komet Revolusioner', en: 'The Electric Pioneer / Torrent of Flame' },
    dominant: 'sx',
    secondary: 'so',
    blindspot: 'sp',
    description: {
      id: 'Sangat berenergi, teatrikal, dan menawan. Membawa gairah personal ke ranah publik dengan kekuatan transformatif yang memikat.',
      en: 'High-voltage, theatrical, and captivating. Channels raw one-on-one electricity into the public sphere with revolutionary fervor.',
    },
    lifeStyle: {
      id: 'Menembus batas-batas kebiasaan lama, menginspirasi banyak orang dengan keberanian dan intensitas emosional yang tinggi.',
      en: 'Shattering conventional boundaries and inspiring collective imagination through passionate, unfiltered magnetism.',
    },
    growthEdge: {
      id: 'Membangun kebiasaan hidup yang stabil agar tidak mengalami kelelahan fisik ekstrem (burnout sp).',
      en: 'Building disciplined physical rest, bodily awareness, and stable resource conservation.',
    },
  },
};
