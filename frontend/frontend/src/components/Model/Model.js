import React, { Component } from "react";
import { connect } from "react-redux";

import "./Model.css";
import AddItemButton from "../AddItemButton/AddItemButton";

class Model extends Component {
  state = {};

  InputHandler = event => {
    const value = event.currentTarget.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  genderSelectHandler = event => {
    this.setState({
      gender: event.target.value
    });
  };

  donorSelectHandler = event => {
    this.setState({
      donor: event.target.value
    });
  };

  enzymeSelectHandler = event => {
    this.setState({
      enzyme: event.target.value
    });
  };

  anatomicalSelectHandler = event => {
    this.setState({
      anatomical_part: event.target.value
    });
  };

  biopsySelectHandler = event => {
    this.setState({
      biopsy: event.target.value
    });
  };

  subBiopsySelectHandler = event => {
    this.setState({
      sub_biopsy: event.target.value
    });
  };
  skinLayerSelectHandler = event => {
    this.setState({
      skin_layer: event.target.value
    });
  };

  passageSelectHandler = event => {
    this.setState({
      passage: event.target.value
    });
  };

  passageChildrenSelectHandler = event => {
    this.setState({
      passage: event.target.value
    })
  }

  cellTypeSelectHandler = event => {
    this.setState({
      cell_type: event.target.value
    });
  };

  render() {
    console.log(this.props.passageChildren);
    const propsToArray = new Array(this.props.inputFields[0]);
    return (
      <div className="model-outside-container">
        <form
          className={
            this.props.info === "Cell Types"
              ? "model-inside-container-b"
              : this.props.info === "Passage 0"
              ? "model-inside-container-b"
              : this.props.info === "Passage 1"
              ? "model-inside-container-b"
              : this.props.info === "Passage 4"
              ? "model-inside-container-b"
              : this.props.info === "Passage 5"
              ? "model-inside-container-b"
              : this.props.info === "Passage 2"
              ? "model-inside-container-b"
              : this.props.info === "Passage 3"
              ? "model-inside-container-b"
              : "model-inside-container"
          }
        >
          <div className="close-button-container">
            <button
              className="close-button-model"
              onClick={this.props.toggleModelHandler}
            >
              X
            </button>
          </div>
          {propsToArray.map(input => {
            const keysFromArray = Object.keys(input);
            return keysFromArray.map((keys, index) => {
              return (
                <div key={index} className="model-individual-container">
                  <label>{keys === "id" ? null : keys}</label>
                  {keys === "gender" ? (
                    <select
                      className="model-select"
                      onChange={this.genderSelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      <option value="F">F</option>
                      <option value="M">M</option>
                    </select>
                  ) : keys === "donor" ? (
                    <select
                      className="model-select"
                      onChange={this.donorSelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      {this.props.donors.map(donor => {
                        return (
                          <option
                            value={
                              String(donor.numbering) + "," + String(donor.id)
                            }
                          >
                            {donor.numbering}
                          </option>
                        );
                      })}
                    </select>
                  ) : keys === "enzyme" ? (
                    <select
                      className="model-select"
                      onChange={this.enzymeSelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      <option value="1">Enzyme A</option>
                      <option value="2">Enzyme B</option>
                      <option value="3">Enzyme C</option>
                    </select>
                  ) : keys === "anatomical_part" ? (
                    <select
                      className="model-select"
                      onChange={this.anatomicalSelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      <option value="1">Leg</option>
                      <option value="2">Scalp</option>
                      <option value="3">Breast</option>
                      <option value="4">Abdomen</option>
                      <option value="5">Other</option>
                    </select>
                  ) : keys === "biopsy" ? (
                    <select
                      className="model-select"
                      onChange={this.biopsySelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      {this.props.biopsy.map(biopsy => {
                        return (
                          <option value={biopsy.id}>{biopsy.numbering}</option>
                        );
                      })}
                    </select>
                  ) : keys === "passage" ? (
                    <select
                      className="model-select"
                      onChange={this.passageSelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      {this.props.passage.map(passage => {
                        return (
                          <option value={[passage.id]}>
                            {passage.numbering}
                          </option>
                        );
                      })}
                      {this.props.passageChildren.map(passageChildren => {
                        return (
                          <option value={passageChildren.id}>Passage 1: {passageChildren.numbering}</option>
                        );
                      })}
                    </select>
                  ) 
                   : keys === "sub_biopsy" ? (
                    <select
                      className="model-select"
                      onChange={this.subBiopsySelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      {this.props.subBiopsy.map(subBiopsy => {
                        return (
                          <option value={[subBiopsy.id]}>
                            {subBiopsy.numbering}
                          </option>
                        );
                      })}
                    </select>
                  )
                   : keys === "cell_type" ? (
                    <select
                      className="model-select"
                      onChange={this.cellTypeSelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      {this.props.cellType.map(cellType => {
                        return (
                          <option value={cellType.id}>
                            {cellType.numbering}
                          </option>
                        );
                      })}
                    </select>
                  ) : keys === "skin_layer" ? (
                    <select
                      className="model-select"
                      onChange={this.skinLayerSelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      {this.props.skinLayer.map(skinLayer => {
                        return (
                          <option value={skinLayer.id}>
                            {skinLayer.numbering}
                          </option>
                        );
                      })}
                    </select>
                  ) : keys === "id" ? null : keys === "cut_method" ? (
                    <select
                      className="model-select"
                      onChange={this.anatomicalSelectHandler}
                    >
                      <option value="">Please choose an option</option>
                      <option value="1">Diagonal</option>
                      <option value="2">Transversal</option>
                      <option value="3">Default</option>
                    </select>
                  ) : (
                    <input
                      disabled={keys === "numbering" ? "disabled" : null}
                      placeholder={
                        keys === "numbering"
                          ? "created automaticately"
                          : keys === "skin_thickness"
                          ? "enter data in mm"
                          : keys === "skin_area"
                          ? "enter data in mm"
                          : keys === "sub_biospy_area"
                          ? "enter data in mm"
                          : keys === "temperature"
                          ? "data in Celcius"
                          : keys === "surgery_date"
                          ? "enter YYYY-MM-DD"
                          : keys === "another"
                          ? "data in mm"
                          : null
                      }
                      className="model-input"
                      name={keys}
                      onChange={this.InputHandler}
                      value={this.state[keys]}
                    />
                  )}
                </div>
              );
            });
          })}
          <div className="add-item-container">
            <AddItemButton
              toggleModelHandler={this.props.toggleModelHandler}
              form={this.state}
              fetching={this.props.fetching}
              reRender={this.props.reRender}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    donors: state.donorReducer.donor,
    biopsy: state.biopsyReducer.biopsies,
    subBiopsy: state.subBiopsyReducer.subBiopsies,
    skinLayer: state.skinLayerReducer.skinLayers,
    cellType: state.cellTypeReducer.cellTypes,
    passage: state.passageReducer.passage[0],
    passageChildren: state.passageReducer.passage[1]
  };
};

export default connect(mapStateToProps)(Model);
