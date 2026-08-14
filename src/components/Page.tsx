import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import EmployeeForm from "./EmployeeForm";
import Footer from "./Footer";

import employeesData from "../data/employees.json";

import type {
  Employee,
} from "../types/Employee";

function Page() {
  const [
    employees,
    setEmployees,
  ] = useState<Employee[]>(
    employeesData
  );

  const departments = [
    ...new Set(
      employees.map(
        (employee) =>
          employee.department
      )
    ),
  ];

  function addEmployee(
    newEmployee: Employee
  ) {
    setEmployees([
      ...employees,
      newEmployee,
    ]);
  }

  return (
    <>
      <Header />

      <Main
        employees={employees}
      />

      <EmployeeForm
        departments={
          departments
        }
        onAddEmployee={
          addEmployee
        }
      />

      <Footer />
    </>
  );
}

export default Page;