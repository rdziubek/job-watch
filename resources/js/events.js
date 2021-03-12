/**
 * Button click (show form) events.
 */
document.querySelector(`.button-employee-add`).addEventListener(`click`, () => {
    renderForm(Form.EMPLOYEE.ADD);

    document.querySelector(`.submit-employee-add`).addEventListener(`submit`, () => {
        employeeAdd({
            name: document.querySelector(`.name`),
            surname: document.querySelector(`.surname`),
        });
    });
});
document.querySelector(`.button-employee-delete`).addEventListener(`click`, () => {
    renderForm(Form.EMPLOYEE.DELETE);

    document.querySelector(`.submit-employee-delete`).addEventListener(`submit`, () => {
        let select = document.querySelector(`.select-employee`);
        employeeDelete({
            id: select.options[select.selectedIndex],
        });

        //user picks one employee to delete from a <select> list of <option>s
        //we then get his selected option and pass it to main and:
        //a) we pass his position in that select (option.value)
        //b) we pass the option object and delete it in main
    });
    document.querySelector(`.select-employee`).addEventListener(`click`, () => {
        renderEmployeeList();
    });
});
document.querySelector(`.button-task-add`).addEventListener(`click`, () => {
    renderForm(Form.TASK.ADD);

    document.querySelector(`.submit-task-add`).addEventListener(`submit`, () => {
        taskAdd({
            name: document.querySelector(`.name`),
            timeRemaining: document.querySelector(`.time-remaining`),
        });
    });
});
document.querySelector(`.button-task-delete`).addEventListener(`click`, () => {
    renderForm(Form.TASK.DELETE);

    document.querySelector(`.submit-task-delete`).addEventListener(`submit`, () => {
        let select = document.querySelector(`.select-task`);
        taskDelete({
            id: select.options[select.selectedIndex]
        });
    });
    document.querySelector(`.select-task`).addEventListener(`click`, () => {
        renderTaskList();
    });
});
document.querySelector(`.button-employee-task-assign`).addEventListener(`click`, () => {
    renderForm(Form.ASSIGN);

    document.querySelector(`.submit-employee-task-assign`).addEventListener(`submit`, () => {
        let selectTask = document.querySelector(`.select-task`);
        let selectEmployee = document.querySelector(`.select-employee`);

        employeeTaskAssign({
            id1: selectTask.options[selectTask.selectedIndex],
            id2: selectEmployee.options[selectEmployee.selectedIndex],
        });
    });
    document.querySelector(`.select-employee`).addEventListener(`click`, () => {
        renderEmployeeList();
    });
    document.querySelector(`.select-task`).addEventListener(`click`, () => {
        renderTaskList();
    });
});
document.querySelector(`.button-employee-task-retain`).addEventListener(`click`, () => {
    renderForm(Form.RETAIN);

    document.querySelector(`.submit-employee-task-retain`).addEventListener(`submit`, () => {
        let selectTask = document.querySelector(`.select-task`);
        let selectEmployee = document.querySelector(`.select-employee`);

        employeeTaskRetain({
            id1: selectTask.options[selectTask.selectedIndex],
            id2: selectEmployee.options[selectEmployee.selectedIndex],
        });
    });
    document.querySelector(`.select-employee`).addEventListener(`click`, () => {
        renderEmployeeList();
    });
    document.querySelector(`.select-task`).addEventListener(`click`, () => {
        renderTaskList();
    });
});

setInterval(() => {
    renderEmployeeList();
    renderTaskList();
}, 1000);
