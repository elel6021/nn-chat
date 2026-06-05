'use strict';
const pug = require('pug');
const test = require('node:test');
const assert = require('node:assert');

test('チャットメッセージに含まれるHTMLタグがエスケープされる', () => {
  const html = pug.renderFile(
    './views/posts.pug',
    {
      posts: [
        {
          id: 1,
          content: '<script>alert("XSS!")</script>',
          postedBy: 'test_user',
          createAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      user: 'test_user',
    },
  );
});