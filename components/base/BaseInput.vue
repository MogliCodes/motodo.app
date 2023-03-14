<template>
  <div class="w-full">
    <input
      :required="required"
      :placeholder="props.placeholder"
      :value="modelValue"
      class="outline-mc-blue block w-full rounded-2xl bg-white bg-opacity-50 p-4 shadow-lg"
      type="text"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  required?: boolean
  placeholder: string
  modelValue: string
}>()

defineEmits(['update:modelValue'])
</script>
