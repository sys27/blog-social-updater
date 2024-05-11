export class BloggerOptions {
    _repositoryPath;
    _contentPath;
    _extensions;
    _feed;
    constructor(_repositoryPath, _contentPath, _extensions, _feed) {
        this._repositoryPath = _repositoryPath;
        this._contentPath = _contentPath;
        this._extensions = _extensions;
        this._feed = _feed;
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
}
//# sourceMappingURL=BloggerOptions.js.map