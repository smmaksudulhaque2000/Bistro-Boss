import React, { useState } from "react";
import Cover from "../../components/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";

const Order = () => {
    const [menu] = useMenu();
  
  
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");

  

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Cover
        image={orderCover}
        title={"OUR SHOP"}
        discription={"Would you like to try a dish?"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Drinks</Tab>
          <Tab>Dessert</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
        </TabList>
        <TabPanel>
            <FoodCard items={salad}></FoodCard>
        </TabPanel>
        <TabPanel>
        <FoodCard items={drinks}></FoodCard>
        </TabPanel>
        <TabPanel>
        <FoodCard items={dessert}></FoodCard>
        </TabPanel>
        <TabPanel>
        <FoodCard items={pizza}></FoodCard>
        </TabPanel>
        <TabPanel>
        <FoodCard items={soup}></FoodCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
