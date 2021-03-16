class Binding extends Parcelable {
    /**
     * @param taskId
     * @param employeeId
     * @param {string} role Role fulfilled by the employee associated with the bond.
     */
    constructor(taskId, employeeId, role) {
        super();

        this._taskId = taskId;
        this._employeeId = employeeId;
        this._role = role;
    }

    get taskId() {
        return this._taskId;
    }

    get employeeId() {
        return this._employeeId;
    }

    get role() {
        return this._role;
    }
}
