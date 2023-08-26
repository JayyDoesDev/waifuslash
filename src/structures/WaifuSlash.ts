import type { Snowflake } from "./@type";
import { ApplicationCommand } from "./ApplicationCommand";
import { ApplicationCommandPermissions } from "./ApplicationCommandPermissions";
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
      publicKey: string;
      botToken: string;
    }
  ) {
    this.api = "https://discord.com/api/v10";
    this.options.botID = options.botID;
    this.options.publicKey = options.publicKey;
    this.options.botToken = options.botToken;
    this.waifu = new RequestManager(
      this.options.publicKey,
      this.options.botToken,
      this.api
    );
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
    (await this.waifu.POST<ApplicationCommand>({
      route: Routes.createApplicationCommand(this.options.botID),
      contentType: APPLICATION_TYPE.JSON,
      data: command,
    })) as ApplicationCommand;
  }

  public async getGlobalCommands(): Promise<ApplicationCommand[] | void> {
    (await this.waifu.GET<ApplicationCommand>({
      route: Routes.getApplicationCommands(this.options.botID),
      contentType: APPLICATION_TYPE.JSON,
    })) as ApplicationCommand;
  }

  public async overwriteGlobalCommands(command: ICommand): Promise<void> {
    await this.waifu.PUT<ApplicationCommand>({
      route: Routes.bulkOverGlobalApplicationCommands(this.options.botID),
      contentType: APPLICATION_TYPE.JSON,
      data: command,
    });
  }

  public async createGuildCommand(
    guildId: Snowflake,
    command: ICommand
  ): Promise<ApplicationCommand | void> {
    (await this.waifu.POST<ApplicationCommand>({
      route: Routes.createGuildApplicationCommand(this.options.botID, guildId),
      contentType: APPLICATION_TYPE.JSON,
      data: command,
    })) as ApplicationCommand;
  }

  public async getGuildCommands(
    guildId: Snowflake
  ): Promise<ApplicationCommand[] | void> {
    (await this.waifu.GET<ApplicationCommand>({
      route: Routes.getGuildApplicationCommands(this.options.botID, guildId),
      contentType: APPLICATION_TYPE.JSON,
    })) as ApplicationCommand;
  }

  public async editGuildCommand(options: {
    guildId: Snowflake;
    commandId: string;
    command: ICommand;
  }): Promise<void> {
    (await this.waifu.PATCH<ApplicationCommand>({
      route: Routes.editGuildApplicationCommand({
        applicationId: this.options.botID,
        guildId: options.guildId,
        commandId: options.commandId,
      }),
      contentType: APPLICATION_TYPE.JSON,
      data: options.command,
    })) as ApplicationCommand;
  }

  public async deleteGuildCommand(
    guildId: Snowflake,
    commandId: string
  ): Promise<void> {
    await this.waifu.DELETE<ApplicationCommand>({
      route: Routes.deleteGuildApplicationCommand({
        applicationId: this.options.botID,
        guildId: guildId,
        commandId: commandId,
      }),
      contentType: APPLICATION_TYPE.JSON,
    });
  }

  public async overwriteGuildCommands(
    guildId: Snowflake,
    command: ICommand
  ): Promise<void> {
    await this.waifu.PUT<ApplicationCommand>({
      route: Routes.bulkOverwriteGuildApplicationCommands(
        this.options.botID,
        guildId
      ),
      contentType: APPLICATION_TYPE.JSON,
      data: command,
    });
  }

  public async getGuildCommand(
    guildID: Snowflake,
    commandId: string
  ): Promise<ApplicationCommand | void> {
    (await this.waifu.GET<ApplicationCommand>({
      publicKey: true,
      route: Routes.getGuildApplicationCommand({
        applicationId: this.options.botID,
        guildId: guildID,
        commandId: commandId,
      }),
      contentType: APPLICATION_TYPE.JSON,
    })) as ApplicationCommand;
  }

  public async getGuildCommandPermissions(
    guildId: Snowflake
  ): Promise<ApplicationCommandPermissions[] | void> {
    (await this.waifu.GET<ApplicationCommandPermissions[]>({
      publicKey: true,
      route: Routes.getGuildApplicationCommandPermissions(
        this.options.botID,
        guildId
      ),
      contentType: APPLICATION_TYPE.JSON,
    })) as ApplicationCommandPermissions[];
  }

  public async editGuildCommandPermissions(options: {
    guildId: Snowflake;
    commandId: string;
    permissions: ApplicationCommandPermissions[];
  }): Promise<ApplicationCommandPermissions | void> {
    (await this.waifu.PUT<ApplicationCommandPermissions>({
      publicKey: true,
      route: Routes.editApplicationCommandPermissions({
        applicationId: this.options.botID,
        guildId: options.guildId,
        commandId: options.commandId,
      }),
      contentType: APPLICATION_TYPE.JSON,
      data: options.permissions,
    })) as ApplicationCommandPermissions;
  }
}
