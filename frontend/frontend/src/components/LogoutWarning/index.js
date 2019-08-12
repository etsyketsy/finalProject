import React, { Component } from "react";
import { connect } from "react-redux";
// import { Modal } from 'react-modal';

const backdropStyle = {
  position: "fixed",
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#000",
  opacity: 0.5
};

const modalStyle = function() {
  return {
    position: "fixed",
    width: 400,
    zIndex: 1040,
    top: 100,
    left: 100,
    border: "1px solid #e5e5e5",
    backgroundColor: "white",
    boxShadow: "0 5px 15px rgba(0,0,0,.5)",
    padding: 20
  };
};

class LogoutWarning extends Component {
  constructor(...args) {
    super(...args);
    this.state = { showModal: false };

    this.close = () => {
      this.setState({ showModal: false });
    };

    this.open = () => {
      this.setState({ showModal: true });
    };
  }

  renderBackdrop(props) {
    return <div {...props} style={backdropStyle} />;
  }

  render() {
    return (
      <Modal
        className="modal"
        onHide={this.close}
        style={modalStyle()}
        aria-labelledby="modal-label"
        show={this.state.showModal}
        renderBackdrop={this.renderBackdrop}
      >
        <h4 id="modal-label">Text in a modal</h4>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <button onClick={this.close}>Close Modal</button>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(LogoutWarning);
