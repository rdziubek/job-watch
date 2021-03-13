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
 * Update UI state.
 */
setInterval(() => {
    Renderer.renderEmployeeList();
    Renderer.renderTaskList();
}, Timing.UI_UPDATE_INTERVAL);
