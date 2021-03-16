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
                this.formEntity(`Pracownik: ${employee._name} ${employee._surname}`)));

        tasks.map(task => {
            let currentProgress = 100;
            const timeStatus = task._timeAllocated / (60 * 60 * 1000) > 1 ?
                `${task._timeAllocated / (60 * 60 * 1000)} h` :
                `${task._timeAllocated / (60 * 1000)} min`;

            const taskNode = this.formEntity(`Zadanie: ${task._name
            }<br>Maksymalny czas: ${timeStatus
            }<br>Czas zakończenia: ${new Date(task._pastDue).toLocaleTimeString()
            }<br><progress class="task-time-remaining" max="100" value="${currentProgress}"></progress>`);
            taskContainer.appendChild(taskNode);

            setInterval(() => {
                currentProgress = (Math.abs(Date.now() - task._addedAt) / (task._pastDue - task._addedAt)) * 100;
                taskNode.querySelector(`.result-block progress`).value = currentProgress;
            }, 1000);
        });

        bindings.map(binding => {
            let currentRatio = 1;

            const bindingNode = this.formEntity(`Pracownik: ${
                employees[binding._employeeId]._name} ${employees[binding._employeeId]._surname
            }<br>Zadanie: ${tasks[binding._taskId]._name
            }<br>Rola: ${binding._role
            }<br>Stosunek do czasu pracy pracownika: <progress class="task-employee-time-ratio" max="1" value="${
                currentRatio}"></progress>`);
            bindingContainer.appendChild(bindingNode);

            setInterval(() => {
                currentRatio = tasks[binding._taskId]._timeAllocated / (8 * 60 * 60 * 1000);
                bindingNode.querySelector(`.result-block progress`).value = currentRatio;
            }, 1000);
        });
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
     * @returns {Element}
     */
    static formEntity(content) {
        const template = document.createElement(`entity`);

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
