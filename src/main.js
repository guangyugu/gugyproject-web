import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import api from './api/api'
import Axios from "axios";
import qs from "qs";
import router from "./router/index";

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(ViewUI);

Vue.prototype.$http = {
    get(url, data) {
        return Axios.get(url, {params: data})
    },
    post(url, data) {
        return Axios.post(url, qs.stringify(data));
    },
}

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
