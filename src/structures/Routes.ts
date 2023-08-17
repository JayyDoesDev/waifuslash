import { Snowflake } from "./@type";
export declare interface Routes {
  getApplicationCommands(applicationId: Snowflake): string;
  createApplicationCommand(applicationId: Snowflake): string;
  getGlobalApplicationCommand(applicationId: Snowflake, commandId: Snowflake): string;
  editGlobalApplicationCommand(applicationId: Snowflake, commandId: Snowflake): string;
}

export class Routes implements Routes {
  constructor() {}

  static getApplicationCommands(applicationId: Snowflake): string {
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
    } else if (!(typeof applicationId === "string") || !(typeof commandId === "string")) {
        throw new ReferenceError("[waifuslash#Routes] Must provide a snowflake for both application ID and command ID. They must be strings.")
    } else {
        throw new ReferenceError("[waifuslash#Routes] Application ID and command ID must be snowflakes and must be strings.")
    }
  }

  static editGlobalApplicationCommand(
    applicationId: Snowflake, 
    commandId: Snowflake
    ): string {
    if (applicationId && commandId) {
        return "/applications/" + applicationId + "/commands/" + commandId;
      } else if (!(typeof applicationId === "string") || !(typeof commandId === "string")) {
          throw new ReferenceError("[waifuslash#Routes] Must provide a snowflake for both application ID and command ID. They must be strings.")
      } else {
          throw new ReferenceError("[waifuslash#Routes] Application ID and command ID must be snowflakes and must be strings.")
      }
  }
}


