document.addEventListener(`DOMContentLoaded`, () => {
    Renderer.renderEntities();
});

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
        Renderer.renderEntities();
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

        employeeDelete(Number(selectEmployee.selectedIndex));
        Renderer.renderEntities();
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
        Renderer.renderEntities();
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
        Renderer.renderEntities();
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
        Renderer.renderEntities();
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
        Renderer.renderEntities();
        e.preventDefault();
    });
});
