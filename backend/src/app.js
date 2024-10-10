const express = require('express');
const session = require('express-session');
const passport = require('./config/authConfig'); // Importa a configuração do Passport
const authRoutes = require('./routes/authRoutes');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Configura as sessões
app.use(session({
  secret: 'SECRET',
  resave: false,
  saveUninitialized: true,
}));

// Inicializa Passport e sessões
app.use(passport.initialize());
app.use(passport.session());

// Usar as rotas de autenticação
app.use(authRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
