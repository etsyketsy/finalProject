import React, { Component } from 'react';
import {connect} from 'react-redux';

import'./Modal.css';
import Aux from '../Auxx/Auxx';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100%)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                    <button>OK</button> {}
                </div >
            </Aux>
        )
    }
}

const mapStateToProps = state => ({
    show: state.modalNotification.showModal
})
export default connect(mapStateToProps)(Modal);