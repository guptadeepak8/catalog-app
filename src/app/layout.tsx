import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata: Metadata = {
  title: {
    default: "Catalog App",
    template: "%s | Catalog App",
  },
  description: "Browse product categories and item previews.",
  applicationName: "Catalog App",
  openGraph: {
    title: "Catalog App",
    description: "Browse product categories and item previews.",
    siteName: "Catalog App",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
