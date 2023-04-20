import Currency from "./3-currency.js";

export default class Pricing {
    constructor(amount, currency) {
        if (typeof amount !== 'number' || !(currency instanceof Currency)) throw new Error(); 
        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(val) {
        this._amount = val;
    }

    get currency() {
        return this._currency;
    }

    set currency(val) {
        this._currency = val;
    }

    displayFullPrice() {
        return `${this.amount} ${this.currency.name} (${this.currency.code})`
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof (conversionRate !== 'number')) throw new Error();
        return amount * conversionRate
    }
}