import React, { Component } from "react";
import { connect } from "react-redux";

import "./List.css";
import Item from "../Item/Item";

class List extends Component {
  state = {
    showProfile: false
  };

  renderList = () => {
    const { elementFound } = this.props;
    if (elementFound) {
      return (
        <Item
          item={elementFound}
          url={elementFound.url}
          info={this.props.info}
          numbering={elementFound.numbering}
          toggleModelHandler={this.props.toggleModelHandler}
        />
      );
      // } else if (this.props.biopsySelected) {
      //   const inputFields = this.filterDonorInBiopsies();
      //   console.log("ian", inputFields);
      //
    } else {
      if (this.props.inputFields) {
        return this.props.inputFields.map((item, index) => {
          return (
            <Item
              key={index}
              item={item}
              info={this.props.info}
              url={this.props.url}
              fetch={this.props.fetching}
              reRender={this.props.reRender}
              numbering={item.numbering}
              toggleModelHandler={this.props.toggleModelHandler}
            />
          );
        });
      }
    }
  };

  render() {
    return <div className="list-main-component">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    biopsySelected: state.donorReducer.biopsySelected
  };
};

export default connect(mapStateToProps)(List);
