class Renderer {

    /**
     * Updates drop-down list dataset.
     */
    static renderEmployeeList() {
        const select = document.querySelector(`.select-employee`);

        /**
         * Update data-set with persistent-storage.
         */
        PersistentManager.updateDataSet(employees, Key.EMPLOYEE);

        for (const employee of employees) {
            const option = document.createElement(`option`);
            option.innerText = `${employee._name} ${employee._surname}`;
            select.appendChild(option);
        }
    }

    /**
     * Updates drop-down list dataset.
     */
    static renderTaskList() {
        const select = document.querySelector(`.select-task`);

        /**
         * Update data-set with persistent-storage.
         */
        PersistentManager.updateDataSet(tasks, Key.TASK);

        for (const task of tasks) {
            const option = document.createElement(`option`);
            option.innerText = task._name;
            select.appendChild(option);
        }
    }

    /**
     * Renders current employee, task and binding status in a corresponding field.
     */
    static renderEntities() {
        /**
         * Update data-set with persistent-storage.
         */
        PersistentManager.updateDataSet(tasks, Key.TASK);
        PersistentManager.updateDataSet(employees, Key.EMPLOYEE);
        PersistentManager.updateDataSet(bindings, Key.BINDING);

        for (const task of tasks) {

        }
    }

    /**
     * Renders a form in-place.
     * @param {Form | string} form
     */
    static renderForm(form) {
        document.querySelector(`.form-container`).innerHTML = form;
    }
}
