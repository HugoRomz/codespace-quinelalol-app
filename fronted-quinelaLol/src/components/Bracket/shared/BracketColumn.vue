<template>
  <div class="flex flex-col gap-3 w-1/3 justify-center">
    <div
      class="round-label text-[0.9rem] tracking-[3px] text-[var(--blue-accent)] border-b border-[rgba(11,196,194,0.3)] pb-2 mb-3 text-center mt-4"
      :class="labelClass"
    >
      {{ label }}
    </div>
    <MatchCard
      v-for="match in matches"
      :key="match.id"
      :match="match"
    />
  </div>
</template>

<style>
@reference "@/main.css";

.round-label{
    font-family: 'Bebas Neue', sans-serif;
}
</style>

<script setup>
import { computed } from 'vue'
import MatchCard from './MatchCard.vue'

const props = defineProps({
  label:   { type: String, required: true },
  matches: { type: Array,  required: true },
  variant: { type: String, default: 'upper' },
})

const labelClass = computed(() => ({
  'text-blue-accent border-blue-accent/30':  props.variant === 'upper',
  'text-red-accent/70 border-red-accent/20': props.variant === 'lower',
  'text-gold border-gold/30':                props.variant === 'grand',
}))
</script>