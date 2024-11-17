// controllers/seminarController.js
const Seminar = require('../models/Seminar');

exports.getAllSeminars = async (req, res) => {
  const seminars = await Seminar.find();
  res.json(seminars);
};

exports.createSeminar = async (req, res) => {
  const { title, date, participants } = req.body;

  const seminar = new Seminar({ title, date, participants });
  await seminar.save();

  res.status(201).json(seminar);
};
