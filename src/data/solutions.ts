export interface SolutionItem {
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
  workflowSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  softwareCapabilities: string[];
  hardwareIntegration: string[];
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
  relatedSolutionSlugs: string[];
}

export const solutionsData: SolutionItem[] = [
  {
    id: "time-attendance",
    slug: "time-attendance-system",
    title: "Time & Attendance Management Systems in Pune",
    navTitle: "Time & Attendance System",
    badge: "Biometric, Face & Cloud Payroll Integration",
    shortDescription:
      "Automated biometric attendance systems, facial recognition terminals, multi-shift scheduling, leave management, and seamless ERP/payroll export.",
    fullDescription:
      "Manual punch cards, sign-in registers, and buddy-punching cost Indian businesses thousands of productive hours and payroll leakages every month. Spaark Enterprises provides end-to-end Time & Attendance management systems combining industrial-grade biometric/facial recognition hardware with robust software platforms. Designed to handle complex rotational factory shifts, overtime calculations, late-coming penalties, and seamless integration with leading ERPs.",
    metaTitle: "Biometric Time & Attendance System in Pune | Spaark Enterprises",
    metaDescription:
      "Advanced biometric and face recognition time & attendance systems in Pune. Multi-shift scheduling, automated payroll export, cloud dashboard, and HRMS integration.",
    icon: "Clock",
    heroHeadline: "Accurate, Automated Biometric Time & Attendance Systems",
    heroSubheadline:
      "Eliminate buddy punching, automate complex factory shift rosters, and sync attendance directly with your payroll engine with 100% precision.",
    targetAudience: [
      "Manufacturing Units & Engineering Workshops with 3-Shift Rosters",
      "Corporate IT Offices & Hybrid Workforces in Hinjawadi & Kharadi",
      "Retail Chains, Showrooms & Branch Outlets",
      "Hospitals & Healthcare Facilities with Rotational Nursing Staff",
      "Schools, Colleges & Educational Faculty Departments",
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Sub-Second Employee Clock-In",
        description:
          "Employees punch in via contactless face recognition, biometric fingerprint, or RFID badge at wall-mounted terminals or mobile geo-fenced app.",
      },
      {
        step: "02",
        title: "Real-Time Central Cloud Sync",
        description:
          "Punches are instantaneously transmitted over LAN, Wi-Fi, or 4G GSM SIM cards to the centralized attendance server, preventing offline data loss.",
      },
      {
        step: "03",
        title: "Automated Shift & Overtime Processing",
        description:
          "The rules engine automatically calculates grace periods, half-days, early departures, rotational night shifts, and OT hours without manual intervention.",
      },
      {
        step: "04",
        title: "One-Click Payroll & ERP Export",
        description:
          "Generates compliant muster roll reports and exports processed attendance data directly into SAP, Tally, Zoho People, Darwinbox, or custom ERPs.",
      },
    ],
    features: [
      {
        title: "Buddy-Punching & Spoofing Prevention",
        description:
          "AI live-detection algorithms in facial terminals detect genuine 3D human faces, blocking photos, videos, or mask-based fraudulent punches.",
      },
      {
        title: "Complex Multi-Shift & Overtime Rules",
        description:
          "Configure flexible shift rotations, overnight auto-shift detection, weekend differential rates, and comp-off policies effortlessly.",
      },
      {
        title: "Multi-Location Centralized Dashboard",
        description:
          "Monitor attendance across all your Pune branch offices, factories in Chakan, and remote warehouses from a single unified web console.",
      },
      {
        title: "Mobile App with GPS Geo-Fencing for Field Staff",
        description:
          "Allow sales representatives, site engineers, and drivers to log attendance on their smartphones only when within designated client coordinates.",
      },
      {
        title: "Self-Service Employee & Manager Portal",
        description:
          "Staff can view their monthly punch calendar, submit leave applications, and request regularizations, while managers approve on mobile.",
      },
      {
        title: "Statutory Indian Labor Law Compliance Reports",
        description:
          "Pre-formatted Form II, Form 25, muster rolls, and inspection-ready audit reports compliant with the Maharashtra Factories Rules.",
      },
    ],
    softwareCapabilities: [
      "Cloud-hosted SaaS or on-premises server deployment",
      "REST API connectors for SAP, Oracle, Zoho People, and GreyHR",
      "Automated SMS/WhatsApp alerts for absent employees and late arrivals",
      "Role-based administrative permissions for HR, department heads, and security",
    ],
    hardwareIntegration: [
      "Matrix COSEC biometric series",
      "eSSL SilkBio and uFace terminals",
      "Hikvision MinMoe face recognition terminals",
      "Thermal temperature screening options",
    ],
    caseStudy: {
      title: "Attendance Automation across 4 Plant Sites for 1,200 Industrial Workers",
      clientType: "Automotive Ancillary Enterprise, Bhosari & Chakan",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Leading Stamping & Tooling Enterprise",
      challenge:
        "The client relied on manual punch registers across 4 factory locations, requiring 5 days of manual compilation every month, plagued by proxy attendance and overtime disputes.",
      solution:
        "Spaark Enterprises deployed 12 high-speed face recognition biometric devices connected over WAN to a central cloud server, integrated with their SAP payroll module.",
      outcome:
        "Reduced monthly payroll preparation time from 5 days to 20 minutes, eradicated proxy punching, and recovered an estimated 4.5% in unearned overtime payouts.",
    },
    formSpecifics: {
      questionLabel: "Number of Employees & Locations",
      options: [
        "10 – 50 Employees (Single Location)",
        "51 – 200 Employees (Single / Dual Facility)",
        "201 – 500 Employees (Factory / Corporate Multi-Floor)",
        "500+ Employees (Multi-Plant / Industrial Enterprise)",
        "Software Upgrade / Hardware Replacement Only",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I am looking for a Time & Attendance management system for our organization in Pune.",
    relatedSolutionSlugs: ["visitor-management-system", "canteen-management-system", "parking-guidance-system"],
  },
  {
    id: "visitor-management",
    slug: "visitor-management-system",
    title: "Visitor Management Systems (VMS) in Pune",
    navTitle: "Visitor Management System",
    badge: "Digital Check-In, QR Passes & Host Alerts",
    shortDescription:
      "Modern digital visitor check-in, tablet kiosks, visitor photo capture, instant host WhatsApp/SMS alerts, and electronic badge printing.",
    fullDescription:
      "Ditch untidy paper logbooks that compromise visitor privacy and create security vulnerabilities at your front desk. Spaark Enterprises delivers comprehensive Visitor Management Systems (VMS) that modernize your reception, streamline contractor onboarding, and bolster physical security across corporate facilities, IT parks, and manufacturing premises in Pune.",
    metaTitle: "Digital Visitor Management System in Pune | Spaark Enterprises",
    metaDescription:
      "Replace paper registers with digital visitor management in Pune. Self-service kiosks, QR visitor passes, host WhatsApp alerts, and security compliance.",
    icon: "UserCheck",
    heroHeadline: "Smart, Professional & Secure Visitor Management Systems",
    heroSubheadline:
      "Transform your front desk experience. Seamless tablet check-in, automated host notifications, contractor tracking, and emergency headcount accuracy.",
    targetAudience: [
      "Corporate Towers & Multi-Tenant Tech Parks in Pune",
      "Manufacturing Plants with Heavy Contractor & Vendor Traffic",
      "Pharmaceutical Facilities & Quality-Controlled Cleanrooms",
      "Schools, Colleges & Daycare Security Desks",
      "Government Offices & High-Security Commercial Buildings",
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Contactless QR Check-In / Tablet Kiosk",
        description:
          "Visitors enter details or scan a pre-invited invite QR code on an iPad/Android reception tablet, capturing their photograph and contact details.",
      },
      {
        step: "02",
        title: "Digital NDA & Safety Induction",
        description:
          "Contractors or visitors review mandatory factory safety guidelines, fire evacuation maps, and digitally sign non-disclosure agreements directly on the screen.",
      },
      {
        step: "03",
        title: "Instant Host WhatsApp & SMS Notification",
        description:
          "The internal host receives an automated WhatsApp and SMS notification with the visitor's name, photo, and purpose, allowing instant one-tap approval.",
      },
      {
        step: "04",
        title: "Thermal Badge Print & Turnstile Integration",
        description:
          "A professional visitor badge prints with visit validity times, host name, and barcode/QR access to enter designated turnstiles or doors.",
      },
    ],
    features: [
      {
        title: "Pre-Registration & VIP Invites",
        description:
          "Hosts can schedule meetings and send digital calendar invites containing entry QR codes for express check-in at the security gate.",
      },
      {
        title: "Contractor & Material Vendor Tracking",
        description:
          "Log safety certifications, work permit expiry, and track recurring vendor staff with dedicated contractor compliance workflows.",
      },
      {
        title: "One-Click Emergency Evacuation Roster",
        description:
          "In case of fire or evacuation, generate a real-time list of all external visitors currently on site to ensure complete muster count.",
      },
      {
        title: "Privacy & Data Protection Compliant",
        description:
          "Visitors' contact numbers and personal details remain confidential, unlike open paper registers where previous guests' numbers are exposed.",
      },
      {
        title: "Overstay & Blacklist Alerts",
        description:
          "Automated security cabin alerts when a visitor exceeds their allotted duration or if a flagged individual attempts entry.",
      },
      {
        title: "Branded Reception Experience",
        description:
          "Custom welcome screen displaying your corporate logo, customized questions (e.g. laptop serial numbers), and branded pass templates.",
      },
    ],
    softwareCapabilities: [
      "Multi-tenant lobby reception management",
      "Microsoft Teams and Slack host notification bots",
      "Daily, weekly, and monthly visitor traffic analytics",
      "Cloud backup with encrypted historical visitor logs",
    ],
    hardwareIntegration: [
      "iPad and Android 10\" reception countertop stands",
      "High-speed thermal badge printers (Brother / Zebra)",
      "Barcode & 2D QR scanners for gatekeepers",
      "Speed gate turnstile and electromagnetic door integration",
    ],
    caseStudy: {
      title: "Digital Front-Desk & Contractor Check-In for an IT Campus in Baner",
      clientType: "Multi-Tenant Corporate Tech Facility, Baner, Pune",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Leading Enterprise Innovation Center",
      challenge:
        "The building had long queues during morning meeting hours, manual paper logbooks that leaked contact info, and zero visibility into contractor movements.",
      solution:
        "Installed 3 self-service touch kiosks with thermal badge printers, WhatsApp host alert bots, and turnstile barcode scanners linked to VMS.",
      outcome:
        "Reduced visitor check-in duration from 4 minutes to under 25 seconds, elevated corporate reception aesthetics, and established complete visitor audit logs.",
    },
    formSpecifics: {
      questionLabel: "Expected Daily Visitors & Entry Points",
      options: [
        "1 – 20 Visitors/Day (Single Reception Desk)",
        "21 – 100 Visitors/Day (Medium Corporate Office)",
        "100+ Visitors/Day (Multi-Tenant Tech Park / Factory)",
        "Industrial Plant (Includes Daily Contractor Tracking)",
        "Custom Software & Kiosk Hardware Package",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I want to learn more about your Digital Visitor Management System (VMS) in Pune.",
    relatedSolutionSlugs: ["time-attendance-system", "canteen-management-system", "parking-guidance-system"],
  },
  {
    id: "canteen-management",
    slug: "canteen-management-system",
    title: "Canteen Management Systems in Pune",
    navTitle: "Canteen Management System",
    badge: "Cashless, Biometric & Meal Token Automation",
    shortDescription:
      "Automated corporate and factory canteen software, RFID meal tokens, biometric meal authentication, and food wastage analytics.",
    fullDescription:
      "Industrial and corporate canteens often suffer from inaccurate meal counts, unauthorized guest consumption, cash mishandling, and massive food wastage. Spaark Enterprises provides specialized Canteen Management Systems that eliminate manual coupon handling. By integrating employee smart cards or biometric verification with POS thermal printers and kitchen displays, we streamline dining operations and ensure transparent billing with catering vendors.",
    metaTitle: "Automated Canteen Management System in Pune | Spaark Enterprises",
    metaDescription:
      "Cashless, biometric, and RFID canteen management systems in Pune. Prevent food wastage, automate meal tokens, and streamline catering contractor billing.",
    icon: "Utensils",
    heroHeadline: "Cashless, Automated Canteen & Meal Management Systems",
    heroSubheadline:
      "Stop meal ticket fraud and food wastage. Fast biometric verification, automated meal deduction, and transparent billing for Pune factories and offices.",
    targetAudience: [
      "Manufacturing Plants with Subsidized Daily Shift Meals",
      "Corporate IT Campuses & Multi-Cuisine Food Courts",
      "Residential Boarding Schools & University Hostels",
      "Hospitals Providing Staff & Patient Diet Meals",
      "Industrial Canteen Contractors & Catering Providers",
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Instant Identity Verification",
        description:
          "The employee flashes their existing RFID corporate ID badge or verifies their fingerprint at the self-service canteen terminal.",
      },
      {
        step: "02",
        title: "Meal Eligibility Check",
        description:
          "The system checks company entitlement rules (e.g. one breakfast, one lunch per shift; contractor vs permanent employee subsidy limits).",
      },
      {
        step: "03",
        title: "Token Print / POS Validation",
        description:
          "A thermal slip prints with meal type, employee code, and timestamp, or displays an instant green authorization light for the food service team.",
      },
      {
        step: "04",
        title: "Automated Payroll Deduction & Vendor Audit",
        description:
          "Meal charges are automatically debited from payroll or prepaid e-wallets, while generating indisputable meal count reports for caterer invoices.",
      },
    ],
    features: [
      {
        title: "Elimination of Paper Coupons & Cash",
        description:
          "Replaces messy, easily forged paper food coupons with tamper-proof digital transactions tied to employee credentials.",
      },
      {
        title: "Anti-Passback & Double-Punch Prevention",
        description:
          "Blocks duplicate meal claims within the same meal session, eliminating meal pass-sharing and unauthorized guest feeding.",
      },
      {
        title: "Pre-Booking & Wastage Reduction Module",
        description:
          "Employees can pre-book meals via mobile app by 10 AM, allowing catering managers to cook exact quantities and reduce food waste by up to 30%.",
      },
      {
        title: "Subsidized & Tiered Pricing Rules",
        description:
          "Configure different meal prices or subsidy percentages for permanent staff, contract labor, interns, and visiting guests.",
      },
      {
        title: "Caterer Invoice Reconciliation",
        description:
          "Say goodbye to invoice disputes. Daily reconciled reports show exact counts of breakfasts, lunches, and midnight snacks served.",
      },
      {
        title: "Kitchen Order Display & POS Integration",
        description:
          "Optional digital KOT screens in the kitchen displaying live meal demand so prep staff can replenish hot counters in time.",
      },
    ],
    softwareCapabilities: [
      "Wallet recharge portal for employees and guest pass generation",
      "Integration with biometric time & attendance master employee database",
      "Shift-wise meal consumption analytics and cost center allocations",
      "Offline transactional cache ensuring canteen operation even during network outages",
    ],
    hardwareIntegration: [
      "Industrial thermal token printers with high-speed cutters",
      "Ruggedized wall-mount biometric and RFID canteen kiosks",
      "Handheld Android POS terminals with built-in NFC and thermal printers",
      "Multi-color kitchen status indicator lights",
    ],
    caseStudy: {
      title: "Cashless Meal Token Automation for an Auto Assembly Plant with 800 Workers",
      clientType: "Commercial Vehicle Assembly Plant, Chakan MIDC",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Leading Heavy Vehicle Fabricator",
      challenge:
        "The plant faced high food wastage and persistent disputes with their catering vendor over daily meal billing counts due to stolen paper coupons.",
      solution:
        "Installed 4 ruggedized RFID meal token dispensing kiosks integrated with the company's employee master database and payroll software.",
      outcome:
        "Eliminated coupon printing overheads, ended vendor billing disputes with indisputable daily digital logs, and cut food waste by 22% in the first quarter.",
    },
    formSpecifics: {
      questionLabel: "Number of Daily Meals & Canteen Counters",
      options: [
        "50 – 150 Meals/Day (Single Serving Counter)",
        "151 – 500 Meals/Day (2–3 Serving Counters)",
        "500+ Meals/Day (Multi-Shift Industrial Canteen)",
        "Pre-Booking / Mobile App Integration Required",
        "Integration with Existing RFID / Biometric Hardware",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I would like to inquire about your Canteen Management System in Pune.",
    relatedSolutionSlugs: ["time-attendance-system", "visitor-management-system", "parking-guidance-system"],
  },
  {
    id: "parking-guidance",
    slug: "parking-guidance-system",
    title: "Smart Parking Guidance & Management Systems in Pune",
    navTitle: "Parking Guidance System",
    badge: "Ultrasonic Sensors, ANPR & Variable Signage",
    shortDescription:
      "Automated parking guidance, ultrasonic bay sensors, red/green LED slot indicators, ANPR boom barriers, and real-time electronic vacancy displays.",
    fullDescription:
      "Traffic congestion in commercial basements and multi-level parking lots creates frustration for visitors and employees while wasting security personnel time. Spaark Enterprises designs and deploys intelligent Parking Guidance Systems (PGS) and automated boom barrier access in Pune. Utilizing ultrasonic bay sensors, LED vacancy indicators, and dynamic LED directional signage, we guide drivers smoothly to empty parking spots.",
    metaTitle: "Smart Parking Guidance System (PGS) in Pune | Spaark Enterprises",
    metaDescription:
      "Intelligent parking guidance systems in Pune. Ultrasonic slot sensors, LED vacancy displays, ANPR boom barriers, and parking space optimization for commercial facilities.",
    icon: "SquareParking",
    heroHeadline: "Intelligent Parking Guidance & Space Management Systems",
    heroSubheadline:
      "Transform chaotic basements into orderly, stress-free parking facilities. Real-time ultrasonic bay detection, LED displays, and automated vehicle access.",
    targetAudience: [
      "Commercial Shopping Malls & Retail Multiplexes in Pune",
      "IT Tech Parks & Corporate Headquarters with Multi-Level Basements",
      "Hospitals & Medical Centers Requiring Priority Doctor/Ambulance Parking",
      "Residential Luxury Townships & Gated Societies",
      "Airport & Railway Station Transit Parking Complexes",
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Automated ANPR / RFID Barrier Entry",
        description:
          "Registered vehicles pass through automated boom barriers via high-speed RFID tags or Automatic Number Plate Recognition (ANPR) cameras.",
      },
      {
        step: "02",
        title: "Master Entry LED Vacancy Board",
        description:
          "At the main ramp, an outdoor digital LED sign shows live available spaces floor-by-floor (e.g. Basement 1: 14 Slots, Basement 2: 48 Slots).",
      },
      {
        step: "03",
        title: "Ultrasonic Bay Sensor Detection",
        description:
          "Mounted above each parking stall, ultrasonic sensors detect vehicle presence, changing the overhead indicator from bright Green to Red.",
      },
      {
        step: "04",
        title: "Central Parking Optimization Software",
        description:
          "Facility managers track peak occupancy hours, average dwell times, and identify unauthorized vehicles parked in reserved management bays.",
      },
    ],
    features: [
      {
        title: "Individual Ultrasonic Slot Sensors & Bright LEDs",
        description:
          "High-visibility dual-color LED indicators visible from down the aisle, allowing drivers to spot vacant spaces instantly without circling.",
      },
      {
        title: "Dynamic Variable Message Signs (VMS)",
        description:
          "Directional LED arrows placed at aisle intersections directing traffic toward zones with the highest concentration of vacant spaces.",
      },
      {
        title: "ANPR Fast Boom Barrier Automation",
        description:
          "High-speed servo boom barriers opening in under 1.5 seconds for recognized employee plates, eliminating morning entry bottle-necks.",
      },
      {
        title: "Reserved & VIP Bay Enforcement",
        description:
          "Program specific slots for executives, electric vehicle (EV) charging bays, or disabled visitors with unauthorized parking alert triggers.",
      },
      {
        title: "Reduced Basement Carbon Emissions",
        description:
          "Minimizing vehicle circling time significantly reduces carbon monoxide buildup, tire wear, and fuel consumption in enclosed basements.",
      },
      {
        title: "Revenue & Paid Parking Ticketing Integration",
        description:
          "Supports barcode ticketing dispensers, FASTag toll integration, and UPI QR payment machines for commercial paid parking venues.",
      },
    ],
    softwareCapabilities: [
      "Real-time graphical 2D/3D map of all parking bays",
      "FASTag payment gateway integration for automated parking fee deduction",
      "Occupancy analytics, turnover rates, and peak hour trends",
      "Restricted list / stolen vehicle number plate alerts",
    ],
    hardwareIntegration: [
      "Overhead ultrasonic transceivers with integrated LED domes",
      "Outdoor and indoor multi-color LED numeric matrix display boards",
      "High-speed torque motor boom barriers with safety loop detectors",
      "Long-range UHF RFID readers with windshield tag stickers",
    ],
    caseStudy: {
      title: "Basement Parking Guidance & FASTag Entry for a Commercial Mall in Pune",
      clientType: "Commercial Shopping Complex, West Pune",
      /* PLACEHOLDER: replace with real client/project details */
      clientNamePlaceholder: "Prominent Retail & Entertainment Center",
      challenge:
        "On weekends, cars queued out onto the main arterial road because the 450-car basement had no slot visibility, leading to gridlock inside the aisles.",
      solution:
        "Spaark Enterprises implemented an end-to-end Parking Guidance System with 450 ultrasonic bay sensors, 18 directional LED boards, and FASTag automated barriers.",
      outcome:
        "Reduced average parking search time from 12 minutes to under 3 minutes, eliminated street queue spillover, and increased parking turnover by 28%.",
    },
    formSpecifics: {
      questionLabel: "Parking Scope & Bay Capacity",
      options: [
        "50 – 150 Bays (Single Level Basement)",
        "151 – 400 Bays (Multi-Level Corporate Parking)",
        "400+ Bays (Commercial Mall / Tech Park)",
        "Boom Barrier + RFID / ANPR Entry Only",
        "Commercial FASTag Paid Parking Integration",
      ],
    },
    whatsappMessage:
      "Hi Spaark Enterprises, I would like to consult on a Smart Parking Guidance & Management System in Pune.",
    relatedSolutionSlugs: ["visitor-management-system", "time-attendance-system", "canteen-management-system"],
  },
];
