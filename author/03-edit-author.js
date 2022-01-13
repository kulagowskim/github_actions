module.exports = function(migration) {
	const author = migration.editContentType('author')

	author.editField("lastName", {name: "Last name!!!!!"})
};