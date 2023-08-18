import fetch from "cross-fetch";
import { 
     METHOD,
     APPLICATION_TYPE,
     AUDIO_TYPE,
     IMAGE_TYPE,
     TEXT_TYPE 
    } from "./typings";

export interface IRequest {
    method: METHOD;
    headers: {
        "Content-Type": APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE,
        Authorization: string
    }
}

export interface IRquestOptions {
    options: {
        method: METHOD;
        endpoint: string;
        data?: void | Object;
    };
    contentType: APPLICATION_TYPE | AUDIO_TYPE | IMAGE_TYPE | TEXT_TYPE,
}

export class RequestManager {
  constructor(
    public token: string,
    public api: string
  )
  {
    this.token = token;
    this.api = api;
  }

  public async request<T>(opts: IRquestOptions): Promise<T | void> {
    const request: IRequest = {
        method: opts.options.method,
        headers: {
            "Content-Type": opts.contentType,
            Authorization: this.token
        }
    }

    return new Promise(async (resolve, reject) => {
        return await fetch(this.api + opts.options.endpoint, request).then((x) => {
            x.json()
            .then((res) => {
                return resolve(res) as T;
            })
            .catch(() => {
                resolve(null);
            })
        })
    })
  }
}
