`use strict`;

const employees = []
const tasks = []
const bindings = []

/**
 * Adds an employee.
 * @param {Employee} employee An employee to be added.
 */
function employeeAdd(employee) {
    employees.push(employee)

    PersistentManager.updateStorage(Key.EMPLOYEE, employees)
}

/**
 * Creates a task.
 * @param {Task} task A task to be added.
 */
function taskAdd(task) {
    tasks.push(task)

    PersistentManager.updateStorage(Key.TASK, tasks)
}

/**
 * Removes a given employee.
 * @param {number} employeeId Employee to be removed at the given index.
 */
function employeeDelete(employeeId) {
    /**
     * Remove instance.
     * NOTE: Employee removed by inserting a `null` value so that other references remain untouched
     *  (new instances always put on top of a stack).
     */
    employees[employeeId] = null;
    PersistentManager.updateStorage(Key.EMPLOYEE, employees);


    /**
     * Remove related bindings.
     *
     * NOTE: Binding removed by inserting a `null` value so that other references remain untouched
     *  (new instances always put on top of a stack).
     */
    for (let i of bindings.keys()) {
        if (employeeId === bindings[i].employeeId) {
            bindings[i] = null;
        }
    }
    PersistentManager.updateStorage(Key.BINDING, bindings);
}

/**
 * Removes a given task.
 * @param {number} taskId Task to be removed at the given index.
 */
function taskDelete(taskId) {
    /**
     * Remove instance.
     */
    tasks[taskId] = null;
    PersistentManager.updateStorage(Key.TASK, tasks);

    /**
     * Remove related bindings.
     *
     * NOTE: Task removed by inserting a `null` value so that other references remain untouched
     *  (new instances always put on top of a stack).
     */
    for (let i of bindings.keys()) {
        if (taskId === bindings[i].taskId) {
            bindings[i] = null;
        }
    }
    PersistentManager.updateStorage(Key.BINDING, bindings);
}

/**
 * Creates an employee-task bond.
 * @param {number} taskId Task's {@see Task} id to which the employee is to be assigned.
 * @param {number} employeeId Employee's {@see Employee} id to which the task is to be assigned.
 * @param {string} employeeTaskRole Role fulfilled by the employee assigned.
 */
function employeeTaskAssign(taskId, employeeId, employeeTaskRole) {
    bindings.push(new Binding(taskId, employeeId, employeeTaskRole));

    PersistentManager.updateStorage(Key.BINDING, bindings);
}

/**
 * Removes the employee-task bond.
 * @param taskId Task's {@see Task} id from which the employee is to be retained.
 * @param employeeId Employee's {@see Employee} id from which the task is to be retained.
 */
function employeeTaskRetain(taskId, employeeId) {
    /**
     * NOTE: Binding removed by inserting a `null` value so that other references remain untouched
     *  (new instances always put on top of a stack).
     */
    for (let i of bindings.keys()) {
        if (employeeId === bindings[i].employeeId &&
            taskId === bindings[i].taskId) {
            bindings[i] = null;
        }
    }

    PersistentManager.updateStorage(Key.BINDING, bindings);
}

/**
 * Update UI state.
 */
setInterval(() => {
    Renderer.renderEntities();
}, Timing.UI_UPDATE_INTERVAL);
