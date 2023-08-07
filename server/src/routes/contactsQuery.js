import express from 'express';
import * as contactController from '../controllers/contactsQuery.js';

const router = express.Router();

// contact route
router.route('/').post(contactController.addContactQuery);

export default router;
