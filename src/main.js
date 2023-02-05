import { createApp } from 'vue';
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'
import BaseCard from './components/ui/BaseCard.vue' // la metto qua in main js perche la voglio usare globalmente
import BaseButton from './components/ui/BaseButton.vue' // la metto qua in main js perche la voglio usare globalmente
import BaseBadge from './components/ui/BaseBadge.vue' // la metto qua in main js perche la voglio usare globalmente




const app = createApp(App)
app.use(router);
app.use(store);
app.mount('#app');
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)