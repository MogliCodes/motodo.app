<template>
  <div class="flex justify-between bg-white bg-opacity-50 py-8 px-6">
    <div>
      <span class="text-xl font-bold">{{  $attrs.title }}</span><br>
      <span>{{ $attrs.description }}</span>
    </div>
    <div class="">
      <TodoStatusPill :text="$attrs.status" />
    </div>
  </div>
</template>

<script setup lang="ts">

// const props = defineProps<{}>()

import TodoStatusPill from "~/components/todos/TodoStatusPill.vue";
</script>
