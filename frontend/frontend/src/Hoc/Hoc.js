import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from '../components/UI/Modal/Modal';
export default ChildComponent => {
  class AuthComponent extends Component {
    componentDidMount() {
      this.redirectUser();
    }

    componentDidUpdate() {
      this.redirectUser();
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.auth) {
        this.redirectUser();
      }
    }

    redirectUser = () => {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    };

    render() {
      if(this.props.show){
        return <Modal>Ruben</Modal>
      }
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      auth: state.authorizationReducer.authenticated,
      show: state.modalNotification.showModal
    };
  }
  return connect(mapStateToProps)(AuthComponent);
};
