let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}


describe('ArmageDOM tests', function () {
    let targetHtml
    beforeEach( function (){
        document.body.innerHTML = `
        <div id="target">
            <div class="nested target">
                <p>This is some text</p>
            </div>
            <div class="target">
                <p>Empty div</p>
            </div>
            <div class="inside">
                <span class="nested">Some more text</span>
                <span class="target">Some more text</span>
            </div>
        </div>`
        targetHtml = $('#target');
    });
    //let initialHtml = $('#target').html();
    it('should do nothing if one of selectors is not valid', function () {
        let selector1 = $('.target');
        let selector2 = 2;
        let initialHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect($('#target').html()).to.be.equal(initialHtml);
    });
    it('should do nothing if both are the same', function () {
        let selector1 = $('.target');
        let initialHtml = targetHtml.html();
        nuke(selector1, selector1);
        expect($('#target').html()).to.be.equal(initialHtml);
    });
    it('should remove if correct selectors', function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let initialHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect($('#target').html()).to.not.be.equal(initialHtml);
    });
    it('should not remove if correct', function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        let initialHtml = targetHtml.html();
        nuke(selector1, selector2);
        expect($('#target').html()).to.be.equal(initialHtml);
    });
});
