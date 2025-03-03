// src/pages/Home.js
import React from 'react';
import '../CSS/Home.css';

function Home() {
  return (
    <><div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      
      <div style={{float:'right'}}>
          <svg width="551" height="323" viewBox="0 0 551 323" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M533.216 111.155C479.363 308.121 406.59 293.581 304.216 309.155C201.842 324.728 -172.312 333.58 96.2159 287.155C364.744 240.729 617.405 -199.487 533.216 111.155Z" fill="url(#paint0_linear_1_85)" fillOpacity="0.45" stroke="#232323" strokeOpacity="0.9"/>
              <defs>
                  <linearGradient id="paint0_linear_1_85" x1="275.344" y1="1" x2="275.344" y2="321.673" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
              </defs>
          </svg>
      </div>

      <p>I'm Aniket Saini, a Full-Stack Developer.</p><button>View My Work</button><button>Download Resume</button>
    </div>
    </>
  );
}

export default Home;
