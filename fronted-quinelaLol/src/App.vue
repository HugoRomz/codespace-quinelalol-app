<script setup lang="ts">
import AppHeader from '@components/ui/AppHeader.vue';
import AppNav from '@components/ui/AppNav.vue';


</script>

<template>
    <div class="container mx-auto px-4">
      <AppHeader />
      <AppNav />
    </div>
    <main style="flex: 1;">
      <RouterView />
    </main>

</template>
