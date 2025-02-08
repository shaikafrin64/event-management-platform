const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { name, description, date } = req.body;
  const event = new Event({ name, description, date, createdBy: req.userId });
  await event.save();
  res.status(201).json(event);
};

exports.getEvents = async (req, res) => {
  const events = await Event.find().populate('createdBy', 'username');
  res.json(events);
};