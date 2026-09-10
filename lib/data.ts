// Static data for Everon website — replace with CMS data when ready

export const siteConfig = {
  name: "EVERON",
  tagline: "Building Tomorrow's Dhaka",
  description: "Premium real estate developer crafting iconic living spaces in Bangladesh since 2005.",
  phone: "+880 1234-567890",
  whatsapp: "https://wa.me/8801234567890",
  email: "info@everon.com.bd",
  address: "House 42, Road 11, Banani, Dhaka 1213, Bangladesh",
};

export interface Project {
  id: string;
  slug: string;
  name: string;
  type: "Residential" | "Commercial" | "Land Development";
  status: "Ongoing" | "Upcoming" | "Completed";
  location: string;
  description: string;
  image: string;
  stats: {
    landSize: string;
    towers: number;
    units: number;
    floors: number;
    possessionDate: string;
  };
  amenities: string[];
  coordinates: { lat: number; lng: number };
}

export interface FloorPlan {
  name: string;
  type: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  features: string[];
}

export interface Specification {
  category: string;
  items: { label: string; value: string }[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: "Exterior" | "Interior" | "Amenities" | "Aerial";
}

export interface Landmark {
  name: string;
  distance: string;
  type: "education" | "health" | "shopping" | "transport" | "leisure" | "dining";
}

export interface ProjectExtras {
  floorPlans: FloorPlan[];
  specifications: Specification[];
  gallery: GalleryImage[];
  landmarks: Landmark[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "everon-heights",
    name: "Everon Heights",
    type: "Residential",
    status: "Ongoing",
    location: "Gulshan, Dhaka",
    description:
      "A 22-storey landmark tower rising above Gulshan Avenue, offering panoramic views and world-class amenities for discerning families.",
    image: "/images/project-1.jpg",
    stats: {
      landSize: "18 Katha",
      towers: 1,
      units: 44,
      floors: 22,
      possessionDate: "December 2027",
    },
    amenities: [
      "Infinity Pool",
      "Sky Lounge",
      "Gymnasium",
      "Children's Play Area",
      "24/7 Security",
      "Underground Parking",
      "Landscaped Gardens",
      "Smart Home Ready",
    ],
    coordinates: { lat: 23.7925, lng: 90.4078 },
  },
  {
    id: "2",
    slug: "everon-gardens",
    name: "Everon Gardens",
    type: "Residential",
    status: "Upcoming",
    location: "Banani, Dhaka",
    description:
      "An exclusive garden-centric development where nature meets architecture. 60% open space with cascading green terraces.",
    image: "/images/project-2.jpg",
    stats: {
      landSize: "25 Katha",
      towers: 2,
      units: 80,
      floors: 18,
      possessionDate: "March 2029",
    },
    amenities: [
      "Rooftop Garden",
      "Swimming Pool",
      "Clubhouse",
      "Jogging Track",
      "Multi-purpose Hall",
      "EV Charging Station",
      "Rain Water Harvesting",
      "Solar Panels",
    ],
    coordinates: { lat: 23.7937, lng: 90.4023 },
  },
  {
    id: "3",
    slug: "everon-commerce-tower",
    name: "Everon Commerce Tower",
    type: "Commercial",
    status: "Ongoing",
    location: "Motijheel, Dhaka",
    description:
      "A Grade-A commercial tower in the heart of Dhaka's financial district, designed for the modern enterprise.",
    image: "/images/project-3.jpg",
    stats: {
      landSize: "12 Katha",
      towers: 1,
      units: 120,
      floors: 28,
      possessionDate: "June 2028",
    },
    amenities: [
      "High-Speed Elevators",
      "Central Air Conditioning",
      "Food Court",
      "Conference Center",
      "Helipad Ready",
      "Backup Power",
      "Fire Safety System",
      "Ample Parking",
    ],
    coordinates: { lat: 23.7283, lng: 90.4192 },
  },
  {
    id: "4",
    slug: "everon-lakeside",
    name: "Everon Lakeside",
    type: "Residential",
    status: "Completed",
    location: "Uttara, Dhaka",
    description:
      "A serene lakeside living experience, already home to 120 families enjoying uninterrupted nature views.",
    image: "/images/project-4.jpg",
    stats: {
      landSize: "30 Katha",
      towers: 3,
      units: 120,
      floors: 15,
      possessionDate: "Handed Over",
    },
    amenities: [
      "Lake View",
      "Swimming Pool",
      "Tennis Court",
      "Community Center",
      "Prayer Room",
      "Guest Suite",
      "Intercom System",
      "CCTV Surveillance",
    ],
    coordinates: { lat: 23.8759, lng: 90.3795 },
  },
  {
    id: "5",
    slug: "everon-prime-plaza",
    name: "Everon Prime Plaza",
    type: "Commercial",
    status: "Upcoming",
    location: "Dhanmondi, Dhaka",
    description:
      "A boutique commercial hub designed for creative enterprises, featuring flexible floor plates and collaborative spaces.",
    image: "/images/project-5.jpg",
    stats: {
      landSize: "10 Katha",
      towers: 1,
      units: 60,
      floors: 16,
      possessionDate: "September 2029",
    },
    amenities: [
      "Co-working Spaces",
      "Rooftop Café",
      "Smart Parking",
      "High-Speed Internet",
      "Meeting Rooms",
      "Retail Ground Floor",
      "Green Building Certified",
      "Wheelchair Access",
    ],
    coordinates: { lat: 23.7461, lng: 90.3742 },
  },
  {
    id: "6",
    slug: "everon-chittagong-residences",
    name: "Everon Chittagong Residences",
    type: "Residential",
    status: "Ongoing",
    location: "Agrabad, Chittagong",
    description:
      "Everon's first Chittagong project — hillside living with ocean breezes, just minutes from the commercial center.",
    image: "/images/project-6.jpg",
    stats: {
      landSize: "20 Katha",
      towers: 2,
      units: 64,
      floors: 20,
      possessionDate: "December 2028",
    },
    amenities: [
      "Hill View",
      "Infinity Pool",
      "Spa & Sauna",
      "Children's Zone",
      "Library",
      "BBQ Area",
      "Generator Backup",
      "Guard Room",
    ],
    coordinates: { lat: 22.3253, lng: 91.8106 },
  },
  {
    id: "7",
    slug: "everon-riverbank-enclave",
    name: "Everon Riverbank Enclave",
    type: "Land Development",
    status: "Upcoming",
    location: "Sector 19, Purbachal, Dhaka",
    description:
      "A 150-Katha master-planned riverside estate featuring gated luxury villa plots, dedicated green boulevards, and private marina access.",
    image: "/images/about-hero.jpg",
    stats: {
      landSize: "150 Katha",
      towers: 0,
      units: 48,
      floors: 3,
      possessionDate: "March 2030",
    },
    amenities: [
      "Landscaped Gardens",
      "Jogging Track",
      "Clubhouse",
      "24/7 Security",
      "Rain Water Harvesting",
      "Solar Panels",
      "Underground Parking",
      "Smart Home Ready",
    ],
    coordinates: { lat: 23.8342, lng: 90.5211 },
  },
];

export const stats = [
  { value: 19, suffix: "+", label: "Years of Architectural Practice" },
  { value: 2.5, suffix: "M", label: "Sq Ft Masterplanned Portfolio" },
  { value: 850, suffix: "+", label: "Private Residences Handed Over" },
  { value: 12, suffix: "", label: "Active Landmark Developments" },
];

export const craftSteps = [
  {
    title: "Premium Materials",
    description:
      "Every surface, every joint, every finish — sourced from the world's finest suppliers and tested to exceed international standards.",
    image: "/images/craft-materials.jpg",
  },
  {
    title: "Inspired Design",
    description:
      "Our architects blend contemporary vision with timeless elegance, creating spaces that feel both daring and effortlessly livable.",
    image: "/images/craft-design.jpg",
  },
  {
    title: "Precision Construction",
    description:
      "German engineering discipline meets Bangladeshi craftsmanship. Every beam, every weld, inspected at 15 quality checkpoints.",
    image: "/images/craft-construction.jpg",
  },
  {
    title: "Lifelong Service",
    description:
      "Ownership is just the beginning. Our dedicated after-sales team ensures every Everon home stays perfect, decade after decade.",
    image: "/images/craft-service.jpg",
  },
];

export const testimonials = [
  {
    name: "Arif Rahman",
    role: "Proprietor & Penthouse Resident",
    quote:
      "Living at Everon Lakeside has redefined our sense of urban sanctuary in Dhaka. The acoustic stillness, the generous 3.2-meter ceiling clearances, and the seamless transition to the lake are architectural masterstrokes rarely experienced in South Asia.",
    image: "/images/testimonial-1.jpg",
  },
  {
    name: "Fatima Khatun",
    role: "Generational Portfolio Investor",
    quote:
      "In luxury development, integrity is measured in engineering rigor and handover precision. Everon is the rare firm whose physical craftsmanship surpasses their renderings. Every acquisition has been a triumph of generational capital preservation.",
    image: "/images/testimonial-2.jpg",
  },
  {
    name: "Dr. Kamal Hossain",
    role: "Resident, Everon Gardens",
    quote:
      "Everon Gardens balances lush biophilic landscaping with profound spatial discipline. In the dense heart of Banani, our home feels like a private canopy retreat flooded with natural daylight and quiet dignity.",
    image: "/images/testimonial-3.jpg",
  },
];

export const newsArticles = [
  {
    id: "1",
    title: "Everon Launches Chittagong's Most Anticipated Residential Project",
    excerpt:
      "The Everon Chittagong Residences brings the developer's signature quality to the port city for the first time.",
    date: "August 15, 2026",
    image: "/images/news-1.jpg",
    slug: "everon-chittagong-launch",
  },
  {
    id: "2",
    title: "Everon Wins 'Best Residential Developer' at BD Property Awards 2026",
    excerpt:
      "The award recognizes Everon's commitment to design innovation and construction excellence across its portfolio.",
    date: "July 28, 2026",
    image: "/images/news-2.jpg",
    slug: "bd-property-awards-2026",
  },
  {
    id: "3",
    title: "Sustainability at Scale: Everon's Green Building Initiative",
    excerpt:
      "All new Everon projects will incorporate solar panels, rainwater harvesting, and EV-ready infrastructure as standard.",
    date: "June 10, 2026",
    image: "/images/news-3.jpg",
    slug: "green-building-initiative",
  },
];

export const milestones = [
  { year: "2005", title: "Foundation", description: "Everon was founded with a vision to redefine premium living in Dhaka." },
  { year: "2008", title: "First Project", description: "Everon Residence I delivered in Banani — our first 50 families." },
  { year: "2012", title: "100th Unit", description: "Crossed 100 residential units delivered with zero disputes." },
  { year: "2016", title: "Commercial Entry", description: "Launched our first commercial project in Motijheel." },
  { year: "2020", title: "Green Pioneer", description: "First Bangladeshi developer to achieve green building certification." },
  { year: "2024", title: "Chittagong Expansion", description: "Expanded beyond Dhaka with our flagship Chittagong project." },
  { year: "2026", title: "Award-Winning", description: "Won 'Best Residential Developer' at BD Property Awards." },
];

export const leadership = [
  {
    name: "Mohammad Ashraf",
    title: "Chairman & Founder",
    bio: "A civil engineer by training and visionary by nature, Mohammad Ashraf founded Everon with the belief that every family deserves a home of distinction.",
    image: "/images/leader-1.jpg",
  },
  {
    name: "Sarah Ashraf",
    title: "Managing Director",
    bio: "With an MBA from London Business School, Sarah brings global best practices in real estate management to Everon's operations.",
    image: "/images/leader-2.jpg",
  },
  {
    name: "Eng. Rashid Khan",
    title: "Chief Technical Officer",
    bio: "30 years of structural engineering experience across Southeast Asia. Rashid ensures every Everon building stands the test of time.",
    image: "/images/leader-3.jpg",
  },
  {
    name: "Nadia Islam",
    title: "Head of Design",
    bio: "An award-winning architect, Nadia leads the creative vision behind Everon's distinctive aesthetic — modern, warm, timeless.",
    image: "/images/leader-4.jpg",
  },
];

// Extended data for property detail pages
export const projectExtras: Record<string, ProjectExtras> = {
  "everon-heights": {
    floorPlans: [
      { name: "Type A — Executive Suite", type: "3 Bed + Study", size: "3,200 sq ft", bedrooms: 3, bathrooms: 3, price: "BDT 4.5 Cr", features: ["Corner unit", "Panoramic windows", "Walk-in wardrobe", "Servant quarter"] },
      { name: "Type B — Presidential", type: "4 Bed + Family", size: "4,600 sq ft", bedrooms: 4, bathrooms: 4, price: "BDT 6.2 Cr", features: ["Dual master suites", "Private terrace", "Home theatre room", "Servant quarter"] },
      { name: "Type P — Sky Villa Penthouse", type: "5 Bed Duplex", size: "6,800 sq ft", bedrooms: 5, bathrooms: 6, price: "On Request", features: ["Private rooftop pool", "360° sky terrace", "Private elevator", "Wine cellar", "Smart home integrated"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Mat foundation with seismic zone IV compliance" }, { label: "Superstructure", value: "RCC frame with Grade 60 steel reinforcement" }, { label: "Earthquake Resistance", value: "Designed for Seismic Zone IV (BNBC 2020)" }, { label: "Pile Depth", value: "80–90 ft bored cast-in-situ piles" }] },
      { category: "Façade & Envelope", items: [{ label: "Glass", value: "Double-glazed Low-E acoustic glass (STC 38)" }, { label: "Cladding", value: "Imported aluminum composite panel (ACP)" }, { label: "Waterproofing", value: "Sika membrane system with 15-year warranty" }] },
      { category: "Interior Finishes", items: [{ label: "Living & Dining", value: "Italian Statuario marble flooring, 600×1200mm" }, { label: "Bedrooms", value: "European engineered oak timber flooring" }, { label: "Kitchen", value: "Imported quartz countertop, soft-close cabinetry" }, { label: "Bathrooms", value: "Grohe / Kohler fittings, rain shower, underfloor heating" }] },
      { category: "Mechanical & Electrical", items: [{ label: "Elevators", value: "2× OTIS Gen360 high-speed passenger + 1 service" }, { label: "Air Conditioning", value: "VRF central system with individual zone control" }, { label: "Electrical", value: "Concealed copper wiring, MCB panel, surge protection" }, { label: "Generator", value: "100% backup Cummins diesel genset" }] },
    ],
    gallery: [
      { src: "/images/project-1.jpg", alt: "Everon Heights exterior at golden hour", category: "Exterior" },
      { src: "/images/craft-design.jpg", alt: "Contemporary living room interior", category: "Interior" },
      { src: "/images/craft-materials.jpg", alt: "Premium bathroom finishes", category: "Interior" },
      { src: "/images/craft-service.jpg", alt: "Concierge and lobby area", category: "Amenities" },
      { src: "/images/craft-construction.jpg", alt: "Construction precision detail", category: "Exterior" },
      { src: "/images/about-hero.jpg", alt: "Aerial view of Gulshan area", category: "Aerial" },
    ],
    landmarks: [
      { name: "Gulshan Lake Park", distance: "3 min walk", type: "leisure" },
      { name: "American International School", distance: "5 min drive", type: "education" },
      { name: "United Hospital", distance: "8 min drive", type: "health" },
      { name: "Jamuna Future Park", distance: "15 min drive", type: "shopping" },
      { name: "Hazrat Shahjalal Airport", distance: "25 min drive", type: "transport" },
      { name: "The Westin Dhaka", distance: "4 min drive", type: "dining" },
    ],
  },
  "everon-gardens": {
    floorPlans: [
      { name: "Type A — Garden Suite", type: "3 Bed", size: "2,800 sq ft", bedrooms: 3, bathrooms: 3, price: "BDT 3.8 Cr", features: ["Garden-facing balcony", "Open kitchen", "Servant quarter"] },
      { name: "Type B — Terrace Residence", type: "4 Bed", size: "3,900 sq ft", bedrooms: 4, bathrooms: 4, price: "BDT 5.1 Cr", features: ["Private terrace garden", "Home office", "Dual master suite"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Mat foundation with seismic zone IV compliance" }, { label: "Superstructure", value: "RCC frame with Grade 60 steel" }] },
      { category: "Green Features", items: [{ label: "Solar", value: "120kW rooftop solar array for common areas" }, { label: "Water", value: "Rainwater harvesting & greywater recycling" }, { label: "EV", value: "Level 2 charging stations in every parking bay" }] },
      { category: "Interior Finishes", items: [{ label: "Flooring", value: "Italian porcelain tile, 800×800mm" }, { label: "Kitchen", value: "German modular kitchen with quartz countertop" }, { label: "Bathrooms", value: "Roca / Grohe fittings, frameless glass shower" }] },
    ],
    gallery: [
      { src: "/images/project-2.jpg", alt: "Everon Gardens green exterior", category: "Exterior" },
      { src: "/images/craft-design.jpg", alt: "Living area with garden views", category: "Interior" },
      { src: "/images/craft-materials.jpg", alt: "Kitchen and dining area", category: "Interior" },
    ],
    landmarks: [
      { name: "Banani Lake", distance: "5 min walk", type: "leisure" },
      { name: "Scholastica School", distance: "7 min drive", type: "education" },
      { name: "Square Hospital", distance: "10 min drive", type: "health" },
      { name: "Banani Supermarket", distance: "3 min walk", type: "shopping" },
    ],
  },
  "everon-commerce-tower": {
    floorPlans: [
      { name: "Studio Office", type: "Office Space", size: "800 sq ft", bedrooms: 0, bathrooms: 1, price: "BDT 1.2 Cr", features: ["Open floor plan", "Floor-to-ceiling glass", "Dedicated AC zone"] },
      { name: "Executive Floor", type: "Full Floor Office", size: "4,200 sq ft", bedrooms: 0, bathrooms: 3, price: "BDT 5.8 Cr", features: ["Private reception", "Server room ready", "Pantry", "Executive washroom"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Pile foundation with mat cap, seismic IV" }, { label: "Floor Load", value: "4 kN/m² live load capacity" }] },
      { category: "Building Systems", items: [{ label: "Elevators", value: "4× Schindler 5500 destination-dispatch" }, { label: "HVAC", value: "Centralized chiller plant with floor-level AHU" }, { label: "Fire Safety", value: "Addressable fire alarm, wet riser, sprinkler system" }] },
    ],
    gallery: [
      { src: "/images/project-3.jpg", alt: "Commerce Tower exterior night view", category: "Exterior" },
      { src: "/images/craft-construction.jpg", alt: "Steel and glass facade detail", category: "Exterior" },
    ],
    landmarks: [
      { name: "Bangladesh Bank", distance: "5 min walk", type: "transport" },
      { name: "Dhaka Stock Exchange", distance: "3 min walk", type: "transport" },
      { name: "Sonargaon Hotel", distance: "8 min drive", type: "dining" },
    ],
  },
  "everon-lakeside": {
    floorPlans: [
      { name: "Type A — Lake View", type: "3 Bed", size: "2,400 sq ft", bedrooms: 3, bathrooms: 2, price: "Sold Out", features: ["Direct lake view", "Open balcony", "Servant quarter"] },
      { name: "Type B — Premium Corner", type: "4 Bed", size: "3,600 sq ft", bedrooms: 4, bathrooms: 3, price: "Sold Out", features: ["Corner unit", "Wraparound balcony", "Home office", "Lake view"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Piled raft foundation" }, { label: "Superstructure", value: "RCC frame with Grade 500 steel" }] },
      { category: "Interior Finishes", items: [{ label: "Flooring", value: "Homogeneous tile, 600×600mm" }, { label: "Bathrooms", value: "American Standard / RAK fittings" }] },
    ],
    gallery: [
      { src: "/images/project-4.jpg", alt: "Lakeside towers and water reflection", category: "Exterior" },
      { src: "/images/craft-service.jpg", alt: "Community amenities area", category: "Amenities" },
    ],
    landmarks: [
      { name: "Uttara Lake", distance: "2 min walk", type: "leisure" },
      { name: "Uttara High School", distance: "5 min drive", type: "education" },
      { name: "Hazrat Shahjalal Airport", distance: "10 min drive", type: "transport" },
    ],
  },
  "everon-prime-plaza": {
    floorPlans: [
      { name: "Creative Studio", type: "Office Space", size: "650 sq ft", bedrooms: 0, bathrooms: 1, price: "BDT 85 Lac", features: ["Flexible layout", "Exposed ceiling option", "Shared pantry access"] },
      { name: "Corporate Suite", type: "Premium Office", size: "2,100 sq ft", bedrooms: 0, bathrooms: 2, price: "BDT 2.6 Cr", features: ["Private reception", "Meeting room", "Kitchenette", "Executive washroom"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Bored pile foundation" }, { label: "Floor Load", value: "3.5 kN/m² live load" }] },
      { category: "Green Features", items: [{ label: "Certification", value: "LEED Silver targeted" }, { label: "Energy", value: "High-efficiency VRF HVAC + solar assist" }] },
    ],
    gallery: [
      { src: "/images/project-5.jpg", alt: "Prime Plaza exterior render", category: "Exterior" },
    ],
    landmarks: [
      { name: "Dhanmondi Lake", distance: "4 min walk", type: "leisure" },
      { name: "Star Kabab & Restaurant", distance: "2 min walk", type: "dining" },
      { name: "Labaid Hospital", distance: "6 min drive", type: "health" },
    ],
  },
  "everon-chittagong-residences": {
    floorPlans: [
      { name: "Type A — Ocean Breeze", type: "3 Bed + Maid", size: "2,600 sq ft", bedrooms: 3, bathrooms: 3, price: "BDT 3.2 Cr", features: ["Hill & ocean views", "Cross ventilation", "Servant quarter", "Smart home ready"] },
      { name: "Type B — Hillside Executive", type: "4 Bed", size: "3,800 sq ft", bedrooms: 4, bathrooms: 4, price: "BDT 4.8 Cr", features: ["Corner position", "Private balcony garden", "Home theatre", "Dual master suite"] },
      { name: "Type P — Summit Penthouse", type: "5 Bed Duplex", size: "5,400 sq ft", bedrooms: 5, bathrooms: 5, price: "On Request", features: ["Private rooftop terrace", "Plunge pool", "360° panorama", "Private lift"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Deep bored piles into bedrock" }, { label: "Superstructure", value: "RCC frame, Grade 60 steel, seismic IV" }] },
      { category: "Façade & Envelope", items: [{ label: "Glass", value: "Laminated Low-E glass with UV protection" }, { label: "Cladding", value: "Natural stone cladding on podium levels" }] },
      { category: "Interior Finishes", items: [{ label: "Living", value: "Spanish porcelain tile, 800×1600mm" }, { label: "Bathrooms", value: "Kohler full suite, rain shower, heated towel rail" }] },
    ],
    gallery: [
      { src: "/images/project-6.jpg", alt: "Twin towers against Chittagong hills", category: "Exterior" },
      { src: "/images/craft-design.jpg", alt: "Master suite with ocean view", category: "Interior" },
      { src: "/images/craft-materials.jpg", alt: "Spa and wellness area", category: "Amenities" },
      { src: "/images/about-hero.jpg", alt: "Aerial view of Chittagong coastline", category: "Aerial" },
    ],
    landmarks: [
      { name: "Patenga Beach", distance: "15 min drive", type: "leisure" },
      { name: "Chittagong Grammar School", distance: "8 min drive", type: "education" },
      { name: "Chittagong Medical College Hospital", distance: "12 min drive", type: "health" },
      { name: "Shah Amanat International Airport", distance: "20 min drive", type: "transport" },
      { name: "Agrabad Shopping Complex", distance: "3 min drive", type: "shopping" },
    ],
  },
  "everon-riverbank-enclave": {
    floorPlans: [
      { name: "Plot Category Alpha", type: "5 Katha Villa Plot", size: "3,600 sq ft footprint", bedrooms: 4, bathrooms: 5, price: "BDT 2.8 Cr", features: ["Riverside boulevard access", "Underground utility connections", "Private green buffer"] },
      { name: "Plot Category Grandeur", type: "10 Katha Estate Plot", size: "7,200 sq ft footprint", bedrooms: 6, bathrooms: 7, price: "BDT 5.2 Cr", features: ["Direct marina access", "Corner parcel", "Bespoke architectural guidelines"] },
    ],
    specifications: [
      { category: "Site & Infrastructure", items: [{ label: "Road Network", value: "60 ft main boulevard + 30 ft internal paved lanes" }, { label: "Drainage", value: "Sub-surface stormwater drainage with retention pond" }, { label: "Power & Utilities", value: "Underground electrical grid & gas connections" }] },
      { category: "Eco-Masterplan", items: [{ label: "Green Ratio", value: "45% dedicated to public parks, tree lines & water body" }, { label: "Security", value: "Perimeter boundary wall with biometric access gate" }] },
    ],
    gallery: [
      { src: "/images/about-hero.jpg", alt: "Riverbank enclave aerial masterplan", category: "Aerial" },
      { src: "/images/project-2.jpg", alt: "Green community landscaping", category: "Exterior" },
    ],
    landmarks: [
      { name: "Purbachal 300 Feet Expressway", distance: "4 min drive", type: "transport" },
      { name: "Bangabandhu Tri-Centennial Park", distance: "6 min drive", type: "leisure" },
      { name: "International Convention City", distance: "12 min drive", type: "leisure" },
      { name: "American International University", distance: "15 min drive", type: "education" },
    ],
  },
};
