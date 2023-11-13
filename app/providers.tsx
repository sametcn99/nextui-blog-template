// Import necessary modules and components
"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "@/app/utils/store";
import { NextUIProvider } from "@nextui-org/react";

// Define and export the 'Providers' component, which wraps other components with context providers
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Wrap the entire application with the Redux 'Provider' to provide the store to components
    <Provider store={store}>
      {/* Wrap the application with the 'NextUIProvider' for NextUI theming and styling */}
      <NextUIProvider>
        {/* Wrap the application with the 'NextThemesProvider' for handling theme switching */}
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
}
