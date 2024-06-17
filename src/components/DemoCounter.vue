<script setup>
import { ref, onMounted } from 'vue';
const counter = ref(0);
const incrementCounter = () => {
    counter.value++;
};
onMounted(() => {
    console.log('ok')
})
</script>

<template>
    <p>
        count : {{ counter }}
    </p>
    <button @click="incrementCounter">increment</button>
</template>