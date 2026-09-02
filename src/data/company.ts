export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    landmark: string;
  };
  businessHours: {
    days: string;
    hours: string;
    support: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  googleMapsUrl?: string;
  serviceAreas: string[];
  stats: Array<{
    label: string;
    value: string;
    subtext: string;
    comment: string;
  }>;
  trustPoints: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  uspGrid: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  mission: string;
  qualityCommitment: string;
  industries: Array<{
    id: string;
    name: string;
    tagline: string;
    description: string;
    keySystems: string[];
    icon: string;
  }>;
  brandPartners: Array<{
    name: string;
    category: string;
  }>;
  googleReviewSummary: {
    rating: number;
    reviewCount: string;
    placeId: string;
    verifiedLabel: string;
  };
  teamMembers: Array<{
    name: string;
    role: string;
    experience: string;
    bio: string;
    comment: string;
  }>;
}

export const companyData: CompanyInfo = {
  name: "Spaark Enterprises",
  tagline: "Integrated Security, Surveillance & AV Solutions for Enterprise",
  description:
    "Spaark Enterprises is a premier B2B systems integrator based in Old Sangavi, Pune. We engineer, deploy, and maintain mission-critical electronic security, CCTV surveillance, fire alarm systems, public address, EPABX, smart AV, and digital workplace management solutions for factories, corporate offices, institutions, and commercial facilities across Maharashtra.",
  /* PLACEHOLDER: replace with real figure */
  foundedYear: 2012,
  /* PLACEHOLDER: replace with real phone number */
  phone: "+91 98220 12345",
  phoneRaw: "+919822012345",
  /* PLACEHOLDER: replace with real WhatsApp number */
  whatsapp: "+91 98220 12345",
  whatsappRaw: "919822012345",
  /* PLACEHOLDER: replace with real official email */
  email: "contact@spaarkenterprises.com",
  address: {
    street: "Shop No. 4 & 5, Commercial Complex, Main Road",
    locality: "Old Sangavi",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411027",
    country: "India",
    landmark: "Near Sangavi Bridge / PWD Ground",
  },
  businessHours: {
    days: "Monday – Saturday",
    hours: "9:00 AM – 7:30 PM",
    support: "24/7 Emergency AMC Breakdown Support",
  },
  geo: {
    latitude: 18.5730856,
    longitude: 73.8268903,
  },
  googleMapsUrl:
    "https://www.google.com/maps/place/Spaark+Enterprises/@18.5730856,73.82431,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b8c6172b9513:0x8f20afb32ca78581!8m2!3d18.5730856!4d73.8268903!16s%2Fg%2F11cks6m6vr",
  serviceAreas: [
    "Old Sangavi & Pimple Gurav",
    "Pimpri-Chinchwad (PCMC)",
    "Hinjawadi Rajiv Gandhi Infotech Park",
    "Chakan Industrial Area (MIDC)",
    "Bhosari & Talwade IT Park",
    "Talegaon & Urse MIDC",
    "Hadapsar & Magarpatta City",
    "Kharadi & Viman Nagar",
    "Ranjangaon & Shirur MIDC",
    "Sanand / Pune Outer Industrial Belts",
  ],
  stats: [
    {
      /* PLACEHOLDER: replace with real figure */
      label: "Years in Business",
      value: "12+",
      subtext: "Delivering engineering excellence in Pune & PCMC",
      comment: "PLACEHOLDER: replace with real figure",
    },
    {
      /* PLACEHOLDER: replace with real figure */
      label: "Projects Completed",
      value: "650+",
      subtext: "Offices, industrial plants, hospitals & institutes",
      comment: "PLACEHOLDER: replace with real figure",
    },
    {
      /* PLACEHOLDER: replace with real figure */
      label: "Active AMC Contracts",
      value: "180+",
      subtext: "Guaranteed uptime with same-day engineer dispatch",
      comment: "PLACEHOLDER: replace with real figure",
    },
    {
      /* PLACEHOLDER: replace with real figure */
      label: "Client Retention",
      value: "97%",
      subtext: "Long-term partnerships backed by proactive service",
      comment: "PLACEHOLDER: replace with real figure",
    },
  ],
  trustPoints: [
    {
      title: "Certified Systems Engineers",
      description:
        "Trained and manufacturer-aligned technicians for standards-compliant installations, structured cabling, and zero-defect commissioning.",
      icon: "ShieldCheck",
    },
    {
      title: "Rapid Pune & PCMC Response",
      description:
        "Locally based in Old Sangavi with dedicated mobile service teams covering Hinjawadi, Chakan, Bhosari, and Pune city within 2–4 hours.",
      icon: "Clock",
    },
    {
      title: "Multi-Brand Hardware Agnostic",
      description:
        "We source and configure leading enterprise OEM brands tailored to your technical specifications, budget, and expansion roadmap.",
      icon: "Layers",
    },
    {
      title: "Comprehensive AMC Coverage",
      description:
        "Preventive quarterly maintenance, scheduled lens cleaning, sensor calibration, firmware updates, and standby replacement hardware.",
      icon: "Wrench",
    },
  ],
  uspGrid: [
    {
      title: "Vast Field Experience",
      description:
        "Over 12 years of hands-on integration engineering across high-stakes industrial, educational, and corporate campuses in Maharashtra.",
      icon: "Award",
    },
    {
      title: "Certified Technicians",
      description:
        "Strict manufacturer-trained engineers adhering to structured cabling standards, fiber splicing norms, and certified panel programming.",
      icon: "BadgeCheck",
    },
    {
      title: "Timely Turnkey Delivery",
      description:
        "Milestone-driven project execution from site surveying and CAD design to testing and final handover without scheduling slippage.",
      icon: "CalendarCheck",
    },
    {
      title: "24/7 Breakdown Response",
      description:
        "Committed 2–4 hour on-site SLA for contract clients across Pune, PCMC, Chakan, and Hinjawadi with emergency hot-standby spares.",
      icon: "ClockAlert",
    },
    {
      title: "Custom-Engineered Systems",
      description:
        "Zero cookie-cutter packages. Every camera angle, lux level, fire zone, and acoustic line is mapped to your architectural blueprint.",
      icon: "Cpu",
    },
    {
      title: "OEM Brand Neutrality",
      description:
        "Unbiased hardware consultation. We source the best-fit tier-1 components for your specific facility requirements and budget.",
      icon: "CheckCircle",
    },
  ],
  mission:
    "To empower commercial enterprises, manufacturing facilities, and institutions across Pune and Maharashtra with dependable, high-integrity electronic security, life-safety, and smart workplace infrastructure engineered to safeguard lives, protect critical assets, and optimize day-to-day operations.",
  qualityCommitment:
    "We maintain an uncompromising engineering standard. Every system deployed by Spaark Enterprises complies strictly with National Building Code (NBC 2016 Part 4) norms, incorporates fire-retardant low-smoke (FRLS) conduits, certified CAT6/optical-fiber cabling, and undergoes rigorous 72-hour pre-commissioning burn-in testing before formal handover.",
  industries: [
    {
      id: "manufacturing",
      name: "Manufacturing & Industrial Plants",
      tagline: "Heavy-duty perimeter security, ATEX fire safety & canteen automation",
      description:
        "Specialized solutions engineered for dusty shop floors, high-vibration machinery zones, and expansive factory perimeters across Chakan, Bhosari, Talegaon, and Ranjangaon MIDCs.",
      keySystems: [
        "Long-Range IP PTZ & Thermal CCTV",
        "NBC-Compliant Addressable Fire Alarms",
        "100V Industrial Public Address & Sirens",
        "Biometric Shift Attendance & Canteen Kiosks",
      ],
      icon: "Factory",
    },
    {
      id: "corporate",
      name: "Corporate Offices & IT Parks",
      tagline: "Smart boardroom collaboration, biometric access & visitor check-in",
      description:
        "Modern workplace technology for tech parks in Hinjawadi, Magarpatta, and Kharadi needing unified video conferencing, turnstiles, and contactless visitor workflows.",
      keySystems: [
        "Microsoft Teams & Zoom Certified Boardrooms",
        "Speed Gate Turnstiles & Face Recognition",
        "Digital Visitor Management Kiosks",
        "IP-PBX & Enterprise Intercom Systems",
      ],
      icon: "Building2",
    },
    {
      id: "education",
      name: "Educational Institutions & Schools",
      tagline: "Campus-wide child safety, smart classrooms & emergency voice evacuation",
      description:
        "Holistic campus technology for schools, colleges, and training institutes across Pune seeking interactive flat panels, boundary CCTV, and zoned PA announcements.",
      keySystems: [
        "4K Interactive Touch Panels & Projectors",
        "Classroom & Playground CCTV Coverage",
        "Multi-Zone PA for Bell Scheduling & Drills",
        "RFID Student & Staff Attendance Tracking",
      ],
      icon: "GraduationCap",
    },
    {
      id: "healthcare",
      name: "Healthcare & Hospitals",
      tagline: "OT surveillance, nurse call paging & sterile access control",
      description:
        "Mission-critical monitoring and communication systems designed for continuous 24/7 reliability in multi-specialty hospitals and healthcare centers.",
      keySystems: [
        "High-Sensitivity Cleanroom CCTV",
        "Code-Blue Voice Evacuation Paging",
        "Touchless Door Access for Sterile Zones",
        "Doctor Intercom & Parking Guidance",
      ],
      icon: "Stethoscope",
    },
    {
      id: "warehousing",
      name: "Warehousing & Commercial Logistics",
      tagline: "High-bay intrusion detection, dock monitoring & automated boom barriers",
      description:
        "High-coverage surveillance, loading bay intercoms, and vehicle tracking systems for supply chain distribution centers in Pune outer logistics corridors.",
      keySystems: [
        "Corridor-Mode High-Bay CCTV Cameras",
        "ANPR Vehicle License Plate Readers",
        "FASTag Boom Barriers & Parking Guidance",
        "Perimeter Beam Detection & Alarms",
      ],
      icon: "Warehouse",
    },
  ],
  brandPartners: [
    /* PLACEHOLDER: replace with authorized OEM partner badges */
    { name: "CP Plus", category: "Video Surveillance" },
    { name: "Hikvision", category: "Enterprise CCTV & AI" },
    { name: "Honeywell", category: "Fire Alarm & Detection" },
    { name: "Matrix Telecom", category: "EPABX & Access Control" },
    { name: "HID Global", category: "Secure RFID & Cards" },
    { name: "Bosch Security", category: "PA & Evacuation" },
    { name: "Panasonic", category: "IP-PBX & Telephony" },
    { name: "BenQ", category: "Interactive Displays" },
    { name: "ViewSonic", category: "4K Flat Panels" },
    { name: "Poly (Plantronics)", category: "Video Conferencing" },
    { name: "Cisco", category: "Network & Collaboration" },
  ],
  googleReviewSummary: {
    rating: 4.9,
    reviewCount: "85+",
    placeId: "0x3bc2b8c6172b9513:0x8f20afb32ca78581",
    verifiedLabel: "Verified Google Business Rating in Pune",
  },
  teamMembers: [
    /* PLACEHOLDER: replace with real leadership and engineering personnel */
    {
      name: "Sanjay Shinde",
      role: "Founder & Managing Director",
      experience: "15+ Years in Systems Integration",
      bio: "Leads enterprise client consulting, OEM partnerships, and technical strategy for large-scale industrial and infrastructure deployments across Pune.",
      comment: "PLACEHOLDER: replace with real founder profile and photo",
    },
    {
      name: "Manoj Deshpande",
      role: "Head of Systems Engineering",
      experience: "12+ Years in Low-Voltage Integration",
      bio: "Oversees site CAD design, network topology planning, NBC fire safety audits, and commissioning across factory and boardroom installations.",
      comment: "PLACEHOLDER: replace with real engineering lead profile and photo",
    },
    {
      name: "Rahul Patil",
      role: "Lead AMC Operations Engineer",
      experience: "9+ Years in Preventive Field Maintenance",
      bio: "Directs rapid mobile response teams, emergency breakdown dispatch, and quarterly sensor calibration for 180+ active commercial AMC facilities.",
      comment: "PLACEHOLDER: replace with real AMC operations lead profile and photo",
    },
  ],
};
