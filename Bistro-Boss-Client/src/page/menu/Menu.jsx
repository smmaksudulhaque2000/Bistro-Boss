import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../components/Cover";
import image from "../../assets/menu/banner3.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";
import soupimg from "../../assets/menu/soup-bg.jpg";
import PopularMenu from "../home/PopularMenu";
import useMenu from "../../hooks/useMenu";



const Menu = () => {
  const [menu] = useMenu();
  
  
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  

  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Cover
        image={saladimg}
        title={"OUR MENU"}
        discription={"Would you like to try a dish?"}
      ></Cover>
      <PopularMenu items={salad} subTitle={"---Don't miss---"} heading={"TODAY'S OFFER"}></PopularMenu>

      <Cover
        image={dessertimg}
        title={"DESSERTS"}
        discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <PopularMenu items={dessert} ></PopularMenu>

      <Cover
        image={pizzaimg}
        title={"PIZZA"}
        discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <PopularMenu items={pizza} ></PopularMenu>

      <Cover
        image={image}
        title={"DRINKS"}
        discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <PopularMenu items={drinks} ></PopularMenu>

      <Cover
        image={soupimg}
        title={"SOUPS"}
        discription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
      <PopularMenu items={soup} ></PopularMenu>

    </div>
  );
};

export default Menu;
