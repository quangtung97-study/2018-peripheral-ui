export const TURN_ON_ASYNC = "light/TURN_ON_ASYNC";
export const TURN_OFF_ASYNC = "light/TURN_OFF_ASYNC";
export const TURN_ON = "light/TURN_ON";
export const TURN_OFF = "light/TURN_OFF";
export const LIGHT_ERROR = "light/LIGHT_ERROR";

export const turnOnAsync = () => ({
  type: TURN_ON_ASYNC,
});

export const turnOffAsync= () => ({
  type: TURN_OFF_ASYNC,
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
