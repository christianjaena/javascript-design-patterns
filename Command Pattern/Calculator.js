class Calculator {
	constructor() {
		this.value = 0;
		this.history = [];
	}

	executeCommand(command) {
		this.value = command.execute(this.value);
		this.history.push(command);
	}

	undoCommand() {
		const command = this.history.pop();
		this.value = command.undo(this.value);
	}
}

module.exports = Calculator;