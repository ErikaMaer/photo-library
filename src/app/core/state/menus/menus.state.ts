import { PhotoItem } from "../../models/photo.types";

export interface PhotosState {
  photoItems: PhotoItem[];
}

export const initialState: PhotosState = {
  photoItems: [],
};