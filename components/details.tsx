import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section
      className="text-1 d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundImage: 'url(/images/About-txt1.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '60vh',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="logo mb-4">
        <Image
          src="/images/Icon-logo-1-removebg-preview.png"
          alt="Logo"
          width={100}  // Adjust the width as needed
          height={100} // Adjust the height as needed
        />
      </div>
      <div className="container-xxl">
        <div className="logo-text">
          <p>
            Our doctors recommend the best THC to CBD ratio to look for in a marijuana strain and suggest the
            recommended dosage and route.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
