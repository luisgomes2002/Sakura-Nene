import { ExtendedClient } from "./structs/ExtendedClient";
import config from "../src/config.json";
import fs from "fs";
import path from "path";
export * from "colors";

const client = new ExtendedClient();

client.start();

export { client, config };
