import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./modules/Home";
import About from "./modules/About";
import Login from "./modules/Login";
import User from "./components/User";
import PrivateCalculator from "./components/PrivateCalculator";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/calculator",
      name: "PrivateCalculator",
      component: PrivateCalculator,
      beforeEnter(to, from, next) {
        if (localStorage.authenticated) {
          next();
        } else {
          next({ name: "Login" });
        }
      }
    },
    {
      path: "/about",
      name: "About",
      component: About,
      query: { plan: "private" }
    },
    {
      path: "/user/:id",
      name: "User",
      component: User
    }
  ]
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
