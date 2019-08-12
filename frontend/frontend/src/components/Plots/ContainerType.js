import React from 'react';
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';

import { getPlotData } from '../../store/actions/plotActions';


class PassageByContainerType extends React.Component {
    componentDidMount = () => {
        this.props.dispatch(getPlotData())
    }

    manageData = () => {
        if (this.props.plotData) {
            let filteredPassages = this.props.plotData.filter(item => {
                return item.not_continued === false && item.container_type >= 1
            });
            let labels = []
            let ids = []
            let counts = []
            filteredPassages.map(item => {
   
                if (!ids.includes(item.container_type)){
                    ids.push(item.container_type)
                    
                    // Match container types to list of names
                    if (item.container_type === 1) {
                        labels.push('Flask')
                    }
                    else if (item.container_type === 2) {
                        labels.push('Vial')
                    }
                    else if (item.container_type === 3) {
                        labels.push('Well Plate')
                    } 
                    else if (item.container_type === 4) {
                        labels.push('Quantum')
                    } 
                    else if (item.container_type === 5) {
                        labels.push('DenovoSkin')
                    } else {
                        labels.push('Other')
                    }
                }
            });

            //count the amount of passages with a specific type and match type name to ID
            ids.map((id, index) => {
                let count = filteredPassages.filter(item => {
                    return item.container_type === id
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
                    colors:   ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
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
                    plotlyConfig: {
                        responsive: true
                    },
                    title: 'Continued Passages <br>by Container Type',
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

export default connect(mapStateToProps)(PassageByContainerType);