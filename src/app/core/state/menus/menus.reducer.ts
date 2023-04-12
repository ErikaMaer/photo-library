import { Action, createReducer, on } from "@ngrx/store";
import * as PhotosActions from "./menus.actions";
import { initialState, PhotosState } from "./menus.state";

const photosReducer = createReducer(
  initialState,
  on(PhotosActions.fetchPhotoSuccess, (state, { photoItems }) => ({
    ...state,
    photoItems: photoItems,
  })),
  on(PhotosActions.editPhotoItemSuccess, (state, { photoItem }) => {
    const photoItemIndex = state.photoItems.findIndex(
      (item) => item.id === photoItem.id
    );
    const updatedPhotoItems = [...state.photoItems];
    updatedPhotoItems[photoItemIndex] = photoItem;
    return {
      ...state,
      photoItems: updatedPhotoItems,
    };
  }),
  on(PhotosActions.deletePhotoItemSuccess, (state, { photoId }) => {
    const photoItemIndex = state.photoItems.findIndex(
      (item) => item.id === +photoId
    );
    const updatedPhotoItems = [...state.photoItems];
    updatedPhotoItems.splice(photoItemIndex, 1);
    return {
      ...state,
      photoItems: updatedPhotoItems,
    };
  })
);

export function reducer(state: PhotosState | undefined, action: Action) {
  return photosReducer(state, action);
}