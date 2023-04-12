import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { ApiService } from "../../services/api.service";
import * as PhotosActions from "./menus.actions";

@Injectable()
export class MenusEffects {
  constructor(private actions$: Actions<any>, private apiService: ApiService) {}

 // fetchMenus$ = createEffect(() =>
    // this.actions$.pipe(
    //   ofType(PhotosActions.appLoaded.type, PhotosActions.addPhotoItemSuccess),
    //   ofType (PhotosActions.fetchPhotoSuccess({ photoItems: this.apiService.getItems() })),
      // )
    
  // );
}
