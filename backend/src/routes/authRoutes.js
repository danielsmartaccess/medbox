const express = require('express');
const { authenticateUser, handleGoogleCallback, successPage, errorPage } = require('../controllers/authController');
const router = express.Router();

// Inicia a autenticação com o Google
router.get('/auth/google', authenticateUser);

// Callback após o login com o Google
router.get('/auth/google/callback', handleGoogleCallback);

// Sucesso e erro após o login
router.get('/success', successPage);
router.get('/error', errorPage);

module.exports = router;
