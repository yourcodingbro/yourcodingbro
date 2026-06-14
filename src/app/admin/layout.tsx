import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <SidebarProvider>
            <AdminSidebar />
            <main className="flex-1">
              <div className="flex items-center gap-2 border-b border-line p-2">
                <SidebarTrigger />
              </div>
              <div className="p-6">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
