'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function HeroSection() {
  const heroRef = useRef();
  const [randomStats, setRandomStats] = useState([]);

  useEffect(() => {
    // Generate consistent random stats on client only
    setRandomStats([
      { value: `$${(Math.random() * 100 + 20).toFixed(1)}M`, label: "Volume Traded" },
      { value: `${Math.floor(Math.random() * 20000 + 5000)}`, label: "Green Credits" },
      { value: `${Math.floor(Math.random() * 200 + 50)}`, label: "Verified Projects" }
    ]);

    const tl = gsap.timeline();
    
    tl.fromTo(".hero-title", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(".hero-subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(".hero-buttons",
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 pt-16 pb-8">
      <div className="text-center max-w-6xl mx-auto">
        {/* Professional Badge */}
        <div className="inline-flex items-center space-x-2 bg-primary-dark2 rounded-full px-4 py-2 border border-border-color mb-8">
          <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></div>
          <span className="text-sm text-neutral-gray font-medium">ETH GLOBAL HACKATHON PROJECT</span>
        </div>

        {/* Professional Heading */}
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-neutral-white">Tokenized </span>
          <span className="gradient-text">Green Credits</span>
        </h1>
        
        {/* Professional Subtitle - Fixed: No div inside p */}
        <div className="hero-subtitle text-lg md:text-xl lg:text-2xl text-neutral-gray mb-12 max-w-3xl mx-auto leading-relaxed">
          Enterprise-grade platform for carbon credit trading. 
          <span className="text-accent-emerald font-medium"> Zero gas fees. </span>
          Institutional-grade security. Fully compliant.
        </div>
        
        {/* Professional CTA Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/marketplace" className="btn-primary flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Launch Marketplace</span>
          </Link>
          
          <button className="btn-outline flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>View Documentation</span>
          </button>
        </div>
        
        {/* Professional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
          {randomStats.length > 0 ? (
            randomStats.map((stat, index) => (
              <div key={index} className="stat-item glass-panel rounded-2xl p-6 border border-border-color hover:border-accent-emerald/30 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-emerald mb-2">{stat.value}</div>
                <div className="text-neutral-gray font-medium">{stat.label}</div>
              </div>
            ))
          ) : (
            // Loading state during SSR
            [...Array(3)].map((_, index) => (
              <div key={index} className="glass-panel rounded-2xl p-6 border border-border-color">
                <div className="text-3xl md:text-4xl font-bold text-accent-emerald mb-2 animate-pulse">
                  <div className="h-8 bg-primary-dark2 rounded w-24 mx-auto"></div>
                </div>
                <div className="text-neutral-gray font-medium animate-pulse">
                  <div className="h-4 bg-primary-dark2 rounded w-32 mx-auto"></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}