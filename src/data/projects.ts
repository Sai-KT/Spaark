export interface ProjectItem {
  id: string;
  title: string;
  category: "cctv" | "fire-alarm" | "av-boardroom" | "access-telecom" | "workplace";
  categoryLabel: string;
  clientIndustry: string;
  location: string;
  /* PLACEHOLDER: replace with real client name */
  clientPlaceholder: string;
  scale: string;
  summary: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  equipmentInstalled: string[];
  isFeatured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "auto-plant-cctv",
    title: "140-Camera Perimeter & Plant Surveillance Network",
    category: "cctv",
    categoryLabel: "CCTV & Surveillance",
    clientIndustry: "Automotive Ancillary Manufacturing",
    location: "Chakan MIDC, Pune",
    /* PLACEHOLDER: replace with real client name */
    clientPlaceholder: "Tier-1 Tier Stamping & Press Parts Manufacturer",
    scale: "12-Acre Campus, 4 Production Sheds",
    summary:
      "Turnkey IP surveillance infrastructure replacing analog blind spots with AI tripwire perimeter detection and dual redundant NVRs.",
    challenge:
      "Frequent blind spots across loading bays, outdoor raw coil storage yards, and unmonitored perimeter fence sections resulted in undetected inventory deviations and safety rule infractions.",
    solution:
      "Spaark Enterprises laid over 3.5 km of armored optical fiber backbones connecting 4 sheds to a central command room. Installed 140 PoE 4K IP cameras with AI perimeter tripwires and dual 64-channel NVRs in RAID-5.",
    keyOutcomes: [
      "100% perimeter and shop floor optical coverage with zero blind spots",
      "Perimeter intrusion alerts routed immediately to security guard cabin",
      "Investigation turnaround time reduced from 6 hours to under 10 minutes",
      "Integrated with ongoing Comprehensive AMC for 99.8% recording uptime",
    ],
    equipmentInstalled: [
      "140x 4MP/4K Motorized & Fixed Bullet IP Cameras (Hikvision)",
      "2x 64-Channel Enterprise Network Video Recorders",
      "12x Industrial Managed PoE Network Switches",
      "3.5 km Multi-Core Armored Outdoor Fiber Optic Cable",
    ],
    isFeatured: true,
  },
  {
    id: "international-school-av",
    title: "Campus-Wide Smart Classrooms & Zoned Audio Setup",
    category: "av-boardroom",
    categoryLabel: "AV & Interactive Displays",
    clientIndustry: "K-12 Educational Institute",
    location: "Wakad / West Pune",
    /* PLACEHOLDER: replace with real client name */
    clientPlaceholder: "Leading CBSE International Academy",
    scale: "32 Classrooms, 600-Seat Auditorium & Campus PA",
    summary:
      "Complete educational digitalization featuring 4K interactive flat panels, automated bell management, and high-clarity auditorium acoustics.",
    challenge:
      "Faded lamp projectors caused high recurring maintenance costs and eye strain. Campus announcements could not be heard in outdoor sports grounds or during noisy recess periods.",
    solution:
      "Outfitted 32 classrooms with 75-inch 4K Interactive Flat Panels with dual Android/Windows OPS slots. Implemented an 8-zone Public Address system with automated digital class bells and auditorium line-array speakers.",
    keyOutcomes: [
      "Eradicated lamp replacement expenditure completely",
      "Engaged students with interactive multi-touch educational whiteboarding",
      "Automated daily bell schedules and targeted zone-wise emergency announcements",
    ],
    equipmentInstalled: [
      "32x 75\" 4K Interactive Touch Panels (Maxhub/BenQ)",
      "1x 8-Zone High Power Class-D PA Amplifier Rack (Ahuja/Bosch)",
      "48x Architectural Flush Ceiling Speakers & Outdoor Weatherproof Horns",
      "Digital Microprocessor Bell Management Timer",
    ],
    isFeatured: true,
  },
  {
    id: "it-park-fire-alarm",
    title: "Addressable Fire Alarm & Life Safety Integration",
    category: "fire-alarm",
    categoryLabel: "Fire Alarm Systems",
    clientIndustry: "Corporate IT & Commercial Park",
    location: "Hinjawadi Infotech Park Phase 2, Pune",
    /* PLACEHOLDER: replace with real client name */
    clientPlaceholder: "Corporate Multi-Tenant IT Complex",
    scale: "7-Storey Tower, 180,000 sq. ft. Built-Up Area",
    summary:
      "Intelligent addressable fire alarm system fully integrated with AHU shut-off, lift grounding, and electromagnetic door lock emergency releases.",
    challenge:
      "The client's aging conventional system generated frequent false alarms on server floors and lacked the integration required by Maharashtra Fire Service authorities for statutory Form-B renewal.",
    solution:
      "Re-engineered life safety with a 4-loop intelligent addressable fire detection system, 520 optical and multi-criteria detectors, and automated relay modules linked to lifts, HVAC dampers, and access doors.",
    keyOutcomes: [
      "Passed local municipal fire brigade audit with zero non-conformances",
      "Eliminated false alarm panics via dual-sensor optical/thermal verification",
      "Automated safe egress door unlocking in under 2 seconds of alarm trigger",
    ],
    equipmentInstalled: [
      "1x 4-Loop Intelligent Addressable Fire Alarm Panel (Honeywell Morley-IAS)",
      "520x Optical Smoke & Multi-Criteria Detectors",
      "36x Resettable Manual Call Points with Integrated Dual Strobes",
      "Biannual Form-B Statutory Compliance & Inspection Contract",
    ],
    isFeatured: true,
  },
  {
    id: "fintech-access-biometric",
    title: "Facial Recognition Access Control & Server Room Airlock",
    category: "access-telecom",
    categoryLabel: "Access Control & Telecom",
    clientIndustry: "Fintech & Software Development Center",
    location: "Magarpatta City, Pune",
    /* PLACEHOLDER: replace with real client name */
    clientPlaceholder: "Global Financial Software Development Center",
    scale: "450 Workstations, 20 Access-Controlled Doors",
    summary:
      "High-security biometric face recognition, anti-passback controls, and interlocking cleanroom/server doors to satisfy SOC2 Type II compliance.",
    challenge:
      "Client required rigorous physical segregation between software development teams, visitor holding zones, and the critical server infrastructure to pass SOC2 Type II compliance audits.",
    solution:
      "Implemented sub-second contactless face recognition readers, two-door airlock logic for server room suites, optical tripod speed gates at lobby turnstiles, and automated tailgating alerts.",
    keyOutcomes: [
      "Achieved 100% compliance rating on external physical security audits",
      "Erased employee card loss overheads through contactless facial credentials",
      "Automated visitor access restrictions to designated meeting suites only",
    ],
    equipmentInstalled: [
      "20x High-Speed AI Face Recognition Terminals (Matrix COSEC)",
      "2x Motorized Optical Tripod Turnstiles with Brushed Stainless Steel Finish",
      "20x 600-lbs Heavy Duty Fail-Safe Electromagnetic (EM) Locks",
      "Centralized Multi-User Access Management & Audit Trail Software",
    ],
    isFeatured: true,
  },
  {
    id: "pharma-canteen-attendance",
    title: "Integrated Time Attendance & Cashless Canteen Solution",
    category: "workplace",
    categoryLabel: "Workplace Solutions",
    clientIndustry: "Pharmaceutical Formulation Plant",
    location: "Kurkumbh / Pune Outskirts",
    /* PLACEHOLDER: replace with real client name */
    clientPlaceholder: "USFDA-Approved Formulation Facility",
    scale: "850 Factory & Lab Personnel, 3 Operating Shifts",
    summary:
      "Unified biometric attendance roster and cashless RFID canteen token dispensing eliminating meal coupon theft and dispute-prone vendor billing.",
    challenge:
      "Production shifts experienced 15-minute logjams at attendance clocks. Meanwhile, paper meal coupons were forged, causing 20% budget overruns on caterer invoices.",
    solution:
      "Deployed 8 face-recognition attendance terminals synced with plant ERP, paired with 4 automated RFID meal coupon dispensers linked to employee shift allowances.",
    keyOutcomes: [
      "Reduced shift clock-in times by 65% with zero physical contact",
      "Eradicated paper coupon fraud, cutting monthly catering vendor bills by 18%",
      "Automated shift allowance and night overtime calculations in SAP",
    ],
    equipmentInstalled: [
      "8x Outdoor/Dustproof Face Attendance Terminals (Hikvision MinMoe)",
      "4x Ruggedized Canteen Meal Token Kiosks with High-Speed Auto-Cutters",
      "Unified Cloud Attendance & Canteen Entitlement Rules Engine",
    ],
  },
  {
    id: "corporate-hybrid-boardrooms",
    title: "Turnkey Microsoft Teams Executive Boardrooms & Town Hall AV",
    category: "av-boardroom",
    categoryLabel: "AV & Interactive Displays",
    clientIndustry: "Automotive Technology HQ",
    location: "Baner Road, Pune",
    /* PLACEHOLDER: replace with real client name */
    clientPlaceholder: "Global Mobility Software Engineering Center",
    scale: "1x 24-Seat Executive Boardroom, 3x Huddle Rooms",
    summary:
      "Studio-quality hybrid conferencing with beamforming ceiling microphones, dual 85-inch 4K commercial displays, and one-touch meeting join.",
    challenge:
      "Frequent audio reverberation, cable tangles on the conference table, and 10-minute delays setting up international executive calls on laptop webcams.",
    solution:
      "Engineered a turnkey Teams Room solution with dual ceiling microphone arrays, 4K auto-framing PTZ cameras, tabletop touch controllers, and concealed table pop-ups.",
    keyOutcomes: [
      "Zero cable clutter across the 24-seat conference table",
      "Studio-grade audio pickup capturing all participants equally without raising voices",
      "Instant meeting start with zero IT support calls",
    ],
    equipmentInstalled: [
      "2x 85\" Commercial 4K UHD Displays (LG Commercial)",
      "1x Poly/Logitech Microsoft Teams Room System with Tabletop Touch Console",
      "2x Beamforming Ceiling Array Microphones with Dante DSP Processor",
      "Motorized concealed cable cubbies with 4K HDMI & USB-C fast charging",
    ],
  },
  {
    id: "shopping-mall-parking",
    title: "Basement Smart Parking Guidance & Boom Barrier Access",
    category: "workplace",
    categoryLabel: "Workplace Solutions",
    clientIndustry: "Commercial Shopping Center",
    location: "Kothrud, Pune",
    /* PLACEHOLDER: replace with real client name */
    clientPlaceholder: "Premier Retail & Lifestyle Mall",
    scale: "380-Car Multi-Level Basement Parking",
    summary:
      "Real-time ultrasonic bay vacancy indicators, directional LED matrix guidance signs, and FASTag automated vehicle entry.",
    challenge:
      "Drivers spent 10 to 15 minutes hunting for vacant spots during peak weekend hours, creating severe congestion on entry ramps and spilling onto main roads.",
    solution:
      "Installed overhead ultrasonic sensors with dual-color LED indicators over every parking stall, 14 digital dynamic aisle guidance signs, and FASTag automated boom barriers.",
    keyOutcomes: [
      "Reduced average parking search time to under 3 minutes",
      "Boosted parking slot turnover by 24% during peak shopping hours",
      "Eliminated ramp traffic bottlenecks and lowered basement exhaust emissions",
    ],
    equipmentInstalled: [
      "380x Ultrasonic Bay Sensors with Integrated Red/Green LED Domes",
      "14x Directional LED Matrix Aisle Wayfinding Signs",
      "2x High-Speed Torque Motor Boom Barriers with FASTag & RFID Antennas",
      "Central Parking Guidance Management Server & Floor Display Consoles",
    ],
  },
];
