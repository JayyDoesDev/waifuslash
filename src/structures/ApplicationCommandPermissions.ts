import type { Snowflake } from "./@type";
import { ApplicationCommandPermissionsType } from "./ApplicationCommandPermissionType";

export interface ApplicationCommandPermissions {
  id: Snowflake;
  type: ApplicationCommandPermissionsType;
  permission: boolean;
}
