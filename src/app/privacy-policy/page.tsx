import { Metadata } from "next";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Spaark Enterprises Pune",
  description:
    "Privacy Policy for Spaark Enterprises. Information on data collection, client privacy, B2B quotation inquiries, surveillance footage handling, and legal compliance.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-6 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: January 2025 • Applicable to Spaark Enterprises and website visitors
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Introduction & Overview</h2>
            <p>
              Spaark Enterprises ("Company," "we," "us," or "our"), having its principal office at{" "}
              {companyData.address.street}, {companyData.address.locality}, {companyData.address.city},{" "}
              {companyData.address.state} {companyData.address.pincode}, India, respects the privacy of our
              commercial clients, website visitors, and business partners.
            </p>
            <p className="mt-2">
              This Privacy Policy explains how we collect, process, maintain, and safeguard personal and
              business information when you visit our website (
              <a href="https://www.spaarkenterprises.com" className="text-amber-700 underline">
                www.spaarkenterprises.com
              </a>
              ), request quotations, engage our on-site systems integration services, or enter into an
              Annual Maintenance Contract (AMC). We comply with the provisions of the Information
              Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures
              and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data
              Protection Act, 2023 (DPDPA).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p>We only collect information necessary to provide commercial quotes and technical services:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Contact Information:</strong> Name, business email address, corporate telephone/mobile
                numbers, designation, and company name provided via our contact or quote forms.
              </li>
              <li>
                <strong>Project & Facility Parameters:</strong> Building type, geographical location within
                Pune/Maharashtra, estimated number of cameras/doors/extensions, and technical architectural
                requirements.
              </li>
              <li>
                <strong>Technical & Log Data:</strong> Internet Protocol (IP) addresses, browser type, operating
                system, and referral source collected automatically via standard server logs for site security
                and analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              3. Client Data & On-Site Surveillance Footage
            </h2>
            <p>
              In our capacity as a systems integrator installing and maintaining CCTV surveillance, biometric
              access control, and time-attendance platforms:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Client Ownership:</strong> All surveillance video recordings, biometric templates,
                and access logs generated on client premises remain the exclusive property of the respective
                client organization.
              </li>
              <li>
                <strong>Zero Remote Snooping:</strong> Spaark Enterprises does not harvest, store, or stream
                client video or biometric data to external servers. Configuration credentials, NVR passwords,
                and administrative privileges are transferred to the client upon commissioning.
              </li>
              <li>
                <strong>Confidentiality During AMC:</strong> Our field engineers adhere to strict
                non-disclosure obligations during routine diagnostics, backup verifications, and hardware
                servicing visits.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. How We Use Collected Information</h2>
            <p>We utilize inquiry and contact details strictly for legitimate B2B purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li>To prepare customized, itemized bills of materials (BOM) and project quotations.</li>
              <li>To coordinate site surveys, cable pathway inspections, and technician dispatch.</li>
              <li>To service warranty claims and send scheduled AMC preventive maintenance reminders.</li>
              <li>To communicate service advisories, firmware security patches, or statutory Form-B deadlines.</li>
              <li>We <strong>never sell, lease, or distribute</strong> your contact details to third-party marketing brokers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Data Retention & Security Measures</h2>
            <p>
              We implement industry-standard physical, technical, and administrative controls to protect
              information collected through our digital forms from unauthorized access, alteration, or
              disclosure. Data transmitted through our website forms is encrypted using Transport Layer
              Security (TLS/SSL).
            </p>
            <p className="mt-2">
              Business contact information is retained only for the duration of the commercial relationship or
              as required by Indian statutory accounting, taxation, and legal dispute limitation periods.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Cookies & Tracking Technologies</h2>
            <p>
              Our website uses basic, privacy-preserving session cookies solely to enhance navigation, verify
              form submissions, and evaluate anonymous aggregate traffic patterns. You may configure your web
              browser to decline cookies without affecting your ability to browse our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">7. Your Statutory Rights</h2>
            <p>Under Indian data protection laws, you have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li>Request access to the personal contact details we hold regarding your business account.</li>
              <li>Request the correction or update of inaccurate or outdated contact information.</li>
              <li>Request the deletion of your inquiry records if no active warranty or contract exists.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">8. Grievance Officer & Contact</h2>
            <p>
              For questions regarding this Privacy Policy or our data handling practices, contact our
              designated Grievance Officer:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900">Grievance Officer, Spaark Enterprises</div>
              <div>Address: {companyData.address.street}, {companyData.address.locality}, {companyData.address.city}, {companyData.address.state} 411027, India.</div>
              <div>Email: {companyData.email}</div>
              <div>Telephone: {companyData.phone}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
