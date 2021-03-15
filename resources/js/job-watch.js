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
        if (employeeId === bindings[i]._employeeId) {
            if (i < bindings.length) bindings.splice(i, 1);
        }
    }
    for (let i = 0; i < bindings.length; i++) {
        if (employeeId < bindings[i]._employeeId) bindings[i]._employeeId -= 1;
    }

    PersistentManager.updateStorage(Key.BINDING, bindings);

    // Reload the page to update the select lists
    location.reload();
}

/**
 * Removes a given task.
 * @param {number} taskId Task to be removed at the given index.
 */
function taskDelete(taskId) {
    let aboutToBeDeleted = `testing`;
    console.log(...bindings);
    for (let i = 0; i < bindings.length; i++) {
        if (taskId === bindings[i]._taskId) {
            if (i < bindings.length) {
                console.log('found', `${
                    employees[bindings[i]._employeeId]._name} ${
                    employees[bindings[i]._employeeId]._surname} z rolą ${
                    bindings[i]._role}\n`);
                aboutToBeDeleted = aboutToBeDeleted.concat(`${
                    employees[bindings[i]._employeeId]._name} ${
                    employees[bindings[i]._employeeId]._surname} z rolą ${
                    bindings[i]._role}\n`);
            }
        }
    }

    if (confirm(`Czy kontynuować?\nUsunięte zostaną istniejące powiązania pracowników:\n${aboutToBeDeleted}`)) {
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
            if (taskId === bindings[i]._taskId) {
                if (i < bindings.length) bindings.splice(i, 1);
            }
        }
        for (let i = 0; i < bindings.length; i++) {
            if (taskId < bindings[i]._taskId) bindings[i]._taskId -= 1;
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
        if (employeeId === bindings[i]._employeeId &&
            taskId === bindings[i]._taskId) {
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
