<script setup lang="ts">
import LogoIcon from '../icons/LogoIcon.vue';

</script>

<template>
    <div class="header relative z-10 text-center pt-8 mx-auto">
        <div class="header-logo flex items-center justify-center gap-4 mb-1">
            <div class="logo-icon"><LogoIcon /></div>
            <h1 class="main-title uppercase leading-none bg-clip-text text-transparent">Worlds Quinela</h1>
            <div class="logo-icon"><LogoIcon /></div>
        </div>
        <div class="header-sub ">League of Legends · World Championship 2026</div>
        <div class="divider-gold"></div>
    </div>
</template>

<style>
@reference "@/main.css";

 .logo-icon {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    @apply  w-16 h-17 p-3 flex items-center justify-center text-2xl bg-[linear-gradient(135deg,var(--gold-dark),var(--gold))];
 }

.main-title {
    font-family: "Bebas Neue", sans-serif;
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    letter-spacing: 6px;
    background-image: linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 60%, var(--gold-dark) 100%);
}

.header-sub {
    font-family: "Share Tech Mono", monospace;
    @apply text-sm text-[var(--blue-accent)] tracking-[4px] mt-2 uppercase
}

.divider-gold {
  /* Asegúrate de que el contenedor tenga display block y un ancho definido */
  @apply w-[400px] h-[1px] mx-auto my-4;
  background: linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%);
}
</style>    