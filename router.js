import Vue from 'vue';
import VueRouter from 'vue-router';
import Todos from 'D:/import ubuntu/SF/JS/vueproj/completed/client/src/Todos.vue'

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'todos',
        component: Todos,
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
