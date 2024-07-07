"use client"
import { ReactNode, useEffect } from 'react';
import Image from 'next/image';
import '../app/globals.css';
import { useRouter } from 'next/navigation';

interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
 

  const getLocalStorageValue = () => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem("userId") ?? '';
    }
    return '';
  };

  const u = getLocalStorageValue();

  useEffect(() => {
    if (u !== "timchen0326" && u !== "sallytsai0620" && u !=="User01") {
      router.push('/login');
    }
  }, [router, u]);


  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <title>My Website</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-gray-50">
        <header className="bg-white shadow">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Image src="/pikachu.svg" alt="Pikachu Logo" width={50} height={50} />
              <h1 className="text-2xl font-bold text-gray-900">cwt&apos;s Playground</h1>
            </div>
            <nav>
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/gallery" className="text-gray-700 hover:text-gray-900">Gallery</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4 h-full">
          {children}
        </main>
      </body>
    </html>
  );
}

export default Layout;
