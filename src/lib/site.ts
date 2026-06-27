// Central source of truth for Viora Care site content & contact details.

export const site = {
  name: "Viora Care",
  legalName: "Viora Care Limited",
  home: "Cavendish Care Home",
  tagline: "Specialist dementia care, the way it should feel — like home.",
  description:
    "Cavendish Care Home is a long-established residential dementia care home in Gloucester, rated 'Good' by the CQC. We provide warm, person-centred residential, respite and day care for older people living with dementia. Operated by Viora Care Limited.",
  beds: 23,
  establishedYear: 2003,
  heritageYears: 30,
  cqcRating: "Good",
  careType: "Specialist residential dementia care",
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
  { value: 30, suffix: "+ yrs", label: "Caring for Gloucester" },
  { value: 24, suffix: "/7", label: "Senior care on site" },
  { value: 8.3, suffix: " yrs", label: "Average staff tenure" },
];

export const values = [
  {
    title: "Dignity first",
    body: "Everyone living with dementia is met with respect, privacy and choice. We care for the person, never just the diagnosis.",
    icon: "heart",
  },
  {
    title: "Genuinely homely",
    body: "A small, warm, dementia-friendly home where familiar routines, relationships and the comforts of home are protected.",
    icon: "home",
  },
  {
    title: "Skilled in dementia",
    body: "An experienced, long-serving team — average tenure 8.3 years — trained in dementia care and minimal reliance on agency staff.",
    icon: "users",
  },
  {
    title: "Rated 'Good' by the CQC",
    body: "Independently rated 'Good' in all areas, with clear care processes and open, family-friendly communication.",
    icon: "shield",
  },
];

export const careServices = [
  {
    title: "Residential dementia care",
    body: "Round-the-clock residential care for older people living with dementia — support with daily living, delivered with patience, warmth and deep familiarity.",
    icon: "hand-heart",
  },
  {
    title: "Person-centred dementia plans",
    body: "Care built around each person's life story, preferences and stage of dementia, reviewed regularly with families.",
    icon: "clipboard",
  },
  {
    title: "Respite & short stays",
    body: "Planned or emergency short-term stays that give family carers a well-earned rest, with the same specialist standard of care.",
    icon: "calendar",
  },
  {
    title: "Dementia day care",
    body: "Daytime support, activity and companionship at Cavendish — a friendly, familiar place to spend the day while carers take a break.",
    icon: "smile",
  },
  {
    title: "Nutritious home cooking",
    body: "Freshly prepared meals with gentle, dementia-friendly support at mealtimes, tailored to dietary needs and tastes.",
    icon: "utensils",
  },
  {
    title: "Coordinated healthcare",
    body: "We work closely with GPs, district nurses and dementia specialists so medical needs are met promptly and properly.",
    icon: "stethoscope",
  },
];

export const facilities = [
  { title: "Private bedrooms", body: "Comfortable rooms residents are encouraged to fill with familiar, personal belongings.", icon: "bed" },
  { title: "Secure gardens", body: "Accessible, safely enclosed outdoor space to enjoy the fresh air with peace of mind.", icon: "trees" },
  { title: "Homely lounges", body: "Calm, easy-to-navigate shared spaces for company, music and quiet time.", icon: "sofa" },
  { title: "Dining room", body: "A sociable setting for freshly cooked meals with gentle support at hand.", icon: "utensils" },
  { title: "Meaningful activities", body: "Reminiscence, music, crafts and gentle exercise designed for people living with dementia.", icon: "palette" },
  { title: "Quiet & visiting areas", body: "Private corners for families to spend unhurried time together.", icon: "coffee" },
];

export const team = [
  {
    name: "Home Manager",
    role: "Full-time, experienced & retained",
    bio: "A full-time, experienced home manager leads Cavendish day to day — the steady hand who keeps dementia care consistent, personal and safe. Families are warmly invited to arrange a time to meet her.",
  },
  {
    name: "Senior Care Team",
    role: "24-hour senior cover",
    bio: "Senior care staff are on site around the clock, supervising every shift, supporting colleagues and acting as the first point of contact for families.",
  },
  {
    name: "Care Practitioners",
    role: "The heart of daily life",
    bio: "Kind, dementia-trained carers — many with years of service — who know every resident by name, their life story and exactly how they like their tea.",
  },
  {
    name: "Hospitality & Wellbeing",
    role: "Catering, housekeeping & activities",
    bio: "The team behind freshly cooked meals, a clean and homely environment and a calendar of meaningful, dementia-friendly activities.",
  },
];

// Real characteristics of the Cavendish staffing model.
export const staffingFacts = [
  "Full-time, experienced home manager",
  "Senior care staff on site 24 hours a day",
  "Experienced team, many with years of service",
  "Minimal reliance on agency staff — familiar faces every day",
  "Ongoing dementia training, fully funded and paid",
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
    year: "30+ years ago",
    title: "Cavendish begins caring for Gloucester",
    body: "Cavendish opens on Stroud Road, beginning more than three decades of caring for older people in the local community.",
  },
  {
    year: "Over the years",
    title: "Evolving with the community's needs",
    body: "Cavendish grows from a residential care home to a nursing home and then to a specialist dementia care home — always shaped around the people it serves.",
  },
  {
    year: "Rated 'Good'",
    title: "A trusted reputation",
    body: "Independently rated 'Good' by the Care Quality Commission in all areas, with a wonderful reputation among residents, families and the local community.",
  },
  {
    year: "2025",
    title: "Viora Care acquires Cavendish",
    body: "Viora Care Limited acquires the home, retaining the experienced manager and team and committing to investment and continuity of care.",
  },
];

export const faqs = [
  {
    q: "What type of care does Cavendish provide?",
    a: "Cavendish is a specialist dementia care home for older people (over 65). We provide residential dementia care, respite and short stays, and dementia day care — all in a safe, homely setting. We are registered with the Care Quality Commission (CQC) and rated 'Good' in all areas.",
  },
  {
    q: "Do you offer respite or day care as well as permanent stays?",
    a: "Yes. Alongside permanent residential dementia care, we offer planned and emergency respite stays, and a dementia day care service for people who live at home but benefit from daytime support, activity and company.",
  },
  {
    q: "Is Viora Care a new owner — will care change?",
    a: "Viora Care Limited is acquiring Cavendish and will retain the experienced manager and care team. Our priority is continuity: we are investing in the home and standardising processes while protecting the relationships and routines residents value.",
  },
  {
    q: "Do you accept local-authority funded residents?",
    a: "Yes. We support both privately funded and local-authority funded residents, and we are growing toward a balanced mix. Our team can help you understand funding options and assessments.",
  },
  {
    q: "Can we visit and meet the manager before deciding?",
    a: "Absolutely — we warmly encourage it. Visits can be arranged seven days a week; just let us know a convenient time so the home manager can make sure she's available to meet you.",
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
