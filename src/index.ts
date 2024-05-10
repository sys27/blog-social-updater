import * as core from '@actions/core';
import * as github from '@actions/github';
import { XMLParser } from 'fast-xml-parser';
import { readFileSync } from 'fs';
import { RootObject } from './interfaces';

let feed = core.getInput('feed');
let feedFile = readFileSync(feed, 'utf8');

let parser = new XMLParser();
let xml = parser.parse(feedFile) as RootObject;
let items = xml.rss.channel.item;
for (let item of items) {
    console.log(item);
}