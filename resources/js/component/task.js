class Task {
    /**
     * @param {string} name Task description.
     * @param {Date} timeAllocated Specified in whole hours.
     */
    constructor(name, timeAllocated) {
        let now = new Date(Date.now());
        let targetTime = now.setHours(now.getHours() + timeAllocated);

        this._name = name;
        this._timeAllocated = timeAllocated;
        this._addedAt = now;
        this._pastDue = new Date(targetTime);
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
