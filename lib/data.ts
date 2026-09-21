// Static data for Everon website — replace with CMS data when ready

export const siteConfig = {
  name: "EVERON",
  tagline: "Real Estate, Planned Right",
  description:
    "Everon is a newly launched real estate developer in Bangladesh, currently planning its first residential and commercial developments in Dhaka and Chittagong.",
  phone: "+880 1350-510744",
  whatsapp: "https://wa.me/8801350510744",
  email: "info@everon.com.bd",
  address: "House 42, Road 11, Banani, Dhaka 1213, Bangladesh",
};

export interface Project {
  id: string;
  slug: string;
  name: string;
  type: "Residential" | "Commercial" | "Land Development";
  status: "Planning";
  location: string;
  description: string;
  stats: {
    landSize: string;
    towers: number;
    units: number;
    floors: number;
    targetCompletion: string;
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

export interface Landmark {
  name: string;
  distance: string;
  type: "education" | "health" | "shopping" | "transport" | "leisure" | "dining";
}

export interface ProjectExtras {
  floorPlans: FloorPlan[];
  specifications: Specification[];
  landmarks: Landmark[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "everon-heights",
    name: "Everon Heights",
    type: "Residential",
    status: "Planning",
    location: "Gulshan, Dhaka",
    description:
      "A planned 22-storey residential tower on Gulshan Avenue, designed around natural light and shared amenity spaces for families.",
    stats: {
      landSize: "18 Katha",
      towers: 1,
      units: 44,
      floors: 22,
      targetCompletion: "2028",
    },
    amenities: [
      "Swimming Pool",
      "Rooftop Lounge",
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
    status: "Planning",
    location: "Banani, Dhaka",
    description:
      "A planned garden-centric development in Banani, designed to keep 60% of the site as open, landscaped green space.",
    stats: {
      landSize: "25 Katha",
      towers: 2,
      units: 80,
      floors: 18,
      targetCompletion: "2029",
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
    status: "Planning",
    location: "Motijheel, Dhaka",
    description:
      "A planned commercial tower in Dhaka's financial district, designed for modern office and retail tenants.",
    stats: {
      landSize: "12 Katha",
      towers: 1,
      units: 120,
      floors: 28,
      targetCompletion: "2029",
    },
    amenities: [
      "High-Speed Elevators",
      "Central Air Conditioning",
      "Food Court",
      "Conference Center",
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
    status: "Planning",
    location: "Uttara, Dhaka",
    description:
      "A planned lakeside residential community in Uttara, designed around water views and shared green space.",
    stats: {
      landSize: "30 Katha",
      towers: 3,
      units: 120,
      floors: 15,
      targetCompletion: "2030",
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
    status: "Planning",
    location: "Dhanmondi, Dhaka",
    description:
      "A planned boutique commercial building for small businesses and studios, with flexible floor plates.",
    stats: {
      landSize: "10 Katha",
      towers: 1,
      units: 60,
      floors: 16,
      targetCompletion: "2029",
    },
    amenities: [
      "Co-working Spaces",
      "Rooftop Café",
      "Smart Parking",
      "High-Speed Internet",
      "Meeting Rooms",
      "Retail Ground Floor",
      "Wheelchair Access",
    ],
    coordinates: { lat: 23.7461, lng: 90.3742 },
  },
  {
    id: "6",
    slug: "everon-chittagong-residences",
    name: "Everon Chittagong Residences",
    type: "Residential",
    status: "Planning",
    location: "Agrabad, Chittagong",
    description:
      "Everon's first planned project outside Dhaka — hillside residences a short distance from Chittagong's commercial center.",
    stats: {
      landSize: "20 Katha",
      towers: 2,
      units: 64,
      floors: 20,
      targetCompletion: "2029",
    },
    amenities: [
      "Hill View",
      "Swimming Pool",
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
    status: "Planning",
    location: "Sector 19, Purbachal, Dhaka",
    description:
      "A planned master-plot development in Purbachal: serviced villa plots along a landscaped riverside boulevard.",
    stats: {
      landSize: "150 Katha",
      towers: 0,
      units: 48,
      floors: 3,
      targetCompletion: "2030",
    },
    amenities: [
      "Landscaped Gardens",
      "Jogging Track",
      "Clubhouse",
      "24/7 Security",
      "Rain Water Harvesting",
      "Underground Parking",
    ],
    coordinates: { lat: 23.8342, lng: 90.5211 },
  },
];

// Honest, data-derived summary of the current pipeline — not historical performance
export const pipelineStats = [
  { value: projects.length, suffix: "", label: "Projects in Planning" },
  {
    value: projects.reduce((sum, p) => sum + p.stats.units, 0),
    suffix: "+",
    label: "Planned Residences & Offices",
  },
  {
    value: projects.reduce((sum, p) => sum + parseInt(p.stats.landSize), 0),
    suffix: "+",
    label: "Katha of Land Identified",
  },
  { value: 2, suffix: "", label: "Cities: Dhaka & Chittagong" },
];

export const approachSteps = [
  {
    title: "Materials",
    description:
      "Every material — structural steel, glazing, finishes — is specified against international standards before it's approved for use.",
  },
  {
    title: "Design",
    description:
      "Our design partners plan for Bangladesh's climate and density first: cross-ventilation, daylight, and livable layouts over decoration.",
  },
  {
    title: "Construction",
    description:
      "Independent quality checks at each stage of construction, from foundation to handover, following BNBC 2020 seismic standards.",
  },
  {
    title: "After Handover",
    description:
      "A dedicated support team for owners after handover, so a purchase doesn't end at the keys.",
  },
];

// Extended data for property detail pages
export const projectExtras: Record<string, ProjectExtras> = {
  "everon-heights": {
    floorPlans: [
      { name: "Type A", type: "3 Bed + Study", size: "3,200 sq ft", bedrooms: 3, bathrooms: 3, price: "BDT 4.5 Cr", features: ["Corner unit", "Large windows", "Walk-in wardrobe", "Servant quarter"] },
      { name: "Type B", type: "4 Bed + Family", size: "4,600 sq ft", bedrooms: 4, bathrooms: 4, price: "BDT 6.2 Cr", features: ["Dual master suites", "Private terrace", "Servant quarter"] },
      { name: "Type P — Penthouse", type: "5 Bed Duplex", size: "6,800 sq ft", bedrooms: 5, bathrooms: 6, price: "On Request", features: ["Private rooftop terrace", "Private elevator", "Smart home wiring"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Mat foundation, seismic zone IV compliant" }, { label: "Superstructure", value: "RCC frame with Grade 60 steel reinforcement" }, { label: "Standard", value: "Designed to BNBC 2020 Seismic Zone IV" }] },
      { category: "Façade & Envelope", items: [{ label: "Glass", value: "Double-glazed Low-E glass" }, { label: "Waterproofing", value: "Membrane system, 15-year warranty target" }] },
      { category: "Interior Finishes", items: [{ label: "Living & Dining", value: "Porcelain tile flooring, 600×1200mm" }, { label: "Kitchen", value: "Quartz countertop, soft-close cabinetry" }, { label: "Bathrooms", value: "Branded fittings, rain shower" }] },
      { category: "Mechanical & Electrical", items: [{ label: "Elevators", value: "2 passenger + 1 service elevator" }, { label: "Air Conditioning", value: "VRF system with individual zone control" }, { label: "Generator", value: "100% backup diesel genset" }] },
    ],
    landmarks: [
      { name: "Gulshan Lake Park", distance: "3 min walk", type: "leisure" },
      { name: "American International School", distance: "5 min drive", type: "education" },
      { name: "United Hospital", distance: "8 min drive", type: "health" },
      { name: "Jamuna Future Park", distance: "15 min drive", type: "shopping" },
      { name: "Hazrat Shahjalal Airport", distance: "25 min drive", type: "transport" },
    ],
  },
  "everon-gardens": {
    floorPlans: [
      { name: "Type A — Garden Suite", type: "3 Bed", size: "2,800 sq ft", bedrooms: 3, bathrooms: 3, price: "BDT 3.8 Cr", features: ["Garden-facing balcony", "Open kitchen", "Servant quarter"] },
      { name: "Type B — Terrace Residence", type: "4 Bed", size: "3,900 sq ft", bedrooms: 4, bathrooms: 4, price: "BDT 5.1 Cr", features: ["Private terrace garden", "Home office", "Dual master suite"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Mat foundation, seismic zone IV compliant" }, { label: "Superstructure", value: "RCC frame with Grade 60 steel" }] },
      { category: "Green Features", items: [{ label: "Solar", value: "Rooftop solar array planned for common areas" }, { label: "Water", value: "Rainwater harvesting & greywater recycling" }, { label: "EV", value: "Level 2 charging in every parking bay" }] },
      { category: "Interior Finishes", items: [{ label: "Flooring", value: "Porcelain tile, 800×800mm" }, { label: "Kitchen", value: "Modular kitchen, quartz countertop" } ] },
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
      { name: "Studio Office", type: "Office Space", size: "800 sq ft", bedrooms: 0, bathrooms: 1, price: "BDT 1.2 Cr", features: ["Open floor plan", "Floor-to-ceiling glass"] },
      { name: "Executive Floor", type: "Full Floor Office", size: "4,200 sq ft", bedrooms: 0, bathrooms: 3, price: "BDT 5.8 Cr", features: ["Private reception", "Server room ready", "Pantry"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Pile foundation with mat cap, seismic IV" }, { label: "Floor Load", value: "4 kN/m² live load capacity" }] },
      { category: "Building Systems", items: [{ label: "Elevators", value: "4 destination-dispatch elevators" }, { label: "HVAC", value: "Centralized chiller plant" }, { label: "Fire Safety", value: "Addressable fire alarm, wet riser, sprinkler system" }] },
    ],
    landmarks: [
      { name: "Bangladesh Bank", distance: "5 min walk", type: "transport" },
      { name: "Dhaka Stock Exchange", distance: "3 min walk", type: "transport" },
    ],
  },
  "everon-lakeside": {
    floorPlans: [
      { name: "Type A — Lake View", type: "3 Bed", size: "2,400 sq ft", bedrooms: 3, bathrooms: 2, price: "BDT 3.2 Cr", features: ["Direct lake view", "Open balcony", "Servant quarter"] },
      { name: "Type B — Corner", type: "4 Bed", size: "3,600 sq ft", bedrooms: 4, bathrooms: 3, price: "BDT 4.6 Cr", features: ["Corner unit", "Wraparound balcony", "Home office"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Piled raft foundation" }, { label: "Superstructure", value: "RCC frame" }] },
      { category: "Interior Finishes", items: [{ label: "Flooring", value: "Homogeneous tile, 600×600mm" }, { label: "Bathrooms", value: "Branded sanitary fittings" }] },
    ],
    landmarks: [
      { name: "Uttara Lake", distance: "2 min walk", type: "leisure" },
      { name: "Uttara High School", distance: "5 min drive", type: "education" },
      { name: "Hazrat Shahjalal Airport", distance: "10 min drive", type: "transport" },
    ],
  },
  "everon-prime-plaza": {
    floorPlans: [
      { name: "Studio", type: "Office Space", size: "650 sq ft", bedrooms: 0, bathrooms: 1, price: "BDT 85 Lac", features: ["Flexible layout", "Shared pantry access"] },
      { name: "Corporate Suite", type: "Premium Office", size: "2,100 sq ft", bedrooms: 0, bathrooms: 2, price: "BDT 2.6 Cr", features: ["Private reception", "Meeting room", "Kitchenette"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Bored pile foundation" }, { label: "Floor Load", value: "3.5 kN/m² live load" }] },
      { category: "Green Features", items: [{ label: "Energy", value: "High-efficiency VRF HVAC, solar assist planned" }] },
    ],
    landmarks: [
      { name: "Dhanmondi Lake", distance: "4 min walk", type: "leisure" },
      { name: "Labaid Hospital", distance: "6 min drive", type: "health" },
    ],
  },
  "everon-chittagong-residences": {
    floorPlans: [
      { name: "Type A", type: "3 Bed + Maid", size: "2,600 sq ft", bedrooms: 3, bathrooms: 3, price: "BDT 3.2 Cr", features: ["Hill & ocean views", "Cross ventilation", "Servant quarter"] },
      { name: "Type B", type: "4 Bed", size: "3,800 sq ft", bedrooms: 4, bathrooms: 4, price: "BDT 4.8 Cr", features: ["Corner position", "Private balcony garden"] },
    ],
    specifications: [
      { category: "Structural", items: [{ label: "Foundation", value: "Deep bored piles" }, { label: "Superstructure", value: "RCC frame, seismic IV" }] },
      { category: "Interior Finishes", items: [{ label: "Living", value: "Porcelain tile, 800×1600mm" }] },
    ],
    landmarks: [
      { name: "Patenga Beach", distance: "15 min drive", type: "leisure" },
      { name: "Chittagong Grammar School", distance: "8 min drive", type: "education" },
      { name: "Chittagong Medical College Hospital", distance: "12 min drive", type: "health" },
      { name: "Shah Amanat International Airport", distance: "20 min drive", type: "transport" },
    ],
  },
  "everon-riverbank-enclave": {
    floorPlans: [
      { name: "Plot Category A", type: "5 Katha Villa Plot", size: "3,600 sq ft footprint", bedrooms: 4, bathrooms: 5, price: "BDT 2.8 Cr", features: ["Boulevard access", "Underground utility connections"] },
      { name: "Plot Category B", type: "10 Katha Estate Plot", size: "7,200 sq ft footprint", bedrooms: 6, bathrooms: 7, price: "BDT 5.2 Cr", features: ["Corner parcel", "Architectural guidelines provided"] },
    ],
    specifications: [
      { category: "Site & Infrastructure", items: [{ label: "Road Network", value: "60 ft main boulevard + 30 ft internal lanes" }, { label: "Drainage", value: "Sub-surface stormwater drainage" }] },
      { category: "Masterplan", items: [{ label: "Green Ratio", value: "45% of site planned for parks, tree lines & water body" } ] },
    ],
    landmarks: [
      { name: "Purbachal 300 Feet Expressway", distance: "4 min drive", type: "transport" },
      { name: "Bangabandhu Tri-Centennial Park", distance: "6 min drive", type: "leisure" },
    ],
  },
};
