describe("Blog Application Test", function() {
    it('should test the main blog page', function() {
        browser.get('index.html#!/');
        expect(browser.getTitle()).toEqual("AngularJS Blog");

        var blogList = element.all(by.repeater('blogPost in blogList'));

        expect(blogList.count()).toEqual(1);

        browser.get('index.html#!/blogPost/5394e59c4f50850000e6b7ea');
        expect(browser.getTitle()).toEqual("AngularJS Blog");

        var commentList = element.all(by.repeater('comment in blogEntry.comments'));
        expect(commentList.count()).toEqual(2);
    });
})