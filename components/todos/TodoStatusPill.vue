<template>
  <span
    :class="pillColorClass"
    class="rounded-full px-3 py-1.5 text-sm font-bold"
    >{{ $attrs.text }}</span
  >
</template>

<script setup lang="ts">
const attrs = useAttrs()

const pillColorClass = computed<string>(() => {
  switch (attrs.text) {
    case 'todo':
      return 'bg-rose-400 text-white'
    case 'doing':
      return 'bg-mc-lightblue text-white'
    case 'done':
      return 'bg-mc-fern text-white'
  }
})
</script>
