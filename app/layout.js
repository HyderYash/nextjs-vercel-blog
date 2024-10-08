import { Inter } from "next/font/google";
import "./globals.css";
import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-[100dvh]">
            <PageHeader />
            <main className="flex-1">
              {children}
            </main>
            <PageFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
