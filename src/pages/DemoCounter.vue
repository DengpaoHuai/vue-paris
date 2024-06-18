<script setup>
import { ref, onMounted, } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
console.log(router)
const route = useRoute();
console.log(route)
const counter = ref(0);
const incrementCounter = () => {
    counter.value++;
    if (counter.value === 3) {
        router.push('/')
    }
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