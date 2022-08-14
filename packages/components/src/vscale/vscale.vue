<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
/* props */
interface Config {
  display?: string
  delay?: string
  screenW?: string
}
let props = withDefaults(defineProps<Config>(), {
  display: 'inline-block',
  delay: '300',
  screenW: '1536',
})

/* debounce */
const debounce = (fn: Function, delay: number) => {
  let timer: number | null = null
  return (...rest: any[]) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, rest)
    }, delay)
  }
}
let VScaleUseDebounce: any = null

/* onMounted */
const target = ref()
onMounted(() => {
  let VScaleListener = () => {
    let val = window.innerWidth / parseInt(props.screenW)
    target.value.style.zoom = val
  }
  VScaleListener()
  VScaleUseDebounce = debounce(VScaleListener, parseInt(props.delay))
  window.addEventListener('resize', VScaleUseDebounce)
})

/* onUnmounted */
onUnmounted(() => {
  window.removeEventListener('resize', VScaleUseDebounce)
})
</script>

<template>
  <div :style="'display:' + display" ref="target">
    <slot />
  </div>
</template>
