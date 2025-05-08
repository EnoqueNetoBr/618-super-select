import express from 'express';
import { authenticateToken } from '../controllers/authController.js';

const router = express.Router();

//http://localhost:300/secure/dashboard
router.get('/dashboard', authenticateToken, (req, resp) => {
  // If working, "req.userEmail" should be accessible.
  resp.status(200).send(req.userEmail);
  return;
});

export default router;
