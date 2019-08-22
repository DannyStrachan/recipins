import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import RecipeCard from "./Components/RecipeCard/RecipeCard";
import Profile from "./Components/Profile/Profile";
import SellerProfile from "./Components/Seller/SellerProfile";
import Step1 from "./Components/Wizard/Step1";
import Save from "./Components/Save/Save";
import Share from "./Components/Share/Share";
import About from "./Components/About/About";
import Wizard from "./Components/Wizard/Wizard";
import Board from "./Components/CreateBoard/Board"

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/save" component={Save} />
    <Route path="/share" component={Share} />
    <Route path="/recipes" component={RecipeCard} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile" component={Profile} />
    <Route path="/seller/profile" component={SellerProfile} />
    <Route path="/step1" component={Step1} />
    <Route path="/about" component={About} />
    <Route path="/board/:boardId" component={Board} />
    <Route path="/wizard" component={Wizard} />
  </Switch>
);
