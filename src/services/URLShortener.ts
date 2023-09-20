import { scrypt } from "crypto";
import { promisify } from "util";

var asyncClientGet = promisify(scrypt);

export class URLShortener {
  static async convertToShort() {
    if (!process.env.next || process.env.next === (process.env.max || 0)) {
      let response = await fetch(
        "http://short-url-token-service-1129305780.us-east-1.elb.amazonaws.com/api/range"
      );
      let json: {
        range: [number, number];
      } = await response.json();
      process.env.max = json.range[1].toString();
      process.env.next = json.range[0].toString();
    }
    let shortURL = process.env.next;
    process.env.next = (parseInt(process.env.next) + 1).toString();
    return shortURL;
  }
}
