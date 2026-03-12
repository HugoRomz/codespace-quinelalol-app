<template>
  <div class="podium-card relative border border-[var(--border)] py-7 px-5 text-center transition-all overflow-hidden  hover:-translate-y-1" :class="`rank-${rank}`">
    <span class="podium-rank text-6xl leading-none opacity-15 absolute top-2 right-3.5">#{{ rank }}</span>
    <img :src="user.avatar" class="podium-avatar size-14 rounded-full mt-0 mx-auto mb-2 flex items-center justify-center text-2xl border-2 border-[var(--border)]"></img>
    <div class="podium-name text-2xl tracking-[2px] text-[var(--gold-light)] mb-1.5">{{ user.name }}</div>
    <div class="podium-pts text-3xl text-[var(--gold)]">{{ user.points.toLocaleString() }} <span class="text-xs text-[var(--gray)]">pts</span></div>
    <!-- <div class="podium-stats flex justify-center gap-5 mt-2.5 text-xs text-[var(--gray)]">
      <span><b class="text-[var(--text)]">{{ user.hits }}</b> aciertos</span>
      <span><b class="text-[var(--text)]">{{ accuracy }}%</b></span>
    </div> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: { type: Object,          required: true },
  rank:   { type: [Number, String], required: true }
})

const accuracy = computed(() =>
  Math.round((props.user.hits / props.user.totalPicks) * 100)
)
</script>


<style>
    @reference "@/main.css";

    .podium-card{
        font-family: 'Bebas Neue', sans-serif;
    }

    .podium-pts .podium-stats {
      font-family: 'Share Tech Mono', monospace;
    }

    .podium-card::before {
        content: '';
        @apply absolute inset-0 ;
        background: linear-gradient(180deg, rgba(200,170,110,0.07) 0%, transparent 60%);
    }

    .rank-1 {
        border-color: var(--gold);
        background: rgba(200,170,110,0.04);
    }

    .rank-2 { 
        border-color: rgba(180,180,200,0.4);
        grid-row: 1; 
    }
    .rank-3  { border-color: rgba(180,120,60,0.4); }

    .podium-card.rank-1 .podium-rank { color: var(--gold); opacity: 0.3; }
    
</style>