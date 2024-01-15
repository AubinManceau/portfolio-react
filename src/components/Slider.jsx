import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/slider.css';

function Slider({ img1, img2, img3, img4 }) {
  Slider.propTypes = {
    img1: PropTypes.any,
    img2: PropTypes.any,
    img3: PropTypes.any,
    img4: PropTypes.any,
  };

  const [selectedImage, setSelectedImage] = useState(img1);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div className="afficheur">
        <img src={selectedImage} alt="Selected" />
      </div>
      <div className="selection">
        <img src={img1} onClick={() => handleThumbnailClick(img1)}/>
        <img src={img2} onClick={() => handleThumbnailClick(img2)}/>
        <img src={img3} onClick={() => handleThumbnailClick(img3)}/>
        <img src={img4} onClick={() => handleThumbnailClick(img4)}/>
      </div>
    </div>
  );
}

export default Slider;
