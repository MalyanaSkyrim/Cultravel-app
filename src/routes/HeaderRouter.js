import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderHomePage from "../components/HeaderHomePage/HeaderHomePageContainer";
import HeaderCity from "../components/HeaderCity/HeaderCityContainer";
import HeaderHotel from "../components/HeaderHotel/HeaderHotelContainer";
import HeaderFoodDrink from "../components/HeaderFoodDrink/HeaderFoodDrinkContainer";
import HeaderAttractions from "../components/HeaderAttractions/HeaderAttractionsContainer";

const HeaderRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HeaderHomePage} />
      <Route exact path="/city/:city_id" component={HeaderCity} />
      <Route exact path="/city/:city_id/hotels" component={HeaderHotel} />
      <Route
        exact
        path="/city/:city_id/food-drink"
        component={HeaderFoodDrink}
      />
      <Route
        exact
        path="/city/:city_id/attractions"
        component={HeaderAttractions}
      />
    </Switch>
  );
};

export default HeaderRouter;
