<template>
  <div class="lb-table-wrap border border-[var(--border)] overflow-hidden">

    <!-- cabecera -->
    <div class="lb-table-header grid grid-cols-[50px_1fr_80px_80px_90px] px-5 py-2.5 bg-[rgba(200,170,110,0.08)] text-sm tracking-widest text-[var(--gold)] uppercase border-b border-[var(--border)]">
      <span class="text-center">#</span>
      <span class="">Jugador</span>
      <span class="text-center ">Puntos</span>
      <span class="text-center">Aciertos</span>
      <span class="text-center">Precisión</span>
    </div>

    <!-- filas -->
    <UserRow
      v-for="(user, index) in users"
      :key="user.id"
      :player="user"
      :rank="index + 4"
      :max-points="maxPoints"
    />

  </div>
</template>

<script setup lang="ts">
import UserRow from '@components/LeaderBoard/UserRow.vue'


const props = defineProps<{
  users:   any[]
  maxPoints: number
}>()
</script>