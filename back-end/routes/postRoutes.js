import express from 'express';
import multer from 'multer';
import path from 'path';
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from '../controllers/postController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

router.post('/posts', upload.single('image'), createPost);
router.put('/posts/:id', upload.single('image'), updatePost);
router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;
