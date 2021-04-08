import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/tailwindcss.bundle.css"
import "./assets/css/jquery.range.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"

import "imagesloaded"

Vue.config.productionTip = false;

Vue.mixin({
    methods: {
        proportion(xp, yp, y) {
            let xxy = xp * y
            let xw = xxy/yp;
            return {
                width: xw,
                height: y
            }
        },
    }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
