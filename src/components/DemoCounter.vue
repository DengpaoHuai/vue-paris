<script setup>
import { ref, onMounted, unMounted } from 'vue';
const counter = ref(0);
const incrementCounter = () => {
    counter.value++;
};
onMounted(() => {
    console.log('ok')
})
unMounted(() => {
    console.log('bye');
})
</script>

<template>
    <p>
        count : {{ counter }}
    </p>
    <button @click="incrementCounter">increment</button>
</template>