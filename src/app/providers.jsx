"use client";
import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css'; 


const theme = createTheme({
  primaryColor: 'orange',
});

export function Providers({ children }) {
  return (
    <MantineProvider  withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
}
