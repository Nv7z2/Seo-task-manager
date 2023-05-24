import express from 'express';
import authController from '~controllers/authController';
const router = express.Router();

router.post('/login', authController.login);
router.put('/create-user', authController.generateUser);
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
