import { users, User } from "../data/users";

export interface LoginResult {
  success: boolean;
  message: string;
  user?: User;
}

export function loginWithPin(
  userId: string,
  pin: string
): LoginResult {
  const user = users.find(
    (u) => u.userId === userId && u.pin === pin
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid User ID or PIN",
    };
  }

  return {
    success: true,
    message: "Login successful",
    user,
  };
}
