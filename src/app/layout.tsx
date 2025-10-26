import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ブログ",
  description: "ネクスト.js13とTailwind CSSでブログを作成する",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${robotoMono.variable} bg-background font-sans text-foreground`}
      >
        <header>test-header</header>
        {children}
      </body>
    </html>
  );
}
