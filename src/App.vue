<script setup lang="ts">
import { useWorkTimer } from './stores/workTimer'
import { useRestTimer } from './stores/restTimer'
import WorkPage from './components/WorkPage.vue'
import RestPage from './components/RestPage.vue'

const timer = useWorkTimer()
const rest = useRestTimer()
</script>

<template>
  <WorkPage v-if="timer.mode !== 'rest'" />
  <RestPage v-if="rest.mode !== 'work'" />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
