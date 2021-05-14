import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { SignUpForm } from "../Components/SignUpForm";
import HomePage from "../Pages/HomePage";
import { SignInForm } from "../Components/SignInForm";
import Profile from "../Pages/Profile";
import Setting from "../Components/ProfileChange";
import Skills from "../Components/ProfileSkills";
import Detail from "../Pages/Detail";
import ComingSoonPage from "../Pages/ComingSoonPage";
import SetProfile from "../Pages/SetProfile";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      {/* <Route path="/" exact component={homePage} />
      {/* Routes in Header */}
      {/* <Route path="/item1" component={Item1}></Route> */}
      <Route path="/signup" exact component={SignUpForm} />
      <Route path="/signin" exact component={SignInForm} />
      <Route path="/Profile" exact component={Profile} />
      <Route path="/Setting" exact component={Setting}/>
      <Route path="/getPost/:id" exact component={Detail} />
      <Route path="/About" exact component={ComingSoonPage}/>
      <Route path="/Settings" exact component={SetProfile}/>
      <Route path="/Profile/:id" exact component={Profile} />
      <Route path='*' exact={true} component={ComingSoonPage} />
    </Switch>
  );
}
