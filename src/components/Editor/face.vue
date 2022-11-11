<template>
  <ul class="absolute top-10 left-2 border grid grid-cols-12 shadow-md p-2 z-50 bg-white">
    <li
      v-for="(face, i) in faces"
      @click="factBtn(face.value)"
      :key="'face' + i"
      class="cursor-pointer border-l border-b p-1"
      :class="{'border-t': i < 12, 'border-r': (i + 1) % 12 === 0}"
    >
      <img :src="face.icon" alt="" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import faces from './faces';

const factBtn = (val: string) => {
  console.log(val)
}
</script>