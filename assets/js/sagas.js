import { put, takeEvery, takeLatest, all, call, delay } from "redux-saga/effects";

import {
  TURN_ON_ASYNC,
  TURN_OFF_ASYNC,
  CHANGE_VALUE_ASYNC,
} from "./actions/light";

import {
  turnOn,
  turnOff,
  lightError,
  changeLightValue,
  changeLightError,
} from "./actions/light";

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

function *changeLightValueAsync(e) {
  yield delay(50);
  try {
    const res = yield call(fetch, "/api/light/change/" + e.value, { method: "POST" });
    const json = yield call(r => r.json(), res);
    if (json.status == "OK")
      yield put(changeLightValue(e.value));
    else
      yield put(changeLightError());
  }
  catch (error) {
    yield put(changeLightError());
  }
}

function *watchLight() {
  yield takeEvery(TURN_ON_ASYNC, turnOnAsync);
  yield takeEvery(TURN_OFF_ASYNC, turnOffAsync);
  yield takeLatest(CHANGE_VALUE_ASYNC, changeLightValueAsync);
}

export default function *rootSaga() {
  yield all([
    watchLight(),
  ]);
}
