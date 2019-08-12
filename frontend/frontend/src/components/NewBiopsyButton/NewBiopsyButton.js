import React, { Component } from "react";

import research from "../../Assets/research.png";

import "./NewBiopsyButton.css";

class NewBiopsyButton extends Component {
  render() {
    return (
      <div>
        <button className="new-biopsy-button">
          <img src={research} alt="img" />
        </button>
      </div>
    );
  }
}

export default NewBiopsyButton;
