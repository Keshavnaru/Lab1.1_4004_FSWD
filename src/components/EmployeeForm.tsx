import type {
  FormEvent,
} from "react";

import useFormInput from "../hooks/useFormInput";
import employeeService from "../services/employeeService";

import type {
  Employee,
} from "../types/Employee";

type EmployeeFormProps = {
  departments: string[];

  onEmployeeAdded:
    (employee: Employee) => void;
};

function EmployeeForm({
  departments,
  onEmployeeAdded,
}: EmployeeFormProps) {
  const firstName =
    useFormInput();

  const lastName =
    useFormInput();

  const position =
    useFormInput();

  const department =
    useFormInput(
      departments[0] || ""
    );

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    // Clear old messages
    firstName.setMessage("");
    lastName.setMessage("");
    position.setMessage("");
    department.setMessage("");

    // Hook validation
    const firstNameValid =
      firstName.validate(
        (value) =>
          value.trim().length >= 3
            ? ""
            : "First name must have at least 3 characters."
      );

    const departmentValid =
      department.validate(
        (value) =>
          departments.includes(
            value
          )
            ? ""
            : "Please select an existing department."
      );

    if (
      !firstNameValid ||
      !departmentValid
    ) {
      return;
    }

    const newEmployee: Employee = {
      firstName:
        firstName.value.trim(),

      lastName:
        lastName.value.trim(),

      position:
        position.value.trim(),

      department:
        department.value,
    };

    const result =
      employeeService.createEmployee(
        newEmployee
      );

    if (!result.success) {
      if (
        result.field ===
        "firstName"
      ) {
        firstName.setMessage(
          result.message || ""
        );
      }

      if (
        result.field ===
        "department"
      ) {
        department.setMessage(
          result.message || ""
        );
      }

      return;
    }

    if (result.employee) {
      onEmployeeAdded(
        result.employee
      );
    }

    firstName.clear();
    lastName.clear();
    position.clear();

    department.setValue(
      departments[0] || ""
    );
  }

  return (
    <section className="employee-form">
      <h2>
        Add Employee
      </h2>

      <form
        onSubmit={
          handleSubmit
        }
      >
        <label>
          First Name

          <input
            type="text"
            value={
              firstName.value
            }
            onChange={(event) =>
              firstName.setValue(
                event.target.value
              )
            }
          />

          {firstName.message && (
            <span className="error-message">
              {
                firstName.message
              }
            </span>
          )}
        </label>

        <label>
          Last Name

          <input
            type="text"
            value={
              lastName.value
            }
            onChange={(event) =>
              lastName.setValue(
                event.target.value
              )
            }
          />
        </label>

        <label>
          Position

          <input
            type="text"
            value={
              position.value
            }
            onChange={(event) =>
              position.setValue(
                event.target.value
              )
            }
          />
        </label>

        <label>
          Department

          <select
            value={
              department.value
            }
            onChange={(event) =>
              department.setValue(
                event.target.value
              )
            }
          >
            {departments.map(
              (name) => (
                <option
                  key={name}
                  value={name}
                >
                  {name}
                </option>
              )
            )}
          </select>

          {department.message && (
            <span className="error-message">
              {
                department.message
              }
            </span>
          )}
        </label>

        <button type="submit">
          Add Employee
        </button>
      </form>
    </section>
  );
}

export default EmployeeForm;