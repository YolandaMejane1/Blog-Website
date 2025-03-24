import express from 'express';
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from '../controllers/postController.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/posts', upload, createPost);
router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.put('/posts/:id', upload, updatePost);
router.delete('/posts/:id', deletePost);

export default router;
