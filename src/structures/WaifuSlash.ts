import type { Snowflake } from "./@type";
import { ApplicationCommand } from "./ApplicationCommand";
import { ICommand } from "./Command";
import { Routes } from "./Routes";
import { RequestManager } from "./request/RequestManager";
import { APPLICATION_TYPE } from "./request/typings";
export class WaifuSlash {
    private waifu: RequestManager;
    private api: string;
    constructor(
        public readonly id: Snowflake,
        public readonly token: string
    ) {
        this.api = "https://discord.com/api/v10"
        this.id = id;
        this.token = token;
        this.waifu = new RequestManager(this.token, this.api);
    }

    public async createGlobalCommand<T>(command: ICommand): Promise<T | void> {
    await this.waifu.POST<T>(
        Routes.createApplicationCommand(this.id),
        APPLICATION_TYPE.JSON,
        command
      );
    }

    public async createGuildCommand<ApplicationCommand>(guildId: Snowflake, command: ICommand): Promise<ApplicationCommand | void> {
        await this.waifu.POST<ApplicationCommand>(
            Routes.createGuildApplicationCommand(this.id, guildId),
            APPLICATION_TYPE.JSON,
            command
        ) as ApplicationCommand;
    }
}