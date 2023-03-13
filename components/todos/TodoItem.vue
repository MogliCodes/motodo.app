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
      <BaseIcon class="cursor-pointer" icon="edit" />
      <BaseIcon class="cursor-pointer" icon="delete" @click.native="handleDelete" />
      <TodoStatusPill :text="$attrs.status" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoStatusPill from '~/components/todos/TodoStatusPill.vue'
import {deleteTodo} from "~/composables/todos";
const attrs = useAttrs()

const todoClasses = computed(() => {
  switch (attrs.status) {
    case 'done':
      return 'line-through'
  }
})

function handleDelete() {
  deleteTodo(attrs.id as number)
}

</script>
