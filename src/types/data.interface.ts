export interface NewsItem {
    author: string;
    name: string;
    id: string;
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    urlToImage: string;
    source: { name: string; id: string };
}

export interface NewsData extends NewsItem {
    category: string;
    language: string;
    country: string;
}

export interface NewsSource extends NewsItem {
    status: string;
    sources: NewsData[];
}

export interface NewsCallback {
    (data?: NewsItem[]): void;
}
