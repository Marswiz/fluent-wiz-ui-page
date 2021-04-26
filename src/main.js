import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import fluentWizUi from 'fluent-wiz-ui';
import 'fluent-wiz-ui/dist/fluent-wiz-ui.css';
import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.use(fluentWizUi)
app.mount('#app')
