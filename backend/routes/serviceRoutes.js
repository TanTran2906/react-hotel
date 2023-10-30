import express from 'express';
const router = express.Router();
// import { protect, admin } from '../middleware/authMiddleware.js';
import { getServices, getServiceById, deleteService, createService, updateService } from '../controllers/serviceController.js'

router.route('/').get(getServices).post(createService);
router.route('/:id').get(getServiceById).delete(deleteService).put(updateService)


export default router;
