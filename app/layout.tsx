import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filippo Boni | Portfolio: Cybersecurity Researcher & Consultant | Computer Science Professional",
  description: "Welcome to my portfolio! I'm a passionate Cybersecurity researcher & consultant holding a Degree in Computer Science. Currently pursuing a Master's in Computer Science, I specialize in leveraging cutting-edge technologies to tackle complex security challenges. Explore my projects and expertise in cybersecurity to discover innovative solutions for your digital protection needs."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-900 text-gray-50 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-300 dark:text-opacity-90`}
      >
        <div className="bg-gradient-to-r from-red-600 to-pink-600 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:from-gray-900 dark:to-gray-800"></div>
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-gray-800 dark:to-gray-700"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}