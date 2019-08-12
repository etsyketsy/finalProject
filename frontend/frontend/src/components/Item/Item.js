import React, {Component} from "react";
import {connect} from "react-redux";
import {filterAction} from "../../store/actions/filterBiopsies";
import arrowDown from "../../Assets/arrow-down.png";
import arrowUp from "../../Assets/arrow-up.png";
import {deleteItem} from "../../store/actions/deleteItemAction";
import "./Item.css";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

class Item extends Component {
    state = {
        showProfile: false,
        numbering: "",
        showConfirmation: false
    };

    // submitFormHandler = event => {
    //   event.preventDefault();
    //   const fetching = this.props.fetching;
    //   const reRender = this.props.reRender;
    //   const action = fetching(this.props.form);
    //   this.props.dispatch(action).then(() => this.props.dispatch(reRender()));
    //   this.props.toggleModelHandler();
    // };

    confirmationDeleteHandler = () => {
        this.setState({
            showConfirmation: !this.state.showConfirmation
        });
    };

    renderConfirmationModal = () => {
        return this.state.showConfirmation ? (
            <ConfirmationModal
                handleDelete={this.handleDelete}
                confirmationDeleteHandler={this.confirmationDeleteHandler}
            />
        ) : null;
    };

    handleDelete = () => {
        const data = {
            url: this.props.url,
            item: this.props.item.id
        };
        this.props.dispatch(deleteItem(data)).then(() => {
            this.showProfileHandler();
            this.props.dispatch(this.props.reRender());
        });
    };

    editItem = () => {
        this.props.toggleModelHandler();
    };

    showProfileHandler = () => {
        this.setState({
            showProfile: !this.state.showProfile
        });
    };

    mainComponentActiveClass = () => {
        let cssClass = "";
        if (this.state.showProfile) {
            cssClass += " item-main-container-default";
        } else {
            cssClass += " item-main-container";
        }

        if (this.props.item.active) {
            cssClass += " active";
        }
        return cssClass;
    };

    getNumeringHandler = () => {

        this.props.item.active = !this.props.item.active;
        this.props.dispatch({
            type: "SET_ACTIVE",
            payload: this.props.item
        });
        this.props.dispatch(
            filterAction(this.props.item, this.props.numbering === this.props.active)
        );
    };

    render() {
        const propsToArray = new Array(this.props.item);
        // to get the last items:
        // const firstKey = Object.keys(propsToArray[0])[Object.keys(propsToArray[0]).length -1]
        // const firstValue = Object.values(propsToArray[0])[Object.values(propsToArray[0]).length -1]
        // to get the first items:
        // const firstKey = Object.keys(propsToArray[0])[0];
        const firstValue = Object.values(propsToArray[0])[0];
        const secondKey = Object.values(propsToArray[0])[1];
        const secondValue = Object.keys(propsToArray[0])[1];
        // const { numbering } = this.props;

        return (
            <div className={this.mainComponentActiveClass()}>
                {this.state.showProfile ? (
                    Object.keys(this.props.item).map((key, index) => {
                        const type = typeof this.props.item[key];
                        if (["string", "number", "boolean"].includes(type)) {
                            const value = `${this.props.item[key]}`;
                            return (
                                <div key={index}>
                                    <label
                                        className={
                                            this.state.showProfile ? "item-key-default" : "item-key"
                                        }
                                    >
                                        {key}
                                    </label>
                                    <p className="item-value">{value}</p>
                                </div>
                            );
                        }
                    })
                ) : (
                    <div className="list-item-display" onClick={this.getNumeringHandler}>
                        {/* <label className="item-key">{firstKey}</label> */}
                        <p id="myParagraph" className="item-value">
                            {firstValue}
                        </p>
                        <div className="second-container">
                            <p className="secondValue">{secondValue} </p>
                            <span className="secondKey">{secondKey}</span>
                        </div>
                    </div>
                )}

                <div className="item-show-profile-button-container">
                    {this.state.showProfile ? (
                        <textarea className="comments-textarea"/>
                    ) : null}
                    <div className="delete-item-button-edit-container-a">
                        {this.state.showProfile ? (
                            <div className="delete-item-button-edit-container">
                                <button
                                    className="item-delete-button"
                                    onClick={this.confirmationDeleteHandler}
                                >
                                    X
                                </button>
                                <button className="item-edit-button" onClick={this.editItem}>
                                    Edit
                                </button>
                            </div>
                        ) : null}
                        <div className="profile-button-container">
                            <button
                                className="item-show-profile-button"
                                onClick={this.showProfileHandler}
                            >
                                <img
                                    alt="arrows"
                                    src={this.state.showProfile ? arrowUp : arrowDown}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                {this.renderConfirmationModal()}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        donors: state.donorReducer.donor,
        active: state.generalReducer.active
    };
};
export default connect(mapStateToProps)(Item);
