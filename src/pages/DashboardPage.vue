<script setup lang="ts">
import CustomComponent1 from '@/components/CustomComponent1.vue';
import CustomComponent2 from '@/components/CustomComponent2.vue';
import dashboardStore from '@/dev_store/dashboardStore';
import { ref } from 'vue';

</script>

<template>
    <div>
        <h1>Dashboard</h1>
        <CustomComponent1></CustomComponent1>
        <CustomComponent2></CustomComponent2>
    </div>
</template>