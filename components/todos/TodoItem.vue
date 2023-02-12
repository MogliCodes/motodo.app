<template>
  <div class="flex justify-between bg-white bg-opacity-50 py-8 px-6">
    <div>
      <span :class="todoClasses" class="text-xl font-bold">{{  $attrs.title }}</span><br>
      <span :class="todoClasses" >{{ $attrs.description }}</span>
    </div>
    <div class="">
      <TodoStatusPill :text="$attrs.status" />
    </div>
  </div>
</template>

<script setup lang="ts">

// const props = defineProps<{}>()
const attrs = useAttrs();

import TodoStatusPill from "~/components/todos/TodoStatusPill.vue";

const todoClasses = computed(() => {
  switch(attrs.status) {
    case 'done':
      return 'line-through'
  }
})

</script>
