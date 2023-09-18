import { scrypt } from "crypto";
import { promisify } from "util";
import { createClient } from "redis";

var asyncClientGet = promisify(scrypt);

export class URLShortener {
  static async convertToShort(longURL: string) {
    return "0";
  }
}
