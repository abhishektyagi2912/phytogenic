// pages/about.js
import Image from 'next/image';
import Link from 'next/link';

function AboutUs() {
  return (
     <>
     <section>
        <div className="innerpages-title-wrapper">
          <div className="innerpages-title bg-title-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 innerpages-title1">
                  <div>
                    <h1>About Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="comp-section shortcode-section text-left fluid-height" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="overline-14">About Us</h1>
              <h2 className="comp-title shortcode-title heading-48">
                We believe that travel is for everyone. It helps us learn about ourselves and the world around us.
              </h2>
              <div className="content">
                <p>
                  Our goal is to help more people from more backgrounds experience the joy of exploration.
                  Because we believe this builds a kinder, more inclusive, more open-minded world.
                </p>
                <p>
                  Like you, travel is in our DNA. At XYZ, we believe travel opens the door to the greatest,
                  most unforgettable experiences life can offer. And we have learned that the best travel is about
                  putting yourself out there, about leaving behind the everyday, about immersing yourself,
                  rather than just seeing the sights.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div className="comp-resp-img wrapper shortcode-resp-image" style={{ position: 'relative', maxWidth: '500px' }}>
                <Image src="/images/main-image.png.webp" alt="Main image" layout="responsive" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section></>
     
  
  )
}

export default AboutUs;
