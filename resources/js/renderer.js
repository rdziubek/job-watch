class Renderer {

    /**
     * Updates drop-down list dataset.
     */
    static renderEmployeeList() {
        const select = document.querySelector(`.select-employee`);

        /**
         * Update data-set with persistent-storage.
         */
        // employees = JSON.parse(localStorage.getItem(Key.EMPLOYEE));

        for (const employee in employees) {
            const option = document.createElement(`option`);

            option.innerText = 'dummy';

            select.appendChild(option);
        }
    }

    /**
     * Updates drop-down list dataset.
     */
    static renderTaskList() {
        const select = document.querySelector(`.select-task`);

        for (const task in tasks) {
            const option = document.createElement(`option`);

            // TODO:
            //  option.innerText = task.name + ...;
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
