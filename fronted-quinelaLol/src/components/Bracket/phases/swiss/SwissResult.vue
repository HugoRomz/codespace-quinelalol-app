<!-- SwissResultBox.vue -->
<template>
  <div class="border py-2.5 px-3.5" :class="boxClass">
    <div class="labelClass tracking-widest mb-1.5 " :class="labelClass">
      {{ label }}
    </div>
    <div class="flex flex-wrap gap-1.5 ">
      <div
        v-for="team in teams"
        :key="team.id"
        class="size-8 border border-dashed border-[rgba(255,255,255,0.2)] rounded-b-sm flex items-center justify-center"
        :class="teamClass"
      >
        {{ team.tag }}
      </div>
    </div>
  </div>
</template>

<style>
@refenrence "@/main.css";

.labelClass{
  font-family:'Bebas Neue',sans-serif;
}
</style>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    teams: any[];        
    label: string;        
    type?: string;       
  }>(),
  {
    teams: () => [],      
    type: 'advance'      
  }
);

const isAdvance = computed(() => props.type === 'advance')

const boxClass  = computed(() => isAdvance.value
  ? 'border-[var(--green-accent)]/30 bg-[var(--green-accent)]/5 text-[var(--green-accent)]'
  : 'border-[var(--red-accent)]/30 bg-[var(--red-accent)]/5 text-[var(--red-accent)]'
)
const labelClass = computed(() => isAdvance.value ? 'text-green-accent' : 'text-red-accent')
const teamClass  = computed(() => isAdvance.value
  ? 'text-[var(--green-accent)] bg-[var(--green-accent)]/10'
  : 'text-[var(--red-accent)] bg-[var(--red-accent)]/10 line-through'
)
</script>