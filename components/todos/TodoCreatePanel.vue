<template>
  <section>
    <BaseHeadline text="Add a new todo" />
    <form
      action=""
      class="mb-24 flex items-center gap-8"
      @submit.prevent="handleSubmit(todoTitle, todoDescription)"
    >
      <div class="flex w-full flex-col items-center justify-center gap-4">
        <BaseInput
          :model-value="todoTitle"
          placeholder="Add a title"
          required
          @update:modelValue="(newValue) => (todoTitle = newValue)"
        />
        <BaseInput
          :model-value="todoDescription"
          placeholder="Add a description"
          required
          @update:modelValue="(newValue) => (todoDescription = newValue)"
        />
      </div>
      <BaseButton
        :is-large="true"
        class="w-2/12 text-2xl"
        text="Add todo"
        type="submit"
      />
    </form>
  </section>
</template>

<script lang="ts" setup>
import { createTodo } from '~/composables/todos'

const emit = defineEmits(['todoCreated'])

const user = useSupabaseUser()
const todoTitle = ref()
const todoDescription = ref()

async function handleSubmit(
  _todoTitle: string,
  _todoDescription: string,
  userId: string,
) {
  const res = await createTodo(
    _todoTitle,
    _todoDescription,
    user?.value?.id || '',
  )
  if (res === 201) {
    todoTitle.value = ''
    todoDescription.value = ''
    emit('todoCreated')
  }
}
</script>
