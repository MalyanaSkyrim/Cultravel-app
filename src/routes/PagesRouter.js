import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomePage from "../components/HomePage/HomePageContainer";
import CityPage from "../components/CityPage/CityPageContainer";
import AttractionsPage from "../components/AttractionsPage/AttractionsPageContainer";
import HotelsPage from "../components/HotelsPage/HotelsPageContainer";
import FoodDrinkPage from "../components/FoodDrinksPage/FoodDrinksPageContainer";
import PageItem from "../kit/PageItem/PageItemContainer";
import AboutUs from "../components/AboutUs/AboutUsContainer";
import NotFound from "../components/NotFound/NotFoundContainer";
import SignInUp from "../components/SignInUp/SignInUpContainer";

const PagesRouter = ({ location }) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutUs} />
      <Route path="/not-found" component={NotFound}></Route>
      <Route path="/account" component={SignInUp} />
      <Route exact path="/city/:city_id" component={CityPage} />
      <Route exact path="/city/:city_id/hotels" component={HotelsPage} />
      <Route exact path="/city/:city_id/food-drink" component={FoodDrinkPage} />
      <Route
        exact
        path="/city/:city_id/food-drink/:food-drink_id"
        component={PageItem}
      ></Route>
      <Route
        exact
        path="/city/:city_id/hotels/:hotel_id"
        component={PageItem}
      />
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
      <Redirect to="/not-found"></Redirect>
    </Switch>
  );
};
export default withRouter(PagesRouter);
