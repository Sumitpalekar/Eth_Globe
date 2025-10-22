'use client';
export default function DataCard({ title, value, subtitle, change, icon, onClick }) {
  const isPositive = change && change > 0;
  
  return (
    <div 
      className="glass-panel rounded-xl p-6 hover-lift cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="w-10 h-10 bg-accent-green/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">{icon}</span>
            </div>
          )}
          <div>
            <h3 className="text-neutral-gray text-sm font-medium">{title}</h3>
            <p className="text-2xl font-bold text-neutral-white mt-1">{value}</p>
          </div>
        </div>
        
        {change !== undefined && (
          <div className={`px-2 py-1 rounded text-xs font-medium ${
            isPositive 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-red-500/20 text-red-400'
          }`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}%
          </div>
        )}
      </div>
      
      {subtitle && (
        <p className="text-neutral-gray text-sm">{subtitle}</p>
      )}
    </div>
  );
}