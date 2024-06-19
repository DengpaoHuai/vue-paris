<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    title: String,
})

const emit = defineEmits(['onPress', "onToto", `onTata`])
</script>

<template>
    <button @click="e => emit('onPress', e)">{{ title }}</button>
</template>