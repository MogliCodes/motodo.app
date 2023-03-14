<template>
  <button
    :type="type"
    class="bg-mc-blue font-display hover:bg-mc-lightblue inline-block rounded-full py-1 px-3 font-bold text-white shadow-lg"
    :class="{ 'py-4 px-8 text-xl': props.isLarge }"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
type Props = {
  type?: 'submit' | 'button'
  text: String
  isLarge: Boolean
}

const props = defineProps<Props>()
</script>
