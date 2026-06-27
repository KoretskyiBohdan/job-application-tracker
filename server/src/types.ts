export type ApplicationStatus = "Applied" | "Phone Screen" | "Interview" | "Offer" | "Rejected";

export interface Application {
  id: number;
  company: string;
  role: string;
  status: ApplicationStatus;
  date_applied: string;
  note: string;
  link: string;
}
