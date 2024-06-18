import crudcrud from '@/instances/crudcrud';
import { onMounted, ref } from 'vue';

import { useSnackbar } from 'vue3-snackbar';
const useFetch = <T>(url: string) => {
  const data = ref<T | null>(null);
  const snackbar = useSnackbar();

  const getData = () => {
    crudcrud.get(url).then((response) => {
      console.log(response);
      data.value = response.data;
    });
  };

  const deleteItemById = async (id: string) => {
    await crudcrud.delete(`${url}/${id}`);
    getData();
    snackbar.add({
      type: 'info',
      text: 'This is a snackbar message'
    });
  };

  onMounted(() => {
    getData();
  });

  return {
    data,
    refetch: getData,
    deleteItemById
  };
};

export default useFetch;
