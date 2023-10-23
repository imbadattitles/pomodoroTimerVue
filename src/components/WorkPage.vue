<script setup lang="ts">
import { ref } from 'vue'
import OptionsModal from './OptionsModal.vue'
import WorkTimer from './WorkTimer.vue'

const OptionsModalVisible = ref(false)
const visibleFunc = () => {
  OptionsModalVisible.value = !OptionsModalVisible.value
}
</script>

<template>
  <main class="bg-beige dark:bg-[#0D0404] flex flex-col min-h-screen items-center justify-center">
    <OptionsModal v-model:modalVisible="OptionsModalVisible" />
    <WorkTimer :visible-func="visibleFunc" />
  </main>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
