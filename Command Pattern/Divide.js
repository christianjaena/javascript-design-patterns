class DivideCommand {
	constructor(value) {
		this.value = value;
	}

	execute(value) {
		return value / this.value;
	}

	undo(value) {
		return value * this.value;
	}
}

module.exports = DivideCommand;