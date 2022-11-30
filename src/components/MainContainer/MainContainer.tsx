import React, { ReactNode } from "react";
import "./maincontainer.css";
interface MainContainerProps {
  children?: ReactNode;
  title: string;
}

export default function MainContainer({ children, title }: MainContainerProps) {
  return (
    <section className="main-container">
      <h1 className="title">{title}</h1>
      {children}
    </section>
  );
}
