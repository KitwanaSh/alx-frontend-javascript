import Building from "./5-building.js";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        if (typeof floors !== 'number') throw new Error();
        this._sqft = sqft;
        this._floors = floors;
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(val) {
        this._sqft = val;
    }

    get floors() {
        return this._floors;
    }

    set floors(val) {
        this._floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this.floors} floors`;
    }
}