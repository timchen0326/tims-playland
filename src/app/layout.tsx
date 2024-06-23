import { ReactNode } from 'react';
import Image from 'next/image';
import '../app/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <title>My Website</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="h-full flex flex-col bg-gray-50">
        <header className="bg-white shadow">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image src="/pikachu.svg" alt="Pikachu Logo" width={50} height={50} />
              <h1 className="text-2xl font-bold text-gray-900">cwt&apos;s Playground</h1>
            </div>
            <nav className="space-x-4">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4 min-h-screen">
          {children}
        </main>
        <footer className="bg-white shadow">
          <div className="container mx-auto p-4 text-center text-gray-600">
            <p>&copy; 2024 cwt&apos;s Playground. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default Layout;
