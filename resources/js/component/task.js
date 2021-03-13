class Task {
    /**
     * @param {string} name Task description.
     * @param {number} timeRemaining Specified in whole hours.
     */
    constructor(name, timeRemaining) {
        this._name = name;
        this._timeRemaining = timeRemaining;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get timeRemaining() {
        return this._timeRemaining;
    }

    set timeRemaining(value) {
        this._timeRemaining = value;
    }
}
