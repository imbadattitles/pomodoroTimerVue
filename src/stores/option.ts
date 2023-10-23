import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useWorkTimer } from './workTimer'
import { useRestTimer } from './restTimer'

export const useOptions = defineStore('options', () => {
  const workTimer = useWorkTimer()
  const restTimer = useRestTimer()
  const workTime = ref(25)
  const shortBreak = ref(5)

  const darkMode = ref(false)
  const sound = ref(true)

  const theme = ref('white')

  const setWorkTime = (payload: any) => {
    workTime.value = payload
    workTimer.minutes = payload > 9 ? String(payload) : String('0' + payload)
    workTimer.ms = payload * 60000
  }
  const setShortBreak = (payload: any) => {
    shortBreak.value = payload
    restTimer.minutes = payload > 9 ? String(payload) : String('0' + payload)
    restTimer.ms = payload * 60000
  }
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    darkMode.value
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }
  const toggleSound = () => {
    sound.value = !sound.value
  }
  return {
    workTime,
    setWorkTime,
    shortBreak,
    setShortBreak,
    darkMode,
    toggleDarkMode,
    sound,
    toggleSound,
    theme
  }
})
