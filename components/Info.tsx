import React from 'react';
import Image from 'next/image';

const Info = () => {
  return (
    <div className="container-xxl py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="plant-content">
            <p style={{ color: '#214842', fontSize: '32px', fontWeight: '500' }}>
              Our knowledgeable team can help you design experiences tailored to your needs by accessing one of the flower selections
            </p>
            <p style={{ color: '#556260', fontSize: '20px' }}>
              Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis egestas maecenas pharetra convallis posuere
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="herbal-image">
            <Image
              src="/images/herbal-7.jpg"
              alt="Herbal Image"
              layout="responsive"
              width={500}
              height={500}
              style={{ border: '1px solid white', borderRadius: '15px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
