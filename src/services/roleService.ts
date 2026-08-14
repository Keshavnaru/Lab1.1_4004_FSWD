import roleRepo from "../repositories/roleRepo";
import type { Role } from "../types/Role";

type CreateRoleResult = {
  success: boolean;
  message?: string;
  field?: "firstName" | "role";
};

function getRoles(): Role[] {
  return roleRepo.getRoles();
}

function createRole(
  newRole: Role
): CreateRoleResult {
  if (newRole.firstName.trim().length < 3) {
    return {
      success: false,
      field: "firstName",
      message:
        "First name must have at least 3 characters.",
    };
  }

  if (newRole.role.trim() === "") {
    return {
      success: false,
      field: "role",
      message: "Role is required.",
    };
  }

  if (roleRepo.roleExists(newRole.role)) {
    return {
      success: false,
      field: "role",
      message:
        "This role is already occupied.",
    };
  }

  roleRepo.createRole(newRole);

  return {
    success: true,
  };
}

const roleService = {
  getRoles,
  createRole,
};

export default roleService;