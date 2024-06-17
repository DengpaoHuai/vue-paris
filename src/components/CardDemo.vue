<script setup lang="ts">
defineProps<{
    title: string,
    footer: string
}>()
</script>

<template>
    <section>
        <section>
            <h2>{{ title }}</h2>
            <p>Here is a card demo</p>
        </section>
        <slot></slot>

        <section>
            <p>
                {{ footer }}
            </p>
        </section>
    </section>
</template>