import React from "react"; // Import the React library for creating React components.

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Tooltip,
} from "@nextui-org/react"; // Import various components from the "@nextui-org/react" library.

import { BrandLogo } from "@/public/logo"; // Import the BrandLogo component from a relative path.

import { ThemeSwitcher } from "./ThemeSwitcher"; // Import the ThemeSwitcher component from a relative path.

const NavbarComponent = () => {
  return (
    <Navbar>
      {/* Create a Navbar component as the root of the navigation bar. */}
      <NavbarBrand>
        <Link href="/">
          {/* Create a link that navigates to the root URL. */}
          {<BrandLogo />} {/* Render the BrandLogo component. */}
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        {/* Specify the alignment of content in the NavbarContent component. */}
        <Tooltip content="Switch Theme" delay={0} closeDelay={100}>
          {/* Add a Tooltip component with content and delay settings. */}
          <NavbarItem id=":r0:">
            {/* Create a navigation item in the Navbar. */}
            {<ThemeSwitcher />} {/* Render the ThemeSwitcher component. */}
          </NavbarItem>
        </Tooltip>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent; // Export the NavbarComponent as the default export of this module.
