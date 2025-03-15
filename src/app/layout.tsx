import type { Metadata } from "next";
import "./globals.css";
import StyledProvider from "@/components/StyledProvider";

export const metadata: Metadata = {
  title: "Next Camping",
  description: "Next.js Camping Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledProvider>
          {children}
        </StyledProvider>
      </body>
    </html>
  );
}
