import { useState } from "react";

import RoleForm from "../components/RoleForm";
import roleService from "../services/roleService";

import type { Role } from "../types/Role";

function OrganizationPage() {
  const [roles, setRoles] =
    useState<Role[]>(
      roleService.getRoles()
    );

  function refreshRoles() {
    setRoles(
      roleService.getRoles()
    );
  }

  return (
    <main>
      <h2>
        Leadership and Management
      </h2>

      <div className="organization-list">
        {roles.map(
          (person, index) => (
            <div
              className="organization-row"
              key={`${person.firstName}-${person.lastName}-${index}`}
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

      <RoleForm
        onRoleAdded={refreshRoles}
      />
    </main>
  );
}

export default OrganizationPage;