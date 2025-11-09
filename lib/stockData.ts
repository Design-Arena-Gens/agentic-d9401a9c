import { Stock } from './types';

// Sample data representing potential multibagger stocks from NSE & BSE
export const sampleStocks: Stock[] = [
  {
    symbol: 'TATAELXSI',
    name: 'Tata Elxsi Limited',
    exchange: 'NSE',
    sector: 'IT Services',
    mcap: 45000,
    price: 7800,

    promoterHolding: 43.5,
    promoterPledge: 0,
    managementTenure: 15,
    roceAvg: 42.5,
    roic3YrAvg: 38.2,
    foundationScore: 4.5,

    revenueStreams: 4,
    geographicPresence: 8,
    assetTurnover: 3.8,
    operatingLeverage: 1.85,
    businessScore: 4.2,

    marketShare: 12.5,
    industryGrowth: 18.5,
    moatType: ['IP', 'Switching Costs', 'Brand'],
    competitiveScore: 4.3,

    debtToEquity: 0.05,
    interestCoverage: 125.0,
    currentRatio: 2.8,
    ocfToEbitda: 0.92,
    financialScore: 4.7,

    revenue3YrCAGR: 22.5,
    ebitda3YrCAGR: 25.8,
    eps3YrCAGR: 28.2,
    growthScore: 4.6,

    ebitdaMargin: 28.5,
    netMargin: 22.8,
    roeAvg: 35.2,
    profitabilityScore: 4.5,

    peRatio: 45.5,
    pegRatio: 1.62,
    priceToBook: 14.5,
    evToEbitda: 32.5,
    valuationScore: 3.2,

    overallScore: 4.29,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'DIXON',
    name: 'Dixon Technologies',
    exchange: 'NSE',
    sector: 'Electronics Manufacturing',
    mcap: 38000,
    price: 14500,

    promoterHolding: 48.2,
    promoterPledge: 0,
    managementTenure: 12,
    roceAvg: 32.5,
    roic3YrAvg: 28.5,
    foundationScore: 4.2,

    revenueStreams: 5,
    geographicPresence: 4,
    assetTurnover: 4.2,
    operatingLeverage: 2.1,
    businessScore: 4.0,

    marketShare: 18.5,
    industryGrowth: 25.5,
    moatType: ['Scale', 'Switching Costs'],
    competitiveScore: 4.5,

    debtToEquity: 0.18,
    interestCoverage: 45.0,
    currentRatio: 1.95,
    ocfToEbitda: 0.88,
    financialScore: 4.3,

    revenue3YrCAGR: 58.5,
    ebitda3YrCAGR: 65.2,
    eps3YrCAGR: 72.8,
    growthScore: 5.0,

    ebitdaMargin: 6.8,
    netMargin: 4.5,
    roeAvg: 28.5,
    profitabilityScore: 3.8,

    peRatio: 85.5,
    pegRatio: 1.17,
    priceToBook: 22.5,
    evToEbitda: 65.0,
    valuationScore: 2.8,

    overallScore: 4.09,
    recommendation: 'BUY',
    multibaggerPotential: 'VERY HIGH'
  },
  {
    symbol: 'KALYANKJIL',
    name: 'Kalyan Jewellers',
    exchange: 'NSE',
    sector: 'Retail - Jewelry',
    mcap: 42000,
    price: 405,

    promoterHolding: 61.2,
    promoterPledge: 0,
    managementTenure: 20,
    roceAvg: 18.5,
    roic3YrAvg: 16.2,
    foundationScore: 4.0,

    revenueStreams: 3,
    geographicPresence: 6,
    assetTurnover: 2.8,
    operatingLeverage: 1.65,
    businessScore: 3.8,

    marketShare: 8.5,
    industryGrowth: 15.5,
    moatType: ['Brand', 'Network Effect'],
    competitiveScore: 4.0,

    debtToEquity: 0.42,
    interestCoverage: 8.5,
    currentRatio: 1.45,
    ocfToEbitda: 0.75,
    financialScore: 3.5,

    revenue3YrCAGR: 32.5,
    ebitda3YrCAGR: 45.2,
    eps3YrCAGR: 58.5,
    growthScore: 4.5,

    ebitdaMargin: 8.2,
    netMargin: 4.8,
    roeAvg: 22.5,
    profitabilityScore: 3.7,

    peRatio: 68.5,
    pegRatio: 1.17,
    priceToBook: 12.8,
    evToEbitda: 48.5,
    valuationScore: 3.0,

    overallScore: 3.79,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'ZOMATO',
    name: 'Zomato Limited',
    exchange: 'NSE',
    sector: 'Food Delivery',
    mcap: 185000,
    price: 210,

    promoterHolding: 3.8,
    promoterPledge: 0,
    managementTenure: 8,
    roceAvg: 8.5,
    roic3YrAvg: 5.2,
    foundationScore: 2.8,

    revenueStreams: 4,
    geographicPresence: 12,
    assetTurnover: 5.2,
    operatingLeverage: 2.8,
    businessScore: 4.3,

    marketShare: 55.5,
    industryGrowth: 35.5,
    moatType: ['Network Effect', 'Scale'],
    competitiveScore: 4.8,

    debtToEquity: 0.02,
    interestCoverage: 85.0,
    currentRatio: 3.2,
    ocfToEbitda: 0.65,
    financialScore: 4.2,

    revenue3YrCAGR: 48.5,
    ebitda3YrCAGR: 125.5,
    eps3YrCAGR: -15.2,
    growthScore: 3.8,

    ebitdaMargin: 4.2,
    netMargin: 1.8,
    roeAvg: 8.5,
    profitabilityScore: 2.5,

    peRatio: 385.5,
    pegRatio: -25.3,
    priceToBook: 8.2,
    evToEbitda: 145.0,
    valuationScore: 1.5,

    overallScore: 3.41,
    recommendation: 'HOLD',
    multibaggerPotential: 'MODERATE'
  },
  {
    symbol: 'CAMS',
    name: 'Computer Age Management Services',
    exchange: 'NSE',
    sector: 'Financial Services',
    mcap: 22000,
    price: 4400,

    promoterHolding: 70.0,
    promoterPledge: 0,
    managementTenure: 18,
    roceAvg: 55.5,
    roic3YrAvg: 52.8,
    foundationScore: 4.8,

    revenueStreams: 3,
    geographicPresence: 2,
    assetTurnover: 2.2,
    operatingLeverage: 1.45,
    businessScore: 3.5,

    marketShare: 68.5,
    industryGrowth: 12.5,
    moatType: ['Switching Costs', 'Regulatory', 'Network Effect'],
    competitiveScore: 4.9,

    debtToEquity: 0.0,
    interestCoverage: 999.0,
    currentRatio: 4.5,
    ocfToEbitda: 0.95,
    financialScore: 5.0,

    revenue3YrCAGR: 18.5,
    ebitda3YrCAGR: 19.2,
    eps3YrCAGR: 20.5,
    growthScore: 3.8,

    ebitdaMargin: 48.5,
    netMargin: 38.2,
    roeAvg: 42.5,
    profitabilityScore: 5.0,

    peRatio: 42.5,
    pegRatio: 2.07,
    priceToBook: 16.8,
    evToEbitda: 28.5,
    valuationScore: 3.5,

    overallScore: 4.36,
    recommendation: 'STRONG BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'HAPPSTMNDS',
    name: 'Happiest Minds Technologies',
    exchange: 'NSE',
    sector: 'IT Services',
    mcap: 12000,
    price: 850,

    promoterHolding: 54.2,
    promoterPledge: 0,
    managementTenure: 10,
    roceAvg: 38.5,
    roic3YrAvg: 35.2,
    foundationScore: 4.3,

    revenueStreams: 4,
    geographicPresence: 6,
    assetTurnover: 3.2,
    operatingLeverage: 1.75,
    businessScore: 4.0,

    marketShare: 2.5,
    industryGrowth: 22.5,
    moatType: ['IP', 'Specialization'],
    competitiveScore: 3.8,

    debtToEquity: 0.0,
    interestCoverage: 999.0,
    currentRatio: 3.8,
    ocfToEbitda: 0.90,
    financialScore: 4.8,

    revenue3YrCAGR: 28.5,
    ebitda3YrCAGR: 32.2,
    eps3YrCAGR: 35.8,
    growthScore: 4.3,

    ebitdaMargin: 22.5,
    netMargin: 18.2,
    roeAvg: 32.5,
    profitabilityScore: 4.3,

    peRatio: 38.5,
    pegRatio: 1.08,
    priceToBook: 11.2,
    evToEbitda: 25.5,
    valuationScore: 4.0,

    overallScore: 4.21,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'ROUTE',
    name: 'Route Mobile Limited',
    exchange: 'NSE',
    sector: 'Cloud Communication',
    mcap: 8500,
    price: 1580,

    promoterHolding: 42.8,
    promoterPledge: 0,
    managementTenure: 12,
    roceAvg: 22.5,
    roic3YrAvg: 18.5,
    foundationScore: 3.8,

    revenueStreams: 5,
    geographicPresence: 10,
    assetTurnover: 4.5,
    operatingLeverage: 1.95,
    businessScore: 4.2,

    marketShare: 8.5,
    industryGrowth: 28.5,
    moatType: ['Network Effect', 'API Integration'],
    competitiveScore: 4.2,

    debtToEquity: 0.12,
    interestCoverage: 42.0,
    currentRatio: 2.2,
    ocfToEbitda: 0.82,
    financialScore: 4.3,

    revenue3YrCAGR: 35.5,
    ebitda3YrCAGR: 38.2,
    eps3YrCAGR: 42.5,
    growthScore: 4.4,

    ebitdaMargin: 12.5,
    netMargin: 8.2,
    roeAvg: 18.5,
    profitabilityScore: 3.6,

    peRatio: 32.5,
    pegRatio: 0.76,
    priceToBook: 5.8,
    evToEbitda: 22.5,
    valuationScore: 4.3,

    overallScore: 4.11,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'ANGELONE',
    name: 'Angel One Limited',
    exchange: 'NSE',
    sector: 'Broking & Distribution',
    mcap: 18000,
    price: 2800,

    promoterHolding: 22.5,
    promoterPledge: 0,
    managementTenure: 15,
    roceAvg: 45.5,
    roic3YrAvg: 42.2,
    foundationScore: 4.0,

    revenueStreams: 4,
    geographicPresence: 3,
    assetTurnover: 1.2,
    operatingLeverage: 2.45,
    businessScore: 3.7,

    marketShare: 12.5,
    industryGrowth: 25.5,
    moatType: ['Scale', 'Technology'],
    competitiveScore: 4.0,

    debtToEquity: 0.85,
    interestCoverage: 15.5,
    currentRatio: 1.2,
    ocfToEbitda: 0.88,
    financialScore: 3.8,

    revenue3YrCAGR: 52.5,
    ebitda3YrCAGR: 68.5,
    eps3YrCAGR: 75.2,
    growthScore: 4.9,

    ebitdaMargin: 58.5,
    netMargin: 42.8,
    roeAvg: 38.5,
    profitabilityScore: 4.8,

    peRatio: 18.5,
    pegRatio: 0.25,
    priceToBook: 6.8,
    evToEbitda: 12.5,
    valuationScore: 4.9,

    overallScore: 4.30,
    recommendation: 'STRONG BUY',
    multibaggerPotential: 'VERY HIGH'
  },
  {
    symbol: 'POLICYBZR',
    name: 'PB Fintech Limited',
    exchange: 'NSE',
    sector: 'Insurance Broking',
    mcap: 65000,
    price: 1450,

    promoterHolding: 8.5,
    promoterPledge: 0,
    managementTenure: 7,
    roceAvg: 12.5,
    roic3YrAvg: 8.2,
    foundationScore: 2.9,

    revenueStreams: 3,
    geographicPresence: 2,
    assetTurnover: 3.8,
    operatingLeverage: 2.2,
    businessScore: 3.5,

    marketShare: 42.5,
    industryGrowth: 32.5,
    moatType: ['Network Effect', 'Brand'],
    competitiveScore: 4.5,

    debtToEquity: 0.0,
    interestCoverage: 999.0,
    currentRatio: 4.2,
    ocfToEbitda: 0.72,
    financialScore: 4.5,

    revenue3YrCAGR: 45.5,
    ebitda3YrCAGR: 185.5,
    eps3YrCAGR: -42.5,
    growthScore: 3.5,

    ebitdaMargin: 8.5,
    netMargin: 2.2,
    roeAvg: 5.5,
    profitabilityScore: 2.3,

    peRatio: 685.5,
    pegRatio: -16.1,
    priceToBook: 6.5,
    evToEbitda: 125.0,
    valuationScore: 1.8,

    overallScore: 3.29,
    recommendation: 'HOLD',
    multibaggerPotential: 'MODERATE'
  },
  {
    symbol: 'DEEPAKFERT',
    name: 'Deepak Fertilisers',
    exchange: 'NSE',
    sector: 'Chemicals',
    mcap: 9500,
    price: 685,

    promoterHolding: 58.5,
    promoterPledge: 0,
    managementTenure: 25,
    roceAvg: 18.5,
    roic3YrAvg: 15.2,
    foundationScore: 4.1,

    revenueStreams: 4,
    geographicPresence: 5,
    assetTurnover: 1.8,
    operatingLeverage: 1.55,
    businessScore: 3.6,

    marketShare: 15.5,
    industryGrowth: 12.5,
    moatType: ['Scale', 'Integration'],
    competitiveScore: 3.8,

    debtToEquity: 0.65,
    interestCoverage: 5.5,
    currentRatio: 1.35,
    ocfToEbitda: 0.68,
    financialScore: 3.2,

    revenue3YrCAGR: 22.5,
    ebitda3YrCAGR: 32.5,
    eps3YrCAGR: 45.2,
    growthScore: 4.0,

    ebitdaMargin: 15.5,
    netMargin: 8.2,
    roeAvg: 18.5,
    profitabilityScore: 3.5,

    peRatio: 12.5,
    pegRatio: 0.28,
    priceToBook: 2.2,
    evToEbitda: 8.5,
    valuationScore: 4.8,

    overallScore: 3.86,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'TEAMLEASE',
    name: 'TeamLease Services',
    exchange: 'NSE',
    sector: 'HR Services',
    mcap: 5500,
    price: 3200,

    promoterHolding: 56.8,
    promoterPledge: 0,
    managementTenure: 16,
    roceAvg: 25.5,
    roic3YrAvg: 22.2,
    foundationScore: 4.2,

    revenueStreams: 5,
    geographicPresence: 4,
    assetTurnover: 8.5,
    operatingLeverage: 1.85,
    businessScore: 4.1,

    marketShare: 22.5,
    industryGrowth: 18.5,
    moatType: ['Scale', 'Network Effect'],
    competitiveScore: 4.1,

    debtToEquity: 0.22,
    interestCoverage: 18.5,
    currentRatio: 1.65,
    ocfToEbitda: 0.78,
    financialScore: 4.0,

    revenue3YrCAGR: 18.5,
    ebitda3YrCAGR: 25.2,
    eps3YrCAGR: 32.5,
    growthScore: 3.9,

    ebitdaMargin: 4.2,
    netMargin: 2.5,
    roeAvg: 22.5,
    profitabilityScore: 3.2,

    peRatio: 28.5,
    pegRatio: 0.88,
    priceToBook: 6.2,
    evToEbitda: 18.5,
    valuationScore: 4.0,

    overallScore: 3.93,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'LATENTVIEW',
    name: 'Latent View Analytics',
    exchange: 'NSE',
    sector: 'Data Analytics',
    mcap: 5800,
    price: 425,

    promoterHolding: 38.5,
    promoterPledge: 0,
    managementTenure: 14,
    roceAvg: 32.5,
    roic3YrAvg: 28.5,
    foundationScore: 4.0,

    revenueStreams: 3,
    geographicPresence: 5,
    assetTurnover: 2.8,
    operatingLeverage: 1.65,
    businessScore: 3.7,

    marketShare: 4.5,
    industryGrowth: 28.5,
    moatType: ['IP', 'Specialization'],
    competitiveScore: 3.9,

    debtToEquity: 0.0,
    interestCoverage: 999.0,
    currentRatio: 3.2,
    ocfToEbitda: 0.88,
    financialScore: 4.7,

    revenue3YrCAGR: 22.5,
    ebitda3YrCAGR: 25.8,
    eps3YrCAGR: 28.5,
    growthScore: 4.0,

    ebitdaMargin: 18.5,
    netMargin: 14.2,
    roeAvg: 25.5,
    profitabilityScore: 4.0,

    peRatio: 32.5,
    pegRatio: 1.14,
    priceToBook: 7.8,
    evToEbitda: 22.5,
    valuationScore: 3.8,

    overallScore: 4.01,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'SYMPHONY',
    name: 'Symphony Limited',
    exchange: 'NSE',
    sector: 'Consumer Durables',
    mcap: 8200,
    price: 1450,

    promoterHolding: 37.5,
    promoterPledge: 0,
    managementTenure: 22,
    roceAvg: 55.5,
    roic3YrAvg: 52.2,
    foundationScore: 4.4,

    revenueStreams: 3,
    geographicPresence: 8,
    assetTurnover: 3.5,
    operatingLeverage: 1.75,
    businessScore: 3.9,

    marketShare: 48.5,
    industryGrowth: 15.5,
    moatType: ['Brand', 'IP'],
    competitiveScore: 4.3,

    debtToEquity: 0.0,
    interestCoverage: 999.0,
    currentRatio: 4.8,
    ocfToEbitda: 0.95,
    financialScore: 5.0,

    revenue3YrCAGR: 12.5,
    ebitda3YrCAGR: 14.2,
    eps3YrCAGR: 16.5,
    growthScore: 3.2,

    ebitdaMargin: 22.5,
    netMargin: 18.8,
    roeAvg: 35.5,
    profitabilityScore: 4.5,

    peRatio: 52.5,
    pegRatio: 3.18,
    priceToBook: 16.8,
    evToEbitda: 42.5,
    valuationScore: 2.5,

    overallScore: 3.97,
    recommendation: 'BUY',
    multibaggerPotential: 'MODERATE'
  },
  {
    symbol: 'CLEAN',
    name: 'Clean Science and Technology',
    exchange: 'NSE',
    sector: 'Specialty Chemicals',
    mcap: 14500,
    price: 1250,

    promoterHolding: 82.5,
    promoterPledge: 0,
    managementTenure: 18,
    roceAvg: 48.5,
    roic3YrAvg: 45.2,
    foundationScore: 4.7,

    revenueStreams: 3,
    geographicPresence: 6,
    assetTurnover: 2.2,
    operatingLeverage: 1.65,
    businessScore: 3.7,

    marketShare: 35.5,
    industryGrowth: 18.5,
    moatType: ['IP', 'Regulatory', 'Technology'],
    competitiveScore: 4.6,

    debtToEquity: 0.0,
    interestCoverage: 999.0,
    currentRatio: 5.2,
    ocfToEbitda: 0.92,
    financialScore: 5.0,

    revenue3YrCAGR: 28.5,
    ebitda3YrCAGR: 32.5,
    eps3YrCAGR: 35.8,
    growthScore: 4.3,

    ebitdaMargin: 42.5,
    netMargin: 32.8,
    roeAvg: 32.5,
    profitabilityScore: 4.8,

    peRatio: 62.5,
    pegRatio: 1.75,
    priceToBook: 18.5,
    evToEbitda: 48.5,
    valuationScore: 2.8,

    overallScore: 4.27,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'BIKAJI',
    name: 'Bikaji Foods International',
    exchange: 'NSE',
    sector: 'FMCG - Snacks',
    mcap: 18500,
    price: 685,

    promoterHolding: 65.2,
    promoterPledge: 0,
    managementTenure: 28,
    roceAvg: 28.5,
    roic3YrAvg: 25.2,
    foundationScore: 4.3,

    revenueStreams: 4,
    geographicPresence: 4,
    assetTurnover: 3.2,
    operatingLeverage: 1.85,
    businessScore: 3.8,

    marketShare: 12.5,
    industryGrowth: 22.5,
    moatType: ['Brand', 'Distribution'],
    competitiveScore: 4.0,

    debtToEquity: 0.08,
    interestCoverage: 85.0,
    currentRatio: 2.8,
    ocfToEbitda: 0.85,
    financialScore: 4.6,

    revenue3YrCAGR: 25.5,
    ebitda3YrCAGR: 28.2,
    eps3YrCAGR: 32.5,
    growthScore: 4.1,

    ebitdaMargin: 14.5,
    netMargin: 9.8,
    roeAvg: 22.5,
    profitabilityScore: 3.8,

    peRatio: 58.5,
    pegRatio: 1.80,
    priceToBook: 12.5,
    evToEbitda: 42.5,
    valuationScore: 3.0,

    overallScore: 3.94,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  },
  {
    symbol: 'AETHER',
    name: 'Aether Industries',
    exchange: 'NSE',
    sector: 'Specialty Chemicals',
    mcap: 7800,
    price: 825,

    promoterHolding: 70.5,
    promoterPledge: 0,
    managementTenure: 12,
    roceAvg: 22.5,
    roic3YrAvg: 18.5,
    foundationScore: 4.1,

    revenueStreams: 4,
    geographicPresence: 7,
    assetTurnover: 1.8,
    operatingLeverage: 1.95,
    businessScore: 3.8,

    marketShare: 8.5,
    industryGrowth: 25.5,
    moatType: ['IP', 'Technology'],
    competitiveScore: 4.0,

    debtToEquity: 0.35,
    interestCoverage: 12.5,
    currentRatio: 2.2,
    ocfToEbitda: 0.72,
    financialScore: 3.8,

    revenue3YrCAGR: 38.5,
    ebitda3YrCAGR: 45.2,
    eps3YrCAGR: 52.5,
    growthScore: 4.5,

    ebitdaMargin: 22.5,
    netMargin: 14.2,
    roeAvg: 18.5,
    profitabilityScore: 3.8,

    peRatio: 45.5,
    pegRatio: 0.87,
    priceToBook: 7.8,
    evToEbitda: 32.5,
    valuationScore: 3.6,

    overallScore: 3.94,
    recommendation: 'BUY',
    multibaggerPotential: 'HIGH'
  }
];

export const sectors = [
  'IT Services',
  'Electronics Manufacturing',
  'Retail - Jewelry',
  'Food Delivery',
  'Financial Services',
  'Cloud Communication',
  'Broking & Distribution',
  'Insurance Broking',
  'Chemicals',
  'HR Services',
  'Data Analytics',
  'Consumer Durables',
  'Specialty Chemicals',
  'FMCG - Snacks'
];
