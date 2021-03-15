class Task {
    /**
     * @param {string} name Task description.
     * @param {number} timeAllocated Specified in whole hours.
     */
    constructor(name, timeAllocated) {
        this._name = name;
        this._timeAllocated = timeAllocated;
        this._addedAt = Date.now();
        this._pastDue = new Date.now().setHours(new Date.now().getHours + timeAllocated);
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
