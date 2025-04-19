const Modal = ({ open, onClose, children }) => {
    if (!open) return null;
  
    return (
      <div
        className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center"
        onClick={onClose}
      >
        <div
          className="max-w-screen max-h-screen w-auto h-auto"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  