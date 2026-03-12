<template>
  <div class="lb-hero container mx-auto  grid grid-cols-3 gap-4 mb-8">
    <PodiumCard :user="users[1]" rank="2" />
    <PodiumCard :user="users[0]" rank="1" />
    <PodiumCard :user="users[2]" rank="3" />
  </div>
</template>

<script setup>
import PodiumCard from './PodiumCard.vue'

defineProps({
  users: {
    type: Array,
    required: true
  }
})
</script>