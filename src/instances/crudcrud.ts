import axios from 'axios';

const crudcrud = axios.create({
  baseURL: 'https://crudcrud.com/api/c921580c9c524d809d336c35350dfaf4',
  headers: { 'Content-Type': 'application/json' }
});

export default crudcrud;
