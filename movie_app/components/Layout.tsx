import React from "react";
import NavBar from "./Nav";
import Title from "./Title";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Title />
      <NavBar />
      <div>{children}</div>
    </>
  );
}
