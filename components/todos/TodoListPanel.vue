<template>
  <section class="pb-20">
    <BaseHeadline text="Your todos"/>
    <div class="flex flex-col gap-0.5 overflow-hidden rounded-2xl shadow-lg">
      <TodoItem v-for="todo in $attrs.todos" :key="todo.id" v-bind="todo"/>
    </div>
  </section>
</template>
<script lang="ts" setup>
import TodoItem from '~/components/todos/TodoItem.vue'
</script>
