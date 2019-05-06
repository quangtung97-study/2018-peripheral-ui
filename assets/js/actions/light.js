export const TURN_ON_ASYNC = "light/TURN_ON_ASYNC";
export const TURN_OFF_ASYNC = "light/TURN_OFF_ASYNC";
export const CHANGE_VALUE_ASYNC = "light/CHANGE_VALUE_ASYNC";

export const TURN_ON = "light/TURN_ON";
export const TURN_OFF = "light/TURN_OFF";
export const LIGHT_ERROR = "light/LIGHT_ERROR";
export const CHANGE_VALUE = "light/CHANGE_VALUE";
export const CHANGE_LIGHT_ERROR = "light/LIGHT_CHANGE_ERROR";

export const turnOnAsync = () => ({
  type: TURN_ON_ASYNC,
});

export const turnOffAsync= () => ({
  type: TURN_OFF_ASYNC,
});

export const changeLightValueAsync = value => ({
  type: CHANGE_VALUE_ASYNC,
  value: value,
});

export const turnOn = () => ({
  type: TURN_ON,
});

export const turnOff = () => ({
  type: TURN_OFF,
});

export const lightError = () => ({
  type: LIGHT_ERROR,
});

export const changeLightValue = value => ({
  type: CHANGE_VALUE,
  value: value,
});

export const changeLightError = () => ({
  type: CHANGE_LIGHT_ERROR,
});
