import { createI18n } from 'vue-i18n';
import en from '@/locales/lang/en-US.json';
import zh from '@/locales/lang/zh-CN.json';

const messages = { en, zh };
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'zh',
  fallbackLocale: 'en',
  globalInjection: true,
  messages
});
export default i18n;
