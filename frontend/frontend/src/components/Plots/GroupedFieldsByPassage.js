import React from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';

import { getPlotData } from '../../store/actions/plotActions';


class GroupedFieldsByPassage extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(getPlotData())
  }

  manageData = () => {
    let x = [];
    let diameter = [];
    let viability = [];
    let viableCells = [];
    let concentration =[];

    if (this.props.plotData) {
      this.props.plotData.map((item, index) => {
        x.push(item.numbering)

        if (item.viability) {
          viability.push(item.viability)
        }
        if (item.diameter) {
          diameter.push(item.diameter)
        }
        if (item.seeding_density) {
          viableCells.push(item.seeding_density)
        }
        if (item.concentration) {
          concentration.push(item.concentration)
        }
      });
    }

    let trace1 = {
      x: x,
      y: diameter,
      name: 'Diameter',
      type: 'bar'
    }

    let trace2 = {
      x: x,
      y: viability,
      name: 'Viability',
      type: 'bar'
    }

    let trace3 = {
      x: x,
      y: viableCells,
      name: 'Seeding Density',
      type: 'bar'
    }

    let trace4 = {
      x: x,
      y: concentration,
      name: 'Concentration',
      type: 'bar'
    }

    let data = [trace1, trace2, trace3, trace4]
    return data;
  }

  render() {
    return (
      <Plot
        data={this.manageData()}
        layout={{
          plotlyConfig: {
            responsive: true
          },
          legend: {
            x: 1,
            y: 0.5,
          },
          title: 'Passage Overview',
          barmode: 'group',
          xaxis: {
            title: 'Passages',
            showgrid: false,
            zeroline: false,
            tickangle: -45,
          },
        }

        }
      />
    );

  }
}


const mapStateToProps = state => {
  if (state.passageReducer) {
    return {
      plotData: state.plotDataReducer.plotData
    }
  }
}

export default connect(mapStateToProps)(GroupedFieldsByPassage);
