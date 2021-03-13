`use strict`;

const employees = []
const tasks = []
const bindings = []

/**
 * Updates permanent storage.
 * @param {Key} key Where to save the data to.
 * @param {Object} object Data to be saved.
 */
function updateStorage(key, object) {
    localStorage.setItem(
        key,
        JSON.stringify(object))
}

/**
 * Adds an employee.
 * @param {Employee} employee An employee to be added.
 */
function employeeAdd(employee) {
    employees.push(employee)

    updateStorage(Key.EMPLOYEE, employees)
}

/**
 * Creates a task.
 * @param {Task} task A task to be added.
 */
function taskAdd(task) {
    tasks.push(task)

    updateStorage(Key.TASK, tasks)
}

/**
 * Removes a given employee.
 * @param {number} employeeId Employee to be removed at the given index.
 */
function employeeDelete(employeeId) {
    // TODO:
    //  logic behind the script:
    //  Delete an employee in a select list:
    //  form parameter passes that given employee into this scope from the <select> list
    //  first destroy that given employee object instance, then destroy all its mentions in <select> list (although SetInterval can do that for us)
    //  what about glue.js???
}

/**
 * Removes a given task.
 * @param {number} taskId Task to be removed at the given index.
 */
function taskDelete(taskId) {
    // TODO: logic behind the script:
    //  Same as employeeDelete
}

/**
 * Creates an employee-task bond.
 * @param {number} taskId Task's {@see Task} id to which the employee is to be assigned.
 * @param {number} employeeId Employee's {@see Employee} id to which the task is to be assigned.
 * @param {string} employeeTaskRole Role fulfilled by the employee assigned.
 */
function employeeTaskAssign(taskId, employeeId, employeeTaskRole) {
    // TODO: get a task and an employee (both existing) from the form parameter
    //  glue.js them together
}

/**
 * Removes the employee-task bond.
 * @param taskId Task's {@see Task} id from which the employee is to be retained.
 * @param employeeId Employee's {@see Employee} id from which the task is to be retained.
 */
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
