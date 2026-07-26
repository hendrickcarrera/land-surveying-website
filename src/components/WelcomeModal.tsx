import { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import Modal from './Modal';
import qssHeader from '../assets/QSS_Header.png';

// Shown once per visit on load.
function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border-t-4 border-accent bg-paper"
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        aria-label="Close"
        className="absolute top-3 right-3 text-[#5B6270] transition-colors hover:text-[#1F2229]"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="p-8 sm:p-10">
        <span className="font-mono text-xs tracking-widest text-accent">WELCOME</span>
        <h2 className="mt-2 mb-6 font-display text-3xl font-semibold text-[#1F2229]">
          Quadrant Surveying Services
        </h2>

        <img
          src={qssHeader}
          alt="Quadrant Surveying Services — services offered: relocation and verification survey, subdivision survey, consolidation survey, aerial topographic survey, resurvey and amendment survey, engineering survey, hydrographic survey, land title verification and technical research, construction survey, detailed engineering survey, and lot plan with vicinity map"
          className="w-full border border-[#DCD5C4]"
        />

        <p className="mt-6 text-base text-[#5B6270]">
          A full-scope surveying team serving Imus and the surrounding area — take a look around,
          or reach out for a quote.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:rbc01landsurvey@gmail.com?subject=Quote%20Request"
            className="flex items-center gap-2 bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Request a Quote <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="border border-blueprint px-6 py-3 text-sm font-medium text-[#1F2229] transition-colors hover:bg-blueprint/10"
          >
            Explore Services
          </a>
        </div>
      </div>
    </Modal>
  );
}

export default WelcomeModal;
