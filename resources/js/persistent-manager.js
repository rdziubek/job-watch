class PersistentManager {

    /**
     * Keeps the dynamic in sync with persistent storage content.
     * @param {array} list Dynamic list/array state of which is to be updated.
     * @param {Key | string} storageKey Saved content location to be loaded into memory.
     */
    static updateDataSet(list, storageKey) {
        list.splice(
            0,
            list.length,
            ...JSON.parse(localStorage.getItem(storageKey)));
    }
}
