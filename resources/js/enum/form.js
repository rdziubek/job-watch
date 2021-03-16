const Form = {
    EMPLOYEE: {
        ADD: `<!-- Add an employee to the "database" -->
    <form class="form-employee-add">
        <h2>
            Nowy Pracownik
        </h2>
        <label>Imię
            <input type="text" class="name">
        </label><br>
        <label>Nazwisko
            <input type="text" class="surname">
        </label><br>
        <input type="submit" class="submit-employee-add" value="Dodaj">
    </form>`,

        DELETE: `<!-- Delete an employee from "the database" -->
    <form class="form-employee-delete">
        <h2>
            Usuń pracownika
        </h2>
        <label>Pracownik:
            <select class="select-employee">
            </select>
        </label><br>
        <input type="submit" class="submit-employee-delete" value="Usuń">
    </form>`,
    },

    TASK: {
        ADD: `<!-- Add a task to the "database" -->
    <form class="form-task-add">
        <h2>
            Nowe Zadanie
        </h2>
        <label>Nazwa
            <input type="text" class="name">
        </label><br>
        <label>Czas na wykonanie
            <input type="number" class="time-remaining">
        </label><br>
        <input type="submit" class="submit-task-add" value="Utwórz">
    </form>`,

        DELETE: `<!-- Delete a task from "the database" -->
    <form class="form-task-delete">
        <h2>
            Usuń zadanie
        </h2>
        <label>Zadanie:
            <select class="select-task">
            </select>
        </label><br>
        <input type="submit" class="submit-task-delete" value="Usuń">
    </form>`,
    },

    ASSIGN: `<!-- Assign an employee to a task -->
    <form class="form-employee-task-assign">
        <h2>
            Przydziel zadanie
        </h2>
        <label>Zadanie:
            <select class="select-task">
            </select>
        </label><br>
        <label>Pracownik:
            <select class="select-employee">
            </select>
        </label><br>
        <label>Rola
            <input type="text" class="role">
        </label><br>
        <input type="submit" class="submit-employee-task-assign" value="Przydziel">
    </form>`,

    RETAIN: `<!-- Un-assign an employee from a task -->
    <form class="form-employee-task-retain">
        <h2>
            Usuń pracownika z zadania
        </h2>
        <label>Przydział:
            <select class="select-binding">
            </select>
        </label><br>
        <input type="submit" class="submit-employee-task-retain" value="Usuń">
    </form>`,
}
