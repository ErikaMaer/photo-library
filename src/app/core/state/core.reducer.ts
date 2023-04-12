import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as PhotosReducer from "./menus/menus.reducer";

export const reducers: ActionReducerMap<State> = {
  photos: PhotosReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];