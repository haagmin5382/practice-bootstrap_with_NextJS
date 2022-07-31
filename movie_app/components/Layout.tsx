import React from "react";
import NavBar from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
