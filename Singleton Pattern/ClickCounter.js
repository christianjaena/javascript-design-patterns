class ClickCounter {
	constructor() {
		if (ClickCounter.instance == null) {
			this.clicks = [];
			this.numbers = 0;
			ClickCounter.instance = this;
		}

		return ClickCounter.instance;
	}

	click() {
		this.clicks.push(1)
		this.numbers++;
	}

	printClicks() {
		console.log("Clicks: " + this.clicks);
	}
}

const counter = new ClickCounter();
Object.freeze(counter)
module.exports = counter;