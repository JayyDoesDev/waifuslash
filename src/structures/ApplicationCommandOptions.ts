import { ApplicationCommandLocalization } from "./ApplicationCommandLocalization";
import { ApplicationCommandOptionsChoice } from "./ApplicationCommandOptionsChoice";
import { ApplicationCommandType } from "./ApplicationCommandType";

export interface ApplicationCommandOptions {
    type : ApplicationCommandType;
    name: string;
    name_localization: ApplicationCommandLocalization;
    description: string;
    description_localizations?: ApplicationCommandLocalization;
    required?: boolean;
    choices?: ApplicationCommandOptionsChoice[]
}