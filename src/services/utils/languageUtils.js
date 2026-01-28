import { TRIBAL_LANGUAGES, TARGET_LANGUAGES } from '../../constants/languages';

export const getLanguageName = (code) => {
  const all = [...TRIBAL_LANGUAGES, ...TARGET_LANGUAGES];
  const lang = all.find(l => l.code === code);
  return lang ? lang.name : code;
};

export const getNativeName = (code) => {
  const all = [...TRIBAL_LANGUAGES, ...TARGET_LANGUAGES];
  const lang = all.find(l => l.code === code);
  return lang ? lang.nativeName : code;
};

export const isPilotLanguage = (code) => {
  const lang = TRIBAL_LANGUAGES.find(l => l.code === code);
  return Boolean(lang?.isPilot);
};

export const getSupportedLanguageCodes = () => {
  return [...TRIBAL_LANGUAGES, ...TARGET_LANGUAGES].map(l => l.code);
};
