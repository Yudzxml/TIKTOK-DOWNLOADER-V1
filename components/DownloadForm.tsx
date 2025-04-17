import React, { useState } from 'react';
import Slideshow from './Slideshow';

const DownloadForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [images, setImages] = useState<string[]>([]); // Gambar untuk slideshow
  const [audioLink, setAudioLink] = useState<string>(''); // Link audio

  const handleDownload = async () => {
    const apiUrl = `https://api-yudzxzy.vercel.app/api/download/tiktok?url=${encodeURIComponent(url)}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.status === 200 && data.data.status === "ok") {
        // Simpan gambar untuk slideshow
        setImages(data.data.images);
        setAudioLink(data.data.audio[0]?.link || ''); // Ambil link audio jika ada
        setShowSlideshow(true);
      } else {
        alert('Gagal mengunduh video: ' + data.data.mess);
      }
    } catch (error) {
      alert('Terjadi kesalahan: ' + error.message);
    }
  };

  return (
    <div className="download-form">
      <input
        type="text"
        placeholder="Masukkan URL TikTok"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Unduh Video</button>
      {showSlideshow && <Slideshow images={images} audioLink={audioLink} />}
    </div>
  );
};

export default DownloadForm;