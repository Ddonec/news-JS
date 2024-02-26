// export interface NewsItem {
//     author: string;
//     name: string;
//     id: string;
//     title: string;
//     description: string;
//     url: string;
//     publishedAt: string;
//     urlToImage: string;
//     source: { name: string; id: string };
// }

// export interface NewsData extends NewsItem {
//     category: string;
//     language: string;
//     country: string;
// }

// export interface NewsSource extends NewsItem {
//     status: string;
//     sources: NewsData[];
// }

export interface NewsItem {
    description: string;
    author: string;
    name: string;
    id: string;
    title: string;
    url: string;
    publishedAt: string;
    urlToImage: string;
    source: { name: string; id: string };
}

export interface NewsData {
    country?: string;
    language?: string;
    category?: string;
    articles?: Articles[];
    description: string;
    author: string;
    name: string;
    id: string;
    title: string;
    url: string;
    publishedAt: string;
    urlToImage: string;
    source: { name: string; id: string };
}

export interface NewsSource {
    status: string;
    sources: NewsData[];
}

export interface Articles {
    description: string;
    author: string;
    name: string;
    id: string;
    title: string;
    url: string;
    publishedAt: string;
    urlToImage: string;
    source: { name: string; id: string };
}
