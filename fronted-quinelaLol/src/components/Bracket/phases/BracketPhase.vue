<template>
  <div class="overflow-x-auto pb-4">
    <div class="flex gap-6 min-w-max">

      <!-- double elimination -->
      <template v-if="isDouble">

        <div class="flex gap-6">
          <BracketColumn
            v-for="key in upperKeys"
            :key="key"
            :label="formatLabel(key)"
            :matches="grouped[key]"
            variant="upper"
          />
        </div>

        <div class="w-px bg-gold/20 self-stretch" />

        <div class="flex gap-6">
          <BracketColumn
            v-for="key in lowerKeys"
            :key="key"
            :label="formatLabel(key)"
            :matches="grouped[key]"
            variant="lower"
          />
        </div>

        <div class="w-px bg-gold/20 self-stretch" />

        <BracketColumn
          v-if="grouped['grand_final']"
          label="Grand Final"
          :matches="grouped['grand_final']"
          variant="grand"
        />

      </template>

      <!-- single elimination -->
      <template v-else>
        <BracketColumn
          v-for="key in groupKeys"
          :key="key"
          :label="formatLabel(key)"
          :matches="grouped[key]"
          variant="upper"
        />
      </template>

    </div>
  </div>
</template>

<script setup>
import { computed, toRef } from 'vue'
import { usePhaseMatches } from '@/composables/usePhaseMatches.js'
import BracketColumn from '../shared/BracketColumn.vue'

const props = defineProps({
  phase:   { type: Object, required: true },
  matches: { type: Array,  required: true },
})

const { grouped, groupKeys } = usePhaseMatches(toRef(props, 'matches'))

const isDouble = computed(() =>
  props.phase.config_json?.elimination === 'double'
)

const upperKeys = computed(() =>
  groupKeys.value.filter(k => k.startsWith('upper'))
)

const lowerKeys = computed(() =>
  groupKeys.value.filter(k => k.startsWith('lower'))
)

function formatLabel(key) {
  return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}
</script>