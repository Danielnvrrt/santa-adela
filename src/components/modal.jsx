import { useEffect } from 'react';
import ReactModal from 'react-modal';

export const Modal = ({ isOpen, onRequestClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
        },
        content: {
          position: 'relative',
          width: 'auto',
          height: 'auto',
          maxWidth: '90%',
          maxHeight: '90%',
          border: 'none',
          background: 'transparent',
          inset: 0,
        },
      }}
    >
      <button
        onClick={onRequestClose}
        className="absolute top-6 right-6 bg-white rounded-full p-2 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <line x1="18" y1="6" x2="6" y2="18" stroke="black" strokeWidth="2" />
          <line x1="6" y1="6" x2="18" y2="18" stroke="black" strokeWidth="2" />
        </svg>
      </button>
      {children}
    </ReactModal>
  );
};
