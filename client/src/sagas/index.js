import { all } from 'redux-saga/effects'
import ImagesSagas from "./images";

export default function* rootSaga() {
    const sagas = [ImagesSagas()];
    yield all(sagas);
}