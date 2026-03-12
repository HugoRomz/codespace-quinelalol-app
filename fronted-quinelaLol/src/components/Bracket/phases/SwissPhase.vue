<template>
  <div class="overflow-x-auto pb-4">
    <div class="grid grid-cols-6 gap-4 min-w-max">

      <!-- Col 1: Ronda 1 -->
      <SwissColumn>
        <SwissGroup :matches="grouped['0-0']" label="Ronda 1 0-0" variant="normal" />
      </SwissColumn>

      <!-- Col 2: Ronda 2 -->
      <SwissColumn >
        <SwissGroup :matches="grouped['1-0']" label="Ronda 2 1-0" variant="normal"/>
        <SwissGroup :matches="grouped['0-1']" label="Ronda 2 0-1" variant="danger" />
      </SwissColumn>

      <!-- Col 3: Ronda 3 -->
      <SwissColumn >
        <SwissGroup :matches="grouped['2-0']" label="Ronda 3 2-0" variant="normal"/>
        <SwissGroup :matches="grouped['1-1']" label="Ronda 3 1-1" variant="mid"/>
        <SwissGroup :matches="grouped['0-2']" label="Ronda 3 0-2" variant="danger" />
      </SwissColumn>

      <!-- Col 4: Ronda 4 -->
      <SwissColumn >
        <SwissResult :teams="advancedTeams['3-0']" label="3-0 AVANZAN" type="advance"/>
        <SwissGroup :matches="grouped['2-1']" label="Ronda 4 2-1" variant="normal"/>
        <SwissGroup :matches="grouped['1-2']" label="Ronda 4 1-2" variant="danger" />
        <SwissResult :teams="eliminatedTeams['0-3']" label="0-3 ELIMINADOS" type="eliminated"/>
      </SwissColumn>

      <!-- Col 5: Ronda 5 -->
      <SwissColumn >
        <SwissResult :teams="advancedTeams['3-1']" label="3-1 AVANZAN" type="advance"/>
        <SwissGroup :matches="grouped['2-2']" label="Ronda 5 2-2"variant="mid"/>
        <SwissResult :teams="eliminatedTeams['1-3']" label="1-3 ELIMINADOS" type="eliminated"/>
      </SwissColumn>

      <!-- Col 6: Final -->
      <SwissColumn >
        <SwissResult :teams="advancedTeams['3-2']" label="3-2 AVANZAN" type="advance"/>
        <SwissResult :teams="eliminatedTeams['2-3']" label="2-3 ELIMINADOS" type="eliminated"/>
      </SwissColumn>


    </div>
  </div>
</template>

<script setup>
import { computed, toRef } from 'vue'
import { usePhaseMatches } from '@/composables/usePhaseMatches.js'
import SwissColumn    from '@components/Bracket/phases/swiss/SwissColumn.vue'
import SwissGroup     from '@components/Bracket/phases/swiss/SwissGroup.vue'
import SwissResult  from '@components/Bracket/phases/swiss/SwissResult.vue'

const props = defineProps({
  phase:   { type: Object, required: true },
  matches: { type: Array,  required: true },
})

const { grouped } = usePhaseMatches(toRef(props, 'matches'))
// equipos que ya avanzaron
const advancedTeams = computed(() => ({
  // ganadores de 2-0 → ya tienen record 3-0
  '3-0': getWinners('2-0'),

  // ganadores de 2-1 → ya tienen record 3-1
  '3-1': getWinners('2-1'),

  // ganadores de 2-2 → ya tienen record 3-2
  '3-2': getWinners('2-2'),
}))

// equipos eliminados
const eliminatedTeams = computed(() => ({
  // perdedores de 0-2 → ya tienen record 0-3
  '0-3': getLosers('0-2'),

  // perdedores de 1-2 → ya tienen record 1-3
  '1-3': getLosers('1-2'),

  // perdedores de 2-2 → ya tienen record 2-3
  '2-3': getLosers('2-2'),
}))

// helpers
function getWinners(record) {
  return (grouped.value[record] ?? [])
    .filter(m => m.winner_team_id)
    .map(m => m.team_a?.id === m.winner_team_id ? m.team_a : m.team_b)
}

function getLosers(record) {
  return (grouped.value[record] ?? [])
    .filter(m => m.winner_team_id)
    .map(m => m.team_a?.id !== m.winner_team_id ? m.team_a : m.team_b)
}
</script>