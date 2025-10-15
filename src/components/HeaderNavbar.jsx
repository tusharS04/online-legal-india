import React, { useState } from "react";

// Full Header + Navbar + Hero section for OnlineLegalIndia clone
// Now includes service icons, exact layout, and image section styled with Tailwind

export default function HeaderNavbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const navLinks = [
    {
      title: "Trademark",
      items: [
        "Trademark Registration",
        "Trademark Objection",
        "Trademark Renewal",
      ],
    },
    {
      title: "Company Registration",
      items: ["Private Limited", "LLP", "One Person Company"],
    },
    {
      title: "ISO Certification",
      items: ["ISO 9001", "ISO 14001", "ISO 22000"],
    },
    {
      title: "Licenses",
      items: ["FSSAI License", "Import Export Code", "Trade License"],
    },
    {
      title: "Tax & Compliance",
      items: ["GST Registration", "GST Return", "IT Filing"],
    },
    {
      title: "Consumer Dispute",
      items: ["Online Complaint", "Resolution Portal"],
    },
    { title: "All Services", items: [] },
  ];

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-[#122B49] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h2l3.6 7.59-1.35 2.44A1 1 0 008 17h10v-2H8.42a.25.25 0 01-.22-.13L9 13h7a1 1 0 00.92-.61L20 4H6"
                />
              </svg>
              <span>0806602XXXX</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v1a4 4 0 01-8 0v-1m8 0H8"
                />
              </svg>
              <span>info@onlinelegalindia.com</span>
            </div>
          </div>

          <a href="#" className="text-xs hover:underline">
            Already registered? Login now
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-[#f59e0b]"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
            <path
              d="M8 12l2 2 4-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold text-lg text-[#122B49]">
            Online Legal India
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link, index) => (
            <div
              key={link.title}
              className="relative group"
              onMouseEnter={() => setDropdown(index)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="hover:text-[#f59e0b] transition-colors">
                {link.title}
              </button>

              {link.items.length > 0 && dropdown === index && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md border w-48 z-50 animate-fadeIn">
                  {link.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#f59e0b]/10 hover:text-[#122B49]"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="text-sm px-4 py-2 border border-[#122B49] text-[#122B49] rounded-md hover:bg-[#122B49] hover:text-white transition">
            Call Us
          </button>
          <a
            href="#"
            className="text-sm px-4 py-2 bg-[#f59e0b] text-white rounded-md shadow hover:bg-[#e48d00] transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-white animate-fadeIn">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <details key={link.title} className="border-b pb-2">
                <summary className="cursor-pointer py-1 font-medium text-gray-700 hover:text-[#f59e0b]">
                  {link.title}
                </summary>
                {link.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block pl-4 text-sm text-gray-600 hover:text-[#122B49]"
                  >
                    {item}
                  </a>
                ))}
              </details>
            ))}
            <div className="flex gap-2 mt-3">
              <button className="flex-1 py-2 border border-[#122B49] rounded-md">
                Call Us
              </button>
              <a
                href="#"
                className="flex-1 py-2 bg-[#f59e0b] text-center text-white rounded-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-[#122B49] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-4">
              Registration to Compliance <br /> — We've Got You Covered!
            </h1>
            <ul className="space-y-2 mb-6">
              {[
                "Trademark",
                "Company Registration",
                "ISO Certification",
                "Licenses",
                "Tax & Compliance",
                "Consumer Dispute",
                "IT Services",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-[#f59e0b]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Google Rating</span>
              <span className="font-semibold text-yellow-300">4.4 ★</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/hero-ceo.jpg"
              alt="CEO"
              className="rounded-lg shadow-lg w-80 lg:w-[400px] border-4 border-white/20"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-[url('/assets/hero-bg-pattern.svg')] opacity-10"></div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
      `}</style>
    </header>
  );
}
