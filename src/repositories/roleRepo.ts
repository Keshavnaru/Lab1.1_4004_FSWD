import rolesData from "../data/roles.json";
import type { Role } from "../types/Role";

let roles: Role[] = [...rolesData];

function getRoles(): Role[] {
  return [...roles];
}

function createRole(newRole: Role): Role {
  roles = [...roles, newRole];

  return newRole;
}

function roleExists(roleName: string): boolean {
  return roles.some(
    (person) =>
      person.role.trim().toLowerCase() ===
      roleName.trim().toLowerCase()
  );
}

const roleRepo = {
  getRoles,
  createRole,
  roleExists,
};

export default roleRepo;