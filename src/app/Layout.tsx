import { Outlet } from 'react-router-dom';
import Footer from './Footer';

// Single-page app: the header links are anchors to sections on the page
// (not routes), so plain `<a href="#...">` is correct here — no
// `NavLink`/router involved, same as an Angular app with in-page
// `fragment` scrolling instead of separate routed views.
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200">
        <nav className="flex items-center gap-1 px-6 py-4">
          <a href="#top" className="mr-4 text-lg font-semibold text-slate-900">
            Quadrant Surveying Services <span className="text-slate-500">(Imus)</span>
          </a>
          <a
            href="#services"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            Services
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Outlet renders the single index route's element —
            the equivalent of Angular's <router-outlet>. */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
