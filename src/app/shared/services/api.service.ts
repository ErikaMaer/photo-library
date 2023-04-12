import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    getPhotoUrl(id: number): string {
        return `https://picsum.photos/id/${id}/200`
    }
}