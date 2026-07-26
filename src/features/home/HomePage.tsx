import { useState } from 'react';
import {
  ShieldCheck,
  Clock,
  MapPin,
  ArrowUpRight,
  Phone,
  Mail,
  Compass,
  Layers,
  Combine,
  FileCheck,
  Mountain,
  Droplets,
  TreePine,
  RotateCcw,
  Map,
  Wrench,
  Settings2,
  HardHat,
  ClipboardCheck,
} from 'lucide-react';
import ImageLightbox from '../../components/ImageLightbox';
import qss2 from '../../assets/QSS_2.jpg';
import qss3 from '../../assets/QSS_3.jpg';
import qss4 from '../../assets/QSS_4.jpg';
import qss5 from '../../assets/QSS_5.jpg';
import qss6 from '../../assets/QSS_6.jpg';

const trustPoints = [
  { icon: ShieldCheck, label: 'Licensed Surveying Team' },
  { icon: Clock, label: 'Fast, Clear Quotes' },
  { icon: MapPin, label: 'Serving Imus & Cavite' },
];

const gallery = [
  {
    src: qss2,
    caption: 'Drone survey in progress at a residential site',
    size: 'tall',
  },
  {
    src: qss5,
    caption: 'Survey crew conducting a relocation and topographic survey',
    size: 'wide',
  },
  { src: qss6, caption: 'GNSS survey rover set up in the field', size: 'normal' },
  { src: qss4, caption: 'Survey equipment set up in an open field', size: 'normal' },
  {
    src: qss3,
    caption: 'Aerial topographic survey equipment ready for deployment',
    size: 'wide',
  },
];

const steps = [
  {
    n: '01',
    title: 'Send your details',
    desc: 'Share your title, lot location, and what you need surveyed for — permitting, sale, or a dispute.',
  },
  {
    n: '02',
    title: 'Get a fixed quote',
    desc: 'We review your details and send a clear, no-obligation quote.',
  },
  {
    n: '03',
    title: 'We survey on-site',
    desc: 'Our team does the fieldwork with GNSS-grade equipment, on the schedule we agreed.',
  },
  {
    n: '04',
    title: 'Signed & sealed results',
    desc: 'You get a signed, sealed survey plan ready for titling, permits, or your engineer.',
  },
];

const serviceGroups = [
  {
    group: 'Boundary & Legal',
    items: [
      {
        icon: Compass,
        name: 'Relocation & Verification Survey',
        desc: 'Re-establish and verify boundary corners and lines against existing titles.',
        tag: 'SUR-01',
      },
      {
        icon: Layers,
        name: 'Subdivision Survey',
        desc: 'Divide a parcel of land into two or more lots for sale, development, or titling.',
        tag: 'SUR-02',
      },
      {
        icon: Combine,
        name: 'Consolidation Survey',
        desc: 'Merge multiple adjoining lots into a single parcel.',
        tag: 'SUR-03',
      },
      {
        icon: FileCheck,
        name: 'Land Title Verification & Technical Research',
        desc: 'Research and verification of land titles and technical descriptions.',
        tag: 'SUR-04',
      },
    ],
  },
  {
    group: 'Mapping & Topographic',
    items: [
      {
        icon: Mountain,
        name: 'Aerial Topographic Survey',
        desc: 'Drone-based mapping capturing elevation, contours, and site features quickly and accurately.',
        tag: 'MAP-01',
      },
      {
        icon: Droplets,
        name: 'Hydrographic Survey',
        desc: 'Mapping of waterways, shorelines, and underwater terrain.',
        tag: 'MAP-02',
      },
      {
        icon: TreePine,
        name: 'Tree Tagging Survey',
        desc: 'Inventory and tagging of trees on a site, often required for permits or clearing.',
        tag: 'MAP-03',
      },
      {
        icon: RotateCcw,
        name: 'Resurvey & Amendment Survey',
        desc: 'Correct or update existing survey records to reflect current site conditions.',
        tag: 'MAP-04',
      },
      {
        icon: Map,
        name: 'Lot Plan with Vicinity Map',
        desc: 'Prepared lot plans complete with vicinity maps for permitting and reference.',
        tag: 'MAP-05',
      },
    ],
  },
  {
    group: 'Construction Support',
    items: [
      {
        icon: Wrench,
        name: 'Engineering Survey',
        desc: 'Site data collection supporting design and construction planning.',
        tag: 'ENG-01',
      },
      {
        icon: Settings2,
        name: 'Detailed Engineering Survey',
        desc: 'In-depth site surveys supporting detailed engineering design.',
        tag: 'ENG-02',
      },
      {
        icon: HardHat,
        name: 'Construction Survey',
        desc: 'Staking and layout support to keep your project on plan and on schedule.',
        tag: 'ENG-03',
      },
      {
        icon: ClipboardCheck,
        name: 'As-Built Survey',
        desc: 'Post-construction survey documenting actual built conditions against approved plans.',
        tag: 'ENG-04',
      },
    ],
  },
];

function HomePage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(
    null,
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (image: { src: string; caption: string }) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
  };

  return (
    <div id="top">
      {/* HERO */}
      <header className="relative flex min-h-[560px] items-center overflow-hidden bg-gradient-to-br from-ink via-ink to-[#1E2430] px-6 py-24 text-[#F5F1E8] md:px-16">
        <div className="relative max-w-2xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {trustPoints.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-1.5 border border-white/10 bg-black/30 px-3 py-1.5 text-xs"
              >
                <t.icon className="h-3.5 w-3.5 text-accent" />
                <span className="text-[#E8E4D9]">{t.label}</span>
              </div>
            ))}
          </div>
          <h1 className="mb-5 font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
            Precise Land Surveying for Imus and Beyond
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-[#D8D3C6]">
            Quadrant Surveying Services delivers accurate, reliable boundary, topographic, and
            construction surveys for property owners, developers, and contractors.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:rbc01landsurvey@gmail.com?subject=Quote%20Request"
              className="flex items-center gap-2 bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#gallery"
              className="border border-white/30 px-6 py-3 font-medium text-[#F5F1E8] transition-colors hover:bg-white/10"
            >
              See Our Work
            </a>
          </div>
        </div>
      </header>

      {/* GALLERY */}
      <section id="gallery" className="bg-paper px-6 py-16 md:px-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="font-mono text-xs tracking-widest text-accent">
              OUR WORK IN THE FIELD
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#1F2229] md:text-3xl">
              Real sites, real crews, real results.
            </h2>
          </div>
          <a
            href="https://www.facebook.com/QuadrantSurveyingServices"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blueprint hover:underline"
          >
            More on Facebook <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid auto-rows-[140px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g) => (
            <button
              key={g.caption}
              type="button"
              onClick={() => openLightbox(g)}
              aria-label={`View full image: ${g.caption}`}
              className={`group relative overflow-hidden bg-[#DCD5C4] ${
                g.size === 'tall' ? 'row-span-2' : g.size === 'wide' ? 'col-span-2' : ''
              }`}
            >
              <img src={g.src} alt={g.caption} className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="font-mono text-xs leading-snug text-white">{g.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-ink px-6 py-16 text-[#F5F1E8] md:px-16">
        <span className="font-mono text-xs tracking-widest text-accent">HOW IT WORKS</span>
        <h2 className="mt-3 mb-10 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          From first message to signed plan, in four steps.
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="border-t-2 border-accent pt-4">
              <span className="font-mono text-sm text-[#8A93A3]">{s.n}</span>
              <h3 className="mt-2 mb-2 font-display font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-[#B7BEC9]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-paper px-6 py-20 md:px-16">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-accent">OUR SERVICES</span>
          <h2 className="mt-3 mb-3 font-display text-3xl font-semibold tracking-tight text-[#1F2229]">
            Full-scope surveying, organized by what you need.
          </h2>
          <p className="text-[#5B6270]">
            Quadrant Surveying Services offers a full range of boundary, topographic, and
            engineering surveys for property owners, developers, and contractors in Imus and the
            surrounding area.
          </p>
        </div>

        <div className="space-y-14">
          {serviceGroups.map((group) => (
            <div key={group.group}>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-blueprint">
                  {group.group.toUpperCase()}
                </span>
                <div className="h-px flex-1 bg-[#DCD5C4]" />
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {group.items.map((s) => (
                  <div
                    key={s.name}
                    className="border-l-2 border-accent bg-white p-6 transition-shadow hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <s.icon className="h-6 w-6 text-blueprint" strokeWidth={1.5} />
                      <span className="font-mono text-[10px] text-[#B7BEC9]">{s.tag}</span>
                    </div>
                    <h3 className="mb-2 font-display text-[15px] font-semibold text-[#1F2229]">
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#5B6270]">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink px-6 py-16 text-center text-[#F5F1E8] md:px-16">
        <h2 className="mb-4 font-display text-2xl font-semibold md:text-3xl">
          Need a Survey Done Right?
        </h2>
        <p className="mb-8 text-[#B7BEC9]">
          Get in touch with Quadrant Surveying Services for a free quote.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+63468877329"
            className="flex items-center gap-2 bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-dark"
          >
            <Phone className="h-4 w-4" /> (046) 887-7329
          </a>
          <a
            href="mailto:rbc01landsurvey@gmail.com"
            className="flex items-center gap-2 border border-blueprint px-6 py-3 font-medium transition-colors hover:bg-blueprint/20"
          >
            <Mail className="h-4 w-4" /> Contact Us
          </a>
        </div>
      </section>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        image={lightboxImage}
      />
    </div>
  );
}

export default HomePage;
