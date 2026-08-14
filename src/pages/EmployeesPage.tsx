import {
  useState,
} from "react";

import Main from "../components/Main";
import EmployeeForm from "../components/EmployeeForm";

import employeeService from "../services/employeeService";

import type {
  Employee,
} from "../types/Employee";

function EmployeesPage() {
  const data =
    employeeService.getEmployeeData();

  const [
    employees,
    setEmployees,
  ] = useState<Employee[]>(
    data.employees
  );

  const departments =
    data.departments;

  function employeeAdded(
    employee: Employee
  ) {
    setEmployees([
      ...employees,
      employee,
    ]);
  }

  return (
    <>
      <Main
        employees={
          employees
        }
      />

      <EmployeeForm
        departments={
          departments
        }
        onEmployeeAdded={
          employeeAdded
        }
      />
    </>
  );
}

export default EmployeesPage;