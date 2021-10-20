const Users = require('../models/users');
const Schema = require('../utils/schema');

const create = async (data) => {
  const { error } = Schema.createUser.validate(data);
  if (error) return { status: 400, message: 'Invalid entries!' };

  const user = await Users.findEmail(data.email);
  if (user) return { status: 400, message: 'Email alrealy registed!' };

  const newUser = await Users.create(data);
  return { status: 201, data: newUser };
};

const getAll = async () => {
  const users = await Users.getAll();

  return { status: 200, data: users };
};

const getById = async (id) => {
  const user = await Users.getById(id);
  if (!user) return { status: 404, mesage: 'User not found!' };

  return { status: 200, data: user };
};

module.exports = {
  create,
  getAll,
  getById
};