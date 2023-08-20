import type { Snowflake } from "./@type";
import { ApplicationCommand } from "./ApplicationCommand";
import { Command, ICommand } from "./Command";
import { Routes } from "./Routes";
import { RequestManager } from "./request/RequestManager";
import { APPLICATION_TYPE } from "./request/typings";
export class WaifuSlash {
  private waifu: RequestManager;
  private api: string;
  constructor(
    protected readonly options: {
      botID: string;
      botToken: string;
    }
  ) {
    this.api = "https://discord.com/api/v10";
    this.options.botID = options.botID;
    this.options.botToken = options.botToken;
    this.waifu = new RequestManager(this.options.botToken, this.api);
  }

  get botID() {
    return this.options.botID;
  }

  get botToken() {
    return this.options.botToken;
  }

  public async createGlobalCommand(
    command: ICommand
  ): Promise<ApplicationCommand | void> {
    (await this.waifu.POST<ApplicationCommand>(
      Routes.createApplicationCommand(this.options.botID),
      APPLICATION_TYPE.JSON,
      command
    )) as ApplicationCommand;
  }

  public async getGlobalCommands(): Promise<ApplicationCommand[] | void> {
    (await this.waifu.GET<ApplicationCommand>(
      Routes.getApplicationCommands(this.options.botID),
      APPLICATION_TYPE.JSON
    )) as ApplicationCommand;
  }

  public async createGuildCommand(
    guildId: Snowflake,
    command: ICommand
  ): Promise<ApplicationCommand | void> {
    (await this.waifu.POST<ApplicationCommand>(
      Routes.createGuildApplicationCommand(this.options.botID, guildId),
      APPLICATION_TYPE.JSON,
      command
    )) as ApplicationCommand;
  }

  public async getGuildCommands(
    guildId: Snowflake
  ): Promise<ApplicationCommand[] | void> {
    (await this.waifu.GET<ApplicationCommand>(
      Routes.getGuildApplicationCommands(this.options.botID, guildId),
      APPLICATION_TYPE.JSON
    )) as ApplicationCommand;
  }

  public async editGuildCommand(options: {
    guildId: Snowflake;
    commandId: string;
    command: ICommand;
  }): Promise<void> {
    (await this.waifu.PATCH<ApplicationCommand>(
      Routes.editGuildApplicationCommand({
        applicationId: this.options.botID,
        guildId: options.guildId,
        commandId: options.commandId,
      }),
      APPLICATION_TYPE.JSON,
      options.command
    )) as ApplicationCommand;
  }

  public async deleteGuildCommand(
    guildId: Snowflake,
    commandId: string
  ): Promise<void> {
    this.waifu.DELETE<ApplicationCommand>(
      Routes.deleteGuildApplicationCommand({
        applicationId: this.options.botID,
        guildId: guildId,
        commandId: commandId,
      }),
      APPLICATION_TYPE.JSON
    );
  }

  public async overwriteGuildCommands(
    guildId: Snowflake,
    command: ICommand
  ): Promise<void> {
    this.waifu.PUT<ApplicationCommand>(
      Routes.bulkOverwriteGuildApplicationCommands(this.options.botID, guildId),
      APPLICATION_TYPE.JSON,
      command
    );
  }

  public async massCreateGuildCommand(
    guildId: Snowflake,
    ...command: ICommand[]
  ): Promise<ApplicationCommand | void> {
    if (Array.isArray(command)) {
      command.forEach((e) => {
        this.createGuildCommand(guildId, e);
      });
    } else {
      throw new ReferenceError(
        "[waifuslash#WaifuSlash] Command must be an array."
      );
    }
  }

  public async massCreateGlobalCommand(
    ...command: ICommand[]
  ): Promise<ApplicationCommand | void> {
    if (Array.isArray(command)) {
      command.forEach((e) => {
        this.createGlobalCommand(e);
      });
    } else {
      throw new ReferenceError(
        "[waifuslash#WaifuSlash] Command must be an array."
      );
    }
  }
}
