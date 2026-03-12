<script setup lang="ts">
import { computed } from 'vue';
import LeaderboardPodium from '@/components/LeaderBoard/LeaderboardPodium.vue';
import LeaderboardTable from '@/components/LeaderBoard/LeaderboardTable.vue';
import { usersStats } from '@/data/usersStats';


const sorted = computed(() => 
    [...usersStats].sort((a, b) => b.points - a.points)
)

const topThree = computed(() => sorted.value.slice(0, 3))
const theRest  = computed(() => sorted.value.slice(3))



</script>

<template>
    <div class="leaderboard-view relative z-10 max-w-6xl mx-auto px-5 pb-16">
        <LeaderboardPodium :users="topThree" />
        <LeaderboardTable :users="theRest" :max-points="sorted[0]?.points ?? 0"  />
    </div>
</template>

