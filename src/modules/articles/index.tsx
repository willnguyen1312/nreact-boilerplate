import { RouteComponentProps } from '@reach/router';
import React, { useEffect, useState } from 'react';
import Article from './components/Article';
import { fetchArticlesService } from './helpers/service';
import { IArticle } from './types';

const Articles: any = (_: RouteComponentProps) => {
  const [articles, setArticles] = useState();

  async function loadArticles() {
    const newArticles = await fetchArticlesService();

    setArticles(newArticles);
  }

  useEffect(() => {
    loadArticles();
  }, []);

  return articles ? (
    (articles as IArticle[]).map(({ id, ...rest }) => {
      return <Article key={id} data={rest} />;
    })
  ) : (
    <div>Loading...</div>
  );
};

export default Articles;
