import React from 'react';
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import App from "./components/App";
import {IndexRoute, Route} from "react-router";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
