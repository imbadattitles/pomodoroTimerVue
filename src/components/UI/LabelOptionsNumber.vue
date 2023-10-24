<template>
  <label class="flex justify-between cursor-pointer items-center h-16"
    ><p class="text-base text-brown dark:text-white font-extralight">{{ text }}</p>
    <div
      class="w-20 h-10 flex relative py-2 pl-3 rounded-lg border-[1px] border-[silver] dark:border-[grey] overflow-hidden"
    >
      <input
        v-model="valuenumber"
        type="number"
        max="99"
        @input="change"
        class="text-brown dark:text-white dar select-none w-6 outline-none bg-brown dark:bg-black bg-opacity-0"
      />
      <div class="w-7 h-full ml-auto relative -top-2">
        <span class="cursor-pointer" @click="up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="18"
            viewBox="0 0 30 18"
            fill="none"
            class="hover:bg-brown dark:fill-white hover:bg-opacity-5 active:bg-opacity-10"
          >
            <path d="M15 5L20.1962 12.5H9.80385L15 5Z" class="fill-[#471515] dark:fill-white" />
            <path
              d="M0 0H30H0ZM30 18H0H30ZM-1 18V0H1V18H-1ZM30 0V18V0Z"
              class="fill-black dark:fill-white"
              fill-opacity="0.15"
              mask="url(#path-1-inside-1_126_171)"
            />
          </svg>
        </span>
        <span class="cursor-pointer" @click="down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="20"
            viewBox="0 0 29 20"
            fill="none"
            class="hover:bg-brown dark:fill-white hover:bg-opacity-5 active:bg-opacity-10"
          >
            <path
              d="M15 15.5L9.80385 8L20.1962 8L15 15.5Z"
              class="fill-[#471515] dark:fill-white"
            />
            <path
              d="M-1 -1H29V1H1L-1 -1ZM29 20H0H29ZM-1 20V-1L1 1V20H-1ZM29 0V20V0Z"
              class="fill-black dark:fill-white"
              fill-opacity="0.15"
              mask="url(#path-1-inside-1_126_173)"
            />
          </svg>
        </span>
      </div>
    </div>
  </label>
</template>
<script setup lang="ts">
import { ref } from 'vue'
let props = defineProps({
  text: String,
  value: {
    type: Number,
    required: true
  },
  changeProp: {
    type: Function,
    required: true
  }
})
const change = (e: Event) => {
  const element = e.target as HTMLInputElement
  if (+element.value > 99) {
    valuenumber.value = 99
    return props.changeProp(99)
  }
  if (+element.value < 99) {
    {
      valuenumber.value = +element.value
      return props.changeProp(element.value)
    }
  }
}
const up = () => {
  if (props.value < 99) {
    valuenumber.value = props.value + 5
    return props.changeProp(props.value + 5)
  }
  return props.changeProp(99)
}
const down = () => {
  if (props.value > 1) {
    valuenumber.value = props.value - 5
    return props.changeProp(props.value - 5)
  }
}

const valuenumber = ref(props.value)
</script>
<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'],
input[type='number']:hover,
input[type='number']:focus {
  appearance: none;
  -moz-appearance: textfield;
}
</style>
