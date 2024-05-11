import * as core from '@actions/core';
import { XMLParser } from 'fast-xml-parser';
import { DiffNameStatus, simpleGit } from 'simple-git';
import { BloggerOptions } from './BloggerOptions.js';
let options = getOptions();
let changedFiles = await getChangedFiles(options);
if (changedFiles.length === 0) {
    core.info('No new blog posts found');
    process.exit(0);
}
let feedItems = await getFeedItems(options);
core.info("TODO:");
function getOptions() {
    let gitPath = core.getInput('path');
    let contentPath = core.getInput('contentPath');
    let extensions = core.getInput('extensions').split(',');
    let feed = core.getInput('feed');
    return new BloggerOptions(gitPath, contentPath, extensions, feed);
}
async function getChangedFiles(options) {
    let git = simpleGit(options.repositoryPath);
    let diff = await git.diffSummary();
    return diff.files
        .filter(file => file.status === DiffNameStatus.ADDED &&
        file.binary === false &&
        file.file.startsWith(options.contentPath) &&
        options.extensions.some(ext => file.file.endsWith(ext)))
        .map(file => file.file);
}
async function getFeedItems(options) {
    let feedUrl = new URL(options.feed);
    let feedFile = await fetch(feedUrl).then(response => response.text());
    let parser = new XMLParser();
    let xml = parser.parse(feedFile);
    let items = xml.rss.channel.item;
    for (let item of items) {
        if (typeof item.pubDate === 'string') {
            item.pubDate = new Date(item.pubDate);
        }
    }
    return xml.rss.channel.item;
}
//# sourceMappingURL=index.js.map