const {router, get} = require('./decorator')
class User {
	@get
	getUsers() {
		console.log('getUsers')
	}
}