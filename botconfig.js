module.exports = {
  Admins: ["OWNER_ID", "OWNER_ID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/r52RsYMSvk", //Support Server Link
  Token: process.env.Token || "Discord TOKEN", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "CLIENT_ID", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "SECRET", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is a", //A Secret like a password
  IconURL:
    "https://c.tenor.com/Bx0rlvmVu3IAAAAC/usagyuuun-dance.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "WEBSITE", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

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
    ClientID: process.env.Spotify_ClientID || "CLIENT_ID", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "CLIENT_SECRET", //Spotify Client Secret
  },
};
