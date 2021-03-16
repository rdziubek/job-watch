class Task extends Parcelable {
    /**
     * @param {string} name Task description.
     * @param {Date} timeAllocated Specified in hours.
     */
    constructor(name, timeAllocated) {
        super();

        let now = new Date(Date.now());

        this._name = name;
        this._timeAllocated = timeAllocated * 60 * 60 * 1000;
        this._addedAt = now.getTime();
        this._pastDue = now.getTime() + this._timeAllocated;
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
