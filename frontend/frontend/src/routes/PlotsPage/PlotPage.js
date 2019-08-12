import React, { Component } from "react";
import { connect } from "react-redux";
import GroupedFieldsByPassage from "../../components/Plots/GroupedFieldsByPassage";
import MorphologyChart from "../../components/Plots/MorphologyChart";
import CellDistributionChart from "../../components/Plots/CellDistributionChart";
import PassageByEnzyme from "../../components/Plots/PassageByEnzyme";
import ContainerType from "../../components/Plots/ContainerType";
import ScatterPlot from "../../components/Plots/ScatterPlot";
// import SkinLayerChart from "../../components/Plots/SkinLayerChart";

import './PlotPage.css'

class PlotsPage extends Component {
  state = {};

  ItemSelectHandler = e => {
    this.setState({
      biopsyId: e.target.value
    });
  };

  render() {
    console.log(this.state ? this.state : "no info in the state, no good!");
    return (
      <div className="plots-page-main-container">
        
          <span className="dropdown-container">Report Filters
          <select className="biopsy-select" onChange={this.ItemSelectHandler}>
              <option value="">Biopsy</option>
              {this.props.biopsy
                ? this.props.biopsy.map(biopsy => {
                  return <option value={biopsy.id}>{biopsy.numbering}</option>;
                })
                : null}
              )
          </select>
          <select className="sub-biopsy-select" onChange={this.ItemSelectHandler}>
              <option value="">Sub-biopsy</option>
              {this.props.subBiopsy
                ? this.props.subBiopsy.map(subBiopsy => {
                  return <option value={subBiopsy.id}>{subBiopsy.numbering}</option>;
                })
                : null}
              )
          </select>
          <select className="skin-layer-select" onChange={this.ItemSelectHandler}>
              <option value="">Skin Layer</option>
              {this.props.skinLayer
                ? this.props.skinLayer.map(skinLayer => {
                  return <option value={skinLayer.id}>{skinLayer.numbering}</option>;
                })
                : null}
              )
          </select>
          <select className="cell-type-select" onChange={this.ItemSelectHandler}>
              <option value="">Cell Type</option>
              {this.props.cellType
                ? this.props.cellType.map(cellType => {
                  return <option value={cellType.id}>{cellType.numbering}</option>;
                })
                : null}
              )
          </select>
          <select className="passage-select" onChange={this.ItemSelectHandler}>
              <option value="">Passage</option>
              {this.props.passage
                ? this.props.passage.map(passage => {
                  return <option value={passage.id}>{passage.numbering}</option>;
                })
                : null}
              )
          </select>
          </span>
        
        <br></br>
        <div className="top-charts-container">
          <div className="bar-chart-container">
            <GroupedFieldsByPassage />
          </div>
          <div className="scatter-chart-container">
            <ScatterPlot />
          </div>
        </div>
        <br></br>
        <div className="four-piechart-container">
          <div className="piechart">
            <MorphologyChart />
          </div>
          <div className="piechart">
            <CellDistributionChart className="piechart" />
          </div>
          <div className="piechart">
            <PassageByEnzyme className="piechart" />
          </div>
          <div className="piechart">
            <ContainerType className="piechart" />
          </div>
        </div>

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
    passage: state.passageReducer.passage[0]
  };
};

export default connect(mapStateToProps)(PlotsPage);
