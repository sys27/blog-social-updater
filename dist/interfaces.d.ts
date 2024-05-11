export interface RootObject {
    rss: Rss;
}
export interface Rss {
    channel: RssChannel;
}
export interface RssChannel {
    item: RssItem[];
}
export interface RssItem {
    title: string;
    link: string;
    description: string;
    pubDate: string | Date;
}
