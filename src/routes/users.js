const Users = require('../controllers/users');
const router = require('express').Router();

router.get('/', Users.getAll);
router.get('/:id', Users.getById);
router.post('/', Users.create);

module.exports = router;