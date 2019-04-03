import { ArticleType } from 'modules/articles/types';
import React from 'react';
import { Box, Flex, Text } from 'rebass';

const Article: React.FC<{ data: ArticleType }> = ({
  data,
}: {
  data: ArticleType;
}) => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Box>
          <Text>Title: {data.title}</Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text>Body: {data.body}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Article;
