import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Provider Information */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">
              Institute for AI Innovation
            </h3>
            <div className="space-y-2">
              <p className="text-sm">Operated by Eula Properties LLC</p>
              <p className="text-sm">
                <a
                  href="https://InstituteForAIInnovation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  InstituteForAIInnovation.org
                </a>
              </p>
              <p className="text-sm">
                <a
                  href="tel:+17139034699"
                  className="hover:text-blue-400 transition-colors"
                >
                  (713) 903-4699
                </a>
              </p>
              <p className="text-sm">
                <a
                  href="mailto:info@instituteforaiinnovation.org"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@instituteforaiinnovation.org
                </a>
              </p>
            </div>
          </div>

          {/* Houston Locations */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Locations</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium text-gray-200">Houston Location 1</p>
                <p>11139 Homestead Rd</p>
                <p>Houston, TX 77016</p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-200">Houston Location 2</p>
                <p>9132 Pembrook St</p>
                <p>Houston, TX 77016</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin/documents"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Workforce Partners Portal
                </Link>
              </li>
              <li>
                <a
                  href="#program"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Program Overview
                </a>
              </li>
              <li>
                <a
                  href="#apply"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Policies */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">
              Legal & Compliance
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin/documents/eeo-policy"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  EEO Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/documents/refund-policy"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/documents/grievance"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Grievance Procedure
                </Link>
              </li>
            </ul>
            <div className="pt-2 text-sm">
              <p className="text-gray-400">
                SOC Code: 15-1232
                <br />
                <span className="text-xs">
                  Computer User Support Specialists
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2025 Institute for AI Innovation. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              An Equal Opportunity Training Provider
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
