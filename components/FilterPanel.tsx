'use client';

import { ScannerFilters } from '@/lib/types';
import { sectors } from '@/lib/stockData';

interface FilterPanelProps {
  filters: ScannerFilters;
  onFilterChange: (filters: ScannerFilters) => void;
}

export default function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  const handleChange = (key: keyof ScannerFilters, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const toggleExchange = (exchange: 'NSE' | 'BSE') => {
    const newExchanges = filters.exchanges.includes(exchange)
      ? filters.exchanges.filter(e => e !== exchange)
      : [...filters.exchanges, exchange];
    handleChange('exchanges', newExchanges);
  };

  const toggleSector = (sector: string) => {
    const newSectors = filters.sectors.includes(sector)
      ? filters.sectors.filter(s => s !== sector)
      : [...filters.sectors, sector];
    handleChange('sectors', newSectors);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
      <h2 className="text-xl font-bold mb-4">Scanner Filters</h2>

      {/* Market Cap */}
      <div>
        <label className="block text-sm font-semibold mb-2">Market Cap Range (₹ Cr)</label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <input
              type="number"
              placeholder="Min"
              value={filters.minMcap}
              onChange={(e) => handleChange('minMcap', Number(e.target.value))}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Max"
              value={filters.maxMcap}
              onChange={(e) => handleChange('maxMcap', Number(e.target.value))}
              className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
      </div>

      {/* Exchanges */}
      <div>
        <label className="block text-sm font-semibold mb-2">Exchanges</label>
        <div className="flex gap-2">
          <button
            onClick={() => toggleExchange('NSE')}
            className={`px-4 py-2 rounded ${
              filters.exchanges.includes('NSE')
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            NSE
          </button>
          <button
            onClick={() => toggleExchange('BSE')}
            className={`px-4 py-2 rounded ${
              filters.exchanges.includes('BSE')
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            BSE
          </button>
        </div>
      </div>

      {/* Sectors */}
      <div>
        <label className="block text-sm font-semibold mb-2">Sectors</label>
        <div className="max-h-48 overflow-y-auto space-y-1">
          {sectors.map(sector => (
            <label key={sector} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded">
              <input
                type="checkbox"
                checked={filters.sectors.includes(sector)}
                onChange={() => toggleSector(sector)}
                className="rounded"
              />
              <span className="text-sm">{sector}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Part Scores */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm">Minimum Scores (out of 5)</h3>

        <div>
          <label className="block text-xs mb-1">
            Foundation (Governance) - <span className="text-red-600">CRITICAL</span>
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={filters.minFoundationScore}
            onChange={(e) => handleChange('minFoundationScore', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Business Engine - HIGH</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={filters.minBusinessScore}
            onChange={(e) => handleChange('minBusinessScore', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">
            Competitive Moat - <span className="text-red-600">CRITICAL</span>
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={filters.minCompetitiveScore}
            onChange={(e) => handleChange('minCompetitiveScore', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Financial Health - HIGH</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={filters.minFinancialScore}
            onChange={(e) => handleChange('minFinancialScore', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Growth Engine - HIGH</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={filters.minGrowthScore}
            onChange={(e) => handleChange('minGrowthScore', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Profitability - MODERATE</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={filters.minProfitabilityScore}
            onChange={(e) => handleChange('minProfitabilityScore', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>

      {/* Valuation */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm">Valuation Filters</h3>

        <div>
          <label className="block text-xs mb-1">Max P/E Ratio</label>
          <input
            type="number"
            value={filters.maxPE}
            onChange={(e) => handleChange('maxPE', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Max PEG Ratio</label>
          <input
            type="number"
            step="0.1"
            value={filters.maxPEG}
            onChange={(e) => handleChange('maxPEG', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>

      {/* Promoter Filters */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm">Promoter Filters</h3>

        <div>
          <label className="block text-xs mb-1">Min Promoter Holding (%)</label>
          <input
            type="number"
            value={filters.minPromoterHolding}
            onChange={(e) => handleChange('minPromoterHolding', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block text-xs mb-1">Max Promoter Pledge (%)</label>
          <input
            type="number"
            step="0.1"
            value={filters.maxPromoterPledge}
            onChange={(e) => handleChange('maxPromoterPledge', Number(e.target.value))}
            className="w-full px-3 py-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
