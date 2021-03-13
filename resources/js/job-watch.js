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

function employeeAdd(employee) {
    employees.push(employee)

    updateStorage(Key.EMPLOYEE, employees)
}

function taskAdd(task) {
    tasks.push(task)

    updateStorage(Key.TASK, tasks)
}

function employeeDelete(employeeId) {
    // TODO:
    //  logic behind the script:
    //  Delete an employee in a select list:
    //  form parameter passes that given employee into this scope from the <select> list
    //  first destroy that given employee object instance, then destroy all its mentions in <select> list (although SetInterval can do that for us)
    //  what about glue.js???
}

function taskDelete(taskId) {
    // TODO: logic behind the script:
    //  Same as employeeDelete
}

function employeeTaskAssign(taskId, employeeId, employeeTaskRole) {
    // TODO: get a task and an employee (both existing) from the form parameter
    //  glue.js them together
}

function employeeTaskRetain(taskId, employeeId) {
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
