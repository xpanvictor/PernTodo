import axios from 'axios';

const Call = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/todo',
  headers: {
    'x-custom-key': 'key-z9',
  },
});

export default Call;
