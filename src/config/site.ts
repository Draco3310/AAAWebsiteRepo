export const siteConfig = {
  name: "Advanced Ascension Athletics LLC",
  shortName: "AAA",
  tagline: "One Body. One Path. Become More.",
  description: "Individualized strength, conditioning, athletic development, and HYROX performance coaching in Colorado Springs. One Body. One Path. Become More.",
  url: process.env.PUBLIC_SITE_URL || "https://advancedascensionathletics.com",
  location: {
    city: "Colorado Springs",
    state: "CO",
    facility: "Peak Performance Fitness & Yoga",
    facilityNote: "Advanced Ascension Athletics currently delivers in-person coaching at Peak Performance Fitness & Yoga in Colorado Springs. AAA provides the coaching, programming, assessment, methodology, and service structure; Peak Performance is the current physical training facility."
  },
  formEndpoint: process.env.PUBLIC_INTAKE_FORM_ENDPOINT || "",
  googleReviews: {
    enabled: process.env.GOOGLE_REVIEWS_ENABLED === "true",
    placeId: process.env.GOOGLE_PLACE_ID || "",
    apiKey: process.env.GOOGLE_MAPS_API_KEY || ""
  }
};
