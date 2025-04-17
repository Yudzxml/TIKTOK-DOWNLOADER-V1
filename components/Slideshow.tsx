import React from 'react';

interface SlideshowProps {
  images: string[];
  audioLink: string;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, audioLink }) => {
  return (
    <div className="slideshow">
      <h2>Slideshow Gambar:</h2>
      {images.length > 0 ? (
        <div className="image-gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </div>
      ) : (
        <p>Tidak ada gambar untuk ditampilkan.</p>
      )}
      {audioLink && (
        <div className="audio-link">
          <h3>Audio:</h3>
          <a href={audioLink} target="_blank" rel="noopener noreferrer">Unduh Audio</a>
        </div>
      )}
    </div>
  );
};

export default Slideshow;