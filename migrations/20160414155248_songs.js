exports.up = function(knex, Promise) {
 return knex.schema.createTableIfNotExists('songs', function(table) {
  table.increments()
  table.string('title')
  table.string('artist')
  table.string('artwork')
  table.string('artist_avatar')
  table.string('artist_description')
  table.string('link')
  table.string('soundcloud_id')
  table.timestamps()
 })
 
};exports.down = function(knex, Promise) {
 return knex.schema.dropTableIfExists('songs')
};
