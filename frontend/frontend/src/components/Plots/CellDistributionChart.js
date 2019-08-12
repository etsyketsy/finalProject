import React from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';

import { getPlotData } from '../../store/actions/plotActions';


class CellDistributionChart extends React.Component {
    componentDidMount = () => {
        this.props.dispatch(getPlotData())
    }

    manageData = () => {
        if (this.props.plotData) {
            let filteredPassages = this.props.plotData.filter(item => {
                return item.not_continued === false && item.cell_distribution >= 1
            });
            let types = []
            let labels = []
            let counts = []
            filteredPassages.map(item => {
   
                if (!types.includes(item.cell_distribution)){
                    types.push(item.cell_distribution)

                     // Match cell distribution types to list of names
                     if (item.cell_distribution === 1) {
                        labels.push('Equally <br>Dispersed')
                    }
                    else if (item.cell_distribution === 2) {
                        labels.push('Colony-like <br>Growth')
                    } else {
                        labels.push('Other')
                    }
                }
            });

            //count the amount of passages with a specific type and match type name to ID
            types.map((type, index) => {
                let count = filteredPassages.filter(item => {
                    return item.cell_distribution === type
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
                    colors: ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)']
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
                    height: 300,
                    width: 340,
                    border: 'solid',
                    title: 'Continued Passages <br>by Cell Distribution',
                    plotlyConfig: {
                        responsive: true
                    }
                }}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        plotData: state.plotDataReducer.plotData
    }
}

export default connect(mapStateToProps)(CellDistributionChart);