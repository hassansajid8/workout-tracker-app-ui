import type { Metadata } from "next";
import "@/app/globals.css";
import Topbar from "@/app/components/Topbar";
import Navbar from "@/app/components/Navbar";


export const metadata: Metadata = {
  title: "Workout Tracker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navbar />
        {children}
        </body>
    </html>
  );
}
