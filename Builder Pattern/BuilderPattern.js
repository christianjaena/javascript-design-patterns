class User {
	constructor(name) {
		this.name = name;
	}
}

class ProfilePic {
	constructor(imgUrl) {
		this.imgUrl = imgUrl;
	}
}

class UserBuilder {
	constructor(name, { age, email, profilePic } = {}) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.profilePic = profilePic;
	}
}

const user1 = new UserBuilder("Christian");
user1.profilePic = "img.jpeg";
console.log(user1)