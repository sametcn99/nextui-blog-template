import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
export default NavbarComponent;
