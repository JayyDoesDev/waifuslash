import type { Snowflake } from "./@type";
import { ApplicationCommandPermissions } from "./ApplicationCommandPermissions";

export interface ApplicationGuildCommandPermissions {
  id: Snowflake;
  application_id: Snowflake;
  guild_id: Snowflake;
  permissions: ApplicationCommandPermissions[];
}
