import rolesData from "../data/roles.json";
import type { Role } from "../types/Role";

function OrganizationPage() {
  const roles: Role[] =
    rolesData;

  return (
    <main>
      <h2>
        Leadership and Management
      </h2>

      <div className="organization-list">
        {roles.map(
          (person) => (
            <div
              className="organization-row"
              key={
                person.firstName +
                person.lastName
              }
            >
              <span>
                {person.firstName}{" "}
                {person.lastName}
              </span>

              <span>
                {person.role}
              </span>
            </div>
          )
        )}
      </div>
    </main>
  );
}

export default OrganizationPage;