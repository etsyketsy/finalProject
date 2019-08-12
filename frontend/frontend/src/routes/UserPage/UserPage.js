import React, { Component } from "react";
import avatar2 from "../../Assets/avatar2.png";
import "./UserPage.css";
import { connect } from "react-redux";

class UserPage extends Component {
  render() {
    return this.props.user.user ? (
      <div className="user-page-main-container">
        <img src={avatar2} alt="img-provitional-description" />
        <h2>{this.props.user.user[0].first_name}</h2>
        <h3>{this.props.user.user[0].last_name}</h3>
        <h4>{this.props.user.user[0].email}</h4>
      </div>
    ) : null;
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};
export default connect(mapStateToProps)(UserPage);
