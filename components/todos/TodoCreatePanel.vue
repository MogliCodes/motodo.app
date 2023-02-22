<template>
  <section>
    <BaseHeadline text="Add a new todo" />
    <form
      @submit="createTodo(todoTitle, todoDescription)"
      class="mb-24 flex items-center gap-8"
      action=""
    >
      <div class="flex w-full flex-col items-center justify-center gap-4">
        <BaseInput
          required
          :model-value="todoTitle"
          placeholder="Add a title"
          @update:modelValue="(newValue) => (todoTitle = newValue)"
        />
        <BaseInput
          required
          :model-value="todoDescription"
          placeholder="Add a description"
          @update:modelValue="(newValue) => (todoDescription = newValue)"
        />
      </div>
      <BaseButton
        type="submit"
        :is-large="true"
        class="w-2/12 text-2xl"
        text="Add todo"
      />
    </form>
  </section>
</template>

<script lang="ts" setup>
import { createTodo } from '~/composables/todos'

const todoTitle = ref()
const todoDescription = ref()
</script>
