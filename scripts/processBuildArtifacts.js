import { readFileSync, writeFileSync } from "fs";
import { preamble } from "./preamble.js";

const stylesheet = "dist/kds.css";
const script = "dist/kds.js";

const css = readFileSync(stylesheet, "utf-8").replace(/^\uFEFF/, "");
writeFileSync(stylesheet, `${preamble}\n${css}`, "utf-8");

const js = readFileSync(script, "utf-8");
writeFileSync(script, `${preamble}\n${js}`, "utf-8");
