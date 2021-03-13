class Renderer {

    /**
     * Updates drop-down list dataset.
     */
    static renderEmployeeList() {
        const select = document.querySelector(`.select-employee`);

        /**
         * Update data-set with persistent-storage.
         */
        employees.splice(
            0,
            employees.length,
            ...JSON.parse(localStorage.getItem(Key.EMPLOYEE)));

            console.log(employees);
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
        tasks.splice(
            0,
            tasks.length,
            ...JSON.parse(localStorage.getItem(Key.TASK)));

        for (const task of tasks) {
            const option = document.createElement(`option`);
            option.innerText = task._name;
            select.appendChild(option);
        }
    }

    /**
     * Renders a form in-place.
     * @param {Form | String} form
     */
    static renderForm(form) {
        document.querySelector(`.form-container`).innerHTML = form;
    }
}
