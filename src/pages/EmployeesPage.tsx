import { useState } from "react";

import Main from "../components/Main";
import EmployeeForm from "../components/EmployeeForm";

import employeesData from "../data/employees.json";

import type { Employee } from "../types/Employee";

function EmployeesPage() {
  const [employees, setEmployees] =
    useState<Employee[]>(employeesData);

  const departments = [
    ...new Set(
      employees.map(
        (employee) =>
          employee.department
      )
    ),
  ];

  function addEmployee(
    employee: Employee
  ) {
    setEmployees([
      ...employees,
      employee,
    ]);
  }

  return (
    <>
      <Main employees={employees} />

      <EmployeeForm
        departments={departments}
        onAddEmployee={addEmployee}
      />
    </>
  );
}

export default EmployeesPage;