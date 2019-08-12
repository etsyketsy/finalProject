import React from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js'

import { getPlotData } from '../../store/actions/plotActions';


class ScatterPlot extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(getPlotData())
  }

  manageData = () => {
    if (this.props.plotData) {
      let enzymeTraces = []
      let enzymeLog = []

      this.props.plotData.map((item, index) => {
        if (!enzymeLog.includes(item.enzyme)) {
          let x = []
          let y = []
          let text = []
          let name = ''

          if (item.passaging_date) {
            x.push(item.passaging_date)
          }
          if (item.total_viable_isolated_cells) {
            y.push(item.total_viable_isolated_cells)
          }
          if (item.enzyme) {
            enzymeLog.push(item.enzyme)
          }
          if (item.digestion_temperature) {
            text.push(`${item.digestion_temperature}º C`)
          }

          // Match enzyme types to list of names
          if (item.enzyme === 8) {
            name = 'Protease'
          }
          else if (item.enzyme === 5) {
            name = 'Amylases'
          }
          else if (item.enzyme === 7) {
            name = 'Nucleases'
          } 
          
          let trace = {
            x: x,
            y: y,
            name: name,
            text: text,
            id: item.enzyme,
            marker: { size: 14 },
            mode: 'markers',
            type: 'scatter',
          }
          console.log(trace.text)
          enzymeTraces.push(trace)
        }
        else {
          let trace = enzymeTraces.find(trace => trace.id === item.enzyme);
          if (item.passaging_date) {
            trace.x.push(item.passaging_date)
          }
          if (item.total_viable_isolated_cells) {
            trace.y.push(item.total_viable_isolated_cells)
          }
          if (item.digestion_temperature) {
            trace.text.push(`${item.digestion_temperature}º C`)
          }
        }

      });
      return enzymeTraces;
    }
  }



  render() {
    let layout = {
      // height: 450,
      // width: 700,
      plotlyConfig: {
        responsive: true
      },
      title: 'Total Viable Isolated Cells <br>by Enzyme and Digestion Temperature',
      showlegend: true,
      legend: {
        x: 1,
        y: 1,
        font: {
          size: 10,
        }
      },
      yaxis: {
        title: 'Total Viable Isolated Cells',
        range: [-20, 250]
      },
      xaxis: {
        title: 'Passaging Date',
        zeroline: false,
      },
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
export default connect(mapStateToProps)(ScatterPlot);
