import * as core from '@actions/core';
import { XMLParser } from 'fast-xml-parser';
import { RootObject } from './interfaces.js';
import _ from 'lodash';

let feed = core.getInput('feed');
let feedUrl = new URL(feed);
let feedFile = await fetch(feedUrl).then(response => response.text());

let parser = new XMLParser();
let xml = parser.parse(feedFile) as RootObject;
let items = xml.rss.channel.item;
for (let item of items) {
    if (typeof item.pubDate === 'string') {
        item.pubDate = new Date(item.pubDate);
    }
}

let latest = _.maxBy(items, 'pubDate');
if (latest !== undefined) {
    let post = `Blogged: ${latest.title} - ${latest.link}`;
    console.log(post);
}