/* ================================
   TRIBAL LANGUAGES (CORE FOCUS)
================================ */

export const TRIBAL_LANGUAGES = [
  {
    code: 'sat',
    nllbCode: 'sat_Olck', // Santali (Ol Chiki)
    key: 'santali',
    name: 'Santali',
    nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ',
    speakers: '7.6M',
    region: 'Jharkhand, West Bengal, Odisha, Bihar',
    script: 'Ol Chiki',
    family: 'Austroasiatic',
    status: 'active',
    pilot: true
  },
  {
    code: 'gon',
    nllbCode: 'hin_Deva', // fallback via Hindi (temporary)
    key: 'gondi',
    name: 'Gondi',
    nativeName: 'గోండి',
    speakers: '3M',
    region: 'Madhya Pradesh, Maharashtra, Chhattisgarh',
    script: 'Telugu, Devanagari',
    family: 'Dravidian',
    status: 'active',
    pilot: true,
    fallback: true
  },
  {
    code: 'kru',
    nllbCode: 'hin_Deva', // fallback via Hindi (temporary)
    key: 'kurukh',
    name: 'Kurukh',
    nativeName: 'कुडुख़',
    speakers: '2M',
    region: 'Jharkhand, Chhattisgarh, Odisha',
    script: 'Devanagari',
    family: 'Dravidian',
    status: 'developing',
    pilot: false,
    fallback: true
  }
];

/* ================================
   INTERFACE LANGUAGES (APP UI)
================================ */

export const INTERFACE_LANGUAGES = [
  {
    code: 'en',
    nllbCode: 'eng_Latn',
    name: 'English',
    nativeName: 'English',
    default: true
  },
  {
    code: 'hi',
    nllbCode: 'hin_Deva',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    default: false
  }
];

/* ================================
   TRANSLATION TARGET LANGUAGES
================================ */

export const COMMON_LANGUAGES = [
  {
    code: 'en',
    nllbCode: 'eng_Latn',
    name: 'English',
    nativeName: 'English'
  },
  {
    code: 'hi',
    nllbCode: 'hin_Deva',
    name: 'Hindi',
    nativeName: 'हिन्दी'
  }
];

export const TARGET_LANGUAGES = [
  ...TRIBAL_LANGUAGES,
  ...COMMON_LANGUAGES
];

/* ================================
   HELPERS
================================ */

export const getLanguageByCode = (code) =>
  TARGET_LANGUAGES.find(lang => lang.code === code);

export const getDefaultInterfaceLanguage = () =>
  INTERFACE_LANGUAGES.find(lang => lang.default);
