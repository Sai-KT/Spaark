import { Metadata } from "next";
import { companyData } from "@/data/company";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  MessageSquare,
  Building,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Spaark Enterprises Old Sangavi, Pune",
  description:
    "Get in touch with Spaark Enterprises in Old Sangavi, Pune. Direct phone, email, office address, and contact form for B2B CCTV, fire alarm, and AV inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block mb-3">
              Direct Engineering Consultation
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Contact Spaark Enterprises in Pune
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Have an upcoming project, need an urgent site inspection, or seeking breakdown AMC
              support? Connect with our Old Sangavi engineering desk directly via phone, WhatsApp, or
              our online dispatch form.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Address Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Head Office & Service Desk
                </h2>

                <div className="space-y-5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Office Address</span>
                      <p className="text-slate-600">
                        {companyData.address.street}, {companyData.address.locality},{" "}
                        {companyData.address.city}, {companyData.address.state} —{" "}
                        {companyData.address.pincode}, India.
                      </p>
                      <p className="text-slate-400 text-xs mt-1">
                        Landmark: {companyData.address.landmark}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Direct Telephones</span>
                      <a
                        href={`tel:${companyData.phoneRaw}`}
                        className="text-navy-900 font-bold hover:text-amber-600 transition block"
                      >
                        {companyData.phone} (Sales & Inquiries)
                      </a>
                      <span className="text-slate-500 text-xs block">
                        24/7 AMC Breakdown Line available for contracted clients
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Official Email</span>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-navy-900 font-semibold hover:text-amber-600 transition"
                      >
                        {companyData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Operational Hours</span>
                      <p className="text-slate-600">{companyData.businessHours.days}</p>
                      <p className="text-slate-600">{companyData.businessHours.hours}</p>
                      <p className="text-amber-700 font-semibold text-xs mt-1">
                        {companyData.businessHours.support}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Prompt */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${companyData.whatsappRaw}?text=Hi%20Spaark%20Enterprises,%20I%20would%20like%20to%20connect%20with%20your%20Pune%20office.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition shadow-md"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

              {/* Service Areas Box */}
              <div className="rounded-3xl bg-navy-900 text-white p-7 border border-slate-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                  Immediate On-Site Support Corridors
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Our mobile engineering vans operate across all industrial and commercial nodes of
                  Pune and PCMC:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  {companyData.serviceAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Interactive Google Map Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Location Map
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Find Our Old Sangavi Office</h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Easily accessible from Aundh, Dapodi, Pimple Gurav, and the Old Pune-Mumbai Highway.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/Spaark+Enterprises/@18.5730856,73.82431,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b8c6172b9513:0x8f20afb32ca78581!8m2!3d18.5730856!4d73.8268903!16s%2Fg%2F11cks6m6vr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition shrink-0"
            >
              <Navigation className="h-3.5 w-3.5 text-amber-400" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Embedded Map iFrame */}
          <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
            <iframe
              title="Spaark Enterprises Location in Old Sangavi, Pune"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.266200236173!2d73.82431!3d18.5730856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8c6172b9513%3A0x8f20afb32ca78581!2sSpaark%20Enterprises!5e0!3m2!1sen!2sin!4v1725300000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
