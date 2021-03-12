`use strict`;

const employees = []
const tasks = []
const bindings = []

/**
 * Update permanent storage.
 * @param {Key} key Where to save the data to.
 * @param {Object} object Data to be saved.
 */
function updateStorage(key, object) {
    localStorage.setItem(
        key,
        JSON.stringify(object))
}

function employeeAdd(form) {
    employees.push(new Employee(...form))

    updateStorage(Key.EMPLOYEE, employees)
}

function taskAdd(form) {
    tasks.push(new Task(...form))

    updateStorage(Key.TASK, employees)
}

function employeeDelete(form) {
    // TODO:
    //  logic behind the script:
    //  Delete an employee in a select list:
    //  form parameter passes that given employee into this scope from the <select> list
    //  first destroy that given employee object instance, then destroy all its mentions in <select> list (although SetInterval can do that for us)
    //  what about glue.js???
}

function taskDelete(form) {
    // TODO: logic behind the script:
    //  Same as employeeDelete
}

function employeeTaskAssign(form) {
    // TODO: get a task and an employee (both existing) from the form parameter
    //  glue.js them together
}

function employeeTaskRetain(form) {
    // TODO: get a task and an employee (both existing) from the form parameter
    //  destroy their glue.js link
}

/**
 * Updates drop-down list dataset.
 */
function renderEmployeeList() {
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
function renderTaskList() {
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
function renderForm(form) {
    document.querySelector(`.form-container`).innerHTML = form;
}
