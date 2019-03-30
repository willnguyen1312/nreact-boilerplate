import { photosContext } from 'modules/photos/context';
import { IPhotosContext } from 'modules/photos/types';
import React, { useContext } from 'react';
import { Flex, Text } from 'rebass';

const PhotoList: React.FC = () => {
  const { photos }: IPhotosContext = useContext(photosContext);

  return photos ? (
    <Flex flexDirection="column">
      {photos.map(({ id, title }) => {
        return <Text key={id}>{title}</Text>;
      })}
    </Flex>
  ) : null;
};

export default PhotoList;
