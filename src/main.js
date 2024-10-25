import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axiosPlugin from './plugins/axios';

import './plugins/axios';

const app = createApp(App);
app.use(router);
app.use(axiosPlugin);
app.config.productionTip = false;

app.mount('#app');
