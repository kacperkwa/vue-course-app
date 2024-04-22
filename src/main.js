import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/layout/BaseCard.vue';
import BaseButton from './components/layout/BaseButton.vue';
import BaseBadge from './components/layout/BaseBadge.vue';
import BaseSpinner from './components/layout/BaseSpinner.vue';
const app = createApp(App);
app.use(router);
app.use(store);
app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseBadge', BaseBadge);
app.component('BaseSpinner', BaseSpinner);
app.mount('#app');
