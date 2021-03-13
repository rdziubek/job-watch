`use strict`;

const employees = []
const tasks = []
const bindings = []

/**
 * Updates permanent storage.
 * @param {Key | String} key Where to save the data to.
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
    /**
     * Remove instance.
     */
    employees.splice(employeeId, 1);
    updateStorage(Key.EMPLOYEE, employees);

    /**
     * Remove related bindings.
     *
     * NOTE: If the employee had more than one task assigned, after removing one binding from the bindings
     *  array the array would shorten by one element, therefore also misaligning with the iteration counter –
     *  hence the counter correction – `i - 1` when an element gets removed.
     */
    for (let i of bindings.keys()) {
        if (employeeId === bindings[i].employeeId) {
            bindings[i].splice(i, 1);

            i -= 1;
        }
    }
    updateStorage(Key.BINDING, bindings);
}

/**
 * Removes a given task.
 * @param {number} taskId Task to be removed at the given index.
 */
function taskDelete(taskId) {
    /**
     * Remove instance.
     */
    tasks.splice(taskId, 1);
    updateStorage(Key.TASK, tasks);

    /**
     * Remove related bindings.
     *
     * NOTE: If the task had more than one employee assigned, after removing one binding from the bindings
     *  array the array would shorten by one element, therefore also misaligning with the iteration counter –
     *  hence the counter correction – `i - 1` when an element gets removed.
     */
    for (let i of bindings.keys()) {
        if (taskId === bindings[i].taskId) {
            bindings[i].splice(i, 1);

            i -= 1;
        }
    }
    updateStorage(Key.BINDING, bindings);
}

/**
 * Creates an employee-task bond.
 * @param {number} taskId Task's {@see Task} id to which the employee is to be assigned.
 * @param {number} employeeId Employee's {@see Employee} id to which the task is to be assigned.
 * @param {string} employeeTaskRole Role fulfilled by the employee assigned.
 */
function employeeTaskAssign(taskId, employeeId, employeeTaskRole) {
    bindings.push(new Binding(taskId, employeeId, employeeTaskRole));

    updateStorage(Key.BINDING, bindings);
}

/**
 * Removes the employee-task bond.
 * @param taskId Task's {@see Task} id from which the employee is to be retained.
 * @param employeeId Employee's {@see Employee} id from which the task is to be retained.
 */
function employeeTaskRetain(taskId, employeeId) {
    /**
     * NOTE: If an employee had more than one task assigned, after removing one binding from the bindings
     *  array the array would shorten by one element, therefore also misaligning with the iteration counter –
     *  hence the counter correction – `i - 1` when an element gets removed.
     */
    for (let i of bindings.keys()) {
        if (employeeId === bindings[i].employeeId &&
            taskId === bindings[i].taskId) {
            bindings[i].splice(i, 1);

            i -= 1;
        }
    }

    updateStorage(Key.BINDING, bindings);
}

/**
 * Update UI state.
 */
setInterval(() => {
    // TODO: Delete debug logs
    console.log(employees);
    console.log(tasks);
    console.log(bindings);
    // TODO: Show current application state here, i.e. every employee, task and bounds between them.
}, Timing.UI_UPDATE_INTERVAL);
