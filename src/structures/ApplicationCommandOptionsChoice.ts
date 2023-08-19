import type { Integer } from "./@type";
import { ApplicationCommandLocalization } from "./ApplicationCommandLocalization";

export interface ApplicationCommandOptionsChoice {
    name: string;
    name_localizations?: ApplicationCommandLocalization;
    value: string | Integer;
}