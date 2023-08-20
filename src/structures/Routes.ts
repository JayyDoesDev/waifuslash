import { Snowflake } from "./@type";

export class Routes {
  constructor() {}

  static getApplicationCommands(applicationId: Snowflake): string {
    if (applicationId) {
      return (
        "/applications/" + applicationId + "/commands?with_localizations=true"
      );
    } else if (!(typeof applicationId === "string")) {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID must be a Snowflake."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake and must be a string."
      );
    }
  }

  static createApplicationCommand(applicationId: Snowflake): string {
    if (applicationId) {
      return "/applications/" + applicationId + "/commands";
    } else if (!(typeof applicationId === "string")) {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID must be a Snowflake."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake and must be a string."
      );
    }
  }

  static getGlobalApplicationCommand(
    applicationId: Snowflake,
    commandId: Snowflake
  ): string {
    if (applicationId && commandId) {
      return "/applications/" + applicationId + "/commands/" + commandId;
    } else if (
      !(typeof applicationId === "string") ||
      !(typeof commandId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for both application ID and command ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID and command ID must be snowflakes and must be strings."
      );
    }
  }

  static editGlobalApplicationCommand(
    applicationId: Snowflake,
    commandId: Snowflake
  ): string {
    if (applicationId && commandId) {
      return "/applications/" + applicationId + "/commands/" + commandId;
    } else if (
      !(typeof applicationId === "string") ||
      !(typeof commandId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for both application ID and command ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID and command ID must be snowflakes and must be strings."
      );
    }
  }

  static deleteGlobalApplicationCommand(
    applicationId: Snowflake,
    commandId: Snowflake
  ): string {
    if (applicationId && commandId) {
      return "/applications/" + applicationId + "/commands/" + commandId;
    } else if (
      !(typeof applicationId === "string") ||
      !(typeof commandId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for both application ID and command ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID and command ID must be snowflakes and must be strings."
      );
    }
  }

  static bulkOverGlobalApplicationCommands(applicationId: Snowflake): string {
    if (applicationId) {
      return "/applications/" + applicationId + "/commands";
    } else if (!(typeof applicationId === "string")) {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID must be a Snowflake."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake and must be a string."
      );
    }
  }

  static getGuildApplicationCommands(
    applicationId: Snowflake,
    guildId: Snowflake
  ): string {
    if (applicationId && guildId) {
      return (
        "/applications/" +
        applicationId +
        "/guilds/" +
        guildId +
        "/commands?with_localizations=true"
      );
    } else if (
      !(typeof applicationId === "string") ||
      !(typeof guildId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for both application ID and guild ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID and guild ID must be snowflakes and must be strings."
      );
    }
  }

  static createGuildApplicationCommand(
    applicationId: Snowflake,
    guildId: Snowflake
  ): string {
    if (applicationId && guildId) {
      return (
        "/applications/" + applicationId + "/guilds/" + guildId + "/commands"
      );
    } else if (
      !(typeof applicationId === "string") ||
      !(typeof guildId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for both application ID and guild ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID and guild ID must be snowflakes and must be strings."
      );
    }
  }

  static getGuildApplicationCommand(options: {
    applicationId: Snowflake;
    guildId: Snowflake;
    commandId: Snowflake;
  }): string {
    if (options.applicationId && options.guildId && options.commandId) {
      return (
        "/applications/" +
        options.applicationId +
        "/guilds/" +
        options.guildId +
        "/commands/" +
        options.commandId
      );
    } else if (
      !(typeof options.applicationId === "string") ||
      !(typeof options.guildId === "string") ||
      !(typeof options.commandId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for all of the following. Application ID, guild ID, and command ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID, guild ID, and command ID must be snowflakes and must be strings."
      );
    }
  }

  static editGuildApplicationCommand(options: {
    applicationId: Snowflake;
    guildId: Snowflake;
    commandId: Snowflake;
  }): string {
    if (options.applicationId && options.guildId && options.commandId) {
      return (
        "/applications/" +
        options.applicationId +
        "/guilds/" +
        options.guildId +
        "/commands/" +
        options.commandId
      );
    } else if (
      !(typeof options.applicationId === "string") ||
      !(typeof options.guildId === "string") ||
      !(typeof options.commandId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for all of the following. Application ID, guild ID, and command ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID, guild ID, and command ID must be snowflakes and must be strings."
      );
    }
  }

  static deleteGuildApplicationCommand(options: {
    applicationId: Snowflake;
    guildId: Snowflake;
    commandId: Snowflake;
  }): string {
    if (options.applicationId && options.guildId && options.commandId) {
      return (
        "/applications/" +
        options.applicationId +
        "/guilds/" +
        options.guildId +
        "/commands/" +
        options.commandId
      );
    } else if (
      !(typeof options.applicationId === "string") ||
      !(typeof options.guildId === "string") ||
      !(typeof options.commandId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for all of the following. Application ID, guild ID, and command ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID, guild ID, and command ID must be snowflakes and must be strings."
      );
    }
  }

  static bulkOverwriteGuildApplicationCommands(
    applicationId: Snowflake,
    guildId: Snowflake
  ): string {
    if (applicationId && guildId) {
      return (
        "/applications/" + applicationId + "/guilds/" + guildId + "/commands"
      );
    } else if (
      !(typeof applicationId === "string") ||
      !(typeof guildId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for both application ID and guild ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID and guild ID must be snowflakes and must be strings."
      );
    }
  }

  static getGuildApplicationCommandPermissions(
    applicationId: Snowflake,
    guildId: Snowflake
  ): string {
    if (applicationId && guildId) {
      return (
        "/applications/" +
        applicationId +
        "/guilds/" +
        guildId +
        "/commands/permissions"
      );
    } else if (
      !(typeof applicationId === "string") ||
      !(typeof guildId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for both application ID and guild ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID and guild ID must be snowflakes and must be strings."
      );
    }
  }

  static getApplicationCommandPermissions(options: {
    applicationId: Snowflake;
    guildId: Snowflake;
    commandId: Snowflake;
  }): string {
    if (options.applicationId && options.guildId && options.commandId) {
      return (
        "/applications/" +
        options.applicationId +
        "/guilds/" +
        options.guildId +
        "/commands/" +
        options.commandId +
        "/permissions"
      );
    } else if (
      !(typeof options.applicationId === "string") ||
      !(typeof options.guildId === "string") ||
      !(typeof options.commandId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for all of the following. Application ID, guild ID, and command ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID, guild ID, and command ID must be snowflakes and must be strings."
      );
    }
  }

  static editApplicationCommandPermissions(options: {
    applicationId: Snowflake;
    guildId: Snowflake;
    commandId: Snowflake;
  }): string {
    if (options.applicationId && options.guildId && options.commandId) {
      return (
        "/applications/" +
        options.applicationId +
        "/guilds/" +
        options.guildId +
        "/commands/" +
        options.commandId +
        "/permissions"
      );
    } else if (
      !(typeof options.applicationId === "string") ||
      !(typeof options.guildId === "string") ||
      !(typeof options.commandId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for all of the following. Application ID, guild ID, and command ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID, guild ID, and command ID must be snowflakes and must be strings."
      );
    }
  }

  static batchEditGuildApplicationCommandPermissions(
    applicationId: Snowflake,
    guildId: Snowflake
  ): string {
    if (applicationId && guildId) {
      return (
        "/applications/" +
        applicationId +
        "/guilds/" +
        guildId +
        "/commands/permissions"
      );
    } else if (
      !(typeof applicationId === "string") ||
      !(typeof guildId === "string")
    ) {
      throw new ReferenceError(
        "[waifuslash#Routes] Must provide a snowflake for both application ID and guild ID. They must be strings."
      );
    } else {
      throw new ReferenceError(
        "[waifuslash#Routes] Application ID and guild ID must be snowflakes and must be strings."
      );
    }
  }
}
