// Central source of truth for Viora Care site content & contact details.

export const site = {
  name: "Viora Care",
  legalName: "Viora Care Limited",
  home: "Cavendish Care Home",
  tagline: "Residential care, the way it should feel — like home.",
  description:
    "Cavendish Care Home is a 23-bed residential care home in Gloucester, providing warm, person-centred care for elderly adults. Operated by Viora Care Limited.",
  beds: 23,
  establishedYear: 2003,
  address: {
    line1: "Cavendish Care Home",
    line2: "301 Stroud Road",
    city: "Gloucester",
    postcode: "GL1 5LB",
    country: "United Kingdom",
  },
  phone: "01452 000 000",
  phoneHref: "tel:+441452000000",
  email: "hello@vioracare.co.uk",
  emailHref: "mailto:hello@vioracare.co.uk",
  mapsQuery: "301 Stroud Road, Gloucester, GL1 5LB",
  hours: [
    { label: "Enquiries", value: "Mon–Fri, 9am–5pm" },
    { label: "Visiting", value: "Every day, 9am–7pm" },
    { label: "Tours", value: "By appointment, 7 days a week" },
  ],
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Care", href: "/care" },
  { label: "Our Home", href: "/our-home" },
  { label: "Our Team", href: "/team" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

// Headline statistics used across the site.
export const stats = [
  { value: 23, suffix: "", label: "En-suite bedrooms" },
  { value: 2003, prefix: "Est. ", label: "Caring since", raw: true },
  { value: 23, suffix: "", label: "Dedicated team members" },
  { value: 8.3, suffix: " yrs", label: "Average staff tenure" },
];

export const values = [
  {
    title: "Dignity first",
    body: "Every resident is met with respect, privacy and choice. We care for the person, never just the need.",
    icon: "heart",
  },
  {
    title: "Genuinely homely",
    body: "A warm, familiar place where routines, relationships and the small comforts of home are protected.",
    icon: "home",
  },
  {
    title: "Skilled & steady",
    body: "An experienced, long-serving team — average tenure 8.3 years — who know our residents well.",
    icon: "users",
  },
  {
    title: "Safe & accountable",
    body: "CQC-registered with clear, standardised care processes and transparent, family-friendly communication.",
    icon: "shield",
  },
];

export const careServices = [
  {
    title: "Residential personal care",
    body: "Round-the-clock support with daily living — washing, dressing, mobility and medication — delivered with patience and warmth.",
    icon: "hand-heart",
  },
  {
    title: "Person-centred care plans",
    body: "Every resident has a plan built around their history, preferences and goals, reviewed regularly with families.",
    icon: "clipboard",
  },
  {
    title: "Respite & short stays",
    body: "Planned or emergency short-term stays that give family carers a well-earned rest, with the same standard of care.",
    icon: "calendar",
  },
  {
    title: "Companionship & wellbeing",
    body: "A full programme of activities, outings and one-to-one time that keeps body, mind and spirit active.",
    icon: "smile",
  },
  {
    title: "Nutritious home cooking",
    body: "Freshly prepared meals, balanced for health and tailored to dietary needs, preferences and cultural tastes.",
    icon: "utensils",
  },
  {
    title: "Coordinated healthcare",
    body: "We work closely with GPs, district nurses and specialists so medical needs are met promptly and properly.",
    icon: "stethoscope",
  },
];

export const facilities = [
  { title: "En-suite bedrooms", body: "23 private rooms residents are encouraged to make their own.", icon: "bed" },
  { title: "Landscaped gardens", body: "Accessible, secure outdoor space to enjoy the fresh air safely.", icon: "trees" },
  { title: "Homely lounges", body: "Comfortable shared spaces for company, television and quiet time.", icon: "sofa" },
  { title: "Dining room", body: "A sociable setting for freshly cooked meals together.", icon: "utensils" },
  { title: "Activity spaces", body: "Room for crafts, music, exercise and visiting entertainers.", icon: "palette" },
  { title: "Quiet & visiting areas", body: "Private corners for families to spend unhurried time together.", icon: "coffee" },
];

export const team = [
  {
    name: "Registered Manager",
    role: "Experienced & retained through the transition",
    bio: "Our long-standing registered manager continues to lead the home — the steady hand that keeps day-to-day care consistent and personal.",
  },
  {
    name: "Senior Care Team",
    role: "Care leads & seniors",
    bio: "Experienced seniors supervise each shift, mentor newer colleagues and act as the first point of contact for families.",
  },
  {
    name: "Care Practitioners",
    role: "The heart of daily life",
    bio: "Kind, capable carers who know every resident by name, their story and exactly how they like their tea.",
  },
  {
    name: "Hospitality & Wellbeing",
    role: "Catering, housekeeping & activities",
    bio: "The team behind freshly cooked meals, a spotless home and a calendar full of things to look forward to.",
  },
];

// The Viora Care ownership & investment strategy.
export const owners = [
  { name: "Pravar Saxena", role: "Beneficial owner" },
  { name: "Nishant Yadav", role: "Beneficial owner" },
  { name: "Anshul Srivastav", role: "Beneficial owner" },
];

export const strategy = [
  {
    title: "Invest in the home",
    body: "Thoughtful, ongoing investment in the building, bedrooms and communal spaces — improving comfort without losing the homely character residents love.",
    icon: "wrench",
  },
  {
    title: "Standardise great care",
    body: "Clear, consistent care processes across every shift, so the quality of care never depends on who is on duty.",
    icon: "list-checks",
  },
  {
    title: "Go digital, carefully",
    body: "A modern digital care management system that frees carers from paperwork and gives families clearer visibility — technology in service of people.",
    icon: "monitor",
  },
  {
    title: "A balanced community",
    body: "Growing toward a healthy mix of private and local-authority residents, keeping the home sustainable and open to our wider community.",
    icon: "scale",
  },
];

export const timeline = [
  {
    year: "2003",
    title: "Cavendish opens its doors",
    body: "Cavendish Care Home begins providing residential care on Stroud Road, Gloucester, building a reputation for warmth and reliability.",
  },
  {
    year: "2003–2024",
    title: "Two decades of trusted care",
    body: "Two decades of stable ownership, a loyal team and deep roots in the local community.",
  },
  {
    year: "2025",
    title: "Viora Care acquires Cavendish",
    body: "Viora Care Limited acquires the home, retaining the registered manager and committing to investment and continuity of care.",
  },
  {
    year: "Today",
    title: "Building on strong foundations",
    body: "Investing in infrastructure, standardising care and introducing digital tools — all while protecting what already makes Cavendish special.",
  },
];

export const faqs = [
  {
    q: "What type of care does Cavendish provide?",
    a: "We provide residential personal care for elderly adults — support with everyday living, companionship and wellbeing in a safe, homely setting. We are registered with the Care Quality Commission (CQC).",
  },
  {
    q: "Is Viora Care a new owner — will care change?",
    a: "Viora Care Limited acquired Cavendish in 2025 and has retained the experienced registered manager and care team. Our priority is continuity: we are investing in the home and standardising processes while protecting the relationships and routines residents value.",
  },
  {
    q: "Do you accept local-authority funded residents?",
    a: "Yes. We support both privately funded and local-authority funded residents, and we are growing toward a balanced mix. Our team can help you understand funding options and assessments.",
  },
  {
    q: "Can we visit before deciding?",
    a: "Absolutely — we warmly encourage it. Tours can be arranged seven days a week by appointment, so you can meet the team and get a real feel for the home.",
  },
  {
    q: "How do you keep families informed?",
    a: "We believe in open, honest communication. Alongside everyday conversation, our digital care management system helps us share clear, timely updates with families about their loved one's wellbeing.",
  },
  {
    q: "What are your visiting hours?",
    a: "Family and friends are welcome every day between 9am and 7pm. We can also accommodate other times by arrangement where it suits a resident's routine.",
  },
];

export const testimonials = [
  {
    quote:
      "The staff treat Mum like family. After two years here she's settled, happy and genuinely cared for. We finally have peace of mind.",
    author: "Daughter of a resident",
  },
  {
    quote:
      "What struck us was how long the team have worked here. They know Dad's little habits better than we do. That consistency means everything.",
    author: "Son of a resident",
  },
  {
    quote:
      "Warm, clean and welcoming from the first visit. The manager answered every question patiently and nothing has been too much trouble since.",
    author: "Niece of a resident",
  },
];
