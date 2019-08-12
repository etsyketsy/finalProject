import React, { Component } from "react";
import { connect } from "react-redux";

import "./AddItemButton.css";

class AddItemButton extends Component {
  submitFormHandler = event => {
    event.preventDefault();
    const fetching = this.props.fetching;
    const reRender = this.props.reRender;
    const action = fetching(this.props.form);
    this.props.dispatch(action).then(() => this.props.dispatch(reRender()));
    this.props.toggleModelHandler();
  };

  render() {
    return (
      <div>
        <button
          className="add-item-button"
          type="submit"
          onClick={this.submitFormHandler}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default connect()(AddItemButton);
