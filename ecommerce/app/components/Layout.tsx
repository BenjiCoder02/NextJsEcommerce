'use client'

import { SessionProvider } from "next-auth/react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
