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

  public async createGlobalCommand(command: ICommand): Promise<void> {
    await this.waifu.POST<ApplicationCommand>(
      Routes.createApplicationCommand(this.options.botID),
      APPLICATION_TYPE.JSON,
      command
    );
  }

  public async getGlobalCommands(with_localizations?: boolean): Promise<void> {
    await this.waifu.GET<ApplicationCommand>(
        Routes.getApplicationCommands(this.options.botID),
        APPLICATION_TYPE.JSON,
        {
            with_localizations: with_localizations,
        }
    )
  }

  public async createGuildCommand(
    guildId: Snowflake,
    command: ICommand
  ): Promise<void> {
    (await this.waifu.POST<ApplicationCommand>(
      Routes.createGuildApplicationCommand(this.options.botID, guildId),
      APPLICATION_TYPE.JSON,
      command
    )) as ApplicationCommand;
  }

  public async massCreateGuildCommand(
    guildId: Snowflake,
    ...command: ICommand[]
  ): Promise<void> {
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

  public async massCreateGlobalCommand(...command: ICommand[]): Promise<void> {
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
