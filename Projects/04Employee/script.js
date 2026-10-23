let emp_name = document.getElementById("name");
let emp_profession = document.getElementById("profession");
let emp_age = document.getElementById("age");

let submit = document.getElementById("btn");
let message = document.querySelector(".message");

let employeeList = document.getElementById("employee-list");

let employees_data = []; //{id:1, name, age, profession}
let nextId = 1;

submit.addEventListener("click", (e) => {
    e.preventDefault();

    const name = emp_name.value.trim();
    const profession = emp_profession.value.trim();
    const ageValue = emp_age.value.trim();
    const age = Number(ageValue);

    if (
        !name ||
        !profession ||
        !ageValue ||
        !Number.isInteger(age) ||
        age < 1
    ) {
        message.textContent = "Please enter a Valid name, profession and age";
        message.style.color = "red";
        return;
    }

    const employee = {
        id: nextId++,
        name: name,
        profession: profession,
        age: age,
    };

    employees_data.push(employee);

    renderEmployees();

    message.textContent = "Employee added successfully";
    message.style.color = "green";

    // emp_name.textContent="";
    // emp_profession.textContent="";
    // emp_age.textContent="";
});

function renderEmployees() {
    employeeList.innerHTML = "";

    employees_data.forEach(function (employee) {
        const details = document.createElement("div");
        details.className = "employee-details";

        const name = document.createElement("p");
        name.textContent = `Name: ${employee.name}`;

        const age = document.createElement("p");
        age.textContent = `Age: ${employee.age}`;

        const profession = document.createElement("p");
        profession.textContent = `Profession: ${employee.profession}`;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete User";

        deleteButton.addEventListener("click", function () {
            deleteEmployeeById(employee.id);
        });

        details.append(name, age, profession, deleteButton);
        employeeList.append(details);
    });
}

function deleteEmployeeById(id) {
    employees_data = employees_data.filter((emp) => emp.id !== id);
    renderEmployees();

    message.textContent = "Employee deleted successfully";
    message.style.color = "green";
}
