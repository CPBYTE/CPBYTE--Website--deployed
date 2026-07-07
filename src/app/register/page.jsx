import Link from "next/link";
import { CalendarX, Mail, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Registrations Closed | CPBYTE",
  description: "Registrations for the upcoming CPBYTE cohort are not open yet.",
};

export default function RegisterClosedPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6">
      <div className="glass-card max-w-md w-full p-8 md:p-10 text-center relative overflow-hidden border border-white/10 rounded-3xl bg-gray-950/40 backdrop-blur-md shadow-2xl">
        {/* Glow effect */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Icon container */}
        <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 shadow-inner">
          <CalendarX className="w-10 h-10 text-blue-400 animate-pulse" />
        </div>

        {/* Title */}
        <h1 
          className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Registrations <span className="gradient-text">Not Open</span> Yet
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
          Admissions for the upcoming CPBYTE cohort are currently closed. We are preparing something amazing for the next batch of builders, developers, and designers.
        </p>

        {/* Info Box */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 text-left">
          <h4 className="text-xs font-semibold uppercase text-blue-400 tracking-wider mb-1">
            Next Cohort Announcement
          </h4>
          <p className="text-xs text-gray-300">
            Keep an eye on our social handles and announcements. We will announce application dates soon.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 py-3 px-6 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white transition-all duration-300 text-sm font-semibold rounded-lg"
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
