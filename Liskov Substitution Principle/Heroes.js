class Mage {
	makeMagic() {
		console.log('I can make magic!');
	}
}

class Warrior {
	swingSword() {
		console.log('I can slash!');
	}
}

class FireMage extends Mage {
	makeMagic() {
		console.log('Throw Fireball');
	}
}

class Barbarian extends Warrior {
	swingSword() {
		console.log('Smash hammer!');
	}
}

const mage1 = new FireMage();
const warrior1 = new Barbarian();
mage1.makeMagic();
warrior1.swingSword();
