import News from './news/news';
import Sources from './sources/sources';
import { NewsData, NewsSource } from '../../types/data.interface';

export class AppView {
    news: News<NewsData>;
    sources: Sources<NewsSource>;

    constructor() {
        this.news = new News<NewsData>();
        this.sources = new Sources<NewsSource>();
    }

    drawNews<T extends { articles: NewsData[] }>(data: T) {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources<T extends { sources: NewsSource[] }>(data: T) {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
