"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './home.css'; // Assuming you have some CSS for styling
import NavBar from '@/app/ui/nav-links';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleButtonClick = () => {
    router.push('/form');
  };

  return (
    <div>
      <NavBar />
      <div className="hero-container" style={{ backgroundImage: 'url(/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <h1 className="hero-title">{isClient ? 'Health Insurance Guide for College Grads' : 'Loading...'}</h1>
          {isClient && (
            <div>
              <p className="hero-subtitle">Your one-stop solution for health insurance information.</p>
              <button className="hero-button" onClick={handleButtonClick}>
                Go to Form
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mission-container">
        <h2 className="mission-header">Our Mission</h2>
        <p className="mission-text">
          Our mission is to provide recent college graduates with the knowledge and tools they need to make informed decisions about their health insurance. We aim to simplify the complexities of health insurance by offering accessible, straightforward information on topics such as coverage options and selecting the right plan. Whether you&apos;re new to health insurance or seeking a refresher, we hope this website helps make the process more approachable.
        </p>
      </div>
    </div>
  );
};

export default HomePage;