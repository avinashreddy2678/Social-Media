import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import UserBar from "./Layouts/UserBar";
import Navbar from "./components/Navbar/page";
import { ourFileRouter } from "../app/api/uploadthing/core";
import RightBar from "../app/Layouts/RightBar";
import { DataProvider } from "./ContextApi/CurrentUser/Context";
import useCurrentUser from "./hooks/useCurrentUser";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "So-Me",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}

)

 {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <Navbar />
        <DataProvider>
          <main className="flex mt-20 overflow-hidden h-[89vh] w-[87%] m-auto gap-2 ">
            <div className={`border-none  left-side flex-auto  w-1/6`}>
              <UserBar/>
            </div>
            <div className={`middle flex-auto w-3/6 `}>{children}</div>
            <div className="right-side hidden lg:block  w-1/6 flex-auto">
              <RightBar />
            </div>
          </main>
        </DataProvider>
      </body>
    </html>
  );
}
