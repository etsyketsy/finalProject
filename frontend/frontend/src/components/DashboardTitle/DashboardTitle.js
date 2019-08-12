import React, { Component } from "react";

import "./DashboardTitle.css";
import eskinLogo from "../../Assets/eskin_logo.png";

class DashboardTitle extends Component {
  render() {
    return (
      <div className="dashboard-title-main-container">
        <img src={eskinLogo} className="eskin-logo" alt="eskin-logo" />
        <h1>Laboratory Dashboard</h1>
      </div>
    );
  }
}

export default DashboardTitle;
