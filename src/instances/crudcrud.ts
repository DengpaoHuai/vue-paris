import axios from 'axios';

const crudcrud = axios.create({
  baseURL: 'https://crudcrud.com/api/4ab6c53878954fa19007abb64b177dac',
  headers: { 'Content-Type': 'application/json' }
});

export default crudcrud;
