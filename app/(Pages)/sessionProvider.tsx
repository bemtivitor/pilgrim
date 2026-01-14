import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

export const SessionProvider = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession();
  console.log("session", session);
  if (!session) return redirect("/login");

  return <>{children}</>;
};
