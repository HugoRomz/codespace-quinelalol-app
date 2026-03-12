import { computed } from 'vue'

export function usePhaseMatches(matches) {

  const grouped = computed(() =>
    matches.value.reduce((acc, match) => {
      const key = match.match_group
      if (!acc[key]) acc[key] = []
      acc[key].push(match)
      return acc
    }, {})
  )

  const groupKeys = computed(() =>
    Object.keys(grouped.value).sort((a, b) => {
      const slotA = grouped.value[a][0]?.slot_index ?? 0
      const slotB = grouped.value[b][0]?.slot_index ?? 0
      return slotA - slotB
    })
  )

  return { grouped, groupKeys }
}