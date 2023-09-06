import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "FreeProjects1 - Bholu Singh",
  description: "Free projects1 is a great way to get started in web development and many more. We are providing all types of free source code for web development projects. We have huge collection of free projects on our website that you can download and use them according to your needs.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
