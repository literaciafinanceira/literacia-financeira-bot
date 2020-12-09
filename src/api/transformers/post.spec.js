import { expect, describe, test, beforeEach } from '@jest/globals';
import postMapper from './post.js';
import mockData from '../mocks/new.json';

let [post] = mockData.data.children;

beforeEach(() => {
  [post] = mockData.data.children;
});

describe("postMapper - Map API response", () => {
  test("returns Post object without thumbnail", () => {
    post.data.thumbnail = 'self';
    const result = postMapper(post);

    /** @type {Post} */
    const expected = {
      title: post.data.title,
      description: post.data.selftext,
      createdAt: post.data.created_utc * 1000,
      author: post.data.author,
      isNSFW: post.data.over_18,
      thumbnail: undefined,
      url: post.data.url,
    };

    // @ts-ignore
    expect(result).toMatchObject(expected)
  });

  test("returns Post object with thumbnail", () => {
    post.data.thumbnail = 'http://url.com/pic.jpg';
    const result = postMapper(post);

    /** @type {Post} */
    const expected = {
      title: post.data.title,
      description: post.data.selftext,
      createdAt: post.data.created_utc * 1000,
      author: post.data.author,
      isNSFW: post.data.over_18,
      thumbnail: post.data.thumbnail,
      url: post.data.url,
    };

    // @ts-ignore
    expect(result).toMatchObject(expected)
  });
});
