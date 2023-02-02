<template>
    <button class="bg-mc-blue text-white font-display font-bold rounded-full inline-block py-1 px-3">
        {{ props.text }}
    </button>
</template>

<script setup lang="ts">

interface Props {
    text: String
}

const props = defineProps<Props>()

</script>
