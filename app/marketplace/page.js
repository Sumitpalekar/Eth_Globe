// app/marketplace/page.js
import ClientOnly from '@/components/ClientOnly';
import LivePriceTicker from '@/components/marketplace/LivePriceTicker';
import OrderBook from '@/components/marketplace/OrderBook';
import TokenGrid from '@/components/marketplace/TokenGrid';
import TradingView from '@/components/marketplace/TradingView';

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Green Credits Marketplace</h1>
        <p className="text-gray-600 mb-8">Trade verified environmental credits securely</p>
        
        {/* Live Price Ticker */}
        <div className="mb-8">
          <ClientOnly fallback={<div className="h-16 bg-gray-200 rounded animate-pulse"></div>}>
            <LivePriceTicker />
          </ClientOnly>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Trading Chart */}
          <div className="lg:col-span-2">
            <ClientOnly fallback={<div className="h-96 bg-gray-200 rounded animate-pulse"></div>}>
              <TradingView />
            </ClientOnly>
          </div>

          {/* Right Column - Order Book */}
          <div>
            <ClientOnly fallback={<div className="h-96 bg-gray-200 rounded animate-pulse"></div>}>
              <OrderBook />
            </ClientOnly>
          </div>
        </div>

        {/* Token Grid */}
        <div className="mt-8">
          <ClientOnly fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="h-48 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          }>
            <TokenGrid />
          </ClientOnly>
        </div>
      </div>
    </div>
  );
}