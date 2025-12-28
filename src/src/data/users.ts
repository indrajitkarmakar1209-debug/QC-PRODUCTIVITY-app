export type UserRole = "ADMIN" | "QC";

export interface User {
  userId: string;
  pin: string; // 4 digit PIN
  role: UserRole;
  name: string;
}

export const users: User[] = [
  {
    userId: "admin",
    pin: "1234",
    role: "ADMIN",
    name: "System Admin",
  },
  {
    userId: "qc01",
    pin: "1111",
    role: "QC",
    name: "QC User 1",
  },
  {
    userId: "qc02",
    pin: "2222",
    role: "QC",
    name: "QC User 2",
  },
];
