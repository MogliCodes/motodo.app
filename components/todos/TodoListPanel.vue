<template>
  <section>
    <BaseHeadline text="Your todos" />
    <div class="flex flex-col gap-0.5 overflow-hidden rounded-2xl shadow-lg">
      <TodoItem v-for="todo in $attrs.todos" v-bind="todo" :key="todo.id" />
    </div>
  </section>
</template>
<script setup lang="ts">
import TodoItem from '~/components/todos/TodoItem.vue'
</script>
