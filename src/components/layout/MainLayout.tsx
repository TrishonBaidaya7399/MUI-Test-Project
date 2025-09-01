import type React from "react";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <ClientLayoutWrapper>{children}</ClientLayoutWrapper>;
}
