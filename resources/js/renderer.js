class Renderer {

    /**
     * Updates drop-down list dataset.
     */
    static renderEmployeeList() {
        const selects = document.querySelectorAll(`.select-employee`);
        for (const select of selects) {
            for (const employee in employees) {
                const option = document.createElement(`option`);
                //option.innerText = employee.name + ...;
                document.select.appendChild(option);
            }
        }
    }

    /**
     * Updates drop-down list dataset.
     */
    static renderTaskList() {
        const selects = document.querySelectorAll(`.select-task`);
        for (const select of selects) {
            for (const task in tasks) {
                const option = document.createElement(`option`);
                //option.innerText = task.name + ...;
                document.select.appendChild(option);
            }
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
