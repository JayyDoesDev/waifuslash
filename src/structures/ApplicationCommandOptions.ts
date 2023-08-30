import { ApplicationCommandLocalization } from "./ApplicationCommandLocalization";
import { ApplicationCommandOptionsChoice } from "./ApplicationCommandOptionsChoice";
import { ApplicationCommandType } from "./ApplicationCommandType";
import type { ChannelType } from "./ChannelType";
import type { Integer } from "./@type";

export interface ApplicationCommandOptions {
  /**
   * type
   * Type of option
   * @returns {ApplicationCommandType}
   */
  type: ApplicationCommandType;
  /**
   * name
   * 1-32 character name
   * @returns string
   */
  name: string;
  /**
   * name_localization
   * Localization dictionary for the name field. Values follow the same restrictions as name
   * @returns {ApplicationCommandLocalization}
   */
  name_localization: ApplicationCommandLocalization;
  /**
   * description
   * 1-100 character description
   * @returns string
   */
  description: string;
  /**
   * description_localizations
   * Localization dictionary for the description field. Values follow the same restrictions as description
   * @returns {ApplicationCommandLocalization}
   */
  description_localizations?: ApplicationCommandLocalization;
  /**
   * required
   * If the parameter is required or optional--default false
   * @returns boolean
   */
  required?: boolean;
  /**
   * choices
   * Choices for STRING, INTEGER, and NUMBER types for the user to pick from, max 25
   * @returns {ApplicationCommandOptionsChoice[]}
   */
  choices?: ApplicationCommandOptionsChoice[];
  /**
   * options
   * If the option is a subcommand or subcommand group type, these nested options will be the parameters
   * @returns {ApplicationCommandOptions[]}
   */
  options?: ApplicationCommandOptions[];
  /**
   * channel_types
   * If the option is a channel type, the channels shown will be restricted to these types
   * @returns {ChannelType[]}
   */
  channel_types?: ChannelType[];
  /**
   * min_value
   * If the option is an INTEGER or NUMBER type, the minimum value permitted
   * @returns {Integer}
   */
  min_value?: Integer;
  /**
   * max_value
   * If the option is an INTEGER or NUMBER type, the maximum value permitted
   * @returns {Integer}
   */
  max_value?: Integer;
  /**
   * min_length
   * For option type STRING, the minimum allowed length (minimum of 0, maximum of 6000)
   * @returns {Integer}
   */
  min_length?: Integer;
  /**
   * max_length
   * For option type STRING, the maximum allowed length (minimum of 1, maximum of 6000)
   * @returns {Integer}
   */
  max_length?: Integer;
  /**
   * autocomplete
   * If autocomplete interactions are enabled for this STRING, INTEGER, or NUMBER type option
   * @returns boolean
   */
  autocomplete?: boolean;
}
