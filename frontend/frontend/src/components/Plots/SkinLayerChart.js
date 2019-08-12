import React from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';

import { getPlotData } from '../../store/actions/plotActions';


class SkinLayerChart extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(getPlotData())
  }

  manageData = () => {
    var data = [{
      values: [16, 15, 12, 6, 5, 4, 42],
      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
      domain: { column: 0 },
      name: 'GHG Emissions',
      hoverinfo: 'label+percent+name',
      hole: .4,
      type: 'pie'
    }, {
      values: [27, 11, 25, 8, 1, 3, 25],
      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World'],
      text: 'CO2',
      textposition: 'inside',
      domain: { column: 1 },
      name: 'CO2 Emissions',
      hoverinfo: 'label+percent+name',
      hole: .4,
      type: 'pie'
    }];
    return data
  }

  render() {

    var layout = {
      title: 'Cell Types by Skin Layer',
      annotations: [
        {
          font: {
            size: 12
          },
          showarrow: false,
          text: 'Dermis',
          x: 0.17,
          y: 0.5
        },
        {
          font: {
            size: 12
          },
          showarrow: false,
          text: 'Epidermis',
          x: 0.82,
          y: 0.5
        }
      ],
      height: 400,
      width: 600,
      showlegend: false,
      grid: { rows: 1, columns: 2 }
    };

    return (
      <Plot
        data={this.manageData()}
        layout={layout}
      />
    )
  }
}

const mapStateToProps = state => {
  if (state.passageReducer) {
      return {
          plotData: state.plotDataReducer.plotData
      }
  }
}

export default connect(mapStateToProps)(SkinLayerChart);