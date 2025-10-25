// app/page.js 
'use client';
import Link from 'next/link';
import { useWeb3 } from "../contexts/Web3Context";

export default function Home() {
  const { account, isConnected, balance, network, connectWallet, disconnectWallet } = useWeb3();

  const features = [
    {
      emoji: "⚡",
      title: "Green Credit Marketplace",
      description: "Trade verified environmental credits on our secure blockchain platform with instant settlement and zero gas fees during trading.",
      link: "/marketplace",
      linkText: "Start Trading"
    },
    {
      emoji: "📊",
      title: "Portfolio Management", 
      description: "Track your green credit investments, environmental impact, and trading performance with real-time analytics and reporting.",
      link: "/portfolio",
      linkText: "View Portfolio"
    },
    {
      emoji: "🏭",
      title: "Project Onboarding",
      description: "Register your green energy project, get verified by accredited auditors, and start generating tradable NFT credits.",
      link: "/onboarding",
      linkText: "Register Project"
    },
    {
      emoji: "🌿",
      title: "Credit Types",
      description: "Explore verified environmental credits including carbon offsets, RECs, biodiversity credits, and water conservation tokens.",
      link: "/green-credits",
      linkText: "Explore Credits"
    }
  ];

  const stats = [
    { number: "$4.1M+", label: "Total Volume" },
    { number: "128+", label: "Active Projects" },
    { number: "45.2K+", label: "Credits Traded" },
    { number: "45+", label: "Countries" }
  ];

  const securityFeatures = [
    {
      emoji: "🔒",
      title: "Blockchain Security",
      description: "Every transaction is recorded on Ethereum with tamper-proof smart contracts and multi-signature wallet protection."
    },
    {
      emoji: "📋",
      title: "Third-Party Audits", 
      description: "All green credits undergo rigorous verification by accredited environmental auditors before tokenization."
    },
    {
      emoji: "🌐",
      title: "IPFS Verification",
      description: "Project documents and verification reports are stored on decentralized IPFS for permanent, transparent records."
    },
    {
      emoji: "🛡️",
      title: "KYC/AML Compliance",
      description: "Full regulatory compliance with global Know Your Customer and Anti-Money Laundering standards."
    }
  ];

  const web3Features = [
    {
      emoji: "🔗",
      title: "Blockchain Powered",
      description: "Every transaction is secured on Ethereum with transparent, tamper-proof records and smart contract execution.",
      benefits: ["Smart contract automation", "Immutable transaction history", "Transparent ownership tracking"]
    },
    {
      emoji: "💎",
      title: "NFT Green Credits", 
      description: "Environmental credits tokenized as unique NFTs for verifiable ownership and fractional trading.",
      benefits: ["Unique digital assets", "Provenance tracking", "Fractional ownership"]
    },
    {
      emoji: "⚡",
      title: "Zero Gas Trading",
      description: "Trade instantly with our off-chain order book, settle on-chain with minimal gas fees.",
      benefits: ["Instant order matching", "Off-chain efficiency", "On-chain finality"]
    },
    {
      emoji: "🛡️",
      title: "Secure Wallet Integration",
      description: "Connect your wallet securely to manage and trade your green credit portfolio across networks.",
      benefits: ["MetaMask support", "Multi-chain compatibility", "Enterprise security"]
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Project Verification",
      description: "Green energy projects undergo rigorous verification by accredited environmental auditors to ensure legitimacy and impact measurement.",
      details: ["Third-party audit validation", "Impact measurement verification", "Documentation review"]
    },
    {
      step: "02", 
      title: "Credit Tokenization",
      description: "Verified environmental benefits are minted as unique NFT tokens on the blockchain, ensuring transparent ownership and provenance.",
      details: ["ERC-1155 NFT minting", "Metadata with verification hashes", "IPFS document storage"]
    },
    {
      step: "03",
      title: "Marketplace Trading", 
      description: "Trade green credits instantly using our off-chain order book powered by Yellow SDK for zero gas fees and instant settlement.",
      details: ["Off-chain order matching", "Instant trade execution", "Blockchain settlement"]
    },
    {
      step: "04",
      title: "Impact Tracking",
      description: "Monitor your environmental impact in real-time with detailed analytics on CO₂ reduction and sustainability metrics.",
      details: ["Real-time impact dashboard", "Portfolio performance tracking", "Environmental reporting"]
    }
  ];

  const creditTypes = [
    {
      emoji: "☀️",
      title: "Renewable Energy Credits",
      description: "Solar, wind, hydro, and biomass energy credits that displace fossil fuel generation and reduce carbon emissions.",
      benefits: ["Direct CO₂ reduction", "Grid decarbonization", "Renewable infrastructure support"]
    },
    {
      emoji: "🌳",
      title: "Carbon Sequestration",
      description: "Credits from reforestation, soil carbon, and direct air capture projects that remove CO₂ from the atmosphere.",
      benefits: ["Atmospheric carbon removal", "Biodiversity enhancement", "Ecosystem restoration"]
    },
    {
      emoji: "💧", 
      title: "Water Conservation",
      description: "Tokens representing verified water savings from efficient irrigation, watershed management, and conservation projects.",
      benefits: ["Water security", "Ecosystem protection", "Sustainable agriculture"]
    },
    {
      emoji: "🦋",
      title: "Biodiversity Credits", 
      description: "Credits for habitat protection, species conservation, and ecosystem restoration projects that preserve biodiversity.",
      benefits: ["Habitat protection", "Species conservation", "Ecosystem services"]
    }
  ];

  const verificationFeatures = [
    {
      emoji: "🔍",
      title: "Rigorous Audit Process",
      description: "Multi-step verification by certified environmental auditors with comprehensive documentation review"
    },
    {
      emoji: "📊",
      title: "Transparent Tracking", 
      description: "Every verification step documented on blockchain for complete transparency and audit trails"
    },
    {
      emoji: "🛡️",
      title: "Quality Guarantee",
      description: "Only verified projects receive green credit certification ensuring investment quality"
    }
  ];

  return (
    <div className="min-h-screen">
    
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl mb-8 shadow-2xl border border-white/20">
            <span className="text-4xl">🌱</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Green<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Xchange</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            The world's first blockchain-powered marketplace for verified environmental credits. 
            Transform sustainability into tradable digital assets with complete transparency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/marketplace" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg border border-white/20">
              Start Trading Credits
            </Link>
            <Link href="/onboarding" className="bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300">
              Register Project
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Platform <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Everything you need to participate in the green credit economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="text-2xl text-white">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white mb-6">{feature.description}</p>
                <Link href={feature.link} className="inline-flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 font-semibold transition-colors">
                  <span>{feature.linkText}</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web3 Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powered by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Web3 Technology</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experience the future of environmental finance with secure, transparent, and efficient blockchain infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {web3Features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="text-2xl text-white">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-cyan-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Verification</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our certified auditors ensure every green credit project meets the highest standards of quality, 
              compliance, and environmental impact through rigorous multi-step verification processes.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {verificationFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:border-blue-400/50 transition-all duration-300 group text-center hover:scale-105"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="text-3xl text-white">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Auditor Access CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl border border-white/20 p-12 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Auditor <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Verification Portal</span>
                </h3>
                <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                  Access the secure verification portal to review, audit, and approve green credit projects. 
                  This area is exclusively for certified auditors.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/verification"
                    className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg border border-white/20"
                  >
                    <span className="text-xl">🔐</span>
                    <span>Access Auditor Portal</span>
                  </Link>
                  
                  <div className="text-center sm:text-left">
                    <p className="text-cyan-300 text-sm font-medium">Certified Auditors Only</p>
                    <p className="text-white/60 text-xs">Requires verified credentials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise-Grade <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Security</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Your environmental investments are protected by multiple layers of blockchain security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="text-2xl text-white">{feature.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">GreenXchange</span> Works
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A seamless four-step process from project verification to environmental impact tracking
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {howItWorks.map((step, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
                    <span className="text-white text-xl font-bold">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white mb-4 text-lg">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Types Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Verified <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Green Credits</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Trade a diverse range of environmental credits, each verified for authenticity and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {creditTypes.map((credit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:border-emerald-400/50 transition-all duration-300 group hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="text-2xl text-white">{credit.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{credit.title}</h3>
                <p className="text-white mb-4">{credit.description}</p>
                <div className="space-y-2">
                  {credit.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-cyan-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make an <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Impact</span>?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join the future of environmental finance. Trade verified green credits and track your positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg border border-white/20">
              Start Your Project
            </Link>
            <Link href="/marketplace" className="bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300">
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
