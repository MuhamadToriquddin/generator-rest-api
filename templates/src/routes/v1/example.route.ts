import { Router } from 'express';
import * as exampleController from '../controllers/v1/example.controller.js';

const router = Router();

router.get('/example', userController.getAllUsers);

router.post('/example', userController.getAllUsers);

router.put('/example/:id', userController.getAllUsers);

router.delete('/example/:id', userController.getAllUsers);

export default routerExampleV1;