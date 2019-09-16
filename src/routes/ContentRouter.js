import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import CityPage from "../components/CityPage/CityPage";
import AttractionsPage from "../components/AttractionsPage/AttractionsPageContainer";
import HotelsPage from "../components/HotelsPage/HotelsPageContainer";
import FoodDrinkPage from "../components/FoodDrinkPage/FoodDrinkPageContainer";
import PageItem from "../kit/PageItem/PageItemContainer";
import AboutUs from "../components/AboutUs/AboutUs";
import NotFound from "../components/NotFound/NotFoundContainer";

const ContentRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <CityRoutes></CityRoutes>
    </Switch>
  );
};

const CityRoutes = () => {
  return (
    <>
      <Route exact path="/city/:city_id" component={CityPage} />
      <Route exact path="/about" component={AboutUs} />
      <HotelsRoutes></HotelsRoutes>
      <FoodDrinkRoutes></FoodDrinkRoutes>
      <AttractionsRoutes></AttractionsRoutes>
    </>
  );
};

const FoodDrinkRoutes = () => {
  return (
    <>
      <Route exact path="/city/:city_id/food-drink" component={FoodDrinkPage} />
      <Route
        exact
        path="/city/:city_id/food-drink/:food-drink_id"
        component={PageItem}
      />
    </>
  );
};

const HotelsRoutes = () => {
  return (
    <>
      <Route exact path="/city/:city_id/hotels" component={HotelsPage} />
      <Route
        exact
        path="/city/:city_id/hotels/:hotel_id"
        component={PageItem}
      />
    </>
  );
};

const AttractionsRoutes = () => {
  return (
    <>
      <Route
        exact
        path="/city/:city_id/attractions"
        component={AttractionsPage}
      />
      <Route
        exact
        path="/city/:city_id/attractions/:id_attraction"
        component={PageItem}
      />
    </>
  );
};

export default ContentRouter;
