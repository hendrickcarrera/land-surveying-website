function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-slate-900">
            Quadrant Surveying Services <span className="text-slate-500">(Imus)</span>
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Boundary, topographic, ALTA, and construction surveying serving Imus and the
            surrounding area.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Quick Links</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>
              <a href="#top" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/QuadrantSurveyingServices"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>2/F Blue Alley, Open Canal Road, Brgy. Malagasang 2C, Imus, Cavite</li>
            <li>
              <a href="tel:+63468877329" className="hover:text-blue-600">
                (046) 887-7329
              </a>
            </li>
            <li>
              <a href="mailto:rbc01landsurvey@gmail.com" className="hover:text-blue-600">
                rbc01landsurvey@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:grant.crtz027@gmail.com" className="hover:text-blue-600">
                grant.crtz027@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-500">
        © {year} Quadrant Surveying Services. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
