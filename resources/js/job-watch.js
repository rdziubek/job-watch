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

    // TODO: Update rendered employee list.
    // TODO: Remove all existing bindings {@see Binding} where the
    //  deleted employee is present (identified by employee's id).
}

/**
 * Removes a given task.
 * @param {number} taskId Task to be removed at the given index.
 */
function taskDelete(taskId) {

    // TODO: Update rendered task list.
    // TODO: Remove all existing bindings {@see Binding} where the
    //  deleted task is present (identified by task's id).
}

/**
 * Creates an employee-task bond.
 * @param {number} taskId Task's {@see Task} id to which the employee is to be assigned.
 * @param {number} employeeId Employee's {@see Employee} id to which the task is to be assigned.
 * @param {string} employeeTaskRole Role fulfilled by the employee assigned.
 */
function employeeTaskAssign(taskId, employeeId, employeeTaskRole) {

    // TODO: Create a binding object.
}

/**
 * Removes the employee-task bond.
 * @param taskId Task's {@see Task} id from which the employee is to be retained.
 * @param employeeId Employee's {@see Employee} id from which the task is to be retained.
 */
function employeeTaskRetain(taskId, employeeId) {

    // TODO: Remove a binding object (identified by a pair of task and employee ids).
}

/**
 * Update UI state.
 */
setInterval(() => {
    Renderer.renderEmployeeList();
    Renderer.renderTaskList();
}, Timing.UI_UPDATE_INTERVAL);
