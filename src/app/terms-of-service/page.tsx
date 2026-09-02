import { Metadata } from "next";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Service | Spaark Enterprises Pune",
  description:
    "Terms of Service governing B2B systems integration, equipment supply, on-site installation, and Annual Maintenance Contracts (AMC) by Spaark Enterprises.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-6 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
            Commercial Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Effective Date: January 1, 2025 • Governs Systems Integration & Maintenance Agreements
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you
              (whether individually or on behalf of an enterprise, corporation, educational institute,
              or commercial entity, collectively the "Client") and Spaark Enterprises ("Company," "we,"
              "us," or "our"), regarding your access to our website and any purchase of hardware, structured
              cabling, engineering commissioning, or Annual Maintenance Contract (AMC) services.
            </p>
            <p className="mt-2">
              By requesting quotations, issuing a Purchase Order (PO), or signing a service agreement, you
              confirm that you have read, understood, and agreed to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Quotations, Pricing & Purchase Orders</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Validity of Quotes:</strong> All written quotations and bills of materials (BOM)
                issued by Spaark Enterprises are valid for a period of <strong>30 calendar days</strong> from
                the date of issue, unless expressly stated otherwise, due to OEM component price and
                currency fluctuations.
              </li>
              <li>
                <strong>Taxes & Duties:</strong> Unless explicitly itemized as tax-inclusive, all prices are
                exclusive of Goods and Services Tax (GST) and applicable local cess, which will be charged at
                statutory rates.
              </li>
              <li>
                <strong>Acceptance:</strong> Work commences upon receipt of an authorized Purchase Order (PO)
                accompanied by the agreed mobilization advance payment.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              3. Site Readiness & Client Responsibilities
            </h2>
            <p>
              To ensure timely completion of installation, cabling, and commissioning schedules, the Client
              agrees to provide:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Unobstructed Site Access:</strong> Safe and timely access to work areas, shafts,
                ceiling crawl spaces, server rooms, and perimeter fence lines during agreed working hours.
              </li>
              <li>
                <strong>Stable Power & Civil Conduits:</strong> Continuous raw and UPS 230V AC power, earthing
                points, and any designated civil trenching or core cutting unless contracted to Spaark.
              </li>
              <li>
                <strong>Network IP Provisions:</strong> Necessary static IP addresses, subnets, and internet
                broadband bandwidth required for remote CCTV viewing or cloud attendance sync.
              </li>
              <li>
                <strong>Site Security:</strong> Safe lockable storage on-site for staging equipment and tools
                prior to installation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              4. Equipment Warranties & OEM Guarantees
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Hardware Warranty:</strong> Equipment supplied (cameras, NVRs, fire panels, IFPD
                displays, EPABX chassis) carries the standard manufacturer warranty (typically 1 to 3 years)
                against manufacturing defects.
              </li>
              <li>
                <strong>Installation Workmanship:</strong> Spaark Enterprises provides a <strong>90-day
                workmanship warranty</strong> covering termination quality, connector crimping, and mounting
                integrity from the date of final commissioning hand-over.
              </li>
              <li>
                <strong>Warranty Exclusions:</strong> Warranties do not cover damage caused by lightning
                strikes, voltage surges, physical impact, liquid ingress (unless IP-rated as specified),
                rodent infestation, or unauthorized repair attempts by third-party technicians.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              5. Annual Maintenance Contracts (AMC) & Service SLAs
            </h2>
            <p>For clients holding an active Annual Maintenance Contract with Spaark Enterprises:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Preventive Maintenance:</strong> Visits are scheduled based on the chosen tier (Basic,
                Standard, or Comprehensive). Clients must provide reasonable access during regular business hours.
              </li>
              <li>
                <strong>Breakdown Response SLAs:</strong> Emergency response times (typically 2 to 8 business
                hours in Pune and PCMC) apply to critical system halts during standard operating hours.
              </li>
              <li>
                <strong>Non-Comprehensive Exclusions:</strong> Under Non-Comprehensive AMCs, replacement spare
                parts (sensors, hard drives, lenses, boards) will be billed separately upon formal approval.
              </li>
              <li>
                <strong>Termination:</strong> Either party may terminate an annual maintenance contract upon 30
                days' written notice. Unused prepaid fees are subject to pro-rata reconciliation minus administrative costs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Limitation of Liability</h2>
            <p>
              While Spaark Enterprises designs and installs systems in strict accordance with professional
              standards:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>No Guarantee Against Crime or Fire:</strong> Security cameras, access controls, and
                fire detection systems are deterrent, monitoring, and warning devices. Spaark Enterprises does
                not warrant that the system cannot be compromised or that it will prevent all burglaries, fire
                losses, or unauthorized intrusions.
              </li>
              <li>
                <strong>Consequential Damages:</strong> In no event shall Spaark Enterprises be liable for any
                indirect, incidental, special, punitive, or consequential damages (including loss of business,
                data loss, or business interruption).
              </li>
              <li>
                <strong>Liability Cap:</strong> To the maximum extent permitted by applicable Indian law, our
                total aggregate liability under any contract shall be strictly capped at the total service fees
                paid to us by the Client under the specific work order in the preceding 6 months.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              7. Governing Law & Dispute Jurisdiction
            </h2>
            <p>
              These Terms, all contracts, and any disputes arising out of our services shall be governed by and
              construed in accordance with the substantive laws of India.
            </p>
            <p className="mt-2">
              Any dispute, controversy, or claim arising out of or relating to this agreement shall be settled
              through mutual executive negotiation in good faith. If unresolved within 30 days, the courts of
              competent jurisdiction located in <strong>Pune, Maharashtra, India</strong> shall have exclusive
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">8. Contact Information</h2>
            <p>
              For legal notices, contract inquiries, or clarification regarding these Terms, contact:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900">Legal & Contracts Desk, Spaark Enterprises</div>
              <div>Office: {companyData.address.street}, {companyData.address.locality}, {companyData.address.city}, {companyData.address.state} 411027, India.</div>
              <div>Email: {companyData.email}</div>
              <div>Telephone: {companyData.phone}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
