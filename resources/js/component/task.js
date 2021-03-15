class Task {
    /**
     * @param {string} name Task description.
     * @param {Date} timeAllocated Specified in whole hours.
     */
    constructor(name, timeAllocated) {
        //let now = Date.now();

        this._name = name;
        this._timeAllocated = timeAllocated;
        this._addedAt = now;
        this._pastDue = 0; //now.setHours(now.getHours() + timeAllocated);
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
