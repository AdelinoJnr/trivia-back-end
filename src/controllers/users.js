const Users = require('../services/users');

const create = async (req, res) => {
  const { status, data, message } = await Users.create(req.body);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await Users.getAll();

  res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Users.getById(id);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
};