export interface Stock {
  symbol: string;
  name: string;
  exchange: 'NSE' | 'BSE';
  sector: string;
  mcap: number;
  price: number;

  // Part 1: Foundation (Governance & Management)
  promoterHolding: number;
  promoterPledge: number;
  managementTenure: number;
  roceAvg: number;
  roic3YrAvg: number;
  foundationScore: number;

  // Part 2: Business Engine (Model & Scalability)
  revenueStreams: number;
  geographicPresence: number;
  assetTurnover: number;
  operatingLeverage: number;
  businessScore: number;

  // Part 3: Competitive Moat (Industry Position)
  marketShare: number;
  industryGrowth: number;
  moatType: string[];
  competitiveScore: number;

  // Part 4: Financial Health
  debtToEquity: number;
  interestCoverage: number;
  currentRatio: number;
  ocfToEbitda: number;
  financialScore: number;

  // Part 5: Growth Engine
  revenue3YrCAGR: number;
  ebitda3YrCAGR: number;
  eps3YrCAGR: number;
  growthScore: number;

  // Part 6: Profitability & Margins
  ebitdaMargin: number;
  netMargin: number;
  roeAvg: number;
  profitabilityScore: number;

  // Part 7: Valuation & Entry Point
  peRatio: number;
  pegRatio: number;
  priceToBook: number;
  evToEbitda: number;
  valuationScore: number;

  // Final Assessment
  overallScore: number;
  recommendation: 'STRONG BUY' | 'BUY' | 'HOLD' | 'AVOID';
  multibaggerPotential: 'VERY HIGH' | 'HIGH' | 'MODERATE' | 'LOW';
}

export interface ScannerFilters {
  minMcap: number;
  maxMcap: number;
  exchanges: ('NSE' | 'BSE')[];
  sectors: string[];
  minFoundationScore: number;
  minBusinessScore: number;
  minCompetitiveScore: number;
  minFinancialScore: number;
  minGrowthScore: number;
  minProfitabilityScore: number;
  maxPE: number;
  maxPEG: number;
  minPromoterHolding: number;
  maxPromoterPledge: number;
}

export interface ScoringWeights {
  foundation: number;
  business: number;
  competitive: number;
  financial: number;
  growth: number;
  profitability: number;
  valuation: number;
}
