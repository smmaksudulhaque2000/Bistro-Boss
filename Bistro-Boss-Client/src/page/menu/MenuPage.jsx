import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../components/Cover";
import image from "../../assets/menu/banner3.jpg";
import Tilt from "react-parallax-tilt";
import PopularMenu from "../home/PopularMenu";
import useMenu from "../../hooks/useMenu";


const MenuPage = () => {
  const [menu] = useMenu();
  console.log(menu);

  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  console.log(salad, drinks, dessert, pizza, soup, offered);

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
      <PopularMenu items={salad}></PopularMenu>
    </div>
  );
};

export default MenuPage;
