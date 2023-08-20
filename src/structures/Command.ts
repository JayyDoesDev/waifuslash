import { ApplicationCommandOptionType } from "./ApplicationCommandOptionType";
import { ApplicationCommandOptions } from "./ApplicationCommandOptions";
export interface ICommand {
  name: string;
  type: ApplicationCommandOptionType;
  description: string;
  options: ApplicationCommandOptions[];
}

export interface Command extends ICommand {}
export class Command implements Partial<ICommand> {
  public setType(type: ApplicationCommandOptionType): this {
    this.type = type;
    return this;
  }

  public setName(name: string): this {
    this.name = name;
    return this;
  }

  public setDescription(description: string): this {
    this.description = description;
    return this;
  }

  public setOptions(options: ApplicationCommandOptions[]): this {
    this.options = options;
    return this;
  }

  public toJSON(): ICommand {
    return {...this} as ICommand;
  }  
}
