<template>
  <div class="match-card border border-[var(--border)] mb-2.5 overflow-hidden transition-colors hover:border-[var(--gold)]/70 duration-300" 
      :class="isFinished ? 'finished' : ''">
    
    <!-- Status bar -->
    <div
      class="px-3 py-1 text-center font-mono text-[0.6rem] tracking-widest"
      :class="statusClass"
    >
      {{ statusLabel }}
    </div>
    <!-- Team A -->
    <div
      class="match-team"
      :class="{
        win: isFinished && props.match.winner_team_id === match.team_a?.id,
        loss: isFinished && props.match.winner_team_id !== match.team_a?.id
      }"
    >
      <div class="team-info">
        <!-- logo placeholder hasta que tengas imágenes -->
        <div class="team-flag">
          {{ match.team_a?.tag?.charAt(0) ?? '?' }}
        </div>
        <span class="team-name">
          {{ match.team_a?.tag ?? 'TBD' }}
        </span>
      </div>
      <span class="match-score" :class="isWinner(match.team_a?.id) ? 'text-gold' : 'text-gray-muted'">
        {{ isFinished ? match.score_a : '0' }}
      </span>
    </div>

    <!-- Team B -->
   <div
      class="match-team"
      :class="{
        win: isWinner(match.team_b?.id),
        loss: isWinner(match.team_b?.id) === false
      }"
    >
      <div class="team-info">
        <div class="team-flag">
          {{ match.team_b?.tag?.charAt(0) ?? '?' }}
        </div>
        <span class="team-name">
          {{ match.team_b?.tag ?? 'TBD' }}
        </span>
      </div>
      <span class="match-score" :class="isWinner(match.team_b?.id) ? 'win' : 'loss'">
        {{ isFinished ? match.score_b : '0' }}
      </span>
    </div>

  </div>
</template>

<style>
@reference "@/main.css";

.match-team{
    @apply flex items-center justify-between px-3 py-2 gap-2;
}

.match-team + .match-team { border-top: 1px solid rgba(255,255,255,0.07); }

.team-info {
    @apply flex items-center gap-2
}

.team-flag {
    @apply text-[1rem]
}

.team-name{
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700; font-size: 0.95rem;
}

.match-score {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
    min-width: 20px;
    text-align: right;
}

.match-team.win { @apply bg-[rgba(200,170,110,0.07)]; }
.match-team.loss { opacity: 0.5; }
.match-team.tbd { opacity: 0.4; font-style: italic; }

.match-score.win { color: var(--gold); }    
.match-score.loss { color: var(--gray); }

.match-card.finished {
  @apply opacity-70
}

.match-card.finished:hover {
  @apply opacity-100
}

</style>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  match: { type: Object, required: true }
})

const isFinished = computed(() => props.match.status === 'FINISHED')

function isWinner(teamId:any) {
  if (!isFinished.value) return null
  return props.match.winner_team_id === teamId
}

const statusLabel = computed(() => {
  if (isFinished.value) return 'FINALIZADO'
  return 'PRÓXIMO'
})

const statusClass = computed(() => {
  if (isFinished.value) return 'text-gray-muted'
  return 'text-white/20'
})
</script>