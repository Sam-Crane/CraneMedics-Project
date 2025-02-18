const config = {
  apiUrl: 'mongodb://localhost:27017',
  //'http://localhost:8000', // Replace with your Django backend URL
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
  },
};

export default config;
