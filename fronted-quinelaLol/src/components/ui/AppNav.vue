<script setup lang="ts">
import { Icon } from '@iconify/vue';

  const navItems = [
    { name: 'leaderboard', path: '/',         icon: 'ph:trophy-bold', label: 'Clasificación' },
    { name: 'bracket',     path: '/bracket',  icon: 'ph:lightning-bold', label: 'Tablero'       },
    { name: 'pickems',     path: '/pickems',  icon: 'ph:target-bold', label: "Pick'ems"      },
    { name: 'rules',       path: '/rules',    icon: 'ph:book-bookmark', label: 'Reglas'        },
    { name: 'admin',       path: '/admin',    icon: 'ph:gear-bold', label: 'Admin'         },
  ]
</script>

<template>
    <nav class="nav flex justify-center gap-1 pt-0 px-5 pb-6 flex-wrap w-full">
        <RouterLink 
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="nav-btn flex items-center gap-2 text-lg tracking-[2px] py-3 px-7 bg-transparent border border-[rgba(200,170,0.25)] text-[#A0A8B0]"
        >
            <Icon :icon="item.icon" class="nav-icon mb-0.5" />
            <span class="nav-label leading-none mt-0.5">{{ item.label }}</span>
        </RouterLink>
    </nav>
</template>

<style>
@reference "@/main.css";

.nav-btn {
    font-family: 'Bebas Neue', sans-serif;
    text-decoration: none;
    clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
    transition: all 0.2s;
}

.nav-btn:hover {
    @apply border-[var(--gold)] text-[var(--gold)] bg-[rgba(200,170,110,0.1)] -translate-y-1;
}

.nav-btn.router-link-active {
    @apply border-[var(--gold)] text-[var(--gold)] bg-[rgba(200,170,110,0.1)];
}



</style>