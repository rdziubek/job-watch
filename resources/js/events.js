/**
 * Add-employee handler.
 */
document.querySelector(`.button-employee-add`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.EMPLOYEE.ADD);
    Renderer.renderEntities();

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
    Renderer.renderEntities();

    document.querySelector(`.submit-employee-delete`).addEventListener(`click`, (e) => {
        const selectEmployee = document.querySelector(`.select-employee`);

        employeeDelete(Number(selectEmployee.selectedIndex));
        e.preventDefault();
    });
});

/**
 * Add-task handler.
 */
document.querySelector(`.button-task-add`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.TASK.ADD);
    Renderer.renderEntities();

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
    Renderer.renderTaskList(tasks);
    Renderer.renderEntities();

    document.querySelector(`.submit-task-delete`).addEventListener(`click`, (e) => {
        const selectTask = document.querySelector(`.select-task`);

        taskDelete(Number(selectTask.selectedIndex));
        e.preventDefault();
    });
});

/**
 * Task-assign handler.
 */
document.querySelector(`.button-employee-task-assign`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.ASSIGN);
    Renderer.renderTaskList(tasks);
    Renderer.renderEmployeeList(employees);
    Renderer.renderEntities();

    document.querySelector(`.submit-employee-task-assign`).addEventListener(`click`, (e) => {
        const selectTask = document.querySelector(`.select-task`);
        const selectEmployee = document.querySelector(`.select-employee`);

        employeeTaskAssign(
            Number(selectTask.selectedIndex),
            Number(selectEmployee.selectedIndex),
            document.querySelector(`.role`).value);
        e.preventDefault();
    });
});

/**
 * Task-retain handler.
 */
document.querySelector(`.button-employee-task-retain`).addEventListener(`click`, () => {
    Renderer.renderForm(Form.RETAIN);
    Renderer.renderTaskList(tasks);
    Renderer.renderEmployeeList(employees);
    Renderer.renderEntities();

    document.querySelector(`.submit-employee-task-retain`).addEventListener(`click`, (e) => {
        const selectTask = document.querySelector(`.select-task`);
        const selectEmployee = document.querySelector(`.select-employee`);

        employeeTaskRetain(
            Number(selectTask.selectedIndex),
            Number(selectEmployee.selectedIndex));
        e.preventDefault();
    });
});
