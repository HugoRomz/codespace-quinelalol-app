<template>
  <component
    :is="currentComponent"
    :phase="phase"
    :matches="matches"
    :mode="mode"
  />
</template>

<script setup>
import { computed } from 'vue'

import BracketPhase from '@components/Bracket/phases/BracketPhase.vue'
import SwissPhase      from '@components/Bracket/phases/SwissPhase.vue'
// import GroupPhase      from './phases/GroupPhase.vue'

const props = defineProps({
  phase:   { type: Object, required: true },
  matches: { type: Array,  required: true },
  mode:    { type: String, default: 'viewer' }, // 'viewer' | 'pickem'
})

const phaseMap = {
  BRACKET:     BracketPhase,
  SWISS:    SwissPhase,
  // GROUP:    GroupPhase,
}

const currentComponent = computed(() =>
  phaseMap[props.phase.format_type] ?? null
)
</script>
