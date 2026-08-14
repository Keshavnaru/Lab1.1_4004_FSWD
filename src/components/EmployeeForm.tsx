import { useState } from "react";
import type { Employee } from "../types/Employee";

type EmployeeFormProps = {
  departments: string[];
  onAddEmployee: (employee: Employee) => void;
};

function EmployeeForm({
  departments,
  onAddEmployee,
}: EmployeeFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState(
    departments[0] || ""
  );

  const [error, setError] = useState("");

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    // Clear old validation message
    setError("");

    if (firstName.trim().length < 3) {
      setError(
        "First name must have at least 3 characters."
      );

      return;
    }

    if (!department) {
      setError(
        "Please select a department."
      );

      return;
    }

    const newEmployee: Employee = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      position: position.trim(),
      department,
    };

    onAddEmployee(newEmployee);

    setFirstName("");
    setLastName("");
    setPosition("");
    setDepartment(
      departments[0] || ""
    );
  }

  return (
    <section className="employee-form">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <label>
          First Name

          <input
            type="text"
            value={firstName}
            onChange={(event) =>
              setFirstName(
                event.target.value
              )
            }
          />
        </label>

        <label>
          Last Name

          <input
            type="text"
            value={lastName}
            onChange={(event) =>
              setLastName(
                event.target.value
              )
            }
          />
        </label>

        <label>
          Position

          <input
            type="text"
            value={position}
            onChange={(event) =>
              setPosition(
                event.target.value
              )
            }
          />
        </label>

        <label>
          Department

          <select
            value={department}
            onChange={(event) =>
              setDepartment(
                event.target.value
              )
            }
          >
            {departments.map(
              (departmentName) => (
                <option
                  key={departmentName}
                  value={departmentName}
                >
                  {departmentName}
                </option>
              )
            )}
          </select>
        </label>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <button type="submit">
          Add Employee
        </button>
      </form>
    </section>
  );
}

export default EmployeeForm;