import { NavLink, Outlet } from 'react-router-dom';

// Every route below renders inside this shell, so the nav only needs to exist once.
// This is the direct equivalent of an Angular app shell component with a <router-outlet>.
function Layout() {
  // Shared styling for each nav link. NavLink calls this with { isActive },
  // which React Router computes for us by comparing the link's `to` against
  // the current URL — there's no [routerLinkActive] directive to attach.
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium ${
      isActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
    }`;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200">
        <nav className="flex items-center gap-1 px-6 py-4">
          <NavLink to="/" className={navLinkClassName} end>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClassName}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClassName}>
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="flex-1">
        {/* Outlet renders whichever child route matched the current URL —
            the equivalent of Angular's <router-outlet>. */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
