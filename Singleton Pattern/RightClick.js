const rightClick = require('./ClickCounter');

const rightClickFunc = () => {
	rightClick.click();
	rightClick.printClicks();
}

module.exports = rightClickFunc;
