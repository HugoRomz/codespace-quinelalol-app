<template>
  <div class="phase-tabs flex gap-1.5 mb-7 flex-wrap">
    <button
      v-for="phase in phases"
      :key="phase.id"
      class="phase-tab text.sm tracking-widest h-9.5 py-2 px-5 bg-transparent border border-[var(--border)] text-[var(--gray)] cursor-pointer transition-all"
      :class="isActive(phase.id)
        ? 'active'
        : ' '"
      @click="$emit('change', phase)"
    >
    {{ phase.name }}
    </button>
  </div>
</template>

<style>
  @reference "@/main.css";
  .phase-tab {
    font-family: 'Bebas Neue', sans-serif;
  }

  .phase-tab.active{
    @apply border-[var(--blue-accent)] text-[var(--blue-accent)] bg-[rgba(11,196,194,0.07)] 
  }

  .phase-tab:hover:not(.active) {
    @apply border-[var(rgba(255,255,255,0.3))] text-[var(--text)]
  }


</style>

<script setup>
import { mockPhases } from '@/data/index';

const props = defineProps({
  phases:        { type: Array,  required: true },
  activePhaseId: { type: Number, required: true },
})

defineEmits(['change'])

// ── helpers ────────────────────────────────────
function isActive(phaseId) {
  return phaseId === props.activePhaseId
}


</script>