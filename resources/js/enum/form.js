const Form = {
    EMPLOYEE: {
        ADD: `<!-- Add an employee to the "database" -->
    <form class="form-employee-add">
        <h2>
            Nowy Pracownik
        </h2>
        <label>Imię
            <input type="text" class="name">
        </label>
        <label>Nazwisko
            <input type="text" class="surname">
        </label>
        <label>Rola
            <input type="text" class="role">
        </label>
        <input type="submit" class="submit-employee-add" value="Wykonaj">
    </form>`,

        DELETE: `<!-- Delete an employee from "the database" -->
    <form class="form-employee-delete">
        <h2>
            Usuń pracownika
        </h2>
        <label>Usuń pracownika:
            <select class="select-employee">
                <option value="0">⠀Jan Paweł II⠀</option><!--TODO: usunac debugowe wartosci-->
            </select>
        </label>
        <input type="submit" class="submit-employee-delete" value="Wykonaj">
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
        </label>
        <label>Czas na wykonanie
            <input type="number" class="time-remaining">
        </label>
        <input type="submit" class="submit-task-add" value="Wykonaj">
    </form>`,

        DELETE: `<!-- Delete a task from "the database" -->
    <form class="form-task-delete">
        <h2>
            Usuń zadanie
        </h2>
        <label>Usuń zadanie:
            <select class="select-task">
                <option value="0">⠀Sans granie⠀</option> <!--TODO: usunac debugowe wartosci-->
            </select>
        </label>
        <input type="submit" class="submit-task-delete" value="Wykonaj">
    </form>`,
    },

    ASSIGN: `<!-- Assign an employee to a task -->
    <form class="form-employee-task-assign">
        <h2>
            Przydziel Zadanie
        </h2>
        <label>Wybierz zadanie
            <select class="select-task">
                <option value="">⠀Wybierz zadanie⠀</option>
            </select>
        </label>
        <label>Dodaj pracownika:
            <select class="select-employee">
                <option value="">⠀Wybierz pracownika⠀</option>
            </select>
        </label>
        <input type="submit" class="submit-employee-task-assign" value="Wykonaj">
    </form>`,

    RETAIN: `<!-- Un-assign an employee from a task -->
    <form class="form-employee-task-retain">
        <h2>
            Usuń pracownika z zadania
        </h2>
        <label>Wybierz zadanie
            <select class="select-task">
                <option value="">⠀Wybierz zadanie⠀</option>
            </select>
        </label>
        <label>Usuń pracownika:
            <select class="select-employee">
                <option value="">⠀Wybierz pracownika⠀</option>
            </select>
        </label>
        <input type="submit" class="submit-employee-task-retain" value="Wykonaj">
    </form>`,
}
