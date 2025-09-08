import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [showUnity, setShowUnity] = useState(false);

  const handleGenerateClick = () => {
    setShowUnity(true);
  };

  return (
    <div className="page-container">
      {showUnity ? (
        <div className="unity-container">
          <iframe
            src="/Unity/index.html"
            title="Unity WebGL"
            className="unity-iframe"
            allowFullScreen
          ></iframe>
          <button className="btn btn-light close-unity" onClick={() => setShowUnity(false)}>Close</button>
        </div>
      ) : (
        <>
          <div className="background-image"></div>
          <div className="content-overlay">
            <header className="app-header">
              <img src="/Images/terrain logo.png" alt="Terrain Logo" className="header-logo" />
            </header>
            <main className="app-main">
              <p className="lead display-4">
                BUILD FAST AND SIMPLE PROCEDURAL TERRAIN <br />
                USING UNITY ENGINE AND DOWNLOAD FREELY
              </p>
              <button className="generate-button bt-lg" onClick={handleGenerateClick}>
                GENERATE<br />TERRAIN
              </button>
            </main>
            <footer className="app-footer">
              <nav className="footer-nav">
                <a href="">HOME</a>
                <a href="#about">ABOUT US</a>
                <a href="#contact">CONTACT</a>
              </nav>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}
