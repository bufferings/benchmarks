import { createKori } from "@korix/kori";
import { startNodeServer } from "@korix/nodejs-adapter";

const app = createKori().get("/", (ctx) => ctx.res.json({ hello: "world" }));

await startNodeServer(app, { host: "127.0.0.1" });
