import express from "express";
import { v1Router } from "./api/v1.js";

export function createServer() {
  const app = express();

  app.use(express.json());
  app.use("/api/v1", v1Router);
  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error("Unhandled error:", err);
    res.status(500).json({ error: "Internal server error" });
  });

  return app;
}
