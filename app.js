require('dotenv').config();
var app = require('./server/server.js');
const port =process.env.PORT || 8008; 
app.listen(port, function() {
  console.log('Quizzer listening on port ',port);
});