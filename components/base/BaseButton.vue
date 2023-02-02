<template>
    <button class="inline-block rounded-full bg-mc-blue py-1 px-3 font-display font-bold text-white" :class="{'p-8': props.isLarge}">
        {{ props.text }}
    </button>
</template>

<script setup lang="ts">

type Props = {
    text: String
    isLarge: Boolean
}

const props = defineProps<Props>()

</script>
