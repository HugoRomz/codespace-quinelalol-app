<template>
  <div v-if="matches?.length" class="flex flex-col gap-1.5 my-2">
    <div class="swiss-record tracking-widest text-center uppercase border-b border-[var(--blue-accent)]/60 mb-1"
         :class="labelClass">
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
@refenrence "@/main.css";

.swiss-record{
  font-family:'Bebas Neue',sans-serif;
}
</style>

<script setup>
import { computed } from 'vue';
import MatchCard from '@components/Bracket/shared/MatchCard.vue'

const props = defineProps({
  matches: { type: Array,  default: () => [] },
  variant: { type: String, default: 'normal' },
  label: { type: String, required: false }
})

const labelClass = computed(() => ({
    'text-[var(--blue-accent)]': props.variant === 'normal',
    'text-[var(--red-accent)]':  props.variant === 'danger',
    'text-[var(--gold)]':        props.variant === 'mid',
}))
</script>