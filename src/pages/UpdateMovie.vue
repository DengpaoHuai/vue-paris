<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { DxForm, DxGroupItem, DxSimpleItem, DxButtonItem } from 'devextreme-vue/form';
import crudcrud from '@/instances/crudcrud';
import { useSnackbar } from "vue3-snackbar";
import { useRoute, useRouter } from 'vue-router';
import type { Movie } from '@/types/movies.type';
import useMovieStore from '@/store/useMovieStore';
import { useQuery } from '@tanstack/vue-query';
import { getMovieById } from '@/services/movies.service';
const snackbar = useSnackbar();
const router = useRouter()

const route = useRoute();
const id = route.params.id as string

const { data } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id),
    staleTime: 10000
})
console.log(data.value)
const currentMovie = route.meta.movie as Movie
const movieForm = reactive({
    title: data.value.title,
    director: data.value.director,
    description: data.value.description
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
        <p>Votre ID : {{ id }}</p>
        <DxForm id="form" :form-data="movieForm">
            <!-- Configuration goes here -->
            <DxGroupItem>
                <DxSimpleItem data-field="title" help-text="Example: +1(111)111-1111" />
                <DxSimpleItem data-field="director" help-text="Example: +1(111)111-1111" />
                <DxSimpleItem data-field="description" help-text="Example: +1(111)111-1111" />
            </DxGroupItem>

            <DxButtonItem :button-options="submitButtonOptions" />
        </DxForm>
    </form>

</template>