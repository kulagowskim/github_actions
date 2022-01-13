module.exports = function(migration) {
	const author = migration.editContentType('author')

	author.editField("firstName", {name: "First name"})
};