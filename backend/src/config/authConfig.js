const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config(); // Para carregar as variáveis de ambiente

// Serializa o usuário para armazenar na sessão
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserializa o usuário para recuperá-lo da sessão
passport.deserializeUser((obj, done) => {
    done(null, obj);
});

// Configura a estratégia de autenticação do Google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,         // Armazene isso em .env
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Armazene isso em .env
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Chamado quando o login é bem-sucedido
    return done(null, profile);
}));

// Exporta o Passport configurado
module.exports = passport;
