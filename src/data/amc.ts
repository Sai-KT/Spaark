export interface AmcPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  target: string;
  description: string;
  features: string[];
  responseTime: string;
  preventiveVisits: string;
}

export interface AmcBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface AmcFaq {
  question: string;
  answer: string;
}

export const amcPlans: AmcPlan[] = [
  {
    id: "basic",
    name: "Basic Preventive AMC",
    target: "Small offices, clinics, retail stores & standard commercial setups",
    description:
      "Essential scheduled preventive maintenance and health checks to ensure your security and communication systems run without surprises.",
    responseTime: "Within 24 Hours",
    preventiveVisits: "Quarterly (4 Scheduled Visits / Year)",
    features: [
      "4 Scheduled quarterly preventive maintenance visits",
      "Camera lens cleaning, focus adjustment & field-of-view realignment",
      "NVR / DVR hard disk health diagnosis & recording log audits",
      "Power supply voltage checking & battery terminal cleaning",
      "Minor connectivity repair & connector re-crimping",
      "Labor charges included for scheduled maintenance visits",
      "Spare parts replacement charged at discounted enterprise rates",
    ],
  },
  {
    id: "standard",
    name: "Standard Non-Comprehensive AMC",
    badge: "Most Popular for Mid-Size Enterprises",
    isPopular: true,
    target: "Manufacturing facilities, corporate offices, schools & hospitals",
    description:
      "Our most popular tier. Unlimited breakdown calls, priority engineer dispatch, and thorough monthly checks to minimize operational downtime.",
    responseTime: "Within 6–8 Hours (Same-Day Dispatch in Pune/PCMC)",
    preventiveVisits: "Bi-Monthly (6 Scheduled Visits / Year)",
    features: [
      "6 Scheduled preventive visits per year",
      "Unlimited breakdown emergency call-outs with no extra labor fees",
      "Same-day on-site engineer dispatch for critical failures",
      "Quarterly deep dust cleaning of camera housings & rack equipment",
      "Firmware updates & network security patch applications",
      "Fire alarm smoke detector sensitivity testing & panel drills",
      "Free standby backup equipment provided during off-site repairs",
      "Spare parts charged at pre-agreed contract discount rates",
    ],
  },
  {
    id: "comprehensive",
    name: "Comprehensive All-Inclusive AMC",
    badge: "Zero Downtime Guarantee",
    target: "Continuous manufacturing plants, high-security data centers & corporate HQs",
    description:
      "Complete peace of mind. Covers both labor and replacement parts (motherboards, power supplies, camera units, sensors) with dedicated account manager.",
    responseTime: "Within 2–4 Hours Guaranteed SLA",
    preventiveVisits: "Monthly (12 Scheduled Visits / Year)",
    features: [
      "Monthly proactive inspection & diagnostic maintenance",
      "All replacement spare parts & consumables included (conditions apply)",
      "Guaranteed 2–4 hour emergency breakdown response SLA in Pune & PCMC",
      "Dedicated senior systems engineer assigned to your account",
      "Immediate free hot-swappable loaner equipment (cameras, switches, NVRs)",
      "Quarterly executive uptime reporting & infrastructure audit",
      "Form-B fire safety bi-annual statutory documentation assistance",
      "24/7 dedicated telephone support desk",
    ],
  },
];

export const amcChecklist: Array<{ category: string; tasks: string[] }> = [
  {
    category: "CCTV & Video Surveillance",
    tasks: [
      "Optical lens cleaning & elimination of cobwebs/dust build-up",
      "Inspection of weatherproof seals, glands, and conduit joints",
      "Diagnostic SMART health check on surveillance hard drives (bad sectors, write speed)",
      "Time synchronization across all cameras and recording servers",
      "Recording retention audit (verifying 30/60/90 days recording continuity)",
      "PoE switch port load testing & power fluctuation inspection",
    ],
  },
  {
    category: "Fire Alarm & Life Safety",
    tasks: [
      "Aerosol smoke testing on optical detectors across all designated zones",
      "Thermal sensor heat-probe responsiveness verification",
      "Manual Call Point (MCP) test activations with reset keys",
      "Panel backup battery load testing and electrolyte/voltage check",
      "Alarm hooter decibel levels and strobe flash synchronization",
      "Interlock verification (lift grounding, AHU cut-off, fire door release)",
    ],
  },
  {
    category: "Audio-Visual & Boardrooms",
    tasks: [
      "Laser projector filter cleaning & optical light engine diagnostics",
      "Interactive flat panel touch calibration and firmware updates",
      "Microphone beamforming array audio clarity and echo cancellation test",
      "Cable stress testing (HDMI, Type-C, USB pass-through tabletop cubbies)",
      "Master control processor & video matrix switcher reboot and diagnostics",
    ],
  },
  {
    category: "Access Control & Time Attendance",
    tasks: [
      "Biometric optical sensor prism cleaning and face camera calibration",
      "Electromagnetic lock holding force check & shear pin alignment",
      "Battery backup power supply (SMPS) drain and switchover tests",
      "Database backup of employee attendance records and punch logs",
      "Turnstile mechanical gear lubrication & safety sensor calibration",
    ],
  },
];

export const amcFaqs: AmcFaq[] = [
  {
    question: "What is the typical response time when an emergency breakdown occurs?",
    answer:
      "For clients in Pune and PCMC (including Hinjawadi, Chakan, Bhosari, and Talegaon), our Standard AMC ensures same-day on-site engineer dispatch within 6 to 8 hours. Comprehensive contract clients receive priority emergency dispatch within 2 to 4 hours.",
  },
  {
    question: "Does Spaark Enterprises provide AMC for systems installed by other vendors?",
    answer:
      "Yes. A significant portion of our AMC contracts are for existing infrastructure installed by third parties. Before onboarding, our technical team conducts a comprehensive site health audit to document all equipment, identify faulty wiring or aging components, and recommend any critical fixes before AMC inception.",
  },
  {
    question: "What is the difference between Comprehensive and Non-Comprehensive AMC?",
    answer:
      "Under a Non-Comprehensive AMC, all routine maintenance visits and breakdown labor charges are fully covered, while any replacement hardware components (e.g. replacement camera, new hard disk) are billed separately at discounted enterprise rates. Under a Comprehensive AMC, both technician labor and the replacement of approved hardware parts are bundled into the contract fee.",
  },
  {
    question: "What happens if a critical NVR or camera needs off-site lab repairs?",
    answer:
      "To prevent security blind spots, Spaark maintains an inventory of hot-standby equipment. If your 32-channel NVR, core network switch, or critical PTZ camera requires workshop servicing, we install a temporary standby loaner unit at zero extra charge while repairs are completed.",
  },
  {
    question: "Do you provide statutory Form-B compliance documentation for fire safety?",
    answer:
      "Yes. For our fire alarm AMC clients, our certified technicians conduct bi-annual statutory inspections and testing drills required under the Maharashtra Fire Prevention and Life Safety Measures Act, facilitating the necessary Form-B maintenance certification.",
  },
  {
    question: "How are AMC renewals and service visits scheduled and tracked?",
    answer:
      "Every client is assigned a digital service ticket. Following every preventive maintenance visit or breakdown call, our engineer issues a signed Service Report detailing all tasks performed, component health readings, and recommendations. Automated renewal reminders are sent 45 days prior to contract expiry.",
  },
];
