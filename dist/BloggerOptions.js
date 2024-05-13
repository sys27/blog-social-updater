export class BloggerOptions {
    _repositoryPath;
    _contentPath;
    _extensions;
    _feed;
    _twitterToken;
    constructor(_repositoryPath, _contentPath, _extensions, _feed, _twitterToken) {
        this._repositoryPath = _repositoryPath;
        this._contentPath = _contentPath;
        this._extensions = _extensions;
        this._feed = _feed;
        this._twitterToken = _twitterToken;
    }
    get repositoryPath() {
        return this._repositoryPath;
    }
    get contentPath() {
        return this._contentPath;
    }
    get extensions() {
        return this._extensions;
    }
    get feed() {
        return this._feed;
    }
    get twitterToken() {
        return this._twitterToken;
    }
}
//# sourceMappingURL=BloggerOptions.js.map