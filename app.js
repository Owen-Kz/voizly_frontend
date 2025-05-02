const { config } = require('dotenv');
const express = require('express');
const path = require('path');

const app = express();

const server = require("http").Server(app)
const session = require("express-session");
const bodyParser = require("body-parser")
const cookie = require("cookie-parser");

config(); // Load environment variables from .env file
const io = require('socket.io')(server, {
  cors: {
      origin: "https://asfischolar.org",
      methods: ["GET", "POST"]
  },
transports: ["websocket"], 
  pingTimeout: 60000, // Wait 60 seconds before assuming the connection is lost
  pingInterval: 25000, // Send a ping every 25 seconds
});
// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set("views", [path.join(__dirname, "views")]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(express.json());
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use("/css", express.static(path.join(__dirname, 'public/css')));
app.use("/js", express.static(path.join(__dirname, 'public/js')));
app.use("/images", express.static(path.join(__dirname, 'public/images')));
app.use("/fonts", express.static(path.join(__dirname, 'public/fonts')));
app.use("/audio", express.static(path.join(__dirname, 'public/audio')));
app.use("/uploads", express.static(path.join(__dirname, 'public/uploads')));
app.use("/icons", express.static(path.join(__dirname, 'public/icons')));
app.use("/favicon", express.static(path.join(__dirname, 'public/favicon')));
app.use("/manifest", express.static(path.join(__dirname, 'public/manifest')));
app.use("/robots", express.static(path.join(__dirname, 'public/robots')));
app.use("/sitemap", express.static(path.join(__dirname, 'public/sitemap')));
app.use("/widgets", express.static(path.join(__dirname, 'public/widget')));

app.use("/chatAssets", express.static(__dirname + "/public/chatAssets", { type: 'text/folder' }))
app.use("/assets", express.static(__dirname + "/public/chatAssets", { type: 'text/folder' }))



// Render the landing page


app.use("/", require("./routes/pages"))



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
