import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: NavItemProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        ["link", isActive ? "active-link" : undefined].filter(Boolean).join(" ")
      }
    >
      {text}
    </NavLink>
  );
}
