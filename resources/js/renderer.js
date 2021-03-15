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
            let progressPercent = (Math.abs(Date.now() - task._addedAt) / (task._pastDue - task._addedAt)) * 100;
            console.log(progressPercent);
            console.log(Math.abs(Date.now() - task._addedAt));
            console.log(task._pastDue - task._addedAt);
            console.log(task._pastDue);
            console.log(task._addedAt);
            taskContainer.appendChild(
                this.formEntity(
                    `Zadanie: ${task._name}<br>Czas: ${task._timeAllocated}h
                    <progress max="100" value="${progressPercent}">${progressPercent}%</progress>`
                ))
        });
        /** TODO: Each time a task is rendered in an entity, render a progressbar (a.k.a. here)
         *   The task should store target datetime (task._pastDue), then on each render it counts:
         *   task._pastDue - Date.now() = taskTimeRemaining
         *   A progressbar then renders itself at a ratio of [(Date.now() - task._addedAt) / (task._pastDue - task._addedAt)] inside
         */
        bindings.map(binding =>
            bindingContainer.appendChild(
                this.formEntity(
                    `Pracownik: ${employees[binding._employeeId]._name}
                    ${employees[binding._employeeId]._surname}<br>
                    Zadanie: ${tasks[binding._taskId]._name}<br>
                    Rola: ${binding._role}`)));
    }

    /**
     * Renders total employee-task bindings status.
     */
    static renderProgressBar() {
        // TODO: Store the progressBar in each task's <entity> and not in .progress-container
        // const employeeContainer = document.querySelector(`.progress-container`);


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
