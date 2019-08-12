import { connect } from "react-redux";
import { withRouter } from "react-router";
import React, { Component } from "react";

import "./index.css";
import { loginAction } from "../../store/actions/loginAction";
// import { checkLoginAction } from "../../store/actions/loginAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    if (this.props.token) {
      this.props.history.push("/dashboard");
    }
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("state", this.state);
    this.props.dispatch(loginAction({ ...this.state })).then(data => {
      if (data) {
        this.props.history.push("/dashboard");
      }
    });
  };

  renderError = () => {
    if (this.props.error) {
      const non_field_errors = this.props.error.non_field_errors;
      if (non_field_errors) {
        return non_field_errors.map(e => <p className="error">{e}</p>);
      }
    }
  };

  render() {
    return (
      <div className="login-page-main-container">
        <div className="login">
          <h2>Login</h2>
          {this.renderError()}
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                className="login-inputs"
                type="text"
                placeholder="Username"
                onChange={this.handleUsernameChange}
                value={this.state.username}
              />
            </div>
            <div>
              <input
                className="login-inputs"
                type="password"
                placeholder="Password"
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />
            </div>
            <div className="Login-button">
              <input className="Login-button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <div className="background-image-container" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authorizationReducer.token,
    error: state.authorizationReducer.error
  };
};

export default connect(mapStateToProps)(withRouter(Login));
