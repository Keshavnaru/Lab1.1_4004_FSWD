import type {
  FormEvent,
} from "react";

import useFormInput from "../hooks/useFormInput";
import roleService from "../services/roleService";

import type {
  Role,
} from "../types/Role";

type RoleFormProps = {
  onRoleAdded: (
    role: Role
  ) => void;
};

function RoleForm({
  onRoleAdded,
}: RoleFormProps) {
  const firstName =
    useFormInput();

  const lastName =
    useFormInput();

  const role =
    useFormInput();

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    firstName.setMessage("");
    lastName.setMessage("");
    role.setMessage("");

    const newRole: Role = {
      firstName:
        firstName.value.trim(),

      lastName:
        lastName.value.trim(),

      role:
        role.value.trim(),
    };

    const result =
      roleService.createRole(
        newRole
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
        "role"
      ) {
        role.setMessage(
          result.message || ""
        );
      }

      return;
    }

    if (result.role) {
      onRoleAdded(
        result.role
      );
    }

    firstName.clear();
    lastName.clear();
    role.clear();
  }

  return (
    <section className="employee-form">
      <h2>
        Add Organization Role
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
          Role

          <input
            type="text"
            value={
              role.value
            }
            onChange={(event) =>
              role.setValue(
                event.target.value
              )
            }
          />

          {role.message && (
            <span className="error-message">
              {
                role.message
              }
            </span>
          )}
        </label>

        <button type="submit">
          Add Role
        </button>
      </form>
    </section>
  );
}

export default RoleForm;