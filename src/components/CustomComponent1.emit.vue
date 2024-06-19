<script setup lang="ts">
const emit = defineEmits(['addTask']);
</script>


<template>
    <div>
        <h1>Component 1</h1>
        <button @click="emit('addTask', {
            title: 'New Task',
            completed: false
        })">add task</button>
    </div>

</template>