import type { Employee } from "../types/Employee";

type MainProps = {
  employees: Employee[];
};

function Main({ employees }: MainProps) {
  const departments = [
    ...new Set(
      employees.map(
        (employee) => employee.department
      )
    ),
  ];

  return (
    <main>
      <h2>Our Employees</h2>

      {departments.map((department) => (
        <section key={department}>
          <h3>{department}</h3>

          <div className="employee-list">
            {employees
              .filter(
                (employee) =>
                  employee.department === department
              )
              .map((employee, index) => (
                <div
                  className="employee-card"
                  key={`${employee.firstName}-${employee.lastName}-${index}`}
                >
                  <h4>
                    {employee.firstName}{" "}
                    {employee.lastName}
                  </h4>

                  <p>{employee.position}</p>
                </div>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Main;