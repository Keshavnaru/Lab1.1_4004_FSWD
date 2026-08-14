import employeesData from "../data/employees.json";
import type { Employee } from "../types/Employee";

let employees: Employee[] = [...employeesData];

function getEmployees(): Employee[] {
  return employees;
}

function getDepartments(): string[] {
  return [
    ...new Set(
      employees.map(
        (employee) => employee.department
      )
    ),
  ];
}

function createEmployee(
  employee: Employee
): Employee {
  employees = [
    ...employees,
    employee,
  ];

  return employee;
}

const employeeRepo = {
  getEmployees,
  getDepartments,
  createEmployee,
};

export default employeeRepo;