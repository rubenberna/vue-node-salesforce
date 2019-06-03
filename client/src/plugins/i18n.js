import Vue from 'vue'; 
import VueI18n from 'vue-i18n'; 
import nl from '@/lang/nl'
import fr from '@/lang/fr'
Vue.use(VueI18n);

const messages = { nl, fr };

const i18n = new VueI18n({ 
  locale: 'nl', // set locale    
  fallbackLocale: 'nl', // set fallback locale    
  messages, // set locale messages
});

export default i18n