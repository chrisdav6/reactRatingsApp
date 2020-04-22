module.exports = {
  googleClientID:
    '344438504190-pemmhf015lsidgkf9cnj5qdie470tg3i.apps.googleusercontent.com',
  googleClientSecret: 'vMFK_OR9RcryfBVuZTvb5HH7',
  mongoURL:
    'mongodb+srv://chris:aUqiMG2eylcaRd5d@cluster0-3ovvq.mongodb.net/test?retryWrites=true&w=majority',
  cookieKey: 'fsoifjsdofpisdjfswpfgfaopsd'
};

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_SECRET,
  mongoURL: process.env.MONGO_URL,
  cookieKey: process.env.COOKIE_KEY
};
