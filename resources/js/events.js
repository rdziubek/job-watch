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

    document.querySelector(`.submit-employee-delete`).addEventListener(`click`, (e) => {
        const selectEmployee = document.querySelector(`.select-employee`);

        employeeDelete(
            selectEmployee.options[selectEmployee.selectedIndex].value);

        // TODO: user picks one employee to delete from a <select> list of <option>s
        //  we then get his selected option and pass it to main and:
        //    a) we pass his position in that select (option.value)
        //    b) we pass the option object and delete it in main

        e.preventDefault();
    });

    document.querySelector(`.select-employee`).addEventListener(`click`, (e) => {
        Renderer.renderEmployeeList();

        e.preventDefault();
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

        e.preventDefault();
    });
});

/**
 * Remove-task handler.
 */
document.querySelector(`.button-task-delete`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.TASK.DELETE);

    document.querySelector(`.submit-task-delete`).addEventListener(`click`, (e) => {
        const selectTask = document.querySelector(`.select-task`);

        taskDelete(
            selectTask.options[selectTask.selectedIndex].value);

        e.preventDefault();
    });

    document.querySelector(`.select-task`).addEventListener(`click`, (e) => {
        Renderer.renderTaskList();

        e.preventDefault();
    });
});

/**
 * Task-assign handler.
 */
document.querySelector(`.button-employee-task-assign`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.ASSIGN);

    document.querySelector(`.submit-employee-task-assign`).addEventListener(`click`, (e) => {
        const selectTask = document.querySelector(`.select-task`);
        const selectEmployee = document.querySelector(`.select-employee`);

        employeeTaskAssign(
            selectTask.options[selectTask.selectedIndex].value,
            selectEmployee.options[selectEmployee.selectedIndex].value,
            document.querySelector(`.role`).value);

        e.preventDefault();
    });

    document.querySelector(`.select-employee`).addEventListener(`click`, (e) => {
        Renderer.renderEmployeeList();

        e.preventDefault();
    });
    document.querySelector(`.select-task`).addEventListener(`click`, (e) => {
        Renderer.renderTaskList();

        e.preventDefault();
    });
});

/**
 * Task-retain handler.
 */
document.querySelector(`.button-employee-task-retain`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.RETAIN);

    document.querySelector(`.submit-employee-task-retain`).addEventListener(`click`, (e) => {
        const selectTask = document.querySelector(`.select-task`);
        const selectEmployee = document.querySelector(`.select-employee`);

        employeeTaskRetain(
            selectTask.options[selectTask.selectedIndex].value,
            selectEmployee.options[selectEmployee.selectedIndex].value);

        e.preventDefault();
    });

    document.querySelector(`.select-employee`).addEventListener(`click`, (e) => {
        Renderer.renderEmployeeList();

        e.preventDefault();
    });
    document.querySelector(`.select-task`).addEventListener(`click`, (e) => {
        Renderer.renderTaskList();

        e.preventDefault();
    });
});
