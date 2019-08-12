import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../../store/actions/userAction";

//importing CSS:
import "./NavigationSide.css";

//importing components:
//import LogOutButton from "../LogOutButton/LogOutButton";

//importing Assets:
import flask from "../../Assets/flask.png";
import gear from "../../Assets/gear.png";
import avatar2 from "../../Assets/avatar2.png";
import analytics from "../../Assets/analyticsb.png";
// import home from "../../Assets/home.png";

import ConfirmationLogOutModal from "../ComfirmationLogOutModal/ComfirmationLogOutModal";

import { connect } from "react-redux";
import { withRouter } from "react-router";

class NavigationSide extends Component {
  state = {
    showDonorHandler: false,
    showLogOutConfirmation: false
  };

  homeHandler = () => {
    this.setState({
      showDonorHandler: !this.state.showDonorHandler
    });
  };

  renderConfirmationModal = () => {
    return this.state.showLogOutConfirmation ? (
      <ConfirmationLogOutModal
        showLogOutConfirmationHandler={this.showLogOutConfirmationHandler}
      />
    ) : null;
  };

  showLogOutConfirmationHandler = () => {
    this.setState({
      showLogOutConfirmation: !this.state.showLogOutConfirmation
    });
  };

  userProHandler = () => {
    this.props.dispatch(getCurrentUser()).then(() => {
      this.props.history.push("/user");
    });
  };
  showNavigation = () => {
    return (
      <div className="navigation-side-main-container">
        <div className="navigation-side-container">
          <div className="navigation-side-top-container">
            <img
              onClick={this.userProHandler}
              src={avatar2}
              className="navigation-side-avatar"
              alt="img-provitional-description"
            />
          </div>

          <div className="navigation-side-list-container">
            <div className="navigation-side-middle-container">
              {/* <div className="navigation-side-icons-container">
                <NavLink className="navlink" to="/home">
                  <img
                    className="einstein-img"
                    src={home}
                    alt="img-provitional-description"
                  />
                </NavLink>
              </div> */}
              <div className="navigation-side-icons-container">
                <NavLink to="/dashboard">
                  <img
                    onClick={this.homeHandler}
                    src={flask}
                    alt="img-provitional-description"
                  />
                </NavLink>
              </div>

              <div className="navigation-side-icons-container">
                <NavLink to="/plots">
                  <img src={analytics} alt="img-provitional-description" />
                </NavLink>
              </div>
              <div className="navigation-side-icons-container">
                <NavLink to="/settings">
                  <img src={gear} alt="img-provitional-description" />
                </NavLink>
              </div>
            </div>
            {this.renderConfirmationModal()}
          </div>
          <button
            className="logout-button"
            onClick={this.showLogOutConfirmationHandler}
          >
            Log Out
          </button>
        </div>
      </div>
    );
  };

  render() {
    return window.location.pathname === "/" ? null : this.showNavigation();
  }
}

// TODO: Add mapStateToProps and authorizationReducer to it to make sure it rerenders when user loggs out

export default connect()(withRouter(NavigationSide));
