'use strict';

describe('Blog Application Test', function () {

    describe('home', function() {

        beforeEach(function() {
            browser.get('index.html#!/home');
        });

        it('should automatically redirect to /home when location hash/fragment is empty', function() {
            browser.get('index.html');
            expect(browser.getLocationAbsUrl()).toMatch("/home");
        });

        it('should varify size of entry list', function() {
            var blogList = element.all(by.repeater('blogPost in blogList'));
            expect(blogList.count()).toEqual(2);
        });

    });


    describe('post', function() {

        beforeEach(function() {
            browser.get("index.html#!/blogPost/1");
        });

        it('should verify the comments list', function() {
            var commentList = element.all(by.repeater('comment in blogEntry.comments'));
            expect(commentList.count()).toEqual(2);
        });

    });
});
