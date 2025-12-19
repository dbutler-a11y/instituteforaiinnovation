import { Globe, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LocationsSection() {
  const houstonLocations = [
    {
      address: "11139 Homestead Rd",
      city: "Houston, TX 77016",
    },
    {
      address: "9132 Pembrook St",
      city: "Houston, TX 77016",
    },
  ];

  return (
    <section id="locations" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How You'll Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible learning options designed to fit your schedule and lifestyle
          </p>
        </div>

        {/* Primary Online Delivery */}
        <div className="mb-8">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default" className="text-xs sm:text-sm">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      Online Delivery
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                    Primarily delivered online - learn from anywhere
                  </h3>
                  <p className="text-gray-600">
                    Access your coursework and training materials from the comfort of your home
                    or any location with internet access. Our online platform provides a
                    seamless learning experience with recorded sessions, interactive modules,
                    and 24/7 resource availability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* In-Person Support & Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Houston Locations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                In-Person Support Available
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Need hands-on assistance? Visit us at our Houston locations:
              </p>
              <div className="space-y-4">
                {houstonLocations.map((location, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors"
                  >
                    <p className="font-semibold text-gray-900">{location.address}</p>
                    <p className="text-sm text-gray-600">{location.city}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        location.address + ", " + location.city
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-2"
                    >
                      Get directions
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Flexible Scheduling */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Flexible Scheduling Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We understand you have commitments. That's why we offer:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Self-Paced Learning</p>
                    <p className="text-sm text-gray-600">
                      Complete modules on your own schedule
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Evening & Weekend Sessions</p>
                    <p className="text-sm text-gray-600">
                      Options for working professionals
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">No Fixed Class Times</p>
                    <p className="text-sm text-gray-600">
                      Access materials 24/7 at your convenience
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 sm:h-80 flex items-center justify-center relative">
            <div className="text-center z-10">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Houston Service Area</p>
              <p className="text-sm text-gray-500">Interactive map coming soon</p>
            </div>
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
