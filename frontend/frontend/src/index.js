//Setting up for React:
import React from "react";
import ReactDOM from "react-dom";

//Setting up Redux:
import { Provider } from "react-redux";
import store from "./store/store";

//Setting up React-Router:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//importing CSS:
import "./index.css";

//Importing components:
import App from "./components/App/App";

//Importing Pages/Routes:
import DashboardPage from './routes/DashboardPage/DashboardPage'
import HomePage from './routes/HomePage/HomePage'
import AdministrationPage from './routes/AdministrationPage/AdministrationPage'
import UserPage from './routes/UserPage/UserPage'
import SettingsPage from "./routes/SettingsPage/SettingsPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import PlotsPage from './routes/PlotsPage/PlotPage'

import * as serviceWorker from "./serviceWorker";

//importing Actions:
import { checkLoginAction } from "./store/actions/loginAction";

//importing High Order Components:
import Hoc from "./Hoc/Hoc";

store.dispatch(checkLoginAction());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={Hoc(DashboardPage)} />
          <Route exact path="/home" component={Hoc(HomePage)} />
          <Route exact path="/administration" component={Hoc(AdministrationPage)} />
          <Route exact path="/user" component={Hoc(UserPage)} />
          <Route exact path="/settings" component={Hoc(SettingsPage)} />
          <Route exact path="/plots" component={Hoc(PlotsPage)} />

        </App>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
