<template>
  <label @click.prevent="change" class="flex cursor-pointer justify-between items-center h-16">
    <p class="text-base text-black dark:text-white font-extralight">{{ text }}</p>
    <label class="switch">
      <input type="checkbox" :checked="checked" />
      <span
        class="slider bg-[silver] dark:bg-[grey] before:bg-white dark:before:bg-black round"
      ></span
    ></label>
  </label>
</template>
<script setup lang="ts">
const change = () => {
  props.setChecked()
}

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    required: true
  },
  setChecked: {
    required: true,
    type: Function
  }
})
</script>
<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background: grey;
}

input:focus + .slider {
  box-shadow: 0 0 1px black;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(12px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
