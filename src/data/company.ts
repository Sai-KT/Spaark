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
    latitude: 18.5724,
    longitude: 73.8188,
  },
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
};
