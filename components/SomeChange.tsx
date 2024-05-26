import React from 'react';
import Image from 'next/image';

const TherapeuticSection = () => {
  return (
    <section className="mt-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center py-4 ">
            <div className="first-p py-4">
              <p className="title-p h5 mb-3">Therapeutic Effects of Cannabis and Cannabinoids</p>
              <p className="content-p mb-4">
                Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem.
                Turpis egestas maecenas pharetra convallis posuere
              </p>
              <button className="btn btn-success">Read More</button>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="cactus">
              <Image src="/images/cactus.jpg" alt="Cactus" width={300} height={300} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="content-wrapper py-4">
              {[
                { src: '/images/flash.png', alt: 'Relief of chronic pain', heading: 'Relief of chronic pain', content: 'Feugiat in lorem ipsum fermentum posuere urna nec tincidunt praesent semper feugiat pulvinar proin' },
                { src: '/images/heart-attack.png', alt: 'Fight cancer', heading: 'Fight cancer', content: 'Feugiat in lorem ipsum fermentum posuere urna nec tincidunt praesent semper feugiat pulvinar proin' },
                { src: '/images/autism.png', alt: 'Depression', heading: 'Depression', content: 'Feugiat in lorem ipsum fermentum posuere urna nec tincidunt praesent semper feugiat pulvinar proin' },
              ].map((item, index) => (
                <div className="content-item d-flex mb-4" key={index}>
                  <Image src={item.src} alt={item.alt} width={50} height={50} className="img-fluid me-3" />
                  <div className="relief-content">
                    <p className="heading mb-1"><strong>{item.heading}</strong></p>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapeuticSection;
