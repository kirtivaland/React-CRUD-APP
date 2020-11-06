import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/kirtivaland/React-CRUD-APP';

export default {
    listAllBlogs: () => {
        axios.get(`${API_URL}/blog`)
    },
}