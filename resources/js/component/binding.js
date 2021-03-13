class Binding {
    /**
     * @param taskId
     * @param employeeId
     * @param {string} role Role fulfilled by the employee associated with the bond.
     */
    constructor(taskId, employeeId, role) {
        this._taskId = taskId;
        this._employeeId = employeeId;
        this._role = role;
    }

    get taskId() {
        return this._taskId;
    }

    set taskId(value) {
        this._taskId = value;
    }

    get employeeId() {
        return this._employeeId;
    }

    set employeeId(value) {
        this._employeeId = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }
}
