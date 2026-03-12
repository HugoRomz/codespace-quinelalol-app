import { createRouter, createWebHistory } from "vue-router";


import LeaderboardView from "@/views/LeaderboardView.vue";
import BracketView from "@/views/BracketView.vue"

const routes = [
    {
        path: '/',
        name: 'leaderboard',
        component: LeaderboardView
    },
    {
        path: '/bracket',
        name: 'bracket',
        component: BracketView
    },
    {
        path: '/pickems',
        name: 'pickmens',
        component: LeaderboardView
    },
    {
        path: '/rules',
        name: 'rules',
        component: LeaderboardView
    },
    {
        path: '/admin',
        name: 'admin',
        component: LeaderboardView
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router