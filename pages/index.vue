<template>
  <main class="pt-24">
    <div class="container mx-auto">
      <BaseAlert
        v-if="store.$state.showAlert"
        :text="store.$state.alert"
        @click="display = false"
      />
      <TodoCreatePanel @todo-created="updateTodos" />
      <TodoListPanel :todos="todos" @todo-deleted="updateTodos" />
    </div>
  </main>
</template>
<script lang="ts" setup>
import TodoCreatePanel from '~/components/todos/TodoCreatePanel.vue'
import TodoListPanel from '~/components/todos/TodoListPanel.vue'
import { fetchTodos } from '~/composables/todos'
import { useTodosStore } from '~/stores/todos'

definePageMeta({
  middleware: 'auth',
})
const user = useSupabaseUser()
const store = useTodosStore()
let todos = await fetchTodos(user?.value?.id)
const display = ref(true)

async function updateTodos() {
  console.log('UPDATE TODOS')
  todos = await fetchTodos(user?.value?.id)
}
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
