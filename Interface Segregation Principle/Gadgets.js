class Gadgets {
	constructor(name) {
		this.name = name;
	}

	displayGadgetName() {
		console.log("Hello " + this.name)
	}
}


const charge = {
	charge() {
		console.log('Charging')
	}
}

const reboot = {
	reboot() {
		console.log('Rebooting')
	}
}


class Phone extends Gadgets {
	constructor(name, brand) {
		super(name);
		this.brand = brand;
	}

	displayBrand() {
		console.log(this.name + ' ' + this.brand)
	}
}

Object.assign(Phone.prototype, charge)
Object.assign(Phone.prototype, reboot)

const phone1 = new Phone('LG', 'Samsung')
phone1.displayBrand()
phone1.displayGadgetName()
phone1.charge()
phone1.reboot()