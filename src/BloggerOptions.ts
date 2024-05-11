export class BloggerOptions {
    constructor(
        private _repositoryPath: string,
        private _contentPath: string,
        private _extensions: string[],
        private _feed: string
    ) { }

    public get repositoryPath() {
        return this._repositoryPath;
    }

    public get contentPath() {
        return this._contentPath;
    }

    public get extensions() {
        return this._extensions;
    }

    public get feed() {
        return this._feed;
    }
}
