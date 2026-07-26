import { X } from 'lucide-react';
import Modal from './Modal';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: { src: string; caption: string } | null;
}

// `image` is allowed to stay set while `isOpen` goes false so the closing
// animation still has content to fade out — the caller shouldn't clear it
// until a new image is opened.
function ImageLightbox({ isOpen, onClose, image }: ImageLightboxProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="relative max-h-[90vh] max-w-5xl">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-2 right-2 z-10 bg-black/50 p-1.5 text-white transition-colors hover:bg-black/70"
      >
        <X className="h-5 w-5" />
      </button>

      {image && (
        <>
          <img
            src={image.src}
            alt={image.caption}
            className="max-h-[90vh] w-auto max-w-full object-contain"
          />
          <p className="mt-2 text-center font-mono text-xs text-[#F5F1E8]">{image.caption}</p>
        </>
      )}
    </Modal>
  );
}

export default ImageLightbox;
