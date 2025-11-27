import express from 'express';
import skillRouter from './skill';

const router = express();

router.use('/skills', skillRouter);

export default router;