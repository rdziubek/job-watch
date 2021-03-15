class Employee {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }
}
