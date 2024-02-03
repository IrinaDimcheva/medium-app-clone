import { ArticleInterface } from './article.interface';

export interface GetFeedResponseInterface {
  articles: ArticleInterface[];
  articleCount: number;
}
