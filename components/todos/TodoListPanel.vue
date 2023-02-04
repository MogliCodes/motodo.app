<template>
  <section class="shadow-lg">
    <BaseHeadline text="Your todos" />
    <div class="flex flex-col gap-0.5 rounded-t-2xl rounded-b-2xl overflow-hidden">
      <TodoItem v-for="todo in $attrs.todos" v-bind="todo" :key="todo.id" />
    </div>
  </section>
</template>
<script setup lang="ts">
import TodoItem from "~/components/todos/TodoItem.vue";
</script>
