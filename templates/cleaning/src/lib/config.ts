import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Molly Maid of Kissimmee, Lakeland, and South Orlando",
    tagline: "Sparkling Homes, Happy Lives Always",
    phone: "(407) 603-3463",
    phoneHref: "tel:+14076033463",
    email: "info@mollymaid.com",
    address: "123 Main St",
    city: "Kissimmee",
    serviceAreas: ["Kissimmee", "Lakeland", "South Orlando", "St. Cloud"],
    license: "Licensed & Insured",
    since: "1984",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "ember",
    niche: "cleaning",
  },

  services: [
    { icon: "home", title: "Residential Cleaning", desc: "Expert cleaning for houses, apartments, and condos, ensuring a spotless and comfortable living space.", urgent: false },
    { icon: "clock", title: "Recurring Cleaning", desc: "Maintain a consistently clean home with our flexible weekly, bi-weekly, or monthly cleaning schedules.", urgent: false },
    { icon: "sparkles", title: "One Time Cleaning", desc: "Perfect for special occasions or a deep clean, our one-time service leaves your home sparkling.", urgent: false },
    { icon: "truck", title: "Move-In/Move-Out Cleaning", desc: "Thorough cleaning for empty homes, making moving less stressful and ensuring a fresh start.", urgent: false },
    { icon: "heart", title: "Eco-Friendly Cleaning", desc: "We use environmentally safe products and methods to protect your family and the planet.", urgent: false },
    { icon: "briefcase", title: "Light Commercial Cleaning", desc: "Professional cleaning services for small businesses, offices, and commercial spaces.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Kissimmee", stars: 5, text: "Molly Maid did an incredible job with our recurring cleaning service! They've been coming bi-weekly for the past six months, and our home has never felt so consistently clean. The team is always punctual, professional, and pays attention to every detail. Worth every penny for the peace of mind!" },
    { name: "David L.", location: "Lakeland", stars: 5, text: "We hired Molly Maid for a one-time deep clean before a family gathering, and they exceeded all expectations. The house looked and smelled amazing! They tackled areas I usually miss, and the kitchen and bathrooms were spotless. The price was fair for the quality of work. Highly recommend!" },
    { name: "Emily R.", location: "South Orlando", stars: 5, text: "Moving out is stressful enough, but Molly Maid made the cleaning process effortless. Their move-out cleaning service was thorough and efficient. Our landlord was impressed, and we got our full deposit back without any issues. The team was friendly and worked quickly. Fantastic service!" }
  ],

  trustBadges: [
    "Locally Owned & Operated", "Neighborly Done Right Promise®", "Free Quote in Minutes", "Affordable Cleaning", "Background-Checked Staff", "Eco-Friendly Options"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10000, label: "Homes Cleaned", suffix: "+", decimals: 0 },
    { value: 35, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "shield-check", title: "Trusted Professionals", desc: "Our cleaners are thoroughly vetted, trained, and insured for your peace of mind." },
    { icon: "thumbs-up", title: "Satisfaction Guaranteed", desc: "We stand by our Neighborly Done Right Promise® – if you're not happy, we'll make it right." },
    { icon: "clock", title: "Flexible Scheduling", desc: "Choose from one-time, weekly, bi-weekly, or monthly cleaning services to fit your lifestyle." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Get a free, no-obligation quote with clear, upfront pricing and no hidden fees." },
    { icon: "heart", title: "Eco-Friendly Options", desc: "We offer green cleaning solutions to protect your family, pets, and the environment." },
    { icon: "home", title: "Personalized Service", desc: "We tailor our cleaning plans to your specific needs and preferences for a truly custom clean." }
  ],

  formServiceOptions: ["Residential Cleaning", "Recurring Cleaning", "One Time Cleaning", "Move-In/Move-Out Cleaning", "Eco-Friendly Cleaning", "Light Commercial Cleaning"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!