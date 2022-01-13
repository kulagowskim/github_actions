module.exports = function(migration) {
  const author = migration.createContentType('author')
  author
    .createField('twitter')
    .name('Twitter')
    .type('Symbol')
  
  author
    .name('Author')
    .description('Author of a blog post')
    .displayField("fullName")

  author
    .createField('lastName')
    .name('Full name')
    .type('Symbol')
  
  author
    .createField('fullName')
    .name('Full name')
    .type('Symbol')
    .required(true)
    
  author
    .createField('firstName')
    .name('Full name')
    .type('Symbol')
};