import crudcrud from '@/instances/crudcrud';

export const getMovieById = async (id: string) => {
  const response = await crudcrud.get('/movies/' + id);
  return response.data;
};

export const getMovies = async () => {
  const response = await crudcrud.get('/movies');
  return response.data;
};

export const deleteMovieById = async (id: string) => {
  await sleep(2000);
  await crudcrud.delete('/movies/' + id);
};

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
