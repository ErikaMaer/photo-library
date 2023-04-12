export interface BasePhotoItem {
	[key: string]: string | number;
	image: string;
}

export interface PhotoItem extends BasePhotoItem {
	id: number;
}

export interface PhotoItems {
	[key: string | number]: PhotoItem;
}

export interface PhotoError {
	status: number;
	message: string;
}

export enum FetchState {
	FETCHING = 'FETCHING',
	FETCHED = 'FETCHED',
	FETCH_ERROR = 'FETCH_ERROR',
	FETCH_NOT_FOUND = 'FETCH_NOT_FOUND'
}