const bookshelf = require('../db/db_config/db_config.js');
require('./subtopic.js');

const Topic = bookshelf.model('Topic', {
  tableName: 'topic',
  hasTimestamps: true,
  subtopics: function () { return this.hasMany('Subtopic') }
});

module.exports = Topic;
