const express = require('express');
const AdminAuthController = require('../controllers/adminAuth.controller');
const { checkToken } = require('../utils');

const router = express.Router();

router.post('/login', AdminAuthController.login);
router.post('/save-user', AdminAuthController.saveUser);
router.get('/users', checkToken, AdminAuthController.getAllUsers);
router.put('/', checkToken, AdminAuthController.updateUser);
router.delete('/:id', checkToken, AdminAuthController.deleteUser);

router.put('/users', checkToken, AdminAuthController.updateUsers);
router.put('/language', checkToken, AdminAuthController.addLanguage);
router.delete(
  '/language/:language',
  checkToken,
  AdminAuthController.deleteLanguage,
);

router.get('/languages', AdminAuthController.getAllLanguages);

module.exports = router;
