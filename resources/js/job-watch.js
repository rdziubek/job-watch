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
    if (DropGuard.verifyDeletion(Key.EMPLOYEE, employeeId)) {
        /**
         * Remove instance.
         */
        employees.splice(employeeId, 1);
        PersistentManager.updateStorage(Key.EMPLOYEE, employees);


        /**
         * Remove related bindings.
         *
         * NOTE: Offset any indexes affected by the splicing in another, separate loop.
         *  Doing it in one loop is problematic due to the binding length changing and stuff.
         */
        for (let i = 0; i < bindings.length; i++) {
            if (employeeId === bindings[i].employeeId) {
                if (i < bindings.length) bindings.splice(i, 1);
            }
        }
        for (let i = 0; i < bindings.length; i++) {
            if (employeeId < bindings[i].employeeId) bindings[i].employeeId -= 1;
        }

        PersistentManager.updateStorage(Key.BINDING, bindings);

        // Reload the page to update the select lists
        location.reload();
    }
}

/**
 * Removes a given task.
 * @param {number} taskId Task to be removed at the given index.
 */
function taskDelete(taskId) {
    if (DropGuard.verifyDeletion(Key.TASK, taskId)) {
        /**
         * Remove instance.
         */
        tasks.splice(taskId, 1);
        PersistentManager.updateStorage(Key.TASK, tasks);

        /**
         * Remove related bindings.
         *
         * NOTE: Offset any indexes affected by the splicing in another, separate loop.
         *  Doing it in one loop is problematic due to the binding length changing and stuff.
         */
        for (let i = 0; i < bindings.length; i++) {
            if (taskId === bindings[i].taskId) {
                if (i < bindings.length) bindings.splice(i, 1);
            }
        }
        for (let i = 0; i < bindings.length; i++) {
            if (taskId < bindings[i].taskId) bindings[i].taskId -= 1;
        }

        PersistentManager.updateStorage(Key.BINDING, bindings);

        // Reload the page to update the select lists
        location.reload();
    }
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
    for (let i of bindings.keys()) {
        if (employeeId === bindings[i].employeeId &&
            taskId === bindings[i].taskId) {
            bindings.splice(i, 1);
        }
    }
    PersistentManager.updateStorage(Key.BINDING, bindings);
}

/**
 * Update UI state.
 */
setInterval(() => {

}, Timing.UI_UPDATE_INTERVAL);
