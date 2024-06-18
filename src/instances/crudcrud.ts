import axios from 'axios';

const crudcrud = axios.create({
  baseURL: 'https://crudcrud.com/api/cc3503746f544ae197ec99100204b7a5',
  headers: { 'Content-Type': 'application/json' }
});

export default crudcrud;
