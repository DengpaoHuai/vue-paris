import axios from 'axios';

const crudcrud = axios.create({
  baseURL: 'https://crudcrud.com/api/5795f829c89648a9ba582c5f6b5e5a54',
  headers: { 'Content-Type': 'application/json' }
});

export default crudcrud;
