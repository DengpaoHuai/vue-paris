<script lang="ts">

export default {
    data() {
        return {
            planets: {
                count: 0,
                next: '',
                previous: '',
                results: []
            },
            loading: false,
            error: false
        }
    },

    mounted() {
        this.getPlanets('https://swapi.dev/api/planets/')
    },
    methods: {
        getPlanets(url: string) {
            this.loading = true
            fetch(url)
                .then((response) => response.json())
                .then((data) => this.planets = data)
                .catch((err) => this.error = err)
                .finally(() => this.loading = false)
        }
    }
}


</script>

<template>
    <div>
        <div>
            <p v-if="loading">Loading...</p>
        </div>
        <ul>
            <li v-for="(planet) in planets.results" :key="planet.url">
                {{ planet.name }}
            </li>
        </ul>
        <button :disabled="!planets.previous"
            @click="planets.previous && getPlanets(planets.previous)">précédent</button>
        <button :disabled="!planets.next" @click="planets.next && getPlanets(planets.next)">suivant</button>
    </div>
</template>