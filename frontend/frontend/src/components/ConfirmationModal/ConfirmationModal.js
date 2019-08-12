import React, { Component } from "react";

import "./ConfirmationModal.css";

class ConfirmationModal extends Component {
  handleDeleteItem = () => {
    this.props.handleDelete();
    this.props.confirmationDeleteHandler();
  };

  render() {
    return (
      <div className="delete-confirmation-outside-container">
        <div className="delete-comfirmation-inside-container">
          <label>Are you sure you want to delete ?</label>
          <div className="confirmation-modal-button-container">
            <button
              className="cancel-confirm-button"
              onClick={() => this.props.confirmationDeleteHandler()}
            >
              Cancel
            </button>
            <button
              className="delete-confirm-button"
              onClick={this.handleDeleteItem}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationModal;
