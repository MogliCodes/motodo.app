<template>
    <main class="pt-24">
        <div class="container mx-auto">
          <h1 class="mb-8 text-4xl font-bold">Hello world</h1>
          <div class="mb-24 flex gap-8">
            <input placeholder="Learn 10 spanish verbs" class="block w-10/12 rounded-2xl bg-white bg-opacity-50 p-4 shadow-lg outline-mc-blue" type="text">
            <BaseButton class="w-2/12 text-2xl" :is-large="true" text="Add todo" />
          </div>
          <div class="flex flex-col gap-0.5">
            <TodoItem class="rounded-t-xl">
              <template #status>
                <TodoStatusPill />
              </template>
            </TodoItem>
            <TodoItem>
              <template #status>
                <TodoStatusPill />
              </template>
            </TodoItem>
            <TodoItem>
              <template #status>
                <TodoStatusPill />
              </template>
            </TodoItem>
            <TodoItem>
              <template #status>
                <TodoStatusPill />
              </template>
            </TodoItem>
          </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import TodoItem from "~/components/todos/TodoItem.vue";
import TodoStatusPill from "~/components/todos/TodoStatusPill.vue";
</script>
