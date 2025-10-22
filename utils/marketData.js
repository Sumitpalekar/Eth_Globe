// Generate random market data
const generateRandomPrice = (base, volatility) => {
    return (base + (Math.random() - 0.5) * volatility).toFixed(2);
  };
  
  const generateRandomChange = () => {
    const change = (Math.random() - 0.3) * 10;
    return `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
  };
  
  const generateRandomVolume = () => {
    const volumes = ['245K', '1.2M', '890K', '3.1M', '567K', '2.3M'];
    return volumes[Math.floor(Math.random() * volumes.length)];
  };
  
  export const mockTokens = [
    {
      id: 1,
      name: "Solar Farm Alpha",
      type: "SOLAR",
      vintage: 2024,
      amount: Math.floor(Math.random() * 5000 + 1000),
      price: generateRandomPrice(4.50, 1.5),
      verification: "VERIFIED",
      location: "California, USA",
      projectId: "SOL-CA-001",
      image: "☀️",
      change: generateRandomChange(),
      volume: generateRandomVolume()
    },
    {
      id: 2,
      name: "Wind Park Beta",
      type: "WIND", 
      vintage: 2024,
      amount: Math.floor(Math.random() * 4000 + 800),
      price: generateRandomPrice(3.80, 1.2),
      verification: "VERIFIED",
      location: "Texas, USA",
      projectId: "WIND-TX-001",
      image: "🌬️",
      change: generateRandomChange(),
      volume: generateRandomVolume()
    },
    {
      id: 3,
      name: "Hydro Plant Gamma",
      type: "HYDRO",
      vintage: 2023,
      amount: Math.floor(Math.random() * 3000 + 500),
      price: generateRandomPrice(2.90, 0.8),
      verification: "PENDING",
      location: "Washington, USA",
      projectId: "HYDRO-WA-001",
      image: "💧",
      change: generateRandomChange(),
      volume: generateRandomVolume()
    },
    {
      id: 4,
      name: "Carbon Capture Delta",
      type: "CARBON",
      vintage: 2024,
      amount: Math.floor(Math.random() * 1000 + 200),
      price: generateRandomPrice(15.75, 3.0),
      verification: "VERIFIED",
      location: "Iceland",
      projectId: "CCS-ICE-001",
      image: "🌱",
      change: generateRandomChange(),
      volume: generateRandomVolume()
    },
    {
      id: 5,
      name: "Geothermal Plant Epsilon",
      type: "GEO",
      vintage: 2024,
      amount: Math.floor(Math.random() * 2500 + 600),
      price: generateRandomPrice(6.20, 1.8),
      verification: "VERIFIED",
      location: "New Zealand",
      projectId: "GEO-NZ-001",
      image: "🌋",
      change: generateRandomChange(),
      volume: generateRandomVolume()
    },
    {
      id: 6,
      name: "Biomass Facility Zeta",
      type: "BIO",
      vintage: 2023,
      amount: Math.floor(Math.random() * 3500 + 700),
      price: generateRandomPrice(3.25, 1.0),
      verification: "VERIFIED",
      location: "Germany",
      projectId: "BIO-DE-001",
      image: "🌿",
      change: generateRandomChange(),
      volume: generateRandomVolume()
    }
  ];
  
  // Generate random order book data
  const generateOrderBookData = (basePrice, count) => {
    const orders = [];
    for (let i = 0; i < count; i++) {
      const price = (basePrice + (Math.random() - 0.5) * 0.2).toFixed(2);
      const amount = Math.floor(Math.random() * 300 + 50);
      orders.push({
        price: parseFloat(price),
        amount,
        total: Math.round(parseFloat(price) * amount)
      });
    }
    return orders.sort((a, b) => a.price - b.price);
  };
  
  export const mockOrderBook = {
    bids: generateOrderBookData(4.45, 6),
    asks: generateOrderBookData(4.55, 6)
  };
  
  export const mockTradeHistory = [
    { time: "10:30:45", price: (4.45 + Math.random() * 0.15).toFixed(2), amount: Math.floor(Math.random() * 100 + 25), type: "BUY" },
    { time: "10:28:12", price: (4.45 + Math.random() * 0.15).toFixed(2), amount: Math.floor(Math.random() * 100 + 25), type: "SELL" },
    { time: "10:25:33", price: (4.45 + Math.random() * 0.15).toFixed(2), amount: Math.floor(Math.random() * 100 + 25), type: "BUY" },
    { time: "10:22:17", price: (4.45 + Math.random() * 0.15).toFixed(2), amount: Math.floor(Math.random() * 100 + 25), type: "SELL" },
    { time: "10:20:05", price: (4.45 + Math.random() * 0.15).toFixed(2), amount: Math.floor(Math.random() * 100 + 25), type: "BUY" }
  ];