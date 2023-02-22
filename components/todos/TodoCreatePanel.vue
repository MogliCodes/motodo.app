<template>
  <section>
    <BaseHeadline text="Add a new todo"/>
    <div class="mb-24 flex items-center gap-8">
      <div class="flex w-full flex-col items-center justify-center gap-4">
        <BaseInput :model-value="todoTitle" placeholder="Add a title"
                   @update:modelValue="newValue => todoTitle = newValue"/>
        <BaseInput :model-value="todoDescription" placeholder="Add a description"
                   @update:modelValue="newValue => todoDescription = newValue"/>
      </div>
      <BaseButton :is-large="true" class="w-2/12 text-2xl" text="Add todo"
                  @click="createTodo(todoTitle, todoDescription)"/>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {createTodo} from "~/composables/todos";

const todoTitle = ref()
const todoDescription = ref()

</script>
