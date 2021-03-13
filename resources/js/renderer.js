class Renderer {

    /**
     * Updates drop-down list dataset.
     */
    static renderEmployeeList() {
        const select = document.querySelector(`.select-employee`);

        for (const employee in employees) {
            const option = document.createElement(`option`);

            // TODO:
            //  option.innerText = employee.name + ...;
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
     * @param {Form} form
     */
    static renderForm(form) {
        document.querySelector(`.form-container`).innerHTML = form;
    }
}
