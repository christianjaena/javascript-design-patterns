class NullUser {
	constructor() {
		this.name = 'Guest';
	}
}

class User {
	constructor(name) {
		this.name = name;
	}
}

const userArray = [new User('a'), new User('b'), new User('c')];

let userToFind = 'a';
let userNotFound = new NullUser();

let userFound = userArray.forEach(user => {
	user.name === userToFind && console.log('Logged in: ' + user.name);
});

userFound && console.log('Logged in: ', userNotFound.name);
