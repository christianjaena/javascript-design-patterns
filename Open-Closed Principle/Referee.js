class Referee {
	constructor(fouls) {
		this.fouls = fouls;
	}

	makeCall() {
		this.fouls.forEach(foul => {
			foul.call();
		});
	}
}

class Foul {
	makeCall(foul, number) {
		console.log(`${foul} on player number: ${number} `);
	}
}

class OffensiveFoul extends Foul {
	constructor(playerNumber) {
		super();
		this.playerNumber = playerNumber;
	}

	call() {
		this.makeCall('Offensive', this.playerNumber);
	}
}

class DefensiveFoul extends Foul {
	constructor(playerNumber) {
		super();
		this.playerNumber = playerNumber;
	}

	call() {
		this.makeCall('Defensive', this.playerNumber);
	}
}

class BlockingFoul extends Foul {
	constructor(playerNumber) {
		super();
		this.playerNumber = playerNumber;
	}

	call() {
		this.makeCall('Blocking', this.playerNumber);
	}
}

const ref = new Referee([
	new OffensiveFoul(18),
	new DefensiveFoul(20),
	new BlockingFoul(10),
]);
ref.makeCall();
