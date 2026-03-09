import { createRouter, createWebHistory } from "vue-router";


import LeaderboardView from "@/views/LeaderboardView.vue";

const routes = [
    {
        path: '/',
        name: 'leaderboard',
        component: LeaderboardView
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router