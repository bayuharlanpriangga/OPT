import { LocalizedString } from '../../types';

export const AP_ASPECT_INFO: Record<string, { title: LocalizedString; domain: LocalizedString }> = {
  V: {
    title: { id: 'Volition (Kemauan / Tekad)', en: 'Volition (Will / Agency)' },
    domain: { id: 'Tujuan hidup, tekad, otonomi pribadi, kepemimpinan, dan rasa tanggung jawab.', en: 'Life purpose, willpower, personal autonomy, sovereignty, and decisiveness.' },
  },
  L: {
    title: { id: 'Logic (Logika / Kebenaran)', en: 'Logic (Reason / Truth)' },
    domain: { id: 'Argumentasi rasional, pengujian teori, pencarian fakta objektif, dan diskursus intelektual.', en: 'Rational argumentation, theoretical verification, objective analysis, and conceptual inquiry.' },
  },
  E: {
    title: { id: 'Emotion (Emosi / Perasaan)', en: 'Emotion (Affect / Soul)' },
    domain: { id: 'Ekspresi rasa, kepekaan seni, suasana batin, empati antarpribadi, dan gairah puitis.', en: 'Emotional expression, artistic resonance, psychological mood, and interpersonal vulnerability.' },
  },
  F: {
    title: { id: 'Physics (Fisik / Materi)', en: 'Physics (Body / Material)' },
    domain: { id: 'Kesehatan tubuh, kenyamanan ruang, estetika sensorik, pengelolaan uang dan harta benda.', en: 'Somatic health, tactile comfort, sensory aesthetics, wealth management, and physical stamina.' },
  },
};

export const AP_ATTITUDES_INFO: Record<number, { title: LocalizedString; dynamic: LocalizedString }> = {
  1: {
    title: { id: 'Posisi 1: Percaya Diri (Confident)', en: '1st Position: Confident' },
    dynamic: { id: 'Kuat & Mandiri (Self-Positif, Others-Negatif). Mengandalkan diri sendiri dan tidak bergantung pada validasi orang lain.', en: 'Self-Positive, Others-Negative. Sovereign, self-reliant, and needs no external permission.' },
  },
  2: {
    title: { id: 'Posisi 2: Fleksibel & Dialogis (Flexible)', en: '2nd Position: Flexible' },
    dynamic: { id: 'Terbuka & Bekerja Sama (Self-Positif, Others-Positif). Nyaman berdiskusi, membimbing, dan berbagi tanpa beban ego.', en: 'Self-Positive, Others-Positive. Process-oriented, collaborative, and naturally generous.' },
  },
  3: {
    title: { id: 'Posisi 3: Cemas & Sensitif (Insecure)', en: '3rd Position: Insecure' },
    dynamic: { id: 'Rentan & Waspada (Self-Negatif, Others-Negatif). Daerah luka batin, sensitif terhadap kritik, namun memacu pertumbuhan besar.', en: 'Self-Negative, Others-Negative. Hyper-sensitive, vulnerable, and yearns for resolution.' },
  },
  4: {
    title: { id: 'Posisi 4: Santai & Pasrah (Unconcerned)', en: '4th Position: Unconcerned' },
    dynamic: { id: 'Adaptif & Berserah (Self-Negatif, Others-Positif). Mudah menyerahkan urusan ini pada orang lain yang lebih ahli.', en: 'Self-Negative, Others-Positive. Unconcerned, low-maintenance, and happy to defer to experts.' },
  },
};

export const AP_TYPE_ARCHETYPES: Record<string, { title: LocalizedString; description: LocalizedString }> = {
  VLEF: { title: { id: 'Sang Inkuisitor (The Inquisitor)', en: 'The Inquisitor' }, description: { id: 'Pemimpin berpikiran tajam yang memandu masa depan lewat teori rasional.', en: 'Decisive ideological commander guiding progress through structural reasoning.' } },
  VLFE: { title: { id: 'Sang Pelopor Eksekutif (The Columnist)', en: 'The Columnist' }, description: { id: 'Praktis, tekad baja, dan membangun proyek nyata secara efisien.', en: 'Grounded, iron-willed implementer transforming physical blueprints into reality.' } },
  VELF: { title: { id: 'Sang Katalis Inspirator (The Muse)', en: 'The Muse' }, description: { id: 'Mempengaruhi emosi orang dengan visi kemauan yang menyala.', en: 'Charismatic visionary who moves hearts with radiant purpose and passion.' } },
  VEFL: { title: { id: 'Sang Pemimpin Orkestra (The Maestro)', en: 'The Maestro' }, description: { id: 'Memadukan tekad kuat dengan cita rasa seni estetika yang megah.', en: 'Commands devotion through aesthetic grandeur and dramatic leadership.' } },
  VFEL: { title: { id: 'Sang Penakluk Dinamis (The Overcomer)', en: 'The Overcomer' }, description: { id: 'Kekuatan fisik dan kemauan tak terpatahkan dalam menghadapi krisis.', en: 'Unstoppable physical resolve capable of surviving and conquering any crisis.' } },
  VFLE: { title: { id: 'Sang Penguasa Mandiri (The Imperator)', en: 'The Imperator' }, description: { id: 'Sangat mandiri dalam materi dan keputusan, pantang diatur.', en: 'Sovereign master of their domain, refusing any external coercion.' } },
  LVEF: { title: { id: 'Sang Filsuf Pengubah (The Theorist)', en: 'The Theorist' }, description: { id: 'Menggunakan logika untuk menentukan arah hidup dan masa depan.', en: 'Constructs philosophical doctrine that directs personal and collective will.' } },
  LVFE: { title: { id: 'Sang Metodis Murni (The Architect)', en: 'The Architect' }, description: { id: 'Arsitek sistem yang menyusun prosedur kerja rapi dan efisien.', en: 'Methodical systems architect designing pristine rational blueprints.' } },
  LEVF: { title: { id: 'Sang Visioner Romantis (The Romantic)', en: 'The Romantic' }, description: { id: 'Memadukan logika filosofis dengan penghayatan emosional mendalam.', en: 'Merges rigorous logical philosophy with rich emotional introspection.' } },
  LEFV: { title: { id: 'Sang Penulis Jiwa (The Bard)', en: 'The Bard' }, description: { id: 'Menuangkan wawasan rasional ke dalam sajak dan narasi indah.', en: 'Weaves analytical perception into poignant prose and soulful art.' } },
  LFEV: { title: { id: 'Sang Saintis Empiris (The Skeptic)', en: 'The Skeptic' }, description: { id: 'Menguji kebenaran lewat bukti nyata dan fakta eksperimental.', en: 'Relentless empirical scientist testing facts against the tactile world.' } },
  LFVE: { title: { id: 'Sang Teknokrat (The Craftsman)', en: 'The Craftsman' }, description: { id: 'Logis, paham cara kerja mesin dan teknologi dengan presisi tinggi.', en: 'Technocratic craftsman mastering physical mechanisms and analytical data.' } },
  EVLF: { title: { id: 'Sang Pembangkit Jiwa (The Catalyst)', en: 'The Catalyst' }, description: { id: 'Membakar semangat orang lain melalui pesan emosional yang bertekad.', en: 'Fiery emotive catalyst who sparks revolutions and inspires conviction.' } },
  EVFL: { title: { id: 'Sang Bintang Panggung (The Performer)', en: 'The Performer' }, description: { id: 'Karisma ekspresif yang memesona di panggung kehidupan.', en: 'Expressive performer radiating sensory charm and dynamic flair.' } },
  ELVF: { title: { id: 'Sang Nabi Puitis (The Prophet)', en: 'The Prophet' }, description: { id: 'Puitis, sangat peka pada kebenaran batin dan penderitaan hidup.', en: 'Poetic prophet illuminating deep spiritual and emotional truths.' } },
  ELFV: { title: { id: 'Sang Pencerita Suci (The Dreamer)', en: 'The Dreamer' }, description: { id: 'Hidup dalam dunia imajinasi emosional yang murni dan memesona.', en: 'Lives in a serene sanctuary of artistic feeling and tender imagination.' } },
  EFVL: { title: { id: 'Sang Pemuja Estetika (The Hedonist)', en: 'The Hedonist' }, description: { id: 'Mengejar kenikmatan hidup, cinta, dan estetika yang melimpah.', en: 'Passionate connoisseur of sensory delight, emotional warmth, and romance.' } },
  EFLV: { title: { id: 'Sang Pengayom Lembut (The Caregiver)', en: 'The Caregiver' }, description: { id: 'Memberi kehangatan emosional dan kenyamanan fisik bagi sesama.', en: 'Nurtures physical comfort and heartfelt solace for loved ones.' } },
  FVEL: { title: { id: 'Sang Pembuat Realitas (The Realist)', en: 'The Realist' }, description: { id: 'Menguasai dunia materi dengan tekad baja dan hasil nyata.', en: 'Pragmatic material master shaping the physical world with relentless drive.' } },
  FVLE: { title: { id: 'Sang Produser Tangguh (The Provider)', en: 'The Provider' }, description: { id: 'Penyedia kebutuhan yang kokoh, stabil, dan berlandaskan logika bisnis.', en: 'Bedrock provider securing material abundance through hard-headed sense.' } },
  FELV: { title: { id: 'Sang Kurator Estetika (The Connoisseur)', en: 'The Connoisseur' }, description: { id: 'Pakar cita rasa, kenyamanan indrawi, dan seni hidup mewah.', en: 'Connoisseur of fine cuisine, sensory elegance, and aesthetic grace.' } },
  FEVL: { title: { id: 'Sang Tuan Rumah Hangat (The Host)', en: 'The Host' }, description: { id: 'Menciptakan lingkungan fisik yang meriah dan penuh cinta.', en: 'Gracious host curating vibrant hospitality and warm cheer.' } },
  FLVE: { title: { id: 'Sang Insinyur Handal (The Builder)', en: 'The Builder' }, description: { id: 'Memahami seluk-beluk fisik dan mekanik dengan nalar jernih.', en: 'Grounded engineer mastering physical mechanics and practical truth.' } },
  FLEV: { title: { id: 'Sang Penjaga Sumber Daya (The Epicurean)', en: 'The Epicurean' }, description: { id: 'Menikmati kenyamanan materi secara santai dan cerdas.', en: 'Savvy realist enjoying material equilibrium with low-key wit.' } },
};
