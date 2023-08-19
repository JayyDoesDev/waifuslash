import type { Snowflake } from "./@type";
import type { ApplicationCommandLocalization } from "./ApplicationCommandLocalization";
import { ApplicationCommandType } from "./ApplicationCommandType";
import { ApplicationCommandOptions } from "./ApplicationCommandOptions";

export interface ApplicationCommand {
  /**
   * id
   * Unique ID of command
   * @returns {Snowflake}
   */
  id: Snowflake;
  /**
   * type
   * Type of command, defaults to 1
   * @returns {ApplicationCommandType}
   */
  type?: ApplicationCommandType;
  /**
   * application_id
   * ID of the parent application
   * @returns {Snowflake}
   */
  application_id: Snowflake;
  /**
   * guild_id
   * Guild ID of the command, if not global
   * @returns {Snowflake}
   */
  guild_id?: Snowflake;
  /**
   * name_localization
   * Localization dictionary for name field. Values follow the same restrictions as name
   * @returns {ApplicationCommandLocalization}
   */
  name_localization?: ApplicationCommandLocalization;
  /**
   * description
   * Description for CHAT_INPUT commands, 1-100 characters. Empty string for USER and MESSAGE commands
   * @returns string
   */
  description: string;
  /**
   * description_localizations
   * Localization dictionary for description field. Values follow the same restrictions as description
   * @returns {ApplicationCommandLocalization}
   */
  description_localizations?: ApplicationCommandLocalization;
  /**
   * options
   * Parameters for the command, max of 25
   * @returns {ApplicationCommandOptions[]}
   */
  options?: ApplicationCommandOptions[];
  /**
   * default_member_permissions
   * Set of permissions represented as a bit set
   * @returns string
   */
  default_member_permissions: string;
  /**
   * dm_permission
   * Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
   * @returns boolean
   */
  dm_permission?: boolean;
  /**
   * nsfw
   * Indicates whether the command is age-restricted, defaults to false
   * @returns boolean
   */
  nsfw?: boolean;
  /**
   * version
   * Autoincrementing version identifier updated during substantial record changes
   * @returns {Snowflake}
   */
  version: Snowflake;
}
