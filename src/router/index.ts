import { createRouter, createWebHistory } from "vue-router";


const routes = [
{path:'/', name:'Home', component: Home},
{path:'/devices', name:'Devices', component: Devices},


]


const router = createRouter({
    history: createWebHistory(),
    routes,
})