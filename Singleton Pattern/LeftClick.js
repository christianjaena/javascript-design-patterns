const leftClick = require('./ClickCounter');


const leftClickFunc = () => {
	leftClick.click();
	leftClick.printClicks();
};

module.exports = leftClickFunc;