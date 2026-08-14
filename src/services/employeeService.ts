import employeeRepo from "../repositories/employeeRepo";
import type { Employee } from "../types/Employee";

type CreateResult = {
  success: boolean;
  employee?: Employee;
  field?: "firstName" | "department";
  message?: string;
};

function getEmployeeData() {
  return {
    employees:
      employeeRepo.getEmployees(),

    departments:
      employeeRepo.getDepartments(),
  };
}

function createEmployee(
  employee: Employee
): CreateResult {
  const departments =
    employeeRepo.getDepartments();

  if (
    employee.firstName.trim().length < 3
  ) {
    return {
      success: false,
      field: "firstName",
      message:
        "First name must have at least 3 characters.",
    };
  }

  if (
    !departments.includes(
      employee.department
    )
  ) {
    return {
      success: false,
      field: "department",
      message:
        "Please select an existing department.",
    };
  }

  const createdEmployee =
    employeeRepo.createEmployee(
      employee
    );

  return {
    success: true,
    employee: createdEmployee,
  };
}

const employeeService = {
  getEmployeeData,
  createEmployee,
};

export default employeeService;