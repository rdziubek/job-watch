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

            option.value = Index.EMPLOYEE;
            Index.EMPLOYEE++;

            if (employee === null) {
                option.style.display = `none`;
            } else {
                option.innerText = `${employee._name} ${employee._surname}`;
            }

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

            option.value = Index.TASK;
            Index.TASK++;

            if (task === null) {
                option.style.display = `none`;
            } else {
                option.innerText = task._name;
            }

            select.appendChild(option);
        });
    }

    /**
     * Renders current employee, task and binding status in a corresponding field.
     */
    static renderEntities() {
        const employeeContainer = document.querySelector(`.current-employees-container`);
        const taskContainer = document.querySelector(`.current-tasks-container`);
        const bindingContainer = document.querySelector(`.current-bindings-container`);

        /**
         * Update data-set with persistent-storage.
         */
        PersistentManager.updateDataSet(tasks, Key.TASK);
        PersistentManager.updateDataSet(employees, Key.EMPLOYEE);
        PersistentManager.updateDataSet(bindings, Key.BINDING);

        /**
         * Clear buffer and map elements into UI.
         */
        this.clearBuffer(employeeContainer, taskContainer, bindingContainer);

        employees.map(employee =>
            employee !== null ?
                employeeContainer.appendChild(
                    this.formEntity(`${employee._name} ${employee._surname}`)) : null);
        tasks.map(task =>
            task !== null ?
                taskContainer.appendChild(
                    this.formEntity(`${task._name} ${task._timeRemaining}`)) : null);
        bindings.map(binding =>
            binding !== null && employees[binding._employeeId] !== null && tasks[binding._taskId] !== null ?
                bindingContainer.appendChild(
                    this.formEntity(`${
                        employees[binding._employeeId]._name} ${
                        tasks[binding._taskId]._name} ${
                        binding._role} ${
                        tasks[binding._taskId]._timeRemaining} h`)) : null);
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

    /**
     * Clears the passed nodes empty.
     * @param {...Node} nodes
     */
    static clearBuffer(...nodes) {
        nodes.map(node => node.innerHTML = ``);
    }
}
