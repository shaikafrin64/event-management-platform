const express = require('express');
const { createEvent, getEvents } = require('../Controllers/eventController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', getEvents);

module.exports = router;