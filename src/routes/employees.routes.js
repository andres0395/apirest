import {Router} from 'express';
import { getEmployees, postEmployees, putEmployees, delEmployees } from '../controllers/employees.controller.js';

const router = Router();

router.get('/', getEmployees);
router.post('/', postEmployees);
router.put('/', putEmployees);
router.delete('/:id', delEmployees);

export default router;