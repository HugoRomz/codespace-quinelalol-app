<template>
  <div class="swiss-col flex flex-col gap-2.5 min-w-[160px]">
    <!-- <div class="text-sm tracking-widest text-center text-[var(--blue-accent)]
                border-b border-[var(--blue-accent)]/30 pb-2 uppercase">
      {{ label }}
    </div> -->
    
    <div class="flex flex-col gap-2.5 my-auto">
      <slot />
    </div>
  </div>
</template>

<style>
@refenrence "@/main.css";

.swiss-col{
  font-family:'Bebas Neue',sans-serif;
}
</style>
<!-- 
<script setup>
defineProps({
  label: { type: String, required: true }
})
</script> -->