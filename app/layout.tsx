import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

// Initialize Geist Sans font with Latin subset and assign it to a CSS variable.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

// Initialize Geist Mono font with Latin subset and assign it to a CSS variable.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Define metadata for the application, including title, description, and favicon.
export const metadata: Metadata = {
  title: "Damien Papers",
  description: "Damien Papers",
  icons: {
    icon: "/images/favicon.ico", // Path to the favicon
  },
}

/**
 * RootLayout Component
 *
 * This is the root layout for the Next.js application. It wraps all pages
 * and provides the basic HTML structure, including font variables and global styles.
 *
 * @param children - React nodes (pages or other layouts) to be rendered within this layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
