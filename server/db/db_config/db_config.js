var path = require('path');
var sequence = require('when/sequence');
var _ = require('lodash');
var knex;
var migrate = require('./migrate.js')();

if(process.env.MODE=='dev'){
  knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    }
  }); 
}
else if (process.env.DATABASE_URL) {
  knex = require("knex")({
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST_OL,
      user: process.env.DATABASE_USER_OL,
      password: process.env.DATABASE_PASSWORD_OL,
      database: process.env.DATABASE_NAME_OL,
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
      },
    }
  }); 
} 



var Bookshelf = require('bookshelf')(knex);
// Bookshelf.plugin('registry');
module.exports = Bookshelf;
