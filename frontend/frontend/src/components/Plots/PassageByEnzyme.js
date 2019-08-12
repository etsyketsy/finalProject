import React from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';

import { getPlotData } from '../../store/actions/plotActions';


class PassageByEnzyme extends React.Component {
    componentDidMount = () => {
        this.props.dispatch(getPlotData())
    }

    manageData = () => {
        if (this.props.plotData) {
            let filteredPassages = this.props.plotData.filter(item => {
                return item.not_continued === false && item.enzyme >= 1
            });
            let labels = []
            let ids = []
            let counts = []
            filteredPassages.map(item => {
                if (!ids.includes(item.enzyme)) {
                    ids.push(item.enzyme)

                    // Match enzyme types to list of names
                    if (item.enzyme === 8) {
                        labels.push('Protease')
                    }
                    else if (item.enzyme === 5) {
                        labels.push('Amylases')
                    }
                    else if (item.enzyme === 7) {
                        labels.push('Nucleases')
                    } else {
                        labels.push('Other')
                    }
                }
            });

            //count the amount of passages with a specific type and match type name to ID
            ids.map((id, index) => {
                let count = filteredPassages.filter(item => {
                    return item.enzyme === id
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
                    colors: ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)']
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
                    height: 300,
                    width: 340,
                    title: 'Continued Passages <br>by Enzyme',
                }}
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

export default connect(mapStateToProps)(PassageByEnzyme);