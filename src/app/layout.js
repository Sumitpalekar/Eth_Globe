// app/layout.js - UPDATED WITH LOADING ANIMATION
'use client';
import { useState, useEffect } from 'react';
import './globals.css';
import { Web3Provider } from '../contexts/Web3Context';
import LayoutWrapper from '../components/LayoutWrapper';
import Navigation from "../components/ui/Navigation";
import LoadingAnimation from '../components/LoadingAnimation';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>GreenXchange - Carbon Credit Trading</title>
        <meta name="description" content="Modern platform for carbon credit trading" />
      </head>
      <body className="antialiased">
        <Web3Provider>
          {/* Loading Animation */}
          <LoadingAnimation 
            isLoading={isLoading} 
            onLoadingComplete={() => setIsLoading(false)}
          />
          
          {/* Main Content - Hidden during loading */}
          <div className={isLoading ? 'hidden' : 'block'}>
            <LayoutWrapper> 
              <Navigation/>
              {children}
            </LayoutWrapper>
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}