import type { Snowflake } from "./@type";
import { ApplicationCommandPermissionsType } from "./ApplicationCommandPermissionType";

export interface ApplicationCommandPermissions {
  /**
   * id
   * ID of the command or the application ID
   * @returns {Snowflake}
   */
  id: Snowflake;
  /**
   * type
   * role (1), user (2), or channel (3)
   * @returns {ApplicationCommandPermissionsType}
   */
  type: ApplicationCommandPermissionsType;
  /**
   * permission
   * true to allow, false, to disallow
   * @returns boolean
   */
  permission: boolean;
}
