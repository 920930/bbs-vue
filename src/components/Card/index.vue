<template>
  <section class="bg-white text-sm mb-5 border">
    <h3 class="px-3 py-2 border-b border-dashed">
      <span v-if='title'>{{title}}</span>
      <slot name="title" v-else />
    </h3>
    <div class="p-3"><slot /></div>
  </section>
</template>

<script setup lang='ts'>
import {} from 'vue'
defineProps<{
  title?: string
}>()
</script>

<style lang="scss" scoped>

</style>