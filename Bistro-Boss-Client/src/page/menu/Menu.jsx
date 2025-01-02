import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../components/Cover";
import image from "../../assets/menu/banner3.jpg";
import Tilt from "react-parallax-tilt";
import PopularMenu from "../home/PopularMenu";


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Tilt>
        <Cover
          image={image}
          title={"OUR MENU"}
          discription={"Would you like to try a dish?"}
        ></Cover>
      </Tilt>
      <PopularMenu></PopularMenu>
      <Cover
          image={image}
          title={"OUR MENU"}
          discription={"Would you like to try a dish?"}
        ></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
