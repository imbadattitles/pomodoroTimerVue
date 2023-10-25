import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useWorkTimer } from './workTimer'
import { useOptions } from './option'

export const useRestTimer = defineStore('restTimer', () => {
  const option = useOptions()
  const workTimer = useWorkTimer()

  const mode = ref<'pause' | 'rest' | 'work'>('work')
  const ms = ref(300000)
  const minutes = ref('05')
  const seconds = ref('00')
  const timerId = ref(0)
  const tick = new Audio('./tick.mp3')
  const alarm = new Audio('./alarm.mp3')

  tick.loop = true
  tick.volume = 0.01
  alarm.volume = 0.5

  tick.addEventListener('timeupdate', function () {
    const buffer = 1.0
    if (this.currentTime > this.duration - buffer) {
      this.currentTime = 0
      this.play()
    }
  })

  const timerStart = () => {
    option.sound && tick.play()
    mode.value = 'rest'
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

  const toWork = () => {
    clearInterval(timerId.value)
    tick.pause()
    ms.value = option.shortBreak * 60000
    minutes.value = String(option.shortBreak > 9 ? option.shortBreak : '0' + option.shortBreak)
    seconds.value = '00'
    mode.value = 'work'
    workTimer.mode = 'pause'
  }

  return { minutes, seconds, timerStart, timerEnd, mode, ms, toWork }
})
