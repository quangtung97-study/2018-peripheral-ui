import React from "react";
import { connect } from "react-redux";
import { turnOnAsync, turnOffAsync } from "../actions/light";

const Light = props => (
  <div>
    <button id="turn-on" className="btn btn-primary" onClick={props.turnOn} >Bật</button>
    <button id="turn-off" className="btn btn-danger" onClick={props.turnOff} >Tắt</button>
    <h2>{props.light_status}</h2>
  </div>
);

const mapStateToProps = state => ({
  light_status: state.light_status,
});

const mapDispatchToProps = dispatch => ({
  turnOn: () => dispatch(turnOnAsync()),
  turnOff: () => dispatch(turnOffAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Light);
