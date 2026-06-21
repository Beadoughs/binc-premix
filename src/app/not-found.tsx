import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20 bg-concrete-50">
      <div className="container-xl text-center max-w-xl">
        <div className="text-8xl font-black text-brand-200 mb-4">404</div>
        <h1 className="text-3xl font-extrabold text-dark mb-3">Page Not Found</h1>
        <p className="text-concrete-500 mb-8">
          Sorry, we couldn&apos;t find the page you were looking for. It may have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary py-3 px-7">
            <Home size={16} />
            Back to Home
          </Link>
          <a href={PHONE_HREF} className="btn-secondary py-3 px-7">
            <Phone size={16} />
            Call {PHONE}
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-concrete-200">
          <p className="text-concrete-400 text-sm mb-2">Need to speak with someone?</p>
          <a href={PHONE_HREF} className="text-brand-600 font-bold hover:text-brand-700 transition-colors">
            <Phone size={16} className="inline mr-1" />
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
