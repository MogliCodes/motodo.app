<template>
  <section>
    <BaseHeadline text="Add a new todo" />
    <div class="mb-24 flex gap-8">
      <BaseInput />
      <BaseButton @click="createTodo(todoInput)" class="w-2/12 text-2xl" :is-large="true" text="Add todo" />
    </div>
  </section>
</template>

<script setup lang="ts">
import {createTodo} from "~/composables/todos";

const todoInput = ref()

</script>
