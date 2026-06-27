import { Application } from "../types";

const BASE = "/api/applications";

export async function fetchApplications(): Promise<Application[]> {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error("Failed to fetch applications");
  return res.json();
}

export async function fetchApplication(id: number): Promise<Application> {
  const res = await fetch(`${BASE}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch application");
  return res.json();
}

export async function createApplication(data: Omit<Application, "id">): Promise<Application> {
  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create application");
  return res.json();
}

export async function updateApplication(id: number, data: Partial<Omit<Application, "id">>): Promise<Application> {
  const res = await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update application");
  return res.json();
}

export async function deleteApplication(id: number): Promise<Application> {
  const res = await fetch(`${BASE}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete application");
  return res.json();
}
