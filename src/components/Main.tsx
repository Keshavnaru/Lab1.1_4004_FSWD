import employeesData from "../data/employees.json";
import type { Employee } from "../types/Employee";

function Main() {
  const employees: Employee[] = employeesData;

  return (
    <main>
      <h2>Our Employees</h2>

      <div className="employee-list">
        {employees.map((employee) => (
          <div
            className="employee-card"
            key={employee.firstName + employee.lastName}
          >
            <h3>
              {employee.firstName} {employee.lastName}
            </h3>

            <p>{employee.position}</p>

            <p>
              <strong>Department:</strong> {employee.department}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;