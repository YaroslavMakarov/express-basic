import Router from 'express';
import PostController from './controller.js';

const router = new Router();

router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.post('/posts', PostController.create);
router.put('/posts', PostController.update);
router.delete('/posts/:id', PostController.delete);

export default router;
