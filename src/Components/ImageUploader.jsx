import React, { useState } from 'react';

const ImageUploader = () => {
  const [imageData, setImageData] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        const image = new Image();
        image.src = event.target.result;

        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = image.width;
          canvas.height = image.height;

          ctx.drawImage(image, 0, 0);

          const newImageSrc = canvas.toDataURL('image/jpeg');
          setImageData(newImageSrc);
        };
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleImageUpload} />
      {imageData && <img src={imageData} alt="Processed Image" />}
    </div>
  );
};

export default ImageUploader;
