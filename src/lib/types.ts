import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type APIResponse<Data> =
    | {
          status: "ok";
          data: Data;
          message: string;
      }
    | {
          status: "error";
          data: {};
          message: string;
      };
