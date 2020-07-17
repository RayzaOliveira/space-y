import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../pages/Home'
import PageModel from '../pages/PageModel'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      {/* Ctrl+ esapço: para auto import */}
      <Header />
      <Switch> 
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page-model">
          <PageModel />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>

      {/* Ctrl+ esapço: para auto import */}
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
