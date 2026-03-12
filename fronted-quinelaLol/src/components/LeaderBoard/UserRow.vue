<template>
  <div class="grid grid-cols-[50px_1fr_80px_80px_90px] text-center items-center px-5 py-2.5 border-b border-white/5 hover:bg-[var(--gold)]/70 transition-colors">
    <span class="rank text-2xl text-center text-gray-muted">{{ rank }}</span>

    <div class="player-info flex items-center gap-3">
      <div class="avatar">
        <img :src="player.avatar" alt="Foto perfil de usuario" class="rounded-full size-10">
      </div>
      <div>
        <div class="player-name font-bold">{{ player.name }}</div>
        <div class="player-sub text-left text-[var(--gray)]">{{ player.hits }}/{{ player.totalPicks }} picks</div>
      </div>
    </div>

    <span class="points text-xl text-[var(--gold)]">{{ player.points.toLocaleString() }}</span>
    <span class="hits text-[0.95rem] text-[var(--gray)]">{{ player.hits }}</span>

    <span class="accuracy " :class="accuracyClass">{{ accuracy }}%</span>

  </div>
</template>

<script setup>
import { computed } from 'vue'


const props = defineProps({
  player:    { type: Object, required: true },
  rank:      { type: Number, required: true },
  maxPoints: { type: Number, required: true }
})

const accuracy = computed(() =>
  Math.round((props.player.hits / props.player.totalPicks) * 100)
)

const progress = computed(() =>
  Math.round((props.player.points / props.player.maxPoints) * 100)
)

const accuracyClass = computed(() => {
  if (accuracy.value >= 75) return 'good'
  if (accuracy.value >= 55) return 'mid'
  return 'bad'
})
</script>


<style>
@reference "@/main.css";

.points, .hits, .accuracy{
  font-family: 'Share Tech Mono', monospace;
}

</style>