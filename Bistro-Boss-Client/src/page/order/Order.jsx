import React, { useState } from "react";
import Cover from "../../components/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
  const [menu] = useMenu();

  const categorys = ["salad", "drinks", "dessert", "pizza", "soup"];
  const { category } = useParams();
  const initialIndex = categorys.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const filterByCategory = (categoryName) => {
    return menu.filter((item) => item.category === categoryName);
  };

  const categoriesData = {
    salad: filterByCategory("salad"),
    drinks: filterByCategory("drinks"),
    dessert: filterByCategory("dessert"),
    pizza: filterByCategory("pizza"),
    soup: filterByCategory("soup"),
  };

  return (
    <div>
      <Helmet>
        <title>Order</title>
      </Helmet>
      <Cover
        image={orderCover}
        title={"OUR SHOP"}
        discription={"Would you like to try a dish?"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {categorys.map((category, idx) => (
            <Tab key={idx}>{category.charAt(0).toUpperCase() + category.slice(1)}</Tab>
          ))}
        </TabList>

        {categorys.map((category, idx) => (
          <TabPanel key={idx}>
            <FoodCard items={categoriesData[category]}></FoodCard>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Order;