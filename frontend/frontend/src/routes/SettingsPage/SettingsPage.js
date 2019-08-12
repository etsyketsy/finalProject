import React, { Component } from "react";

import "./SettingsPage.css";

class SettingsPage extends Component {
  state = {
    settings: ["Delete Confirmation", "Log Out Confirmation", "Edit Content", "Filters", "Auto Log Out Timer"]
  };

  render() {
    return (
      <div className="settings-page-main-container">
        <h1>Settings</h1>

        {this.state.settings.map(settings => {
          return (
            <div className="switch-container">
              <p>{settings}</p>
              <label class="label-toggle">
                <input type="checkbox" />
                <span data-unchecked="Off" data-checked="On" />
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SettingsPage;
