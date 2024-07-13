import React, { useState } from "react";
import cateringMenus from "../utils/data";
import MenuCard from "../components/MenuCard";
import CateringMenu from "../components/CateringMenu";

const Catering = () => {
  const [filteredServices, setFilteredServices] = useState(null);

  let cateringServices = cateringMenus?.map((services, index) => (
    <CateringMenu
      key={index}
      EventName={services.event}
      Starters="Starters"
      StarterItems={
        services.menu.find((category) => category.category === "Starters")
          .dishes
      }
      Main="Main Course"
      MainItems={
        services.menu.find((category) => category.category === "Main Course")
          .dishes
      }
      Bread="Main Course"
      BreadItems={
        services.menu.find((category) => category.category === "Breads").dishes
      }
      Desserts="Desserts"
      DessertItems={
        services.menu.find((category) => category.category === "Desserts")
          .dishes
      }
      Drinks="Main Course"
      DrinkItems={
        services.menu.find((category) => category.category === "Drinks").dishes
      }
    />
  ));
  const filterOptions = (optionName) => {
    if (optionName === "All") {
        setFilteredServices(null);
    } else {
        const filteredData = cateringMenus?.filter((services) => services.event === optionName);
        setFilteredServices(filteredData);
    }
};
  return (
    <section className="mt-10 font-serif">
      <div className="text-center sm:p-5">
        <h1 className="text-3xl text-gray-800">Take a look at our Menu</h1>
        <p className="mt-5 text-lg text-gray-700">
          We have a wide variety of menues available based on different type of
          occations
        </p>
      </div>

      <div className="mt-10 flex lg:flex-row md:flex-row  sm:flex-col sm:items-center  justify-evenly gap-5">
        <MenuCard
          Img="\assets\BM2.jpg"
          Title="Weading Catering"
          Desc="Wether you want a catering service for Nikah,Barrat or for Walima we got you covered"
        />
        
        <MenuCard
          Img="\assets\birthday-1835443_640.jpg"
          Title="Birthday Catering"
          Desc="Feeling like celebrating your birthday with your loved one's. W'ill plan your birthday you wont forget"
        />

        <MenuCard
          Img="\assets\billy-huynh-WR3ftvEuee4-unsplash (1).jpg"
          Title="Corporate Catering"
          Desc="Feeling like throwing a pary for your employees . W'ill plan an event you wont forget"
        />
      </div>
      <div>
        <div>
          {/*Catering Options Button*/}
          <div className="mt-5 flex justify-center lg:flex-row md:flex-row sm:flex-col sm:items-center">
          <button
              onClick={() => filterOptions("All")}
              className="ml-2 w-[80px] h-[35px] lg:mt-0 md:mt-5 sm:mt-5 bg-blue-950 text-white rounded-md"
            >
            All
            </button>
            <button
              onClick={() => filterOptions('Wedding Menu')}
              className="ml-2 w-[100px] h-[35px] lg:mt-0 md:mt-5 sm:mt-5 bg-blue-950 text-white rounded-md"
            >
              Weading
            </button>
            <button
              onClick={() => filterOptions('Birthday Menu')}
              className="ml-5 w-[100px] h-[35px] lg:mt-0 md:mt-5 sm:mt-5 bg-blue-950 text-white rounded-md"
            >
              Birthday
            </button>
            <button
              onClick={() => filterOptions('Corporate Event Menu')}
              className="ml-5 w-[100px] h-[35px] lg:mt-0 md:mt-5 sm:mt-5 bg-blue-950 text-white rounded-md"
            >
              Corporate
            </button>
          </div>
          <div className="mt-10 flex lg:flex-row md:flex-row sm:flex-col justify-evenly items-center">
            {filteredServices
              ? (filteredServices.map((services, index) => (
                  <CateringMenu
                    key={index}
                    EventName={services.event}
                    Starters="Starters"
                    StarterItems={
                      services.menu.find(
                        (category) => category.category === "Starters"
                      ).dishes
                    }
                    Main="Main Course"
                    MainItems={
                      services.menu.find(
                        (category) => category.category === "Main Course"
                      ).dishes
                    }
                    Bread="Main Course"
                    BreadItems={
                      services.menu.find(
                        (category) => category.category === "Breads"
                      ).dishes
                    }
                    Desserts="Desserts"
                    DessertItems={
                      services.menu.find(
                        (category) => category.category === "Desserts"
                      ).dishes
                    }
                    Drinks="Main Course"
                    DrinkItems={
                      services.menu.find(
                        (category) => category.category === "Drinks"
                      ).dishes
                    }
                  />
                )))
              : cateringServices}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
