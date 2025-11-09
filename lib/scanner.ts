import { Stock, ScannerFilters, ScoringWeights } from './types';

export const defaultWeights: ScoringWeights = {
  foundation: 0.25,     // CRITICAL - 25%
  business: 0.15,       // HIGH - 15%
  competitive: 0.20,    // CRITICAL - 20%
  financial: 0.15,      // HIGH - 15%
  growth: 0.15,         // HIGH - 15%
  profitability: 0.10,  // MODERATE - 10%
  valuation: 0.0        // Not weighted (entry point consideration)
};

export const defaultFilters: ScannerFilters = {
  minMcap: 0,
  maxMcap: 1000000,
  exchanges: ['NSE', 'BSE'],
  sectors: [],
  minFoundationScore: 3.0,  // Auto-AVOID below 3.0
  minBusinessScore: 3.0,
  minCompetitiveScore: 3.5,
  minFinancialScore: 3.0,
  minGrowthScore: 3.0,
  minProfitabilityScore: 2.5,
  maxPE: 100,
  maxPEG: 3.0,
  minPromoterHolding: 25,
  maxPromoterPledge: 5,
};

export function calculateOverallScore(stock: Stock, weights: ScoringWeights): number {
  const score =
    stock.foundationScore * weights.foundation +
    stock.businessScore * weights.business +
    stock.competitiveScore * weights.competitive +
    stock.financialScore * weights.financial +
    stock.growthScore * weights.growth +
    stock.profitabilityScore * weights.profitability;

  return Math.round(score * 100) / 100;
}

export function getRecommendation(overallScore: number, foundationScore: number, valuationScore: number): Stock['recommendation'] {
  // Auto-AVOID if foundation score below 3.0
  if (foundationScore < 3.0) return 'AVOID';

  // Consider valuation for final recommendation
  if (overallScore >= 4.3 && valuationScore >= 3.0) return 'STRONG BUY';
  if (overallScore >= 4.0 && valuationScore >= 2.5) return 'BUY';
  if (overallScore >= 3.5) return 'BUY';
  if (overallScore >= 3.0) return 'HOLD';
  return 'AVOID';
}

export function getMultibaggerPotential(
  overallScore: number,
  growthScore: number,
  competitiveScore: number,
  valuationScore: number
): Stock['multibaggerPotential'] {
  // High growth + strong moat + reasonable valuation = very high potential
  if (growthScore >= 4.5 && competitiveScore >= 4.3 && valuationScore >= 3.5 && overallScore >= 4.2) {
    return 'VERY HIGH';
  }
  if (growthScore >= 4.0 && competitiveScore >= 4.0 && overallScore >= 3.8) {
    return 'HIGH';
  }
  if (growthScore >= 3.5 && overallScore >= 3.3) {
    return 'MODERATE';
  }
  return 'LOW';
}

export function applyFilters(stocks: Stock[], filters: ScannerFilters): Stock[] {
  return stocks.filter(stock => {
    // Market cap filter
    if (stock.mcap < filters.minMcap || stock.mcap > filters.maxMcap) return false;

    // Exchange filter
    if (filters.exchanges.length > 0 && !filters.exchanges.includes(stock.exchange)) return false;

    // Sector filter
    if (filters.sectors.length > 0 && !filters.sectors.includes(stock.sector)) return false;

    // Foundation score (CRITICAL - auto-avoid below threshold)
    if (stock.foundationScore < filters.minFoundationScore) return false;

    // Business score
    if (stock.businessScore < filters.minBusinessScore) return false;

    // Competitive score (CRITICAL)
    if (stock.competitiveScore < filters.minCompetitiveScore) return false;

    // Financial score
    if (stock.financialScore < filters.minFinancialScore) return false;

    // Growth score
    if (stock.growthScore < filters.minGrowthScore) return false;

    // Profitability score
    if (stock.profitabilityScore < filters.minProfitabilityScore) return false;

    // Valuation filters
    if (stock.peRatio > filters.maxPE) return false;
    if (stock.pegRatio > 0 && stock.pegRatio > filters.maxPEG) return false;

    // Promoter holding
    if (stock.promoterHolding < filters.minPromoterHolding) return false;

    // Promoter pledge (CRITICAL - should be minimal)
    if (stock.promoterPledge > filters.maxPromoterPledge) return false;

    return true;
  });
}

export function sortStocks(stocks: Stock[], sortBy: keyof Stock, order: 'asc' | 'desc' = 'desc'): Stock[] {
  return [...stocks].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return order === 'desc' ? bVal - aVal : aVal - bVal;
    }

    return 0;
  });
}

export function getScoreColor(score: number): string {
  if (score >= 4.5) return 'text-green-600 dark:text-green-400';
  if (score >= 4.0) return 'text-green-500 dark:text-green-500';
  if (score >= 3.5) return 'text-yellow-600 dark:text-yellow-400';
  if (score >= 3.0) return 'text-orange-600 dark:text-orange-400';
  return 'text-red-600 dark:text-red-400';
}

export function getRecommendationColor(recommendation: Stock['recommendation']): string {
  switch (recommendation) {
    case 'STRONG BUY': return 'bg-green-600 text-white';
    case 'BUY': return 'bg-green-500 text-white';
    case 'HOLD': return 'bg-yellow-500 text-white';
    case 'AVOID': return 'bg-red-500 text-white';
  }
}

export function getPotentialColor(potential: Stock['multibaggerPotential']): string {
  switch (potential) {
    case 'VERY HIGH': return 'bg-purple-600 text-white';
    case 'HIGH': return 'bg-blue-600 text-white';
    case 'MODERATE': return 'bg-blue-400 text-white';
    case 'LOW': return 'bg-gray-500 text-white';
  }
}
