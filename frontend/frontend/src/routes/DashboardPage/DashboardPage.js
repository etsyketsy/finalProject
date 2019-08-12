import React, { Component } from "react";

import "./DashboardPage.css";

import { connect } from "react-redux";
import Column from "../../components/Column/Column";

class DashboardPage extends Component {
  state = {
    amount: "",
    showHowMany: false,
    showAddButton: false,
};

  addPassageHandler = e => {
    const actualPassage = [...this.state.passage];
    const value = e.target.value;
   
    const newPassage = actualPassage.concat(value);
    this.setState({
      passage: newPassage
    });
    this.createPassagesHandler();
    this.setState({
      amount: ""
    });
  };

  createPassagesHandler = () => {
    this.setState({
      showHowMany: !this.state.showHowMany
    });
  };
  AmountHandler = e => {
    this.setState({
      amount: e.currentTarget.value
    });
  };

  renderPassages = () => {
    return Object.keys(this.props.passage.passage).map( (key, index) => {
      return (
        <Column
          key={key}
          info={`Passage ${key}`}
          url={this.props.passage.url}
          inputFields={this.props.passage.passage[key]}
          fetching={this.props.passage.fetching}
          reRender={this.props.passage.reRender}
        />
      );
    });
  };

  render () {
    const biopsies = this.props.biopsy.biopsies;
    const subBiopsies = this.props.subBiopsy.subBiopsies;
    const skinLayer = this.props.skinLayer.skinLayers;
    const cellType = this.props.cellType.cellTypes;
    // const passageFields = this.props.passage.passage;

    return (
      <div className="dashboard-page-main-container">
        {this.props.donors ? (
          <Column
            info={this.props.donors.title}
            url={this.props.donors.url}
            inputFields={this.props.donors.donor}
            fetching={this.props.donors.fetching}
            reRender={this.props.donors.reRender}
          />
        ) : null}

        {this.props.biopsy.biopsies ? (
          <Column
            info={this.props.biopsy.title}
            url={this.props.biopsy.url}
            inputFields={biopsies}
            fetching={this.props.biopsy.fetching}
            reRender={this.props.biopsy.reRender}
          />
        ) : null}

        {this.props.subBiopsy.subBiopsies ? (
          <Column
            info={this.props.subBiopsy.title}
            url={this.props.subBiopsy.url}
            inputFields={subBiopsies}
            fetching={this.props.subBiopsy.fetching}
            reRender={this.props.subBiopsy.reRender}
          />
        ) : null}

        {this.props.skinLayer.skinLayers ? (
          <Column
            info={this.props.skinLayer.title}
            url={this.props.skinLayer.url}
            inputFields={skinLayer}
            fetching={this.props.skinLayer.fetching}
            reRender={this.props.skinLayer.reRender}
          />
        ) : null}

        {this.props.cellType.cellTypes ? (
          <Column
            info={this.props.cellType.title}
            url={this.props.cellType.url}
            inputFields={cellType}
            fetching={this.props.cellType.fetching}
            reRender={this.props.cellType.reRender}
          />
        ) : null}

        {this.props.passage ? this.renderPassages() : null}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    donors: state.donorReducer,
    biopsy: state.biopsyReducer,
    subBiopsy: state.subBiopsyReducer,
    skinLayer: state.skinLayerReducer,
    cellType: state.cellTypeReducer,
    passage: state.passageReducer
  };
};
export default connect(mapStateToProps)(DashboardPage);
