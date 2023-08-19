import { Snowflake } from "./@type";
import { ApplicationCommandType } from "./ApplicationCommandType";

export interface ApplicationCommand {
  /**
   * id
   * Unique ID of command
   * @returns {Snowflake}
   */
  readonly id: Snowflake;
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
  
}
