export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  navTitle: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  heroHeadline: string;
  heroSubheadline: string;
  targetAudience: string[];
  features: Array<{
    title: string;
    description: string;
  }>;
  technicalCapabilities: string[];
  brandsCarried: string[];
  caseStudy: {
    title: string;
    clientType: string;
    /* PLACEHOLDER: replace with real client/project details */
    clientNamePlaceholder: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
  formSpecifics: {
    questionLabel: string;
    options: string[];
  };
  whatsappMessage: string;
  relatedServiceSlugs: string[];
  category?: "surveillance" | "life-safety" | "audio-visual" | "telecom";
  categoryTitle?: string;
}

export interface ServiceCategory {
  id: "surveillance" | "life-safety" | "audio-visual" | "telecom";
  title: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  serviceSlugs: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "surveillance",
    title: "Surveillance & Physical Security",
    tagline: "High-Definition Video Analytics & Access Verification",
    shortDescription:
      "Enterprise IP cameras, thermal perimeter barriers, biometric readers, and optical turnstiles engineered to secure commercial facilities.",
    icon: "ShieldCheck",
    serviceSlugs: ["cctv-surveillance-pune", "access-control-system"],
  },
  {
    id: "life-safety",
    title: "Life Safety & Emergency Systems",
    tagline: "NBC 2016 Part 4 Compliant Detection & Mass Evacuation",
    shortDescription:
      "Addressable smoke detection, optical flame sensors, fire panels, and 100V multi-zone voice evacuation audio systems.",
    icon: "Flame",
    serviceSlugs: ["fire-alarm-system", "public-address-system"],
  },
  {
    id: "audio-visual",
    title: "Smart Audio-Visual & Collaboration",
    tagline: "Unified Hybrid Boardrooms & High-Impact Displays",
    shortDescription:
      "4K interactive flat touch panels, high-lumen laser projection, beamforming ceiling microphones, and Teams/Zoom room systems.",
    icon: "Video",
    serviceSlugs: ["projectors-interactive-panels", "video-conferencing-solutions"],
  },
  {
    id: "telecom",
    title: "Telecommunications & Enterprise Voice",
    tagline: "Mission-Critical Hybrid IP-PBX & Industrial Intercoms",
    shortDescription:
      "Hybrid VoIP PBX servers, analog/digital intercom trunks, auto-attendant routing, and factory-to-office voice networks.",
    icon: "PhoneCall",
    serviceSlugs: ["epabx-system"],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "cctv",
    slug: "cctv-surveillance-pune",
    title: "CCTV & Video Surveillance Systems in Pune",
    navTitle: "CCTV & Video Surveillance",
    badge: "High-Definition IP & AI Analytics",
    shortDescription:
      "Enterprise-grade IP and HD CCTV surveillance cameras, NVRs, ANPR, perimeter tripwire detection, and command center setups for facilities across Pune.",
    fullDescription:
      "Spaark Enterprises delivers end-to-end commercial CCTV surveillance systems tailored for factories, commercial offices, IT campuses, and logistics parks in Pune and PCMC. From high-resolution dome and bullet IP cameras to motorized PTZ units, night-vision thermal cameras, and centralized Network Video Recorders (NVR) with RAID storage redundancy, we design systems that eliminate blind spots and ensure 24/7 evidentiary-grade recording.",
    metaTitle: "CCTV Installation & Video Surveillance in Pune | Spaark Enterprises",
    metaDescription:
      "Professional B2B CCTV installation in Pune and PCMC. Commercial IP cameras, NVRs, remote live viewing, AI perimeter detection, and AMC support for offices & factories.",
    icon: "Camera",
    heroHeadline: "Commercial-Grade CCTV Surveillance & Video Analytics in Pune",
    heroSubheadline:
      "Engineered for manufacturing shop floors, enterprise workspaces, and educational campuses. Zero blind spots, crystal-clear night vision, and tamper-proof storage.",
    targetAudience: [
      "Manufacturing Units & Warehouses in Chakan, Bhosari & Talegaon",
      "IT & ITES Corporate Offices in Hinjawadi, Magarpatta & Kharadi",
      "Educational Campuses & International Schools",
      "Hospitals, Healthcare Facilities & Diagnostic Centers",
      "Commercial Complexes & Residential Societies",
    ],
    features: [
      {
        title: "High-Resolution 4K & Ultra-HD IP Cameras",
        description:
          "Capture sharp optical details with wide dynamic range (WDR), enabling facial identification, vehicle number plate capture, and forensic zoom.",
      },
      {
        title: "AI Video Analytics & Perimeter Tripwire",
        description:
          "Automated smart alerts for virtual fence intrusions, perimeter line crossing, loitering, unattended baggage, and crowd density anomalies.",
      },
      {
        title: "Centralized NVR & Redundant RAID Storage",
        description:
          "Scalable 16, 32, 64, and 128-channel NVR configurations with Western Digital Purple / Seagate SkyHawk enterprise hard drives for 30 to 90 days retention.",
      },
      {
        title: "Secure Multi-Branch Remote Monitoring",
        description:
          "View live streams and recorded footage seamlessly across smartphones, tablets, and central management software (CMS) with encrypted credentials.",
      },
      {
        title: "Rugged Weatherproof & Explosion-Proof Housings",
        description:
          "IP67 weatherproof and IK10 vandal-proof ratings built to endure harsh factory dust, outdoor monsoon conditions, and extreme factory temperatures.",
      },
      {
        title: "Complete Structured Fiber & Cat6 Cabling",
        description:
          "Engineered cable pathways, conduits, PoE network switches, and patch panel terminations adhering to EIA/TIA industrial wiring standards.",
      },
    ],
    technicalCapabilities: [
      "Network IP, HD-TVI, and Hybrid Surveillance Architectures",
      "Power over Ethernet (PoE / PoE+) up to 250 meters",
      "H.265+ High Efficiency Video Coding for 50% bandwidth and storage saving",
      "Smart IR Illumination with ColorHunter/DarkFighter low-light color imaging",
      "Command & Control Room video wall integration",
    ],
    brandsCarried: [
      "Hikvision",
      "CP PLUS",
      "Dahua Technology",
      "Honeywell Commercial Security",
      "Matrix Comsec",
      "Uniview (UNV)",
      "Bosch Security Systems",
    ],
    caseStudy: {
      title: "140-Camera Perimeter & Shop Floor Surveillance for Auto-Component Plant",
      clientType: "Automotive Manufacturing Facility, Chakan MIDC",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Leading Tier-1 Automotive Supplier",
      challenge:
        "The client operated across a 12-acre facility with frequent blind spots near loading docks, raw material storage, and perimeter fences, suffering unverified material movement and safety compliance gaps.",
      solution:
        "Spaark Enterprises designed and deployed an end-to-end IP surveillance backbone featuring 140 PoE cameras, fiber-optic interconnects between 4 production sheds, AI tripwire perimeter detection, and dual redundant 64-channel NVRs.",
      outcome:
        "Achieved 100% perimeter and critical-area coverage, eliminated unauthorized dock intrusions, and reduced security incident investigation turnaround time from 6 hours to under 10 minutes.",
    },
    formSpecifics: {
      questionLabel: "Estimated Camera Requirement & Setup Scope",
      options: [
        "1 – 8 Cameras (Small Office / Retail)",
        "9 – 24 Cameras (Medium Office / School)",
        "25 – 64 Cameras (Factory / Large Corporate Facility)",
        "65+ Cameras (Industrial Campus / Enterprise Site)",
        "AMC / Maintenance for Existing System",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I would like to get a quote and consultation for CCTV & Video Surveillance installation in Pune.",
    relatedServiceSlugs: ["access-control-system", "fire-alarm-system", "public-address-system"],
  },
  {
    id: "fire-alarm",
    slug: "fire-alarm-system",
    title: "Fire Alarm & Detection Systems in Pune",
    navTitle: "Fire Alarm Systems",
    badge: "Life Safety & NBC Compliant",
    shortDescription:
      "Conventional and addressable fire alarm panels, optical smoke detectors, heat sensors, manual call points, and hooters compliant with Maharashtra Fire Safety norms.",
    fullDescription:
      "Fire safety is non-negotiable for commercial buildings, manufacturing plants, and educational institutes. Spaark Enterprises provides end-to-end design, supply, cabling, commissioning, and periodic audit certification for conventional and intelligent addressable fire detection systems. Engineered in compliance with the National Building Code (NBC 2016 Part 4) and Maharashtra Fire Prevention and Life Safety Measures Act.",
    metaTitle: "Fire Alarm System Installation & AMC in Pune | Spaark Enterprises",
    metaDescription:
      "Certified fire alarm and smoke detection systems in Pune. Addressable & conventional panels, optical smoke detectors, MCPs, and Form B compliance AMC.",
    icon: "Flame",
    heroHeadline: "Intelligent Fire Alarm & Smoke Detection Systems in Pune",
    heroSubheadline:
      "Safeguard lives, infrastructure, and ensure regulatory compliance. Turnkey addressable and conventional life safety engineering for Pune & PCMC establishments.",
    targetAudience: [
      "Industrial Plants, Chemical & Engineering Units in MIDC Belts",
      "Corporate Towers, Commercial Complexes & Co-Working Spaces",
      "Hospitals, Nursing Homes & Medical Institutes",
      "Schools, Universities & Educational Campuses",
      "Warehouses, Data Centers & Logistics Hubs",
    ],
    features: [
      {
        title: "Intelligent Addressable Fire Alarm Panels",
        description:
          "Pinpoint the exact room, duct, or sensor in alarm state on LCD annunciator panels and graphical workstation displays within seconds.",
      },
      {
        title: "Multi-Criteria Smoke & Heat Detection",
        description:
          "Optical photoelectric smoke chambers combined with thermal rate-of-rise sensors to minimize nuisance false alarms while ensuring rapid fire detection.",
      },
      {
        title: "Manual Call Points & Strobe Sounders",
        description:
          "Resettable break-glass manual stations and high-decibel hooters with synchronized xenon/LED strobes for clear evacuation alerts.",
      },
      {
        title: "HVAC & Access Control Integration",
        description:
          "Automatic tripping of AHUs to stop smoke propagation, trigger fire damper closures, and automatically release electromagnetic door locks for escape routes.",
      },
      {
        title: "Form-B Fire Safety Compliance & Audits",
        description:
          "Comprehensive biannual inspection, smoke testing, battery health checks, and statutory Form-B documentation for Maharashtra Fire Service compliance.",
      },
      {
        title: "Fire-Resistant Armored Cabling",
        description:
          "Tested 2-hour fire-rated shielded copper wiring, heavy-duty metallic conduits, and junction enclosures ensuring signal continuity during emergencies.",
      },
    ],
    technicalCapabilities: [
      "Addressable loop architecture supporting up to 254 devices per loop",
      "Conventional 2, 4, 8, and 16-zone compact panels for smaller facilities",
      "Repeater panel integration for security gatehouses and main receptions",
      "Auto-dialer modules transmitting emergency GSM alerts to facility managers",
      "Integration with Public Address systems for phased voice evacuation",
    ],
    brandsCarried: [
      "Honeywell Morley-IAS / Notifier",
      "Apollo Fire Detectors",
      "Ravel Electronics",
      "Agni Instruments",
      "System Sensor",
      "Siemens Building Technologies",
    ],
    caseStudy: {
      title: "Addressable Fire Detection for a 6-Storey Corporate IT Complex in Hinjawadi",
      clientType: "Commercial IT Park Facility, Hinjawadi Phase 1",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Premier Software Development Center",
      challenge:
        "The building had an obsolete conventional fire system with persistent false alarms on server floors and no integration with lift grounding or door access controls.",
      solution:
        "Installed a 4-loop intelligent addressable fire system with 480 optical smoke and thermal detectors, interfaced with 8 elevator controllers, AHUs, and automated access control doors.",
      outcome:
        "Passed local Fire Brigade inspection with zero non-conformances, eradicated false alarms, and established clear floor-by-floor emergency audio alerts.",
    },
    formSpecifics: {
      questionLabel: "Facility Scale & Fire System Type",
      options: [
        "Small Office / Shop (Conventional Panel, 2–4 Zones)",
        "Mid-Size Building (Conventional Panel, 8–16 Zones)",
        "Large Commercial / Factory (Addressable System, 1–2 Loops)",
        "Multi-Storey Complex / Campus (Multi-Loop Addressable Network)",
        "Routine Maintenance / Form B Fire Audit",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I am inquiring about Fire Alarm System installation or maintenance in Pune.",
    relatedServiceSlugs: ["public-address-system", "access-control-system", "cctv-surveillance-pune"],
  },
  {
    id: "projectors-av",
    slug: "projectors-interactive-panels",
    title: "Projectors & Interactive Flat Panels in Pune",
    navTitle: "Projectors & Interactive Panels",
    badge: "Smart Classrooms & Boardrooms",
    shortDescription:
      "Laser projectors, motorized drop-down screens, 4K interactive flat panel displays (IFPD), and collaborative touchscreens for classrooms, auditoriums, and boardrooms.",
    fullDescription:
      "Modern workplaces and educational institutions demand vivid visual impact and intuitive collaboration. Spaark Enterprises supplies, mounts, and integrates top-tier laser projectors, motorized projection screens, and ultra-responsive 4K Interactive Flat Panels (IFPD). Whether you are outfitting a school smart classroom, executive boardroom, or 500-seat corporate auditorium in Pune, we deliver turn-key visual solutions.",
    metaTitle: "Projectors & 4K Interactive Flat Panels in Pune | Spaark Enterprises",
    metaDescription:
      "Smart classroom interactive panels, 4K laser projectors, motorized screens, and boardroom AV integration in Pune & PCMC. Expert installation and demo.",
    icon: "Projector",
    heroHeadline: "Next-Gen Interactive Displays & Laser Projection Systems",
    heroSubheadline:
      "Empower hybrid collaboration and modern learning. High-brightness laser projectors and responsive 4K touch displays engineered for Pune's leading institutions.",
    targetAudience: [
      "Schools, Junior Colleges & Engineering Universities in Pune",
      "Corporate Boardrooms, Conference Rooms & Training Centers",
      "Auditoriums, Town Halls & Event Auditoriums",
      "Executive Briefing Centers & Experience Centers",
      "Government Institutes & Defense Training Establishments",
    ],
    features: [
      {
        title: "Ultra-HD 4K Interactive Flat Panels (65\", 75\", 86\")",
        description:
          "20-point multi-touch, anti-glare toughened glass, zero-gap bonding, built-in Android/Windows dual OS, and wireless screen mirroring.",
      },
      {
        title: "Solid-State Long-Life Laser Projectors",
        description:
          "Up to 30,000 hours of maintenance-free operation, 4,000 to 10,000+ ANSI lumens, instant on/off, and vibrant color reproduction in bright ambient light.",
      },
      {
        title: "Motorized & Fixed Frame High-Gain Screens",
        description:
          "Acoustically transparent, ambient light rejecting (ALR), and motorized tensioned drop-down screens with wireless RF remote controls.",
      },
      {
        title: "Wireless Presentation & BYOD Sharing",
        description:
          "Frictionless one-click screen casting from laptops, tablets, and smartphones without messy HDMI cables across the boardroom table.",
      },
      {
        title: "Concealed Motorized Ceiling Mounts & Cable Management",
        description:
          "Custom motorized projector scissor lifts, concealed cable cubbies, pop-up floor boxes, and high-speed active optical HDMI/Type-C wiring.",
      },
      {
        title: "Integrated Whiteboard Software for Education",
        description:
          "Preloaded annotation tools, cloud drive integration, split-screen teaching, and one-touch QR export of lecture notes for students.",
      },
    ],
    technicalCapabilities: [
      "Native 4K UHD and WUXGA 1920x1200 laser phosphor light engines",
      "Short-throw and ultra-short throw (UST) optics for glare-free presentations",
      "HDBaseT signal extension up to 100 meters over Cat6 cable",
      "Centralized device management (MDM) for campus-wide display fleets",
    ],
    brandsCarried: [
      "BenQ Commercial & Education",
      "ViewSonic",
      "Epson Laser Projectors",
      "Maxhub",
      "LG Commercial Displays",
      "Samsung Flip",
      "Optoma",
    ],
    caseStudy: {
      title: "Smart Classroom Digitalization across 28 Classrooms for a Pune International School",
      clientType: "Private K-12 International Academy, Pune West",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Premier CBSE International School",
      challenge:
        "The school relied on aging lamp projectors that suffered faded colors, frequent lamp burnouts, and required dark curtains during daytime classes.",
      solution:
        "Engineered and installed 28 units of 75-inch 4K Interactive Flat Panels with dual Android/Windows OPS slots, integrated teaching software, and teacher audio soundbars.",
      outcome:
        "Zero maintenance downtime over 2 academic years, eliminated recurring lamp replacement costs, and increased student engagement through multi-touch group work.",
    },
    formSpecifics: {
      questionLabel: "Display Type & Room Size",
      options: [
        "Small Meeting Room (65\" Interactive Panel)",
        "Standard Boardroom / Classroom (75\"–86\" Interactive Panel)",
        "Conference Room (Laser Projector + Motorized Screen)",
        "Auditorium / Large Hall (High-Lumen Laser Projector)",
        "Multiple Smart Classroom Setup (5+ Rooms)",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I'd like information and pricing on Projectors or Interactive Flat Panels in Pune.",
    relatedServiceSlugs: ["video-conferencing-solutions", "public-address-system", "cctv-surveillance-pune"],
  },
  {
    id: "video-conferencing",
    slug: "video-conferencing-solutions",
    title: "Video Conferencing Solutions in Pune",
    navTitle: "Video Conferencing Solutions",
    badge: "Microsoft Teams & Zoom Certified",
    shortDescription:
      "Turnkey video conferencing bars, auto-tracking PTZ cameras, beamforming ceiling mic arrays, and smart room controllers for hybrid meeting spaces.",
    fullDescription:
      "Seamless hybrid communication is vital for modern distributed enterprises. Spaark Enterprises designs and integrates certified Microsoft Teams, Zoom Rooms, and Google Meet hardware for huddle rooms, executive boardrooms, and multipurpose conference suites in Pune. We harmonize intelligent AI camera framing, studio-grade acoustics, and intuitive touch controllers to make every remote meeting feel in-person.",
    metaTitle: "Video Conferencing System Solutions in Pune | Spaark Enterprises",
    metaDescription:
      "Professional boardroom video conferencing solutions in Pune. Poly, Logitech, Jabra video bars, PTZ cameras, ceiling microphones, and hybrid room setups.",
    icon: "Video",
    heroHeadline: "Studio-Quality Boardroom Video Conferencing Solutions",
    heroSubheadline:
      "Connect your teams effortlessly. Crystal-clear 4K optical tracking, beamforming audio, and one-touch join systems for Pune's corporate enterprises.",
    targetAudience: [
      "IT & ITES Multinational Corporations in Pune Tech Parks",
      "Manufacturing Headquarters & Multi-Plant Operations",
      "Financial Services, Consultancy & Legal Firms",
      "Healthcare Telemedicine & Medical Conference Theaters",
      "Government Departments & Municipal Meeting Chambers",
    ],
    features: [
      {
        title: "All-in-One Intelligent Video Bars",
        description:
          "Integrated 4K cameras, beamforming microphone arrays, and high-fidelity stereo speakers engineered with AI speaker tracking and acoustic fencing.",
      },
      {
        title: "Auto-Framing & Speaker Tracking PTZ Cameras",
        description:
          "Motorized optical zoom lenses that automatically frame the active speaker and pan across the conference table with fluid cinematic motion.",
      },
      {
        title: "Ceiling Tile Microphones & Beamforming Arrays",
        description:
          "Eliminate tabletop wire clutter. Overhead ceiling mic tiles cover large meeting rooms with 360-degree acoustic pickup and ambient noise cancellation.",
      },
      {
        title: "One-Touch Join Touch Controllers",
        description:
          "Dedicated 8\" to 10\" tabletop touch consoles synchronizing with Google Calendar or Microsoft Outlook for instant zero-friction meeting starts.",
      },
      {
        title: "Acoustic Echo Cancellation (AEC) & Noise Reduction",
        description:
          "Hardware DSP audio processors that suppress HVAC rumble, keyboard typing clicks, and room reverberation for broadcast-grade voice clarity.",
      },
      {
        title: "Platform Agnostic & BYOD Compatibility",
        description:
          "Effortlessly switch between Zoom, MS Teams, Cisco Webex, and Google Meet with plug-and-play USB-C or wireless pass-through.",
      },
    ],
    technicalCapabilities: [
      "Native Zoom Rooms and Microsoft Teams Rooms (MTR) appliances",
      "Dante digital audio networking over Cat6 structured cabling",
      "Active optical HDMI and USB 3.0 extensions for zero signal latency",
      "Dual display output support for simultaneous screen sharing and attendee gallery",
    ],
    brandsCarried: [
      "Poly (HP Poly)",
      "Logitech Commercial Video Collaboration",
      "Jabra",
      "Yealink",
      "Neat",
      "Cisco Webex Room Kits",
      "Sennheiser TeamConnect",
    ],
    caseStudy: {
      title: "Hybrid Boardroom Transformation for a Pune Engineering Conglomerate",
      clientType: "Engineering & Export Enterprise, Bhosari MIDC",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Global Heavy Machinery Manufacturer",
      challenge:
        "The client had frequent audio dropouts, poor microphone reach, and required 15 minutes of manual IT troubleshooting before every international client call.",
      solution:
        "Spaark Enterprises deployed an all-in-one 4K AI video bar, dual 75-inch commercial displays, and an interactive tabletop touch controller integrated with Microsoft Teams.",
      outcome:
        "Reduced meeting setup time to 1 click, delivered studio-clear audio pickup for all 16 boardroom participants, and eliminated external IT support tickets.",
    },
    formSpecifics: {
      questionLabel: "Meeting Space Scale & Requirement",
      options: [
        "Huddle Room (2–6 People, Compact Video Bar)",
        "Medium Conference Room (6–12 People, MTR / Zoom Appliance)",
        "Executive Boardroom (12–24 People, PTZ + Ceiling Mics)",
        "Training Hall / Town Hall (Custom AV Integration)",
        "Upgrade Existing Audio/Video Setup",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I would like to consult on Video Conferencing Solutions for our office in Pune.",
    relatedServiceSlugs: ["projectors-interactive-panels", "epabx-system", "public-address-system"],
  },
  {
    id: "epabx",
    slug: "epabx-system",
    title: "EPABX & Intercom Systems in Pune",
    navTitle: "EPABX & Telephone Systems",
    badge: "IP-PBX, PRI & Intercom Solutions",
    shortDescription:
      "Robust IP-PBX, digital EPABX systems, multi-line intercoms, PRI/SIP trunks, and call recording solutions connecting offices and industrial shop floors.",
    fullDescription:
      "Reliable voice communication is the operational lifeline of any enterprise. Spaark Enterprises provides comprehensive consulting, equipment supply, multi-pair telephone cabling, and maintenance for EPABX and IP-PBX systems in Pune. From small 8-line office intercoms to enterprise 500+ extension IP telephony networks with multi-branch SIP trunking, interactive voice response (IVR), and CRM call logging, we ensure crystal-clear voice connectivity.",
    metaTitle: "EPABX System Installation & Intercom in Pune | Spaark Enterprises",
    metaDescription:
      "Complete EPABX and IP-PBX telephone systems in Pune. Intercom installations, SIP trunking, call recording, PRI cards, and AMC support for offices & plants.",
    icon: "PhoneCall",
    heroHeadline: "Enterprise EPABX & IP Telephony Systems in Pune",
    heroSubheadline:
      "Connect your branches, shop floors, and front desks with zero call drops. Advanced IP-PBX, digital intercoms, and unified telephony engineered by Spaark.",
    targetAudience: [
      "Corporate Offices & Coworking Hubs in Pune & PCMC",
      "Manufacturing Plants with Shed-to-Office Intercom Needs",
      "Hotels, Resorts & Hospitality Properties",
      "Hospitals, Clinics & Multi-Department Healthcare Facilities",
      "Educational Campuses & Multi-Building Complexes",
    ],
    features: [
      {
        title: "Scalable IP-PBX & Hybrid Systems",
        description:
          "Seamlessly blend traditional analog telephone lines, digital extensions, PRI lines, and modern cost-effective SIP trunks on a single unified platform.",
      },
      {
        title: "Multi-Level Automated Attendant & IVR",
        description:
          "Direct incoming customer calls efficiently with professional customized voice prompts, department routing, and automatic after-hours call handling.",
      },
      {
        title: "Built-In Call Recording & Monitoring",
        description:
          "Evidentiary call logging and audio recording on all trunk and extension lines for quality assurance, order verification, and dispute resolution.",
      },
      {
        title: "Mobile App Extension Integration (Mobility)",
        description:
          "Enable managers and remote staff to answer office desk extensions directly on Android/iOS smartphones anywhere via secure VPN connectivity.",
      },
      {
        title: "Factory-Floor Rugged & Weatherproof Telephones",
        description:
          "Heavy-duty explosion-proof, dust-resistant, and high-noise telephone handsets with flashing beacons for loud industrial workshop environments.",
      },
      {
        title: "Organized MDF Distribution & Multi-Pair Cabling",
        description:
          "Neatly labeled Main Distribution Frames (MDF), tag blocks, lightning surge protectors, and armored telephone cabling across facilities.",
      },
    ],
    technicalCapabilities: [
      "SIP, H.323, PRI (ISDN30), GSM Gateway, and Analog FXO/FXS support",
      "Voice over IP (VoIP) inter-branch free calling between Pune and global offices",
      "Voice mail to email audio forwarding",
      "CTI (Computer Telephony Integration) and CRM screen-pop capability",
    ],
    brandsCarried: [
      "Matrix Comsec (Eternity / Vision)",
      "Panasonic Voice Systems",
      "Grandstream Networks",
      "NEC Telephony",
      "Syntel Telecom",
      "Cisco IP Telephony",
    ],
    caseStudy: {
      title: "Inter-Shed Telephony & IP-PBX Network for a Heavy Fabrication Plant in Chakan",
      clientType: "Heavy Machinery & Structural Fabrication, Chakan MIDC",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Leading Industrial Equipment Manufacturer",
      challenge:
        "The plant suffered frequent phone downtime, broken copper lines between four separate fabrication sheds, and had no way to communicate with crane operators or warehouse leads.",
      solution:
        "Implemented an IP-PBX system linked via the plant's existing fiber network, deploying 48 digital extensions, 8 ruggedized industrial intercoms, and automated mobile extensions for supervisors.",
      outcome:
        "Eliminated 100% of inter-shed wire maintenance headaches, reduced monthly telecom expenditure by 35%, and enabled instant emergency broadcast paging.",
    },
    formSpecifics: {
      questionLabel: "Estimated Extensions & Line Requirements",
      options: [
        "Small Office (1–8 Extensions / Analog Intercom)",
        "Medium Office (8–32 Extensions / Hybrid PBX)",
        "Large Office / Factory (32–120+ Extensions / IP-PBX)",
        "Multi-Location Telephony (SIP Trunking / Inter-branch)",
        "EPABX Repair, Wiring, or AMC Support",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I am looking for EPABX / Intercom system installation or maintenance in Pune.",
    relatedServiceSlugs: ["public-address-system", "video-conferencing-solutions", "access-control-system"],
  },
  {
    id: "pa-system",
    slug: "public-address-system",
    title: "Public Address (PA) & BGM Systems in Pune",
    navTitle: "Public Address Systems",
    badge: "Emergency Voice Evacuation & BGM",
    shortDescription:
      "Zoned public address systems, IP audio networks, ceiling and horn speakers, emergency voice evacuation, and background music (BGM) for Pune facilities.",
    fullDescription:
      "A well-engineered Public Address (PA) system is crucial for daily administrative announcements, shift-change tones, pleasant ambient background music, and life-saving emergency evacuations. Spaark Enterprises specializes in acoustic modeling, zoned amplifier rack design, high-impedance 100V line distribution, and horn/ceiling speaker installations across industrial shop floors, schools, hospitals, and malls in Pune.",
    metaTitle: "Public Address (PA) System Installation in Pune | Spaark Enterprises",
    metaDescription:
      "Commercial Public Address (PA) systems in Pune. Multi-zone amplifiers, IP PA systems, ceiling speakers, industrial horns, and emergency voice evacuation setups.",
    icon: "Megaphone",
    heroHeadline: "Zoned Public Address & Voice Evacuation Systems in Pune",
    heroSubheadline:
      "Clear, unintelligible announcements across noisy factory floors, multi-acre school campuses, and corporate complexes. Engineered for safety and clarity.",
    targetAudience: [
      "Automotive & Engineering Factories with High Ambient Noise",
      "K-12 Schools, Colleges & Educational Institutes",
      "Commercial Malls, Multiplexes & Retail Showrooms",
      "Hospitals, Clinics & Healthcare Institutions",
      "Warehouses, Logistics Hubs & Bus/Metro Terminals",
    ],
    features: [
      {
        title: "Multi-Zone Paging & Selective Broadcasting",
        description:
          "Broadcast targeted announcements to specific zones (e.g., Warehouse only, Admin Floor only) or trigger an all-call announcement across the entire campus.",
      },
      {
        title: "High-Noise Industrial Horns & Sound Projectors",
        description:
          "Heavy-duty weatherproof aluminum reflex horns delivering up to 125 dB SPL to cut through running machinery, stamping presses, and factory ambient noise.",
      },
      {
        title: "Aesthetic Flush Ceiling & Wall Mount Speakers",
        description:
          "Sleek, low-profile 100V line ceiling speakers designed for corporate boardrooms, hotel corridors, and reception lobbies with uniform sound distribution.",
      },
      {
        title: "Automated Voice Evacuation Integration",
        description:
          "Directly interfaces with the building's fire alarm panel to instantly override normal music and play pre-recorded multi-lingual evacuation instructions.",
      },
      {
        title: "Network IP-Audio Over Existing LAN",
        description:
          "Decentralized IP paging microphones and network audio decoders that leverage your standard IT Ethernet network without running miles of speaker cables.",
      },
      {
        title: "Scheduled Shift Chimes & Bell Management",
        description:
          "Microprocessor-controlled timers that automatically sound school period bells, factory shift changes, lunch breaks, and automated safety reminders.",
      },
    ],
    technicalCapabilities: [
      "100V / 70V high-impedance speaker distribution for long-distance runs",
      "Class-D high efficiency power amplifiers with standby failover redundancy",
      "Acoustic feedback suppressors and dynamic microphone mixers",
      "BGM streaming with Bluetooth, USB, FM tuner, and auxiliary inputs",
    ],
    brandsCarried: [
      "Bosch Security & Safety Systems",
      "Ahuja Radios (Commercial PA)",
      "Honeywell PA/VA Systems",
      "ITC Audio",
      "Yamaha Commercial Audio",
      "TOA Electronics",
    ],
    caseStudy: {
      title: "16-Zone IP Public Address & Voice Alarm System for a 20-Acre Engineering Plant",
      clientType: "Engineering Machinery Plant, Talegaon MIDC",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Multinational Equipment Manufacturer",
      challenge:
        "The client needed to reach 600 workers spread across 5 manufacturing bays with varying noise levels, while maintaining silent zones in the administrative wing.",
      solution:
        "Spaark Enterprises deployed an IP-based 16-zone PA system featuring 80 high-output weatherproof reflex horns, 60 architectural ceiling speakers, and automated shift chimes.",
      outcome:
        "Achieved 100% speech intelligibility across high-decibel production areas, automated shift timings, and successfully integrated with the master fire panel for automatic safety alerts.",
    },
    formSpecifics: {
      questionLabel: "Facility Zones & Speaker Requirement",
      options: [
        "Single Zone (Office / Small Showroom)",
        "2 – 4 Zones (School Building / Medium Workshop)",
        "5 – 12 Zones (Factory / Industrial Campus / Hospital)",
        "Emergency Voice Evacuation + Fire Panel Integration",
        "Speaker Replacement / Amplifier Maintenance",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I want to inquire about Public Address (PA) and sound system installation in Pune.",
    relatedServiceSlugs: ["fire-alarm-system", "epabx-system", "cctv-surveillance-pune"],
  },
  {
    id: "access-control",
    slug: "access-control-system",
    title: "Access Control & Door Security Systems in Pune",
    navTitle: "Access Control Systems",
    badge: "Biometric, RFID & Turnstiles",
    shortDescription:
      "Fingerprint scanners, facial recognition terminals, smart card readers, electromagnetic locks, and optical tripod turnstiles for secure enterprise access.",
    fullDescription:
      "Controlling and tracking who enters your premises is fundamental to loss prevention, employee safety, and intellectual property defense. Spaark Enterprises designs and deploys robust access control architectures in Pune, ranging from standalone single-door electromagnetic locks to enterprise multi-site biometric access networks with anti-passback, interlock airlocks, and optical speed gate turnstiles.",
    metaTitle: "Access Control Systems & Biometric Doors in Pune | Spaark Enterprises",
    metaDescription:
      "Secure access control systems in Pune. Face recognition, biometric fingerprint locks, EM locks, RFID card readers, turnstiles, and integration with HRMS.",
    icon: "Fingerprint",
    heroHeadline: "Enterprise Access Control & Smart Door Security Systems",
    heroSubheadline:
      "Eliminate unauthorized access, safeguard server rooms, and control visitor flows with lightning-fast biometric and smart card door automation.",
    targetAudience: [
      "IT / Software Development Centers with Strict SOC2/ISO Requirements",
      "Pharmaceutical Cleanrooms & R&D Laboratories",
      "Factory Entry Gates, Security Cabins & Shop Floor Interlocks",
      "Banks, Financial Institutions & Server Rooms",
      "Corporate Head Offices & Co-Working Spaces",
    ],
    features: [
      {
        title: "Contactless AI Facial Recognition Terminals",
        description:
          "Sub-0.2 second recognition speeds with deep learning live face detection that cannot be spoofed by photos or video playback, even with masks on.",
      },
      {
        title: "Optical & Optical-Biometric Fingerprint Readers",
        description:
          "Scratch-resistant 500 DPI optical sensors engineered to accurately read rough, dusty, or dry fingertips typical on Indian manufacturing shop floors.",
      },
      {
        title: "Heavy-Duty Electromagnetic (EM) & Drop Bolt Locks",
        description:
          "600 lbs to 1200 lbs holding force magnetic locks, fail-safe emergency release overrides, and sensor-monitored door status feedback.",
      },
      {
        title: "Tripod Turnstiles, Flap Barriers & Speed Gates",
        description:
          "Brushed stainless steel pedestrian security barriers to regulate high-volume pedestrian entry at main corporate gates and factory checkpoints.",
      },
      {
        title: "Anti-Passback & Two-Door Interlock (Airlock)",
        description:
          "Prevent badge sharing with anti-passback rules, and maintain cleanroom pressure seals with electronic interlocking doors where only one door opens at a time.",
      },
      {
        title: "Emergency Fire Alarm Automatic Release",
        description:
          "All electronic locks automatically de-energize and unlock immediately upon fire alarm activation to ensure unhindered life safety egress.",
      },
    ],
    technicalCapabilities: [
      "Wiegand, OSDP, and RS485 controller communication protocols",
      "Mifare 13.56MHz encrypted contactless smart cards and NFC credentials",
      "PoE-enabled controllers with battery backup power supplies",
      "Web-based multi-user software management with audit trail reports",
    ],
    brandsCarried: [
      "Matrix Comsec (COSEC Arc / Vega / Door)",
      "Hikvision Access Control",
      "eSSL Security",
      "ZKTeco Commercial",
      "Suprema Biometrics",
      "HID Global",
    ],
    caseStudy: {
      title: "Biometric Door Interlock & Server Room Access for an IT Center in Magarpatta",
      clientType: "Fintech Development Center, Magarpatta Cybercity",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Global Financial Technology Provider",
      challenge:
        "The client needed to satisfy rigorous SOC2 Type II physical security compliance requiring dual-authentication server room access and strict visitor segregation.",
      solution:
        "Installed 14 dual-tech face recognition and card access doors, 2 airlock interlocks for server suites, and central software logging all authorized and denied entry attempts.",
      outcome:
        "Successfully achieved 100% compliance audit certification, prevented tailgating, and automated real-time alerts for doors left ajar.",
    },
    formSpecifics: {
      questionLabel: "Number of Doors & Authentication Type",
      options: [
        "1 – 4 Doors (Single Office / Server Room / HR Cabin)",
        "5 – 12 Doors (Corporate Office / R&D Suite)",
        "13+ Doors (Multi-Floor Facility / Factory Access)",
        "Turnstiles / Pedestrian Flap Barriers at Entry Gate",
        "Integration with Time & Attendance / Payroll",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I would like to get a quote on Access Control & Door Security Systems in Pune.",
    relatedServiceSlugs: ["cctv-surveillance-pune", "fire-alarm-system", "public-address-system"],
  },
];
