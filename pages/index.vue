<template>
    <main class="pt-24">
        <div class="container mx-auto">
          <TodoCreatePanel/>
          <TodoListPanel :todos="todos" />
        </div>
    </main>
</template>
<script setup lang="ts">
import TodoCreatePanel from "~/components/todos/TodoCreatePanel.vue";
import TodoListPanel from "~/components/todos/TodoListPanel.vue";
import { fetchTodos } from "~/composables/todos";


definePageMeta({
  middleware: 'auth'
})

const todos = await fetchTodos()


</script>
