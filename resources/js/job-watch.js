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

        _deleteBindingsRelatedTo(Key.EMPLOYEE, employeeId);
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

        _deleteBindingsRelatedTo(Key.TASK, taskId);
    }
}

/**
 * Clears up bindings no longer valid due to employee/task instances being removed.
 * @param {Key} key Identifier of the collection the cleanup is to be based on.
 * @param {number} index Index of the collection element which a corresponding
 * binding is to be found based on.
 * @private
 */
function _deleteBindingsRelatedTo(key, index) {
    /**
     * NOTE: Offset any indexes affected by the splicing in another, separate loop.
     *  Doing it in one go is problematic due to the binding length changing,
     *  hence the approach.
     *  Iterator has to get decremented every time an element gets spliced from the array
     *  (which gets then shrunk by it) so that no array elements are omitted.
     */
    for (let i = 0; i < bindings.length; i++) {
        if (index === bindings[i][`${key}Id`]) {
            if (i < bindings.length) {
                bindings.splice(i, 1);

                i -= 1;
            }
        }
    }
    for (let i = 0; i < bindings.length; i++) {
        if (index < bindings[i][`${key}Id`]) {
            bindings[i][`${key}Id`] -= 1;
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
    if (!!employees.length && !!tasks.length) {
        bindings.push(new Binding(taskId, employeeId, employeeTaskRole));

        PersistentManager.updateStorage(Key.BINDING, bindings);
    }
}

/**
 * Removes the employee-task bond.
 * @param {number} bindingId Id of the binding {@see Binding} which is to be removed.
 */
function employeeTaskRetain(bindingId) {
    bindings.splice(bindingId, 1);

    PersistentManager.updateStorage(Key.BINDING, bindings);
}
