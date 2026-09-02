export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  designation: string;
  companyPlaceholder: string;
  location: string;
  serviceCategory: string;
  rating: number;
  comment: string;
}

export interface ClientLogoPlaceholder {
  name: string;
  sector: string;
  location: string;
  comment: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Spaark Enterprises executed our 140-camera IP surveillance setup at our Chakan manufacturing plant with zero disruption to our daily shifts. Their structured cabling, camera angle selection, and NVR redundancy were top tier. We signed their Comprehensive AMC immediately.",
    /* PLACEHOLDER: replace with real client name and designation */
    author: "Rajesh Kulkarni",
    designation: "Head of Plant Infrastructure & Security",
    companyPlaceholder: "Tier-1 Automotive Component Manufacturer",
    location: "Chakan MIDC, Pune",
    serviceCategory: "CCTV & Video Surveillance",
    rating: 5,
    comment: "PLACEHOLDER: replace with real client testimonial",
  },
  {
    id: "t2",
    quote:
      "Modernizing our 32 classrooms with 75-inch 4K Interactive Flat Panels completely transformed how our faculty teaches. The Spaark team handled the unboxing, concealed electrical wiring, and teacher training sessions across just one weekend. Exceptional responsiveness.",
    /* PLACEHOLDER: replace with real client name and designation */
    author: "Dr. Ananya Deshmukh",
    designation: "Dean of Academics & Infrastructure",
    companyPlaceholder: "Renowned CBSE International School",
    location: "West Pune",
    serviceCategory: "Interactive Panels & Smart Classrooms",
    rating: 5,
    comment: "PLACEHOLDER: replace with real client testimonial",
  },
  {
    id: "t3",
    quote:
      "During our recent fire safety audit, the local authorities specifically commended the clean addressable loop installation and integration with our HVAC dampers and emergency access doors. Spaark's team ensures our Form-B documentation is always up to date.",
    /* PLACEHOLDER: replace with real client name and designation */
    author: "Vikram Patil",
    designation: "Senior Facilities & EHS Manager",
    companyPlaceholder: "Multi-Tenant Corporate Tech Tower",
    location: "Hinjawadi Phase 2, Pune",
    serviceCategory: "Fire Alarm Systems & Compliance",
    rating: 5,
    comment: "PLACEHOLDER: replace with real client testimonial",
  },
  {
    id: "t4",
    quote:
      "Our boardroom used to have constant echo and connection failures on hybrid international calls. Spaark installed an intelligent 4K video bar and ceiling microphone array. Now our meetings start with a single tap on the touch console, and voice clarity is crystal sharp.",
    /* PLACEHOLDER: replace with real client name and designation */
    author: "Sanjay Joshi",
    designation: "Vice President - Information Technology",
    companyPlaceholder: "Global Engineering & Software Firm",
    location: "Baner, Pune",
    serviceCategory: "Video Conferencing Solutions",
    rating: 5,
    comment: "PLACEHOLDER: replace with real client testimonial",
  },
  {
    id: "t5",
    quote:
      "Implementing Spaark's contactless face recognition attendance and RFID canteen token solution solved two of our biggest administrative headaches: proxy clock-ins and caterer billing discrepancies. Our payroll processing is now done in under half an hour.",
    /* PLACEHOLDER: replace with real client name and designation */
    author: "Pooja Shinde",
    designation: "General Manager - Human Resources",
    companyPlaceholder: "Precision Heavy Tooling & Fabrication Works",
    location: "Bhosari MIDC, Pune",
    serviceCategory: "Workplace & Canteen Automation",
    rating: 5,
    comment: "PLACEHOLDER: replace with real client testimonial",
  },
  {
    id: "t6",
    quote:
      "What distinguishes Spaark Enterprises from other Pune vendors is their rapid local support. When an optical switch went down during an unexpected monsoon power surge, an engineer was at our gate in Old Sangavi within two hours with a replacement unit.",
    /* PLACEHOLDER: replace with real client name and designation */
    author: "Mahesh Agarwal",
    designation: "Operations Director",
    companyPlaceholder: "Logistics & Cold Chain Fulfillment Center",
    location: "Talegaon MIDC, Pune",
    serviceCategory: "AMC & Breakdown Support",
    rating: 5,
    comment: "PLACEHOLDER: replace with real client testimonial",
  },
];

export const clientLogosPlaceholder: ClientLogoPlaceholder[] = [
  {
    /* PLACEHOLDER: replace with real client logo */
    name: "Precision Auto Components Ltd",
    sector: "Automotive Manufacturing",
    location: "Chakan MIDC",
    comment: "PLACEHOLDER: replace with real logo / client name",
  },
  {
    /* PLACEHOLDER: replace with real client logo */
    name: "Symbiosis & K-12 Academy",
    sector: "Higher Education",
    location: "Pune West",
    comment: "PLACEHOLDER: replace with real logo / client name",
  },
  {
    /* PLACEHOLDER: replace with real client logo */
    name: "Apex Infotech Solutions",
    sector: "IT & Cloud Services",
    location: "Hinjawadi Phase 1",
    comment: "PLACEHOLDER: replace with real logo / client name",
  },
  {
    /* PLACEHOLDER: replace with real client logo */
    name: "Novartis Formulation Hub",
    sector: "Pharmaceuticals",
    location: "Kurkumbh Industrial Belt",
    comment: "PLACEHOLDER: replace with real logo / client name",
  },
  {
    /* PLACEHOLDER: replace with real client logo */
    name: "Western Commercial Towers",
    sector: "Real Estate & Co-Working",
    location: "Kharadi, Pune",
    comment: "PLACEHOLDER: replace with real logo / client name",
  },
  {
    /* PLACEHOLDER: replace with real client logo */
    name: "Mahindra Logistics Center",
    sector: "Warehousing & Supply Chain",
    location: "Talegaon Dabhade",
    comment: "PLACEHOLDER: replace with real logo / client name",
  },
];
