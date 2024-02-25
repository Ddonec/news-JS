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

export interface NewsCallback {
    (data?: NewsItem[]): void;
}
