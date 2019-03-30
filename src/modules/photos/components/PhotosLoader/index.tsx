import { Button } from 'components/Custom';
import { photosContext } from 'modules/photos/context';
import { IPhotosContext } from 'modules/photos/types';
import React, { useContext } from 'react';
import { Flex } from 'rebass';

const PhotosLoader = () => {
  const { loadPhotos, loading }: IPhotosContext = useContext(photosContext);

  return (
    <Flex>
      <Button disabled={loading} onClick={loadPhotos}>
        {loading ? 'Loading...' : 'Load photos'}
      </Button>
    </Flex>
  );
};

export default PhotosLoader;
