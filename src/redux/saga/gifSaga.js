import { put, takeLatest } from "redux-saga/effects";
import { GET_GIFS, LOADING, SET } from "../actions/types";
import axios from "axios";

const API = "X3JEbtEsbcTQ8qObHMW1JxTkOkiQ4LIZ";

function* getGifsWorker(action) {
  try {
    yield put({type:LOADING})
    const response = yield axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API}&limit=${5}&offset=${action.offset}`
    );
    yield put({type:SET,data:response.data.data})
  } catch (err) {
    console.log(err);
  }
}

export function* watchGetGifsWorker() {
  yield takeLatest(GET_GIFS, getGifsWorker);
}
