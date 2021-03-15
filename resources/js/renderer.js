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
            /*
             *  Don't ask me what progressPercent is :-)
             *  It just works
             */
            let progressPercent = 0;
            let time = 0;
            if (task._timeAllocated / (60 * 60 * 1000) > 1) {
                time = `${task._timeAllocated / (60 * 60 * 1000)} h`;
            } else {
                time = `${task._timeAllocated / (60 * 60 * 60 * 1000)} min`;
            }
            let entity = this.formEntity(`Zadanie: ${task._name}<br>Czas: ${task._timeAllocated / (60 * 60 * 1000)}h<br>
            <progress max="100" value="${progressPercent}">${progressPercent}%</progress>`);
            taskContainer.appendChild(entity);
            setInterval(() => {
                progressPercent = (Math.abs(Date.now() - task._addedAt) / (task._pastDue - task._addedAt)) * 100;
                entity.querySelector(`.result-block progress`).value = progressPercent;
            }, 1000);
        });
        bindings.map(binding =>
            bindingContainer.appendChild(
                this.formEntity(`Pracownik: ${employees[binding._employeeId]._name}
                ${employees[binding._employeeId]._surname}<br>
                Zadanie: ${tasks[binding._taskId]._name}<br>
                Rola: ${binding._role}`)));
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
