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
            employeeContainer.appendChild(
                this.formEntity(`Pracownik: ${employee._name} ${employee._surname}`, Tag.ENTITY)));

        tasks.map(task => {
            taskContainer.appendChild(
                this.formEntity(
                    `Zadanie: ${task._name}<br>Czas: ${task._timeAllocated / (60 * 60 * 1000)}h
                    ${this.formTaskProgressBar(task)}`, Tag.ENTITY))
        });
        bindings.map(binding =>
            bindingContainer.appendChild(
                this.formEntity(
                    `Pracownik: ${employees[binding._employeeId]._name}
                    ${employees[binding._employeeId]._surname}<br>
                    Zadanie: ${tasks[binding._taskId]._name}<br>
                    Rola: ${binding._role}`, Tag.ENTITY)));
    }

    /**
     * Renders a form in-place.
     * @param {Form | string} form
     */
    static renderForm(form) {
        document.querySelector(`.form-container`).innerHTML = form;
    }

    /**
     * Generates a progress bar.
     * @param {Task} task From which the progress bar is to be updated.
     * @return {Node}
     */
    static formTaskProgressBar(task) {
        let calculatePercent = () => (Math.abs(
            Date.now() - task._addedAt) /
            (task._pastDue - task._addedAt)) * 100;

        /*
         *  Dispatch a time handler in every created scope so as not to find the elements manually.
         */
        let progressPercent = calculatePercent();
        setInterval(() => {
            progressPercent = calculatePercent();
        }, Timing.UI_UPDATE_INTERVAL);

        return this.formEntity(
            `<progress max="100" value="${progressPercent}">${progressPercent}%</progress>`,
            Tag.PROGRESS);
    }

    /**
     * Creates entity element to be rendered.
     * @param content Content of the created node.
     * @param tagName Name of the container tag created.
     * @returns {Node}
     */
    static formEntity(content, tagName) {
        const template = document.createElement(tagName);

        template.innerHTML = `<div class="result-block">${content}</div>`;

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
