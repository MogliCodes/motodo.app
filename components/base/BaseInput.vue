<template>
  <div>
    <input :value="modelValue" class="block w-full rounded-2xl bg-white bg-opacity-50 p-4 shadow-lg outline-mc-blue"
           placeholder="Learn 10 spanish verbs" type="text"
           @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script lang="ts" setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
