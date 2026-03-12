
<script setup lang="ts">
import { computed } from 'vue'

import BracketPhase from '@components/Bracket/phases/BracketPhase.vue'
import SwissPhase      from '@components/Bracket/phases/SwissPhase.vue'
// import GroupPhase      from './phases/GroupPhase.vue'

const props = withDefaults(
  defineProps<{
    phase: any;
    matches: any[];
    mode?: string; 
  }>(),
  {
    mode: 'viewer' 
  }
);

const phaseMap: Record<string, any> = {
  BRACKET:     BracketPhase,
  SWISS:    SwissPhase,
  // GROUP:    GroupPhase,
}

const currentComponent = computed(() =>
  phaseMap[props.phase.format_type] ?? null
)
</script>


<template>
  <component
    :is="currentComponent"
    :phase="phase"
    :matches="matches"
    :mode="mode"
  />
</template>
