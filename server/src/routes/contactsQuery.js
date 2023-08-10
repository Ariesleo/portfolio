import express from 'express';
import * as contactController from '../controllers/contactQuery/contactsQuery.js';

const router = express.Router();

// contact route
router
  .route('/contact')
  .post(
    contactController.validateContactQuery,
    contactController.addContactQuery
  );

export default router;
