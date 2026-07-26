import { MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#DCD5C4] bg-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3 md:px-16">
        <div>
          <p className="font-display text-lg font-semibold text-[#1F2229]">
            Quadrant Surveying Services <span className="text-[#5B6270]">(Imus)</span>
          </p>
          <p className="mt-2 text-sm text-[#5B6270]">
            Boundary, topographic, ALTA, and construction surveying serving Imus and the
            surrounding area.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest text-[#8A93A3]">QUICK LINKS</p>
          <ul className="mt-3 space-y-1 text-sm text-[#5B6270]">
            <li>
              <a href="#top" className="hover:text-accent">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-accent">
                Our Work
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/QuadrantSurveyingServices"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs tracking-widest text-[#8A93A3]">CONTACT</p>
          <ul className="mt-3 space-y-2 text-sm text-[#5B6270]">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              2/F Blue Alley, Open Canal Road, Brgy. Malagasang 2C, Imus, Cavite
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+63468877329" className="hover:text-accent">
                (046) 887-7329
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:rbc01landsurvey@gmail.com" className="hover:text-accent">
                rbc01landsurvey@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:grant.crtz027@gmail.com" className="hover:text-accent">
                grant.crtz027@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#DCD5C4] px-6 py-4 text-center font-mono text-xs text-[#8A93A3]">
        © {year} QUADRANT SURVEYING SERVICES
      </div>
    </footer>
  );
}

export default Footer;
