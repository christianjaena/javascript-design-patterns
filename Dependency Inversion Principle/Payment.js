class Stripe {
	makePayment() {
		console.log('paid with Stripe!');
	}
}

class Paypal {
	makePayment() {
		console.log('paid with Paypal!');
	}
}

class StripePaymentProcessor {
	constructor(name) {
		this.name = name;
		this.paymentProcessor = new Stripe();
	}

	makePayment() {
		this.paymentProcessor.makePayment();
	}
}

class PaypalPaymentProcessor {
	constructor(name) {
		this.name = name;
		this.paymentProcessor = new Paypal();
	}

	makePayment() {
		this.paymentProcessor.makePayment();
	}
}

class Store {
	constructor(paymentProcessor) {
		this.paymentProcessor = paymentProcessor;
	}

	makePayment() {
		this.paymentProcessor.makePayment();
	}
}

const store1 = new PaypalPaymentProcessor('John');
const store2 = new StripePaymentProcessor('John');
store1.makePayment();
store2.makePayment();
