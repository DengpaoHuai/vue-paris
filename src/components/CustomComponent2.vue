<script setup lang="ts">
import useDashboardStore, { store } from '@/dev_store/useDashboardStore';

const tasksStore = useDashboardStore();
</script>


<template>
    <div>
        <h1>Component 1</h1>
        <ul>
            <li v-for="task in tasksStore.tasks.taskList" :key="task.title">
                {{ task.title }}
            </li>
        </ul>
    </div>

</template>