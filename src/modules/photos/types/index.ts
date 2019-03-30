export interface IPhotos {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

export interface IPhotosContext {
  loading: boolean;
  photos: undefined | IPhotos[];
  loadPhotos: () => void;
}
