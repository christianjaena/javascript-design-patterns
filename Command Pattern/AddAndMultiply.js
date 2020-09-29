class AddThenMultiply {
	constructor(valueToAdd, valueToMultiply) {
		this.addCommand = new AddCommand(valueToAdd);
		this.multiplyCommand = new MultiplyCommand(valueToMultiply);
	}

	execute(value) {
		const newValue = this.addCommand.execute(value);
		return this.multiplyCommand.execute(newValue);
	}

	undo(value) {
		const newValue = this.multiplyCommand.undo(value);
		return this.addCommand.undo(newValue)
	}
}

module.exports = AddThenMultiply;
