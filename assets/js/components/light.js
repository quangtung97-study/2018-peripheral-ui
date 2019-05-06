import React from "react";
import { connect } from "react-redux";
import { turnOnAsync, turnOffAsync } from "../actions/light";
import { changeLightValueAsync } from "../actions/light";

const Light = props => (
  <div>
    <div>
      <button id="turn-on" className="btn btn-primary" onClick={props.turnOn} >Bật</button>
      <button id="turn-off" className="btn btn-danger" onClick={props.turnOff} >Tắt</button>
      <h2>{props.light_status}</h2>
    </div>
    <hr/>
    <div>
      <h3>Light Intensity</h3>
      <input type="range" min="1" max="100" className="slider" onInput={props.onSlide} />
      <h4>Value: {props.value}</h4>
    </div>
  </div>
);

const mapStateToProps = state => ({
  light_status: state.light_status,
  value: state.light_slider_value,
});

const mapDispatchToProps = dispatch => ({
  turnOn: () => dispatch(turnOnAsync()),
  turnOff: () => dispatch(turnOffAsync()),
  onSlide: e => dispatch(changeLightValueAsync(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Light);
