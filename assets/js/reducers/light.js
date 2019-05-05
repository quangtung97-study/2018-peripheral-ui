import { TURN_ON, TURN_OFF, LIGHT_ERROR } from "../actions/light";

const initialState = {
  light_status: "Turned Off",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON:
      return {...state, light_status: "Turned On"};

    case TURN_OFF:
      return {...state, light_status: "Turned Off"};

    case LIGHT_ERROR:
      return {...state, light_status: "Light Error"};

    default:
      return state;
  }
};

export default reducer;
