import React, {Component} from "react";
import {connect} from "react-redux";
import "./ExportModal.css";
import {exportFiles} from '../../store/actions/exportFilesActions'

class ConfirmationModal extends Component {
    handleExportButton = () => {
        // const action = fetching(this.props.form);
        // this.props.dispatch(action).then(() => this.props.dispatch(reRender()));
        // this.props.toggleModelHandler();
        // this.props.dispatch();
        // event.preventDefault();
        // const fetching = this.props.fetching;
        // const reRender = this.props.reRender;
        // const action = fetching(this.props.form);
        // this.props.dispatch(action).then(() => this.props.dispatch(reRender()));
        // this.props.toggleModelHandler();
        this.props.dispatch(exportFiles()).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'export.xls');
            document.body.appendChild(link);
            link.click();
        })
    };

    render() {
        return (
            <div className="export-file-outside-container">
                <div className="export-file-inside-container">
                    <div className="close-button-container">
                        <button
                            className="close-button-model"
                            onClick={this.props.exportFilesHandler}
                        >
                            X
                        </button>
                    </div>
                    <label>Please, select format to export</label>
                    <select>
                        <option value="xls">xls</option>
                        <option value="json">json</option>
                        <option value="cvs">cvs</option>
                        <option value="xlsx">xlsx</option>
                        <option value="tsv ">tsv</option>
                        <option value="ods">ods</option>
                        <option value="html ">html</option>
                        <option value="yaml">yaml</option>
                    </select>

                    <div className="export-file-button-container">
                        <button
                            className="export-confirm-button"
                            onClick={this.handleExportButton}
                        >
                            Export
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(ConfirmationModal);
