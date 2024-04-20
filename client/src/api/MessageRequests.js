import axios from 'axios'


const API = axios.create({ baseURL: 'https://social-media-aw1c.onrender.com/' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);