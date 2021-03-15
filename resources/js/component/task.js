class Task {
    /**
     * @param {string} name Task description.
     * @param {Date} timeAllocated Specified in whole hours.
     */
    constructor(name, timeAllocated) {
        this._name = name;
        this._timeAllocated = new Date().setHours(timeAllocated);
        this._addedAt = Date.now();
        this._pastDue = new Date().setHours(new Date().getHours() + timeAllocated);
    }

    get name() {
        return this._name;
    }

    get timeAllocated() {
        return this._timeAllocated;
    }

    get addedAt() {
        return this._addedAt;
    }

    get pastDue() {
        return this._pastDue;
    }
}
