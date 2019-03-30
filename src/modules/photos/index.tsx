import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import PhotoLoader from './components/PhotosLoader';
import { photosContext } from './context';
import { fetchPhotosService } from './helpers/service';
import { IPhotosContext } from './types';

const Photos: any = () => {
  const [photos, setPhotos] = useState();
  const [loading, setLoading] = useState();

  async function loadPhotos() {
    setLoading(true);
    const newPhotos = await fetchPhotosService();
    setLoading(false);
    setPhotos(newPhotos);
  }

  const photosContextValue: IPhotosContext = {
    loading,
    photos,
    loadPhotos,
  };

  return (
    <photosContext.Provider value={photosContextValue}>
      <PhotoLoader />
      <PhotoList />
    </photosContext.Provider>
  );
};

export default Photos;
