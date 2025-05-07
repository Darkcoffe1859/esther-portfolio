import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Experience from '../pages/Experience.vue'
import Skills from '../pages/Skills.vue'
import Contact from '../pages/Contact.vue'  // Fixed the path here

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/experience',
        component: Experience
    },
    {
        path: '/skills',
        component: Skills
    },
    {
        path: '/contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
