import { ApplicationCommandLocalization } from "./ApplicationCommandLocalization";
import { ApplicationCommandOptionsChoice } from "./ApplicationCommandOptionsChoice";
import { ApplicationCommandType } from "./ApplicationCommandType";
import type { ChannelType } from "./ChannelType";
import type { Integer } from "./@type";

export interface ApplicationCommandOptions {
    type : ApplicationCommandType;
    name: string;
    name_localization: ApplicationCommandLocalization;
    description: string;
    description_localizations?: ApplicationCommandLocalization;
    required?: boolean;
    choices?: ApplicationCommandOptionsChoice[];
    options?: ApplicationCommandOptions[];
    channel_types?: ChannelType[];
    min_value?: Integer;
    max_value?: Integer;
    min_length?: Integer;
    max_length?: Integer;
    autocomplete?: boolean;
}