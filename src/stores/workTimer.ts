import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useOptions } from './option'
import { useRestTimer } from './restTimer'

export const useWorkTimer = defineStore('workTimer', () => {
  const option = useOptions()
  const rest = useRestTimer()
  const mode = ref<'pause' | 'focus' | 'rest'>('pause')
  const ms = ref(1500000)
  const minutes = ref('25')
  const seconds = ref('00')
  const timerId = ref(0)
  const tick = new Audio('./tick.mp3')
  const alarm = new Audio('./alarm.mp3')

  tick.loop = true
  tick.volume = 0.01
  alarm.volume = 0.5

  const timerStart = () => {
    option.sound && tick.play()
    mode.value = 'focus'
    timerId.value = setInterval(() => {
      if (ms.value > 0) {
        ms.value -= 1000
        const sec = ms.value / 1000
        minutes.value =
          Math.floor(sec / 60) >= 10
            ? String(Math.floor(sec / 60))
            : '0' + String(Math.floor(sec / 60))
        seconds.value = sec % 60 >= 10 ? String(sec % 60) : '0' + String(sec % 60)
      } else {
        option.sound && alarm.play()
        option.sound && tick.pause()
      }
    }, 1000)
  }

  const timerEnd = () => {
    tick.pause()
    mode.value = 'pause'
    clearInterval(timerId.value)
  }

  const toRest = () => {
    clearInterval(timerId.value)
    tick.pause()
    ms.value = option.workTime * 60000
    minutes.value = String(option.workTime)
    seconds.value = '00'
    mode.value = 'rest'
    rest.mode = 'pause'
  }

  return { minutes, seconds, timerStart, timerEnd, mode, ms, toRest }
})
