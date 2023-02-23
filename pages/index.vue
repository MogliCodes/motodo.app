<template>
  <main class="pt-24">
    <div class="container mx-auto">
      <TransitionGroup name="list" tag="div">
        <BaseAlert text="Todo has been saved successfully!" @click="display = false"/>
        <TodoCreatePanel/>
        <TodoListPanel :todos="todos"/>
      </TransitionGroup>
    </div>
  </main>
</template>
<script lang="ts" setup>
import TodoCreatePanel from "~/components/todos/TodoCreatePanel.vue";
import TodoListPanel from "~/components/todos/TodoListPanel.vue";
import {fetchTodos} from "~/composables/todos";
import {useTodosStore} from "~/stores/todos"

definePageMeta({
  middleware: 'auth'
})

const store = useTodosStore()
const todos = await fetchTodos()
const display = ref(true)

</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
