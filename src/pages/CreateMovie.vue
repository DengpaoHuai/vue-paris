<script setup lang="ts">
import { reactive } from 'vue';
import { DxForm, DxGroupItem, DxSimpleItem, DxButtonItem } from 'devextreme-vue/form';
import crudcrud from '@/instances/crudcrud';
import { useSnackbar } from "vue3-snackbar";
import { useRouter } from 'vue-router';
const snackbar = useSnackbar();
const router = useRouter()

const movieForm = reactive({
    title: 'default',
    director: '',
    description: ''
});

const onSubmit = () => {
    console.log(movieForm);
    /*  fetch("https://crudcrud.com/api/c921580c9c524d809d336c35350dfaf4/movies", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(movieForm)
      }).then(response => {
          console.log(response);
      }).then(data => {
          console.log(data);
      });*/

    crudcrud.post('/movies', movieForm).then(response => {
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