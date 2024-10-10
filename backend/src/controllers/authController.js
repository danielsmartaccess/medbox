const passport = require('passport');

// Redireciona para a página de autenticação do Google
exports.authenticateUser = passport.authenticate('google', { scope: ['profile', 'email'] });

// Trata o callback do Google após a autenticação
exports.handleGoogleCallback = passport.authenticate('google', { failureRedirect: '/error' }, (req, res) => {
    res.redirect('/success');
});

// Exibe a página de sucesso
exports.successPage = (req, res) => {
    res.render('pages/success', { user: req.user });
};

// Exibe a página de erro
exports.errorPage = (req, res) => {
    res.send('Error logging in');
};
