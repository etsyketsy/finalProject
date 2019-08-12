import React, { Component } from "react";
import { connect } from "react-redux";

//importing CSS:
import "./Column.css";

import Model from "../Model/Model";
import List from "../List/List";

import ExportModal from '../../components/ExportModal/ExportModal'

import gear from '../../Assets/gear.png'

class Column extends Component {
  state = {
    input: "",
    toggle: {
      toggle: true
    },
    elementFound: "",
    showExportModal: false
  };

  toggleModelHandler = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  inputHandler = e => {
    e.preventDefault();
    this.setState({ input: e.target.value.toUpperCase() });

    if (this.props.inputFields) {
      const newElement = this.props.inputFields.find(
        element =>
          element.numbering.substr(0, 3) === this.state.input.substr(0, 3)
      );
      return this.setState({ elementFound: newElement });
    }
  };

  renderModel = () => {
    return !this.state.toggle ? (
      <Model
        info={this.props.info}
        inputFields={this.props.inputFields}
        toggle={this.state.toggle}
        toggleModelHandler={this.toggleModelHandler}
        fetching={this.props.fetching}
        reRender={this.props.reRender}
      />
    ) : null;
  };

  exportFilesHandler = () => {
    this.setState({
      showExportModal: !this.state.showExportModal
    })
  }

  renderList = () => {
    if (this.state.elementFound && this.state.input) {
      return (
        <List
          info={this.props.info}
          url={this.props.url}
          inputFields={this.props.inputFields}
          fetching={this.props.fetching}
          reRender={this.props.reRender}
          elementFound={this.state.elementFound}
          toggleModelHandler={this.toggleModelHandler}
        />
      );
    } else {
      return (
        <List
          info={this.props.info}
          url={this.props.url}
          inputFields={this.props.inputFields}
          fetching={this.props.fetching}
          reRender={this.props.reRender}
          toggleModelHandler={this.toggleModelHandler}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <div
          className={
            this.props.info === "New Passage"
              ? "new-passage-column"
              : "column-menu-main-container"
          }
        >
          <div
            className={
              this.props.info === "New Passage"
                ? "new-passage-top-column"
                : "top-of-the-column"
            }
          >
            <div
              className={
                this.props.info === "New Passage"
                  ? "new-column-title-container"
                  : "column-title-container"
              }
            >
              <h1>{this.props.info}</h1>
            </div>
            {this.props.info !== "New Passage" ? (
              <input
                className="input-seach-items"
                value={this.state.input}
                onChange={this.inputHandler}
                placeholder="Search..."
                autoCorrect={false}
              />
            ) : null}
          </div>

          {this.renderList()}
          <div
            className={
              this.props.info === "New Passage"
                ? "new-passage-button-container"
                : "plus-button-container"
            }
          >
            <button className='gear-button-export-options'><img src={gear} onClick={this.exportFilesHandler} alt="gear"></img></button>
            <button className="plus-button" onClick={this.toggleModelHandler}>
              +
            </button>
          </div>
        </div>
        <div className='export-files-button-container'>
            {this.state.showExportModal ? <ExportModal exportFilesHandler={this.exportFilesHandler} /> : null}

        </div>
        {this.renderModel()}
      </div>
    );
  }
}

export default connect()(Column);
