<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { DxForm, DxGroupItem, DxSimpleItem, DxButtonItem } from 'devextreme-vue/form';
import crudcrud from '@/instances/crudcrud';
import { useSnackbar } from "vue3-snackbar";
import { useRoute, useRouter } from 'vue-router';
import type { Movie } from '@/types/movies.type';
import useMovieStore from '@/store/useMovieStore';
const snackbar = useSnackbar();
const router = useRouter()

const movieStore = useMovieStore()
const route = useRoute();
const id = route.params.id as string
const currentMovie = route.meta.movie as Movie
const movieForm = reactive({
    title: currentMovie.title,
    director: currentMovie.director,
    description: currentMovie.description
});



const onSubmit = () => {
    movieStore.updateMovie(movieForm, id).then(response => {
        router.push("/list_movies")
        snackbar.add({
            type: 'info',
            text: 'This is a snackbar message',
        })
    }).catch(error => {
        console.log(error);
        snackbar.add({
            type: 'error',
            text: 'This is a snackbar message',
        })
    });
}


const submitButtonOptions = {
    text: "Submit the Form",
    useSubmitBehavior: true
};
</script>

<template>
    <form @submit.prevent="onSubmit">
        <DxForm id="form" :form-data="movieForm">
            <!-- Configuration goes here -->
            <DxGroupItem>
                <p>Votre ID : {{ id }}</p>
                <DxSimpleItem data-field="title" help-text="Example: +1(111)111-1111" />
                <DxSimpleItem data-field="director" help-text="Example: +1(111)111-1111" />
                <DxSimpleItem data-field="description" help-text="Example: +1(111)111-1111" />
            </DxGroupItem>

            <DxButtonItem :button-options="submitButtonOptions" />
        </DxForm>
    </form>

</template>