import { all } from "redux-saga/effects";
import { watchGetGifsWorker } from "./gifSaga";

function* rootSaga() {
  yield all([watchGetGifsWorker()]);
}
export default rootSaga;
