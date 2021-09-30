module.exports = {
  Admins: ["852603016338866187", "138316177909874688"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/r52RsYMSvk", //Support Server Link
  Token: process.env.Token || "ODg5MjQxNDk2MzE2OTYwODA5.YUeYrg.C1EiZwVsS4w3S_iqlgmXwVZfsXM", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "889241496316960809", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "7FjfqmtHA2Z6_MFYn1fAWZONqtWFDii_", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is a", //A Secret like a password
  IconURL:
    "https://c.tenor.com/Bx0rlvmVu3IAAAAC/usagyuuun-dance.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "https://virtuosobot.ahmet-alperalp2.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "anything as a password", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "1dca0c2af31c496397585d7ef4b47ce0", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "e4e8487b89a946d29736a22f84ad7f65", //Spotify Client Secret
  },
};
