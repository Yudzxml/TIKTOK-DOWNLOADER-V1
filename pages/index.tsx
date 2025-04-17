import React, { useState } from 'react';
import DownloadForm from '../components/DownloadForm';

const Home: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Download Video TikTok</h1>
      <DownloadForm />
    </div>
  );
};

export default Home;