import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Tooltip,
} from "@nextui-org/react";
import { BrandLogo } from "@/public/logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <BrandLogo />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Tooltip content="Switch Theme" delay={0} closeDelay={100}>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </Tooltip>
      </NavbarContent>
    </Navbar>
  );
};
export default NavbarComponent;
