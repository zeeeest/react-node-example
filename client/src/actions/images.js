import types from './types'

function loadImages() {
    return { type: types.LOAD_IMAGES }
}

function loadImagesSuccess(payload) {
    return { type: types.LOAD_IMAGES_SUCCESS, payload: payload }
}

function updateImage(payload) {
    return { type: types.UPDATE_IMAGE, payload }
}

function updateImageSuccess (payload) {
    return { type: types.UPDATE_IMAGE_SUCCESS, payload }
}

export default {
    loadImages,
    loadImagesSuccess,
    updateImage,
    updateImageSuccess
}