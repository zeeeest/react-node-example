import { put, call, takeLatest } from 'redux-saga/effects';
import actions from '../actions/images';
import types from "../actions/types";
import * as api from "../api/api";

export function* loadImages() {
    try {
        const images = yield call(api.getImages);
        yield put(actions.loadImagesSuccess(images));
    } catch (err) {
        console.log(err);
    }
}

export function* updateImage({ payload }) {
    try {
        const updatedImage = yield call(api.updateImage, payload.id, payload);
        yield put(actions.updateImageSuccess(updatedImage));
    } catch (err) {
        console.log(err);
    }
}

export default function* ImagesSagas() {
    yield takeLatest(types.LOAD_IMAGES, loadImages);
    yield takeLatest(types.UPDATE_IMAGE, updateImage);
}
