/**
 * Add-employee handler.
 */
document.querySelector(`.button-employee-add`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.EMPLOYEE.ADD);

    document.querySelector(`.submit-employee-add`).addEventListener(`click`, (e) => {
        employeeAdd(
            new Employee(
                document.querySelector(`.name`).value,
                document.querySelector(`.surname`).value));

        e.preventDefault();
    });
});

/**
 * Remove-employee handler.
 */
document.querySelector(`.button-employee-delete`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.EMPLOYEE.DELETE);
    Renderer.renderEmployeeList(employees);

    document.querySelector(`.submit-employee-delete`).addEventListener(`click`, (e) => {
        const selectEmployee = document.querySelector(`.select-employee`);

        employeeDelete(Number(
            selectEmployee.options[selectEmployee.selectedIndex].value));

        // TODO: user picks one employee to delete from a <select> list of <option>s
        //  we then get his selected option and pass it to main and:
        //    a) we pass his position in that select (option.value)
        //    b) we pass the option object and delete it in main
    });

    document.querySelector(`.select-employee`).addEventListener(`click`, (e) => {
        // TODO: this is unnecessary as it renders each time a form gets dynamically created
        // Renderer.renderEmployeeList();
    });
});

/**
 * Add-task handler.
 */
document.querySelector(`.button-task-add`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.TASK.ADD);

    document.querySelector(`.submit-task-add`).addEventListener(`click`, (e) => {
        taskAdd(
            new Task(
                document.querySelector(`.name`).value,
                document.querySelector(`.time-remaining`).value));
    });
});

/**
 * Remove-task handler.
 */
document.querySelector(`.button-task-delete`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.TASK.DELETE);
    Renderer.renderTaskList(tasks);

    document.querySelector(`.submit-task-delete`).addEventListener(`click`, (e) => {
        const selectTask = document.querySelector(`.select-task`);

        taskDelete(Number(
            selectTask.options[selectTask.selectedIndex].value));
    });

    document.querySelector(`.select-task`).addEventListener(`click`, (e) => {
        // TODO: this is unnecessary as it renders each time a form gets dynamically created
        // Renderer.renderTaskList();
    });
});

/**
 * Task-assign handler.
 */
document.querySelector(`.button-employee-task-assign`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.ASSIGN);
    Renderer.renderTaskList(tasks);
    Renderer.renderEmployeeList(employees);

    document.querySelector(`.submit-employee-task-assign`).addEventListener(`click`, (e) => {
        const selectTask = document.querySelector(`.select-task`);
        const selectEmployee = document.querySelector(`.select-employee`);

        employeeTaskAssign(
            Number(selectTask.options[selectTask.selectedIndex].value),
            Number(selectEmployee.options[selectEmployee.selectedIndex].value),
            document.querySelector(`.role`).value);
    });

    document.querySelector(`.select-employee`).addEventListener(`click`, (e) => {
        // TODO: this is unnecessary as it renders each time a form gets dynamically created
        // Renderer.renderEmployeeList();
    });
    document.querySelector(`.select-task`).addEventListener(`click`, (e) => {
        // TODO: this is unnecessary as it renders each time a form gets dynamically created
        // Renderer.renderTaskList();
    });
});

/**
 * Task-retain handler.
 */
document.querySelector(`.button-employee-task-retain`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.RETAIN);
    Renderer.renderTaskList(tasks);
    Renderer.renderEmployeeList(employees);

    document.querySelector(`.submit-employee-task-retain`).addEventListener(`click`, (e) => {
        const selectTask = document.querySelector(`.select-task`);
        const selectEmployee = document.querySelector(`.select-employee`);

        employeeTaskRetain(
            selectTask.options[selectTask.selectedIndex].value,
            selectEmployee.options[selectEmployee.selectedIndex].value);
    });

    document.querySelector(`.select-employee`).addEventListener(`click`, (e) => {
        // TODO: this is unnecessary as it renders each time a form gets dynamically created
        // Renderer.renderEmployeeList();
    });
    document.querySelector(`.select-task`).addEventListener(`click`, (e) => {
        // TODO: this is unnecessary as it renders each time a form gets dynamically created
        // Renderer.renderTaskList();
    });
});
