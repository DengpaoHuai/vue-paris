<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const style = ref({
    backgroundColor: 'red'
})
const rand = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
watch(route, (...rest) => {
    console.log(rest)
    style.value = {
        backgroundColor: rand()
    }
})


</script>

<template>
    <div>
        <h1>header</h1>
        <slot></slot>
    </div>
</template>

<style scoped></style>