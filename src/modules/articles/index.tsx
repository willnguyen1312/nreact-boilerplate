import React, { useEffect, useState } from 'react';
import Article from './components/Article';
import { fetchArticlesService } from './helpers/service';
import { ArticleType } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Articles: any = () => {
  const [articles, setArticles] = useState();

  async function fetchArticles() {
    const data = await fetchArticlesService();

    setArticles(data);
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return articles ? (
    (articles as ArticleType[]).map(({ id, ...rest }) => {
      return <Article key={id} data={rest} />;
    })
  ) : (
    <div>Loading...</div>
  );
};

export default Articles;
