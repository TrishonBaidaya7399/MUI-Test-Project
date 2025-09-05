import type React from "react";
import ClientLayoutWrapper from "./client-layout-wrapper";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <ClientLayoutWrapper>{children}</ClientLayoutWrapper>;
}
