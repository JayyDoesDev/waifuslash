import type { Snowflake } from "./@type";
import type { ApplicationCommandLocalization } from "./ApplicationCommandLocalization";
import type { ApplicationCommandType } from "./ApplicationCommandType";

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
}
