import { put, takeEvery, all, call } from "redux-saga/effects";

import {
  TURN_ON_ASYNC,
  TURN_OFF_ASYNC,
  LIGHT_ERROR,
} from "./actions/light";

import { turnOn, turnOff, lightError } from "./actions/light";

function *turnOnAsync() {
  try {
    const res = yield call(fetch, "/api/light/on", { method: "POST" });
    const json = yield call(res => res.json(), res);

    if (json.status == "OK")
      yield put(turnOn());
    else
      yield put(lightError());
  } 
  catch (error) {
      yield put(lightError());
  }
}

function *turnOffAsync() {
  try {
    const res = yield call(fetch, "/api/light/off", { method: "POST" });
    const json = yield call(res => res.json(), res);

    if (json.status == "OK")
      yield put(turnOff());
    else
      yield put(lightError());
  } 
  catch (error) {
      yield put(lightError());
  }
}

function *watchLight() {
  yield takeEvery(TURN_ON_ASYNC, turnOnAsync);
  yield takeEvery(TURN_OFF_ASYNC, turnOffAsync);
}

export default function *rootSaga() {
  yield all([
    watchLight(),
  ]);
}
