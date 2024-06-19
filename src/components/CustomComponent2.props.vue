<script setup lang="ts">
defineProps(['tasks']);
</script>


<template>
    <div>
        <h1>Component 1</h1>
        <ul>
            <li v-for="task in tasks" :key="task.title">
                {{ task.title }}
            </li>
        </ul>
    </div>

</template>