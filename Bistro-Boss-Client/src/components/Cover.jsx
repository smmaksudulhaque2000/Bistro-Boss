import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ image, title, discription }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="Image"
      strength={-200}
      className="w-full"
    >
      
        <div
          className="hero w-full h-[700px] p-56"
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">{discription}</p>
            </div>
          </div>
        </div>
      
    </Parallax>
  );
};

export default Cover;
