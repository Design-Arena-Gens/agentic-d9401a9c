'use client';

import { Stock } from '@/lib/types';
import { getScoreColor, getRecommendationColor, getPotentialColor } from '@/lib/scanner';
import { X, Shield, Building2, Award, DollarSign, TrendingUp, Activity, Target } from 'lucide-react';

interface StockDetailsProps {
  stock: Stock;
  onClose: () => void;
}

export default function StockDetails({ stock, onClose }: StockDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{stock.symbol}</h2>
            <p className="text-gray-600 dark:text-gray-400">{stock.name}</p>
            <div className="flex gap-2 mt-2">
              <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">
                {stock.exchange}
              </span>
              <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded">
                {stock.sector}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Price & Overall Score */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Price</p>
              <p className="text-3xl font-bold">₹{stock.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-2">Market Cap: ₹{stock.mcap.toLocaleString()} Cr</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Score</p>
              <p className={`text-3xl font-bold ${getScoreColor(stock.overallScore)}`}>
                {stock.overallScore.toFixed(2)}/5.0
              </p>
              <div className="flex gap-2 mt-2">
                <span className={`text-xs px-2 py-1 rounded ${getRecommendationColor(stock.recommendation)}`}>
                  {stock.recommendation}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${getPotentialColor(stock.multibaggerPotential)}`}>
                  {stock.multibaggerPotential}
                </span>
              </div>
            </div>
          </div>

          {/* Part 1: Foundation (Governance & Management) */}
          <div className="border dark:border-gray-700 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-bold">Part 1: Foundation (Governance & Management)</h3>
              <span className={`ml-auto text-xl font-bold ${getScoreColor(stock.foundationScore)}`}>
                {stock.foundationScore.toFixed(1)}/5.0
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500">Promoter Holding</p>
                <p className="text-lg font-semibold">{stock.promoterHolding.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Promoter Pledge</p>
                <p className="text-lg font-semibold">{stock.promoterPledge.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Management Tenure</p>
                <p className="text-lg font-semibold">{stock.managementTenure} yrs</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">ROCE Avg</p>
                <p className="text-lg font-semibold">{stock.roceAvg.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          {/* Part 2: Business Engine */}
          <div className="border dark:border-gray-700 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-bold">Part 2: Business Engine (Model & Scalability)</h3>
              <span className={`ml-auto text-xl font-bold ${getScoreColor(stock.businessScore)}`}>
                {stock.businessScore.toFixed(1)}/5.0
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500">Revenue Streams</p>
                <p className="text-lg font-semibold">{stock.revenueStreams}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Geographic Presence</p>
                <p className="text-lg font-semibold">{stock.geographicPresence} regions</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Asset Turnover</p>
                <p className="text-lg font-semibold">{stock.assetTurnover.toFixed(1)}x</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Operating Leverage</p>
                <p className="text-lg font-semibold">{stock.operatingLeverage.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Part 3: Competitive Moat */}
          <div className="border dark:border-gray-700 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg font-bold">Part 3: Competitive Moat (Industry Position)</h3>
              <span className={`ml-auto text-xl font-bold ${getScoreColor(stock.competitiveScore)}`}>
                {stock.competitiveScore.toFixed(1)}/5.0
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-500">Market Share</p>
                <p className="text-lg font-semibold">{stock.marketShare.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Industry Growth</p>
                <p className="text-lg font-semibold">{stock.industryGrowth.toFixed(1)}%</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Moat Sources</p>
              <div className="flex gap-2 flex-wrap">
                {stock.moatType.map(moat => (
                  <span key={moat} className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
                    {moat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Part 4: Financial Health */}
          <div className="border dark:border-gray-700 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-bold">Part 4: Financial Health</h3>
              <span className={`ml-auto text-xl font-bold ${getScoreColor(stock.financialScore)}`}>
                {stock.financialScore.toFixed(1)}/5.0
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500">Debt to Equity</p>
                <p className="text-lg font-semibold">{stock.debtToEquity.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Interest Coverage</p>
                <p className="text-lg font-semibold">{stock.interestCoverage.toFixed(1)}x</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Current Ratio</p>
                <p className="text-lg font-semibold">{stock.currentRatio.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">OCF to EBITDA</p>
                <p className="text-lg font-semibold">{stock.ocfToEbitda.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Part 5: Growth Engine */}
          <div className="border dark:border-gray-700 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-bold">Part 5: Growth Engine</h3>
              <span className={`ml-auto text-xl font-bold ${getScoreColor(stock.growthScore)}`}>
                {stock.growthScore.toFixed(1)}/5.0
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500">Revenue 3Y CAGR</p>
                <p className="text-lg font-semibold">{stock.revenue3YrCAGR.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">EBITDA 3Y CAGR</p>
                <p className="text-lg font-semibold">{stock.ebitda3YrCAGR.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">EPS 3Y CAGR</p>
                <p className="text-lg font-semibold">{stock.eps3YrCAGR.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          {/* Part 6: Profitability & Margins */}
          <div className="border dark:border-gray-700 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-bold">Part 6: Profitability & Margins</h3>
              <span className={`ml-auto text-xl font-bold ${getScoreColor(stock.profitabilityScore)}`}>
                {stock.profitabilityScore.toFixed(1)}/5.0
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500">EBITDA Margin</p>
                <p className="text-lg font-semibold">{stock.ebitdaMargin.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Net Margin</p>
                <p className="text-lg font-semibold">{stock.netMargin.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">ROE Avg</p>
                <p className="text-lg font-semibold">{stock.roeAvg.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          {/* Part 7: Valuation & Entry Point */}
          <div className="border dark:border-gray-700 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-indigo-500" />
              <h3 className="text-lg font-bold">Part 7: Valuation & Entry Point</h3>
              <span className={`ml-auto text-xl font-bold ${getScoreColor(stock.valuationScore)}`}>
                {stock.valuationScore.toFixed(1)}/5.0
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500">P/E Ratio</p>
                <p className="text-lg font-semibold">{stock.peRatio.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">PEG Ratio</p>
                <p className="text-lg font-semibold">{stock.pegRatio.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Price to Book</p>
                <p className="text-lg font-semibold">{stock.priceToBook.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">EV/EBITDA</p>
                <p className="text-lg font-semibold">{stock.evToEbitda.toFixed(1)}</p>
              </div>
            </div>
          </div>

          {/* Final Assessment */}
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Final Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Overall Score</p>
                <p className={`text-2xl font-bold ${getScoreColor(stock.overallScore)}`}>
                  {stock.overallScore.toFixed(2)}/5.0
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Recommendation</p>
                <span className={`inline-block text-sm px-4 py-2 rounded mt-1 ${getRecommendationColor(stock.recommendation)}`}>
                  {stock.recommendation}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Multibagger Potential</p>
                <span className={`inline-block text-sm px-4 py-2 rounded mt-1 ${getPotentialColor(stock.multibaggerPotential)}`}>
                  {stock.multibaggerPotential}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
