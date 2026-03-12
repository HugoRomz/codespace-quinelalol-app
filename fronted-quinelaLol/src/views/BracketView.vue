
<script setup lang="ts">
import { ref, computed } from 'vue'

import PhaseTabs     from '@/components/Bracket/PhaseTabs.vue'
 import PhaseRenderer from '@/components/Bracket/PhaseRenderer.vue'

import { mockTournament } from '@/data/tournaments'
import { mockPhases } from '@/data';


const phasesData: Record<number, any> = mockPhases;

// ── datos ──────────────────────────────────────
const tournament = ref(mockTournament)

// fase activa por defecto: la primera
const activePhase = ref(tournament.value.phases[0])

// partidos de la fase activa
const activeMatches = computed(() => {
  if (!activePhase.value) return [];
  return phasesData[activePhase.value.id]?.matches ?? []
})

// ── eventos ────────────────────────────────────
function onPhaseChange(phase:any) {
  activePhase.value = phase
}
</script>

<template>
  <div class="container mx-auto z-5 max-w-7xl my-0 pt-0 py-5 pb-16">

    <!-- Tabs de fases -->
    <PhaseTabs
      v-if="activePhase"
      :phases="tournament.phases"
      :active-phase-id="activePhase.id"
      @change="onPhaseChange"
    />

     <PhaseRenderer
      :phase="activePhase"
      :matches="activeMatches"
    />



  </div>
</template>
