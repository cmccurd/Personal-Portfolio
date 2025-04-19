import { useState } from "react";
import Modal from "../components/Modal";

const Project = ({ title, description, images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setModalOpen(false);
  };

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-10 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        {title}
      </h1>
      <p className="text-gray-400 max-w-3xl mx-auto text-center mb-10">
        {description}
      </p>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 place-items-center">
        {images.map((img, i) => (
          <div
            key={i}
            className="overflow-hidden flex justify-center items-center max-h-[600px] sm:max-h-[700px] lg:max-h-[800px] w-full"
          >
            <img
              src={img}
              alt={`${title} screenshot ${i + 1}`}
              onClick={() => openModal(img)}
              className="h-full w-auto object-contain rounded-xl shadow cursor-zoom-in"
            />
          </div>
        ))}
      </div>

      {/* Custom Modal */}
      <Modal open={modalOpen} onClose={closeModal}>
  {selectedImg && (
    <img
      src={selectedImg}
      alt="Zoomed screenshot"
      className="
        w-auto 
        h-[75vh] 
        sm:h-[85vh] 
        lg:h-[90vh] 
        object-contain 
        rounded-xl 
        shadow-2xl 
        cursor-zoom-out
      "
    />
  )}
</Modal>

    </div>
  );
};

export default Project;
