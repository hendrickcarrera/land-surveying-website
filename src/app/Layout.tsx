import { Outlet } from 'react-router-dom';
import { Compass } from 'lucide-react';
import Footer from './Footer';
import WelcomeModal from '../components/WelcomeModal';

// Single-page app: the header links are anchors to sections on the page
// (not routes), so plain `<a href="#...">` is correct here — no
// `NavLink`/router involved, same as an Angular app with in-page
// `fragment` scrolling instead of separate routed views.
function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-[#1F2229]">
      <header className="sticky top-0 z-50 bg-ink text-[#F5F1E8]">
        <nav className="flex items-center justify-between px-6 py-4 md:px-16">
          <a href="#top" className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-accent" strokeWidth={2} />
            <span className="font-display font-semibold tracking-tight">
              QUADRANT <span className="font-normal text-[#8A93A3]">SURVEYING</span>
            </span>
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hidden text-[#B7BEC9] hover:text-white sm:inline">
              Services
            </a>
            <a href="#gallery" className="hidden text-[#B7BEC9] hover:text-white sm:inline">
              Our Work
            </a>
            <a
              href="mailto:rbc01landsurvey@gmail.com?subject=Quote%20Request"
              className="bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Outlet renders the single index route's element —
            the equivalent of Angular's <router-outlet>. */}
        <Outlet />
      </main>

      <Footer />
      <WelcomeModal />
    </div>
  );
}

export default Layout;
