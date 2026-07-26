import Carousel from '../../components/Carousel';
import qss2 from '../../assets/QSS_2.jpg';
import qss3 from '../../assets/QSS_3.jpg';
import qss4 from '../../assets/QSS_4.jpg';
import qss5 from '../../assets/QSS_5.jpg';
import qss6 from '../../assets/QSS_6.jpg';

const showcaseImages = [
  { src: qss2, alt: 'Drone survey in progress at a residential site' },
  { src: qss3, alt: 'Aerial topographic survey drone equipment' },
  { src: qss4, alt: 'Survey equipment set up in an open field' },
  { src: qss5, alt: 'Survey crew conducting a relocation and topographic survey' },
  { src: qss6, alt: 'GNSS survey rover set up in the field' },
];

const services = [
  {
    title: 'Relocation & Verification Survey',
    description: 'Re-establish and verify boundary corners and lines against existing titles.',
  },
  {
    title: 'Subdivision Survey',
    description: 'Divide a parcel of land into two or more lots for sale, development, or titling.',
  },
  {
    title: 'Consolidation Survey',
    description: 'Merge multiple adjoining lots into a single parcel.',
  },
  {
    title: 'Aerial Topographic Survey',
    description: 'Drone-based mapping capturing elevation, contours, and site features quickly and accurately.',
  },
  {
    title: 'Resurvey & Amendment Survey',
    description: 'Correct or update existing survey records to reflect current site conditions.',
  },
  {
    title: 'Engineering Survey',
    description: 'Site data collection supporting design and construction planning.',
  },
  {
    title: 'Hydrographic Survey',
    description: 'Mapping of waterways, shorelines, and underwater terrain.',
  },
  {
    title: 'Land Title Verification & Technical Research',
    description: 'Research and verification of land titles and technical descriptions.',
  },
  {
    title: 'Construction Survey',
    description: 'Staking and layout support to keep your project on plan and on schedule.',
  },
  {
    title: 'Detailed Engineering Survey',
    description: 'In-depth site surveys supporting detailed engineering design.',
  },
  {
    title: 'Lot Plan with Vicinity Map',
    description: 'Prepared lot plans complete with vicinity maps for permitting and reference.',
  },
  {
    title: 'As-Built Survey',
    description: 'Post-construction survey documenting actual built conditions against approved plans.',
  },
  {
    title: 'Tree Tagging Survey',
    description: 'Inventory and tagging of trees on a site, often required for permits or clearing.',
  },
];

function HomePage() {
  return (
    <div id="top">
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Precise Land Surveying for Imus and Beyond
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Quadrant Surveying Services delivers accurate, reliable boundary, topographic, and
            construction surveys for property owners, developers, and contractors.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="mailto:rbc01landsurvey@gmail.com?subject=Quote%20Request"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="rounded-md border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-slate-400"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-900">Our Work in the Field</h2>
        <div className="mt-8 mx-auto max-w-xl">
          <Carousel images={showcaseImages} />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-slate-900">Our Services</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Quadrant Surveying Services offers a full range of boundary, topographic, and
          engineering surveys for property owners, developers, and contractors in Imus and the
          surrounding area.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <h2 className="text-2xl font-semibold text-white">Need a Survey Done Right?</h2>
          <p className="mt-2 text-blue-100">
            Get in touch with Quadrant Surveying Services for a free quote.
          </p>
          <a
            href="mailto:rbc01landsurvey@gmail.com"
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
