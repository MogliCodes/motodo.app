<template>
  <div class="flex justify-between bg-white bg-opacity-50 py-8 px-6">
    <div>
      <span :class="todoClasses" class="text-xl font-bold">{{
        $attrs.title
      }}</span
      ><br />
      <span :class="todoClasses">{{ $attrs.description }}</span>
    </div>
    <div class="flex gap-4 items-center">
      <BaseIcon icon="edit" />
      <BaseIcon icon="delete" />
      <TodoStatusPill :text="$attrs.status" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoStatusPill from '~/components/todos/TodoStatusPill.vue'
const attrs = useAttrs()
const todoClasses = computed(() => {
  switch (attrs.status) {
    case 'done':
      return 'line-through'
  }
})
</script>
