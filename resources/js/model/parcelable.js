class Parcelable {

    toJSON() {
        const jsonObj = Object.assign({}, new Object(null));
        const proto = Object.getPrototypeOf(this);
        for (const key of Object.getOwnPropertyNames(proto)) {
            const desc = Object.getOwnPropertyDescriptor(proto, key);
            const hasGetter = desc && typeof desc.get === `function`;
            if (hasGetter) {
                jsonObj[key] = this[key];
            }
        }
        return jsonObj;
    }
}
