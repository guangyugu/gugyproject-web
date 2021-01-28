import Vue from "vue";
import VueRouter from "vue-router";
import UserList from "../component/user/UserList";
import Home from "../component/Home";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component: Home
        },
        {
            path: '/userList',
            component: UserList
        },
    ],
    mode:'history'
});

