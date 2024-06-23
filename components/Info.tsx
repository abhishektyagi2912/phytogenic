import React from "react";
import Image from "next/image";

const Info = () => {
  return (
    <div className="container-xxl py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="plant-content">
            <p
              style={{ color: "#214842", fontSize: "32px", fontWeight: "500" }}
            >
              Camu camu is a Vitamin C power ingredient, it contains 3,000
              milligrams of vitamin C for every gram of fruit.
            </p>
            <p style={{ color: "#556260", fontSize: "20px" }}>
              <span style={{font:'bold'}}>SKIN CARE BENEFITS OF CAMU CAMU</span> <br/>
              • Reduces Pigmentation- Vitamin C
              and niacin can help fade sun or dark spots by reducing melanin
              synthesis. <br/>
              • Smoothing- Vitamin C is used in the synthesis of
              Collagen. Collagen is an essential protein in skin that provides
              elasticity, firmness, and youthfulness. <br/> • Protecting- Antioxidants
              protect our skin from the sun (UVA and UVB rays), pollution and
              other stressors.<br/> • Brightening- Breaks down dead skin cells
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="herbal-image">
            <Image
              src="/images/camu.jpg"
              alt="Herbal Image"
              layout="responsive"
              width={500}
              height={500}
              style={{ border: "1px solid white", borderRadius: "15px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
