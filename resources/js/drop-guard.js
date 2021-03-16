class DropGuard {

    /**
     * Approve collection objects for pending deletion.
     * @param {Key} key Identifier of the collection set to be verified.
     * @param {number} index Index of the collection element to be given approval for deletion
     * of the element the index points to.
     */
    static verifyDeletion(key, index) {
        let aboutToBeDeleted = ``;
        for (let i = 0; i < bindings.length; i++) {
            if (index === bindings[i][`${key}Id`]) {
                if (i < bindings.length) {
                    aboutToBeDeleted = aboutToBeDeleted.concat(` • ${
                        employees[bindings[i].employeeId].name} ${
                        employees[bindings[i].employeeId].surname} z rolą ${
                        bindings[i].role}\n`);
                }
            }
        }

        /**
         * Either show a prompt on the exit point or approve straight away.
         */
        return aboutToBeDeleted !== `` ?
            confirm(`${Strings.TASK_DELETE_WARNING}${aboutToBeDeleted}`) : true;
    }
}
