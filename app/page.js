'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProfessionalScene from '../components/3d/ProfessionalScene';
import Navigation from '../components/ui/Navigation';
import HeroSection from '../components/ui/HeroSection';
import Web3Integration from '../components/web3/Web3Integration';
import FeaturesSection from '../components/ui/FeaturesSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const architectureRef = useRef();
  const processRef = useRef();
  const [marketStats, setMarketStats] = useState([]);

  useEffect(() => {
    // Generate consistent random stats on client only
    setMarketStats([
      {
        metric: `$${(Math.random() * 80 + 20).toFixed(1)}M`,
        label: "Total Trading Volume",
        description: "Secure institutional-grade transactions"
      },
      {
        metric: `${Math.floor(Math.random() * 15000 + 5000)}`, 
        label: "Verified Carbon Credits",
        description: "Independently audited environmental assets"
      },
      {
        metric: `${Math.floor(Math.random() * 200 + 50)}`,
        label: "Active Green Projects",
        description: "Global network of environmental initiatives"
      },
      {
        metric: "0 Gas",
        label: "Trading Fees",
        description: "Zero gas fees with Yellow SDK integration"
      }
    ]);

    // Professional scroll animations
    const sections = gsap.utils.toArray('.animate-section');
    
    sections.forEach(section => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stats counter animation - only run when we have data
    if (marketStats.length > 0) {
      gsap.fromTo('.stat-number', 
        { textContent: 0, opacity: 0.5 },
        {
          textContent: (i, el) => {
            const target = parseInt(el.getAttribute('data-target'));
            return target;
          },
          opacity: 1,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.stats-section',
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          snap: { textContent: 1 }
        }
      );
    }

    // Architecture diagram animation
    gsap.fromTo('.arch-layer', 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: architectureRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Process steps animation
    gsap.fromTo('.process-step', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const architectureLayers = [
    {
      name: "Application Layer",
      icon: "💻",
      description: "Professional web interface for buyers and sellers to register, list, and trade green credits",
      features: [
        "Real-time trading interface",
        "Portfolio management",
        "Advanced analytics dashboard",
        "Mobile-responsive design"
      ]
    },
    {
      name: "Off-Chain Layer",
      icon: "⚡", 
      description: "Yellow SDK powered order books and matching engine for high-frequency trading without gas fees",
      features: [
        "Zero gas fee trading",
        "Instant order matching",
        "State channel technology",
        "High-frequency capable"
      ]
    },
    {
      name: "On-Chain Layer",
      icon: "⛓️",
      description: "Smart contracts managing ERC-721 NFTs for green credits and handling final settlement",
      features: [
        "ERC-721 NFT standards",
        "Secure final settlement",
        "Transparent audit trail",
        "Immutable transaction history"
      ]
    },
    {
      name: "Verification Layer",
      icon: "🔍",
      description: "Independent auditors and IPFS storage ensuring credit authenticity and preventing tampering",
      features: [
        "Independent audit network",
        "IPFS decentralized storage",
        "Cryptographic verification",
        "Transparent documentation"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Project Verification",
      description: "Independent environmental auditors verify project legitimacy and data validation",
      details: [
        "Project vetting by accredited auditors",
        "Data validation of energy output and carbon sequestration",
        "Verification report issuance"
      ]
    },
    {
      step: "02", 
      title: "Credit Tokenization",
      description: "Green credits are minted as unique NFTs with comprehensive metadata",
      details: [
        "ERC-721 NFT creation",
        "IPFS hash storage for verification",
        "Project ID, credit type, vintage tracking"
      ]
    },
    {
      step: "03",
      title: "Market Trading",
      description: "Zero-gas fee trading through Yellow SDK state channels with instant matching",
      details: [
        "Asset deposit to smart contracts",
        "Off-chain order book trading",
        "Instant trade execution"
      ]
    },
    {
      step: "04",
      title: "Final Settlement",
      description: "Secure on-chain settlement transferring NFT ownership and stablecoins",
      details: [
        "On-chain transaction finalization",
        "NFT transfer to buyer wallet",
        "Stablecoin transfer to seller"
      ]
    }
  ];

  const creditTypes = [
    {
      type: "Carbon Offset",
      description: "One ton of CO2 reduction or equivalent greenhouse gas reduction",
      examples: ["Renewable energy projects", "Forest conservation", "Carbon capture"]
    },
    {
      type: "Renewable Energy Certificate", 
      description: "One megawatt-hour of renewable energy generation",
      examples: ["Solar farms", "Wind parks", "Hydroelectric plants"]
    },
    {
      type: "Sustainable Development",
      description: "Projects contributing to UN Sustainable Development Goals",
      examples: ["Clean water initiatives", "Biodiversity conservation", "Community development"]
    }
  ];

  return (
    <div className="min-h-screen bg-primary-dark text-neutral-white">
      {/* Professional 3D Background */}
      <ProfessionalScene />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        <Navigation />
        <Web3Integration />
        <HeroSection />
        <FeaturesSection />
        
        {/* Market Statistics Section */}
        <section className="stats-section py-20 px-6 bg-primary-dark2/80 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-section">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Market <span className="gradient-text">Performance</span>
              </h2>
              <div className="text-neutral-gray text-lg max-w-2xl mx-auto">
                Leading the transformation of environmental asset trading with blockchain technology
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketStats.length > 0 ? (
                marketStats.map((stat, index) => (
                  <div key={index} className="glass-panel rounded-xl p-6 text-center glass-panel-hover">
                    <div className="text-3xl md:text-4xl font-bold text-accent-emerald mb-3 stat-number" 
                         data-target={stat.metric.replace(/[$,]/g, '')}>
                      {stat.metric}
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-white mb-2">{stat.label}</h3>
                    <div className="text-neutral-gray text-sm">{stat.description}</div>
                  </div>
                ))
              ) : (
                // Loading state during SSR/hydration
                [...Array(4)].map((_, index) => (
                  <div key={index} className="glass-panel rounded-xl p-6 text-center glass-panel-hover">
                    <div className="text-3xl md:text-4xl font-bold text-accent-emerald mb-3">
                      <div className="h-8 bg-primary-dark2 rounded w-20 mx-auto animate-pulse"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-white mb-2">
                      <div className="h-4 bg-primary-dark2 rounded w-32 mx-auto animate-pulse"></div>
                    </h3>
                    <div className="text-neutral-gray text-sm">
                      <div className="h-3 bg-primary-dark2 rounded w-40 mx-auto animate-pulse"></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section ref={architectureRef} className="py-24 px-6 bg-primary-dark/90 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-section">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Multi-Layer <span className="gradient-text">Architecture</span>
              </h2>
              <div className="text-neutral-gray text-lg max-w-3xl mx-auto">
                Enterprise-grade infrastructure combining blockchain security with traditional finance performance
              </div>
            </div>
            
            <div className="space-y-6">
              {architectureLayers.map((layer, index) => (
                <div key={index} className="arch-layer glass-panel rounded-xl p-8 glass-panel-hover">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex items-center space-x-4 lg:w-1/3">
                      <div className="text-3xl">{layer.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-white mb-2">{layer.name}</h3>
                        <div className="text-neutral-gray text-sm">{layer.description}</div>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {layer.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accent-emerald rounded-full"></div>
                            <span className="text-neutral-gray-light text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow Section */}
        <section ref={processRef} className="py-24 px-6 bg-primary-dark2/80 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-section">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Trading <span className="gradient-text">Process</span>
              </h2>
              <div className="text-neutral-gray text-lg max-w-3xl mx-auto">
                From project verification to final settlement - a seamless, transparent workflow
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step glass-panel rounded-xl p-8 glass-panel-hover">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent-emerald/20 rounded-lg flex items-center justify-center">
                      <span className="text-accent-emerald font-bold text-lg">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-white mb-2">{step.title}</h3>
                      <div className="text-neutral-gray">{step.description}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent-emerald rounded-full"></div>
                        <span className="text-neutral-gray-light text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credit Types Section */}
        <section className="py-24 px-6 bg-primary-dark/90 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-section">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Credit <span className="gradient-text">Types</span>
              </h2>
              <div className="text-neutral-gray text-lg max-w-3xl mx-auto">
                Diverse environmental assets representing measurable positive impact
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {creditTypes.map((credit, index) => (
                <div key={index} className="glass-panel rounded-xl p-8 glass-panel-hover feature-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{
                      credit.type === "Carbon Offset" ? "🌍" : 
                      credit.type === "Renewable Energy Certificate" ? "⚡" : "🎯"
                    }</div>
                    <h3 className="text-xl font-semibold text-neutral-white mb-2">{credit.type}</h3>
                    <div className="text-neutral-gray text-sm">{credit.description}</div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-neutral-white font-medium text-sm">Example Projects:</h4>
                    {credit.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-emerald rounded-full"></div>
                        <span className="text-neutral-gray-light text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary-dark2 to-accent-emerald/10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="glass-panel rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-6">
                Ready to Transform <span className="gradient-text">Environmental Finance?</span>
              </h2>
              <div className="text-neutral-gray text-lg mb-8 max-w-2xl mx-auto">
                Join the future of carbon credit trading with institutional-grade security, zero gas fees, and transparent verification
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/marketplace" 
                  className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <span>🚀 Launch Marketplace</span>
                </a>
                
                <button className="btn-outline flex items-center space-x-2 text-lg px-8 py-4">
                  <span>📚 Read Documentation</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-primary-dark2 border-t border-border-color">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <div className="w-10 h-10 bg-accent-emerald rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">GX</span>
                </div>
                <div>
                  <span className="text-xl font-semibold text-neutral-white">GreenXchange</span>
                  <div className="text-xs text-neutral-gray font-medium">ETH GLOBAL HACKATHON 2024</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-neutral-gray">Built with ❤️ for the environment</span>
                <span className="text-neutral-gray">© 2024 GreenXchange Protocol</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}