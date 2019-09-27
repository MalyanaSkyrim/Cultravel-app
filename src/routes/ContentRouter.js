import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ContentHomePage from "../components/ContentHomePage/ContentHomePageContainer";
import ContentCityPage from "../components/ContentCityPage/ContentCityPageContainer";
import ContentAttractionsPage from "../components/ContentAttractionsPage/ContentAttractionsPageContainer";
import ContentHotelsPage from "../components/ContentHotelsPage/ContentHotelsPageContainer";
import ContentFoodDrinkPage from "../components/ContentFoodDrinksPage/ContentFoodDrinksPageContainer";
import PageItem from "../kit/PageItem/PageItemContainer";
import AboutUs from "../components/AboutUs/AboutUsContainer";
import NotFound from "../components/NotFound/NotFoundContainer";
import ContentAttractionsPageContainer from "../components/ContentAttractionsPage/ContentAttractionsPageContainer";
import SignInForm from "../components/SignInForm/SignInFormContainer";
import SignUpForm from "../components/SignUpForm/SignUpFormContainer";

const ContentRouter = () => {
  return (
    <Switch>
      <Route exact path="/about" component={AboutUs} />
      <Route path="/not-found" component={NotFound}></Route>
      <AccountRoutes></AccountRoutes>
      <CityRoutes></CityRoutes>
    </Switch>
  );
};

const AccountRoutes = () => {
  return (
    <>
      <Route path="/signin" to={SignInForm}></Route>
      <Route path="/signup" to={SignUpForm}></Route>
    </>
  );
};

const CityRoutes = () => {
  return (
    <>
      <Route exact path="/city/:city_id" component={ContentCityPage} />
      <HotelsRoutes></HotelsRoutes>
      <FoodDrinkRoutes></FoodDrinkRoutes>
      <AttractionsRoutes></AttractionsRoutes>
      <Redirect to="/not-found"></Redirect>
    </>
  );
};

const FoodDrinkRoutes = () => {
  return (
    <>
      <Route
        exact
        path="/city/:city_id/food-drink"
        component={ContentFoodDrinkPage}
      />
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
      <Route exact path="/city/:city_id/hotels" component={ContentHotelsPage} />
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
        component={ContentAttractionsPage}
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
