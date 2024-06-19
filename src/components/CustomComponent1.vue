<script setup lang="ts">
import useDashboardStore from '@/dev_store/useDashboardStore';

const tasksStore = useDashboardStore();
</script>


<template>
    <div>
        <h1>Component 1</h1>
        <button @click="tasksStore.addTask({
            title: 'New Task',
            completed: false
        })">add task</button>
    </div>

</template>