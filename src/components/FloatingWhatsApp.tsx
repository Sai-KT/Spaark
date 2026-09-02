"use client";

import { usePathname } from "next/navigation";
import { companyData } from "@/data/company";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const pathMessageMap: Record<string, string> = {
  "/services/cctv-surveillance-pune":
    "Hi Spaark Enterprises, I'm interested in commercial CCTV surveillance installation for my facility in Pune.",
  "/services/fire-alarm-system":
    "Hi Spaark Enterprises, I would like to inquire about Fire Alarm System installation & Form-B compliance in Pune.",
  "/services/projectors-interactive-panels":
    "Hi Spaark Enterprises, I'm interested in 4K Interactive Flat Panels / Projectors for our meeting rooms/classrooms.",
  "/services/video-conferencing-solutions":
    "Hi Spaark Enterprises, I would like to discuss Video Conferencing solutions for our office boardrooms in Pune.",
  "/services/epabx-system":
    "Hi Spaark Enterprises, I'm inquiring about EPABX & IP Telephony system installation for our facility.",
  "/services/public-address-system":
    "Hi Spaark Enterprises, I would like to get a quote for a Public Address (PA) and voice evacuation system.",
  "/services/access-control-system":
    "Hi Spaark Enterprises, I'm interested in Biometric Access Control and Door Security Systems in Pune.",
  "/solutions/time-attendance-system":
    "Hi Spaark Enterprises, I would like to consult on a Biometric Time & Attendance management system.",
  "/solutions/visitor-management-system":
    "Hi Spaark Enterprises, I'm interested in a Digital Visitor Management System (VMS) for our reception desk.",
  "/solutions/canteen-management-system":
    "Hi Spaark Enterprises, I would like information regarding automated Canteen Management systems.",
  "/solutions/parking-guidance-system":
    "Hi Spaark Enterprises, I'm inquiring about a Smart Parking Guidance & Boom Barrier system in Pune.",
  "/amc-service":
    "Hi Spaark Enterprises, I would like to discuss an Annual Maintenance Contract (AMC) for our security infrastructure.",
  "/projects":
    "Hi Spaark Enterprises, I reviewed your project portfolio and would like to discuss a similar installation.",
  "/get-a-quote":
    "Hi Spaark Enterprises, I would like to get an official quote for our company's security/AV requirement.",
  "/contact":
    "Hi Spaark Enterprises, I would like to schedule an on-site consultation in Pune.",
};

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentMessage =
    pathMessageMap[pathname] ||
    "Hi Spaark Enterprises, I would like to get a quote and consultation for security & AV solutions in Pune.";

  const whatsappUrl = `https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(
    currentMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      {/* Tooltip on hover/click */}
      {isOpen && (
        <div className="mb-3 max-w-xs rounded-xl bg-white p-3.5 shadow-2xl border border-slate-200 text-xs text-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 mb-1.5">
            <span className="font-semibold text-slate-900 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Spaark Sales Desk
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 font-bold"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
          <p className="text-slate-600 mb-2">
            Chat directly with our Pune system engineers for fast quotes & site surveys.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-medium bg-emerald-600 hover:bg-emerald-700 text-white py-1.5 px-3 rounded-lg transition"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
      </div>
    </div>
  );
}
