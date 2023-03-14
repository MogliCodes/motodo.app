<template>
  <img class="w-7" :src="iconPath" alt="" />
</template>

<script setup lang="ts">
const IconEdit = '/img/003-edit-1.png'
const IconDelete = '/img/005-delete.png'

type Props = {
  icon: 'edit' | 'delete'
}

const props = defineProps<Props>()

const iconPath = computed<string>(() => {
  switch (props.icon) {
    case 'edit':
      return IconEdit
    case 'delete':
      return IconDelete
  }
})
</script>
