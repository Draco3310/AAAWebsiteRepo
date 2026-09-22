export interface ServiceTier {
  id: string;
  name: string;
  price: string;
  billingCycle: string;
  commitment?: string;
  positioning: string;
  frequency: string;
  oversight: string;
  isCore?: boolean;
  isFlagship?: boolean;
  badge?: string;
  features: string[];
}

export const coachingLadder: ServiceTier[] = [
  {
    id: "foundation",
    name: "Foundation",
    price: "$499",
    billingCycle: "every 4 weeks",
    positioning: "Direction + accountability + progression",
    frequency: "Normally 1 coached session / week (4 sessions / cycle)",
    oversight: "Independent training structure with basic coaching oversight",
    badge: "Independent Structure",
    features: [
      "4 private 60-minute coached sessions per 4 weeks",
      "Individualized TrainHeroic programming",
      "Independent training structure for non-coached days",
      "Basic training oversight and form reviews",
      "Targeted mobility & active recovery programming",
      "Formal progress assessment every 8 weeks"
    ]
  },
  {
    id: "performance",
    name: "Performance",
    price: "$899",
    billingCycle: "every 4 weeks",
    positioning: "Structured, comprehensive coaching with active development",
    frequency: "Normally 2 coached sessions / week (8 sessions / cycle)",
    oversight: "Core AAA Coaching Product",
    isCore: true,
    badge: "Core AAA Coaching Product",
    features: [
      "8 private 60-minute coached sessions per 4 weeks",
      "Complete individualized TrainHeroic programming",
      "Weekly structured progress check-ins",
      "Program adjustments as needed",
      "Technique & movement instruction support",
      "Targeted mobility & active recovery programming",
      "Formal progress assessment every 8 weeks"
    ]
  },
  {
    id: "ascension",
    name: "Ascension",
    price: "$1,299",
    billingCycle: "every 4 weeks",
    positioning: "High-frequency performance coaching",
    frequency: "Normally 3 coached sessions / week (12 sessions / cycle)",
    oversight: "High-Frequency Hands-On Oversight",
    features: [
      "12 private 60-minute coached sessions per 4 weeks",
      "Complete individualized TrainHeroic programming",
      "Weekly structured progress check-ins",
      "1 × 30-minute mobility / recovery / strategy session per cycle",
      "Priority scheduling access",
      "Travel & schedule-disruption programming adjustments",
      "Formal progress assessment every 8 weeks"
    ]
  },
  {
    id: "summit",
    name: "Summit",
    price: "$2,195",
    billingCycle: "every 4 weeks",
    commitment: "12-Week Initial Commitment",
    positioning: "Comprehensive concierge performance management",
    frequency: "Normally 3 coached sessions / week (12 sessions / cycle) + Concierge",
    oversight: "Flagship Concierge (Limited to ~4 Active Clients)",
    isFlagship: true,
    badge: "Flagship Concierge Service",
    features: [
      "12 private 60-minute performance sessions per cycle",
      "4 × 30-minute recovery / mobility sessions per cycle",
      "Complete individualized performance programming",
      "Weekly performance check-in & dynamic adjustments",
      "Priority coaching communication & priority scheduling",
      "Comprehensive baseline assessment included upon enrollment",
      "90-minute Performance Intensive every 12 weeks",
      "Performance lifestyle coaching within professional scope"
    ]
  }
];

export const standaloneServices = {
  baselineAssessment: {
    id: "baseline-assessment",
    name: "AAA Baseline Assessment",
    price: "$149",
    duration: "75–90 minutes",
    badge: "Standalone Assessment",
    summary: "Comprehensive athletic diagnostic evaluating movement quality, mobility, stability, functional strength, work capacity, and goal-specific benchmarks.",
    rule: "The AAA Baseline Assessment is $149 when purchased as a standalone service. The initial Baseline Assessment is included when enrolling in recurring AAA coaching."
  },
  privateDropIn: {
    id: "private-drop-in",
    name: "Private Drop-In",
    price: "$110",
    duration: "60 minutes",
    badge: "Single Session",
    summary: "A focused, single 60-minute private session designed for technique work, visiting athletes, movement instruction, or short-term coaching needs."
  },
  semiPrivate: {
    id: "semi-private-coaching",
    name: "Semi-Private Coaching",
    summary: "Shared coaching environment for 2 to 4 athletes (couples, friends, training partners, or HYROX pods). Groups larger than 4:1 are not currently marketed.",
    rates: [
      { ratio: "2:1 Ratio", rate: "$75", unit: "per person / session" },
      { ratio: "3:1 Ratio", rate: "$60", unit: "per person / session" },
      { ratio: "4:1 Ratio", rate: "$50", unit: "per person / session" }
    ]
  }
};
