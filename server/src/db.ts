import fs from "fs";
import path from "path";
import { Application } from "./types";

const DB_PATH = path.resolve(__dirname, "../../db/jobs.json");

export function readDb(): Application[] {
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw) as Application[];
}

export function writeDb(data: Application[]): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}
