import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/tailwindcss.bundle.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"

Vue.config.productionTip = false;

Vue.mixin({
    methods: {
        particules(id, callback = function(){}) {
            window.particlesJS.load(id, '/assets/plugin/particlesjs-config.json', callback);
        }
    }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
