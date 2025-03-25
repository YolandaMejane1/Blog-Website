import axios from 'axios'; // axioms link the backend to the frontend

const API_URL = process.env.REACT_APP_API_URL || 'https://blog-website-5-r5pv.onrender.com/api/posts';
// this is to get all posts
export const getAllPosts = () => {
    return axios.get(API_URL);
  };
// getting posts by their id
  export const getPostById = (id) => {
    return axios.get(`${API_URL}/${id}`);
  };
// function to create a new post
  export const createPost = (postData) => {
    return axios.post(API_URL, postData);
  };
  // function to update a post that already exists
  export const updatePost = (id, updatedData) => {
    return axios.put(`${API_URL}/${id}`, updatedData);
  };
// function to delete a post
export const deletePost = (id) => {
    return axios.delete(`${API_URL}/${id}`);
  };
