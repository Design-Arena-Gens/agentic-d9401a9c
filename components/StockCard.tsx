'use client';

import { Stock } from '@/lib/types';
import { getScoreColor, getRecommendationColor, getPotentialColor } from '@/lib/scanner';
import { TrendingUp, Building2, Shield, DollarSign, Activity, Target, Award } from 'lucide-react';

interface StockCardProps {
  stock: Stock;
  onClick: () => void;
}

export default function StockCard({ stock, onClick }: StockCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer p-5 border border-gray-200 dark:border-gray-700"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold">{stock.symbol}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{stock.name}</p>
          <div className="flex gap-2 mt-1">
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              {stock.exchange}
            </span>
            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
              {stock.sector}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold">₹{stock.price.toLocaleString()}</p>
          <p className="text-xs text-gray-500">MCap: ₹{stock.mcap.toLocaleString()} Cr</p>
        </div>
      </div>

      {/* Overall Score */}
      <div className="mb-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Overall Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(stock.overallScore)}`}>
            {stock.overallScore.toFixed(2)}/5.0
          </span>
        </div>
      </div>

      {/* Scores Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-red-500" />
          <div>
            <p className="text-xs text-gray-500">Foundation</p>
            <p className={`text-sm font-bold ${getScoreColor(stock.foundationScore)}`}>
              {stock.foundationScore.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-500" />
          <div>
            <p className="text-xs text-gray-500">Business</p>
            <p className={`text-sm font-bold ${getScoreColor(stock.businessScore)}`}>
              {stock.businessScore.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-yellow-500" />
          <div>
            <p className="text-xs text-gray-500">Moat</p>
            <p className={`text-sm font-bold ${getScoreColor(stock.competitiveScore)}`}>
              {stock.competitiveScore.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-green-500" />
          <div>
            <p className="text-xs text-gray-500">Financial</p>
            <p className={`text-sm font-bold ${getScoreColor(stock.financialScore)}`}>
              {stock.financialScore.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-purple-500" />
          <div>
            <p className="text-xs text-gray-500">Growth</p>
            <p className={`text-sm font-bold ${getScoreColor(stock.growthScore)}`}>
              {stock.growthScore.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-orange-500" />
          <div>
            <p className="text-xs text-gray-500">Profitability</p>
            <p className={`text-sm font-bold ${getScoreColor(stock.profitabilityScore)}`}>
              {stock.profitabilityScore.toFixed(1)}
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
        <div>
          <p className="text-gray-500">Promoter</p>
          <p className="font-semibold">{stock.promoterHolding.toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-gray-500">Rev CAGR</p>
          <p className="font-semibold">{stock.revenue3YrCAGR.toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-gray-500">P/E</p>
          <p className="font-semibold">{stock.peRatio.toFixed(1)}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getRecommendationColor(stock.recommendation)}`}>
          {stock.recommendation}
        </span>
        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getPotentialColor(stock.multibaggerPotential)}`}>
          {stock.multibaggerPotential} POTENTIAL
        </span>
      </div>
    </div>
  );
}
