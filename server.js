//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/proyecto'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/proyecto/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 'https://prueba-ejemplo01.herokuapp.com');