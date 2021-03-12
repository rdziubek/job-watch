class Binding {
    constructor(task, employee) {
        this._task = task;
        this._employee = employee;
    }

    get task() {
        return this._task;
    }

    set task(value) {
        this._task = value;
    }

    get employee() {
        return this._employee;
    }

    set employee(value) {
        this._employee = value;
    }
}
