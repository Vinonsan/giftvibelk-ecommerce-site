import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const categoryLinks = [
  { href: "/categories/birthday-gifts", label: "Birthday Gifts" },
  { href: "/categories/love-romance", label: "Love & Romance" },
  { href: "/categories/anniversary", label: "Anniversary" },
  { href: "/categories/custom-gifts", label: "Custom Gifts" },
];

const Footer = () => {
  return (
    <footer aria-label="Footer">
      <div className="mx-auto">
        <div className="bg-card px-8 py-6">
          
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 lg:gap-12">
            
            {/* Column 1 */}
            <div className="space-y-4 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo/siteicon.png"
                  alt="Giftvibelk logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <span className="text-xl font-bold text-black">
                  GiftVibe<span className="text-primary">LK</span>
                </span>
              </Link>

              <p className="text-base text-black/70">
                Thoughtful gifting across Sri Lanka with curated hampers,
                flowers, cakes, and custom surprises for every celebration.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="relative inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary pb-1">
                Quick Links
                <span className="absolute left-0 bottom-0 h-[2px] w-6 bg-primary rounded-full"></span>
              </h3>

              <ul className="mt-4 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Popular Gifts */}
            <div>
              <h3 className="relative inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary pb-1">
                Popular Gifts
                <span className="absolute left-0 bottom-0 h-[2px] w-6 bg-primary rounded-full"></span>
              </h3>

              <ul className="mt-4 space-y-2">
                {categoryLinks.map((link) => (
                  <li key={link.href} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="relative inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary pb-1">
                Contact
                <span className="absolute left-0 bottom-0 h-[2px] w-6 bg-primary rounded-full"></span>
              </h3>

              <div className="mt-4 space-y-3 text-sm text-muted-foreground">

                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <span>support@giftvibelk.com</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <span>+94 77 123 4567</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>Sri Lanka</span>
                </div>

              </div>


            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-primary/10 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
            
            <p>© 2026 Giftvibelk. All rights reserved.</p>

            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-primary transition">
                Terms & Conditions
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;