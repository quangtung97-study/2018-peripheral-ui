import {
  TURN_ON,
  TURN_OFF,
  LIGHT_ERROR,
  CHANGE_VALUE,
  CHANGE_LIGHT_ERROR,
} from "../actions/light";

const initialState = {
  light_status: "Turned Off",
  light_slider_value: 50,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON:
      return {...state, light_status: "Turned On"};

    case TURN_OFF:
      return {...state, light_status: "Turned Off"};

    case LIGHT_ERROR:
      return {...state, light_status: "Light Error"};

    case CHANGE_VALUE:
      return {...state, light_slider_value: action.value };

    case CHANGE_LIGHT_ERROR:
      return {...state, light_slider_value: "ERROR" };

    default:
      return state;
  }
};

export default reducer;
