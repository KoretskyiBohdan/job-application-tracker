import { Router, Request, Response } from "express";
import { readDb, writeDb } from "../db";
import { Application } from "../types";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  const jobs = readDb();
  res.json(jobs);
});

router.get("/:id", (req: Request, res: Response) => {
  const jobs = readDb();
  const job = jobs.find((j) => j.id === Number(req.params.id));
  if (!job) return res.status(404).json({ error: "Not found" });
  res.json(job);
});

router.post("/", (req: Request, res: Response) => {
  const jobs = readDb();
  const nextId = jobs.length > 0 ? Math.max(...jobs.map((j) => j.id)) + 1 : 1;
  const newJob: Application = { id: nextId, ...req.body };
  jobs.push(newJob);
  writeDb(jobs);
  res.status(201).json(newJob);
});

router.put("/:id", (req: Request, res: Response) => {
  const jobs = readDb();
  const idx = jobs.findIndex((j) => j.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  jobs[idx] = { ...jobs[idx], ...req.body, id: jobs[idx].id };
  writeDb(jobs);
  res.json(jobs[idx]);
});

router.delete("/:id", (req: Request, res: Response) => {
  const jobs = readDb();
  const idx = jobs.findIndex((j) => j.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  const [deleted] = jobs.splice(idx, 1);
  writeDb(jobs);
  res.json(deleted);
});

export default router;
