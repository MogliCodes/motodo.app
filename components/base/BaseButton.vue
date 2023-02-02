<template>
    <button class="bg-mc-blue text-white font-display font-bold rounded-full inline-block py-1 px-3"> 
        {{ text }}
    </button>
</template>

<script setup lang="ts">

interface Props {
    text: String
}

const { text } = defineProps<Props>()

</script>