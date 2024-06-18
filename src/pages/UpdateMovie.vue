<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { DxForm, DxGroupItem, DxSimpleItem, DxButtonItem } from 'devextreme-vue/form';
import crudcrud from '@/instances/crudcrud';
import { useSnackbar } from "vue3-snackbar";
import { useRoute, useRouter } from 'vue-router';
import type { Movie } from '@/types/movies.type';
const snackbar = useSnackbar();
const router = useRouter()


const route = useRoute();
const id = route.params.id as string
const currentMovie = route.meta.movie as Movie
const movieForm = reactive({
    title: currentMovie.title,
    director: currentMovie.director,
    description: currentMovie.description
});



const onSubmit = () => {
    console.log(movieForm);


    crudcrud.put('/movies/' + id, movieForm).then(response => {
        console.log(response);
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
                <DxSimpleItem data-field="title" help-text="Example: +1(111)111-1111" />
                <DxSimpleItem data-field="director" help-text="Example: +1(111)111-1111" />
                <DxSimpleItem data-field="description" help-text="Example: +1(111)111-1111" />
            </DxGroupItem>

            <DxButtonItem :button-options="submitButtonOptions" />
        </DxForm>
    </form>

</template>