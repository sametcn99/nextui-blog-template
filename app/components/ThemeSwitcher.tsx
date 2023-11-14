"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/public/MoonIcon";
import { SunIcon } from "@/public/SunIcon";

// Define the ThemeSwitcher component
export function ThemeSwitcher() {
  // State to track whether the component is mounted
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Get the current theme and the function to set the theme from the Next.js theme provider
  const { theme, setTheme } = useTheme();

  // Use the useEffect hook to set the component as mounted
  useEffect(() => {
    setMounted(true);
    if (theme === "dark") {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }, [theme]);

  // If the component is not yet mounted, return null (render nothing)
  if (!mounted) return null;

  // Render a Switch component that toggles between light and dark themes
  return (
    <Switch
      id="theme-switcher"
      name="switch-theme"
      size="lg" // Set the size of the switch to large
      // Set the default selected value of the switch to the current theme
      defaultSelected={isDark}
      color="success" // Set the color of the switch to success (usually green)
      startContent={<SunIcon />} // Display the SunIcon on the left side of the switch
      endContent={<MoonIcon />} // Display the MoonIcon on the right side of the switch
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")} // Toggle between dark and light themes when the switch is changed
    ></Switch>
  );
}
