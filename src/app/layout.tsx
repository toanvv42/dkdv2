import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miracle Stories - Inspiring Tales of Hope",
  description: "Discover extraordinary stories of miracles, hope, and faith through videos and blog posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-purple-600">
                Miracle Stories
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/stories" className="text-gray-600 hover:text-purple-600">
                  Videos
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-purple-600">
                  Blog
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-purple-600">
                  About
                </Link>
                <Link href="/submit-story" className="text-gray-600 hover:text-purple-600">
                  Submit Story
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Miracle Stories</h3>
                <p className="text-gray-400">
                  Sharing inspiring stories of miracles to spread hope and faith around the world.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/stories" className="text-gray-400 hover:text-white">
                      Videos
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Miracle Stories. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
