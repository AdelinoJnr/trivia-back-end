const getConnection = require('./connection');
const { ObjectId } = require('mongodb');

const create = async (data) => {
  const db = await getConnection();
  const user = await db.collection('users').insertOne({ ...data });
  return { id: user.insertedId, ...data };
};

const getAll = async () => {
  const db = await getConnection();
  const users = await db.collection('users').find().toArray();
  return users;
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await getConnection();
  const user = await db.collection('users').findOne({ _id: ObjectId(id) });
  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};