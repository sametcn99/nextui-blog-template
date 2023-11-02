import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { BrandLogo } from "@/public/logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavbarComponent = () => {
  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <Link href="/">
            <BrandLogo />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              LOGIN
            </Button>
          </NavbarItem>
          <ThemeSwitcher />
        </NavbarContent>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
