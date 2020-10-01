const logMessage = require('./MessageLogger.js');

class CalorieTracker {
	constructor(maxCalories) {
		this.maxCalories = maxCalories;
		this.currentCalories = 0;
	}

	trackCalories(currentCalories) {
		this.currentCalories += currentCalories;
		if (this.currentCalories > this.maxCalories) {
			logMessage('You exceeded your maximum calorie count');
		}
	}
}

const calorie = new CalorieTracker(1000);
calorie.trackCalories(500);
calorie.trackCalories(1000);