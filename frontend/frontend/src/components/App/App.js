import React, { Component } from "react";
import { connect } from "react-redux";
import IdleTimer from "react-idle-timer";
// import {showModal} from '../../store/actions/modalNotification';

//importing CSS:
import "./App.css";

//Importing components:
import NavigationSide from "../NavigationSide/NavigationSide";
import DashboardTitle from "../DashboardTitle/DashboardTitle";

class Idle extends Component {
  constructor(props) {
    super(props);
    this.idleTimer = null;
    this.onAction = null;
    this.onActive = null;
    this.onIdle = null;
  }

  showModal = () => {
    this.setState({ showModal: true });
    // console.log('showmodal state', this.state)
  };

  hideModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div>
        {/* <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={e => this.onIdle(e)}
          onAction={e => this.onAction(e)}
          debounce={1}
          timeout={1000}
        /> */}
        {
          <div>
            <DashboardTitle />
            <div className="app-main-container">
              <NavigationSide />
              {this.props.children}
            </div>
          </div>
        }
      </div>
    );
  }

  // _onAction = e => {
  //   // console.log('in the action tracker')
  //   // if (this.state.showModal){
  //   //   this.hideModal()
  //   // }
  // };

  // _onActive = e => {
  //   // console.log('user is active', e)
  //   // console.log('time remaining', this.idleTimer.getElapsedTime())
  //   // if (this.idleTimer.getElapsedTime() > 100) {
  //   //   console.log('time left',  this.idleTimer.getLastActiveTime())
  //   //   // this.props.dispatch(showModal())
  //   // }
  // };

  // _onIdle = e => {
  //   // console.log('user is idle', e)
  //   // console.log('last active', this.idleTimer.getLastActiveTime())
  // };
}

export default connect()(Idle);
