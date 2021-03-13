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

        employees.map(employee => {
            const option = document.createElement(`option`);
            option.innerText = `${employee._name} ${employee._surname}`;

            select.appendChild(option);
        });
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

        tasks.map(task => {
            const option = document.createElement(`option`);
            option.innerText = task._name;

            select.appendChild(option);
        });
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

        employees.map(employee =>
            Renderer.formEntity(`${employee._name} ${employee._surname}`));
        tasks.map(task =>
            Renderer.formEntity(`${task._name} ${task._timeRemaining}`));
        bindings.map(binding =>
            Renderer.formEntity(`${binding._employeeId} ${binding._taskId}`));
    }

    /**
     * Renders a form in-place.
     * @param {Form | string} form
     */
    static renderForm(form) {
        document.querySelector(`.form-container`).innerHTML = form;
    }

    /**
     * Creates entity element to be rendered.
     * @param content Content of the created node.
     * @returns {Node}
     */
    static formEntity(content) {
        const template = document.createElement(`entity`);

        template.innerHTML = `<p>${content}</p>`;

        return template;
    }
}
