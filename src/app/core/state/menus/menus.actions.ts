import { createAction, props } from "@ngrx/store";
import { BasePhotoItem, PhotoItem } from "../../models/photo.types";

export const appLoaded = createAction("[App] App Loaded");

export const fetchPhotoSuccess = createAction(
    "[Photo API] Fetch Photo Success",
    props<{ photoItems: PhotoItem[] }>()
  );
  
 export const fetchPhotoFailed = createAction(
    "[Photo API] Fetch Photo Failed",
    props<{ error: any }>()
  );

export const addPhotoItemFormSubmitted = createAction(
  "[Add Photo Page] Add Photo Item Form Submitted",
  props<{ photoItem: BasePhotoItem }>()
);
export const addPhotoItemSuccess = createAction(
    "[Photo API] Add Photo Item Success"
  );
  
export const addPhotoItemFailed = createAction(
"[Photo API] Add Photo Item Failed",
props<{ error: any }>()
);

export const editPhotoItemFormSubmitted = createAction(
  "[Edit Photo Page] Edit Photo Item Form Submitted",
  props<{ photoItem: PhotoItem }>()
);

export const editPhotoItemSuccess = createAction(
    "[Photo API] Edit Photo Item Success",
    props<{ photoItem: PhotoItem }>()
  );
  

  export const editPhotoItemFailed = createAction(
    "[Photo API] Edit Photo Item Failed",
    props<{ error: any }>()
  );

export const deletePhotoItemInitiated = createAction(
  "[Delete Photo Page] Delete Photo Item Initiated",
  props<{ photoId: number }>()
);

export const deletePhotoItemSuccess = createAction(
    "[Photo API] Delete Photo Item Success",
    props<{ photoId: string }>()
  );
  

  export const deletePhotoItemFailed = createAction(
    "[Photo API] Delete Photo Item Failed",
    props<{ error: any }>()
  );