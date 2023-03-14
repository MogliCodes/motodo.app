<template>
  <section class="pb-20">
    <BaseHeadline text="Your todos" />
    <div class="flex flex-col gap-0.5 overflow-hidden rounded-2xl shadow-lg">
      <TodoItem
        v-for="todo in $attrs.todos"
        :key="todo.id"
        data-test="lorem ipsum dolor more text lorem ipsum"
        v-bind="todo"
        @todo-deleted="updateTodos"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import TodoItem from '~/components/todos/TodoItem.vue'

const emit = defineEmits(['todoDeleted'])

function updateTodos() {
  emit('todoDeleted')
}

</script>
