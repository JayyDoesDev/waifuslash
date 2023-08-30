import type { Integer } from "./@type";
import { ApplicationCommandLocalization } from "./ApplicationCommandLocalization";

export interface ApplicationCommandOptionsChoice {
  /**
   * name
   * 1-100 character choice name
   * @returns string
   */
  name: string;
  /**
   * name_localizations
   * Localization dictionary for the name field. Values follow the same restrictions as name
   * @returns {ApplicationCommandLocalization}
   */
  name_localizations?: ApplicationCommandLocalization;
  /**
   * value
   * Value for the choice, up to 100 characters if string
   * @returns {string | integer}
   */
  value: string | Integer;
}
