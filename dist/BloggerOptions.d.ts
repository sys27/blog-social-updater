export declare class BloggerOptions {
    private _repositoryPath;
    private _contentPath;
    private _extensions;
    private _feed;
    constructor(_repositoryPath: string, _contentPath: string, _extensions: string[], _feed: string);
    get repositoryPath(): string;
    get contentPath(): string;
    get extensions(): string[];
    get feed(): string;
}
