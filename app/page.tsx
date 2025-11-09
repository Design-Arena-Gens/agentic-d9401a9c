'use client';

import { useState, useMemo } from 'react';
import { Stock, ScannerFilters } from '@/lib/types';
import { sampleStocks } from '@/lib/stockData';
import { applyFilters, sortStocks, defaultFilters } from '@/lib/scanner';
import FilterPanel from '@/components/FilterPanel';
import StockCard from '@/components/StockCard';
import StockDetails from '@/components/StockDetails';
import { Search, Filter, SortAsc } from 'lucide-react';

export default function Home() {
  const [filters, setFilters] = useState<ScannerFilters>(defaultFilters);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [sortBy, setSortBy] = useState<keyof Stock>('overallScore');
  const [showFilters, setShowFilters] = useState(true);

  // Apply filters and search
  const filteredStocks = useMemo(() => {
    let stocks = applyFilters(sampleStocks, filters);

    // Apply search
    if (searchTerm) {
      stocks = stocks.filter(
        stock =>
          stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
          stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          stock.sector.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    return sortStocks(stocks, sortBy);
  }, [filters, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">🚀 Multibagger Stock Scanner</h1>
          <p className="text-blue-100">
            NSE & BSE | 7-Part Framework for Identifying High-Potential Stocks
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Controls */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by symbol, name, or sector..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Sort */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as keyof Stock)}
                className="px-4 py-3 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 outline-none"
              >
                <option value="overallScore">Overall Score</option>
                <option value="foundationScore">Foundation Score</option>
                <option value="competitiveScore">Competitive Moat</option>
                <option value="growthScore">Growth Score</option>
                <option value="mcap">Market Cap</option>
                <option value="peRatio">P/E Ratio</option>
                <option value="pegRatio">PEG Ratio</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-lg">{filteredStocks.length}</span>
            stocks match your criteria
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          {showFilters && (
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <FilterPanel filters={filters} onFilterChange={setFilters} />
              </div>
            </div>
          )}

          {/* Stock Cards */}
          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            {filteredStocks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500 dark:text-gray-400 mb-2">
                  No stocks found matching your criteria
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Try adjusting your filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredStocks.map((stock) => (
                  <StockCard
                    key={stock.symbol}
                    stock={stock}
                    onClick={() => setSelectedStock(stock)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stock Details Modal */}
      {selectedStock && (
        <StockDetails
          stock={selectedStock}
          onClose={() => setSelectedStock(null)}
        />
      )}

      {/* Footer */}
      <footer className="mt-12 bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            <strong>Multibagger Stock Scanner</strong> - 7-Part Framework
          </p>
          <p className="text-xs">
            Part 1: Foundation (Governance) | Part 2: Business Engine | Part 3: Competitive Moat |
            Part 4: Financial Health | Part 5: Growth Engine | Part 6: Profitability | Part 7: Valuation
          </p>
          <p className="text-xs mt-2 text-gray-500">
            ⚠️ For educational purposes only. Not investment advice. Please conduct your own research.
          </p>
        </div>
      </footer>
    </div>
  );
}
