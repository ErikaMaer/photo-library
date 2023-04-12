import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PhotosState } from "./menus.state";

export const selectPhotos = createFeatureSelector<PhotosState>("photos");

export const selectPhotoItems = createSelector(
    selectPhotos,
    (state: PhotosState) => state.photoItems
  );

export const selectPhotoItem = (props: { id: number }) =>
    createSelector(selectPhotoItems, (photoItem) =>
    photoItem.find((photoItem) => photoItem.id === props.id)
);