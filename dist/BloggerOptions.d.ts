export declare class BloggerOptions {
    private _repositoryPath;
    private _contentPath;
    private _extensions;
    private _feed;
    private _twitterToken;
    constructor(_repositoryPath: string, _contentPath: string, _extensions: string[], _feed: string, _twitterToken: string);
    get repositoryPath(): string;
    get contentPath(): string;
    get extensions(): string[];
    get feed(): string;
    get twitterToken(): string;
}
