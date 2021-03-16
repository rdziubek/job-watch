class Employee extends Parcelable {
    constructor(name, surname) {
        super();

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
