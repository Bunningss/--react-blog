import "../styles/ImageModal.css";

const ImageModal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    setSelectedImage(null);
  };

  return (
    <div className="image_modal" onClick={handleClick}>
      <div className="modal_image_container">
        <img className="modal_image" src={selectedImage} alt="" />
      </div>
    </div>
  );
};

export default ImageModal;
