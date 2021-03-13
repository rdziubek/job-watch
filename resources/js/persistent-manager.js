class PersistentManager {

    /**
     * Updates permanent storage.
     * @param {Key | string} key Where to save the data to.
     * @param {Object} object Data to be saved.
     */
    static updateStorage(key, object) {
        localStorage.setItem(
            key,
            JSON.stringify(object))
    }

    /**
     * Keeps the dynamic in sync with persistent storage content.
     * @param {array} list Dynamic list/array state of which is to be updated.
     * @param {Key | string} storageKey Saved content location to be loaded into memory.
     */
    static updateDataSet(list, storageKey) {
        if (localStorage.getItem(storageKey) !== null) {
            list.splice(
                0,
                list.length,
                ...JSON.parse(localStorage.getItem(storageKey)));
        }
    }
}
