export interface RootObject {
    rss: Rss;
}
interface Rss {
    channel: Channel;
}
interface Channel {
    item: Item[];
}
interface Item {
    title: string;
    link: string;
    description: string;
    pubDate: string | Date;
}
export {};
