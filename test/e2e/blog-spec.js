(function () {
    'use strict';

    describe("Blog Application Test", function() {
        it('should test the main blog page', function() {
            browser.get('index.html#!/');
            expect(browser.getTitle()).toEqual("AngularJS Blog");

            // obtém a lista de postagens do blog
            var blogList = element.all(by.repeater('blogPost in blogList'));

            // testa o tamanho de blogList
            expect(blogList.count()).toEqual(1);

            browser.get('index.html#!/blogPost/5394e59c4f50850000e6b7ea');
            expect(browser.getTitle()).toEqual("AngularJS Blog");

            // obtem a lista de comentários
            var commentList = element.all(by.repeater('comment in blogEntry.comments'));
            
            // verifica o tamanho de commentList
            expect(commentList.count()).toEqual(2);
            
            element(by.css('.navbar-brand')).click();
        });
    });
}());