<template>
    <button class="shadow-lg  inline-block rounded-full bg-mc-blue py-1 px-3 font-display font-bold text-white hover:bg-mc-lightblue" :class="{'py-4 px-8 text-xl': props.isLarge}">
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
