import React from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';

import { getPlotData } from '../../store/actions/plotActions';



class MorphologyChart extends React.Component {
    componentDidMount = () => {
        this.props.dispatch(getPlotData())
    }

    manageData = () => {
        if (this.props.plotData) {
            let morphologyFiltered = this.props.plotData.filter(item => {
                return item.not_continued === false && item.morphology >= 1
            });
            let labels = []
            let ids = []
            let counts = []
            morphologyFiltered.map(item => {
                if (!ids.includes(item.morphology)) {
                    ids.push(item.morphology)

                    // Match morphology types to list of names
                    if (item.morphology === 1) {
                        labels.push('Star-like')
                    }
                    else if (item.morphology === 2) {
                        labels.push('Bipolar')
                    }
                    else if (item.morphology === 3) {
                        labels.push('Dendrite-like')
                    }
                    else if (item.morphology === 4) {
                        labels.push('Spindle-like')
                    } else {
                        labels.push('Other')
                    }
                };
            });

        // Loop through types counting instances and adding to new array with index corresponding to the type label
        ids.map((id, index) => {
            let count = morphologyFiltered.filter(item => {
                return item.morphology === id
            }).length
            counts[index] = count
        });
        const data = [{
            values: counts,
            labels: labels,
            type: 'pie',
            hoverinfo: 'label+percent',
            textinfo: 'none',
            domain: {
                row: 0,
                column: 0
            },
            marker: {
                colors: ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)']
            }
        }]
        return data
    }
}

render() {
    return (
        <Plot
            data={this.manageData()}
            layout={{
                plotlyConfig: {
                    responsive: true
                  },
                showlegend: true,
	            legend: {
                    x: 1,
                    y: 0.5
                  },
                height: 300,
                width: 340,
                title: 'Continued Passages <br>by Morphology'
            }}
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

export default connect(mapStateToProps)(MorphologyChart);