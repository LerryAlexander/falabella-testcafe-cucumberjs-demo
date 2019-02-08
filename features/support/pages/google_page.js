const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.google = {

    searchBox: function() {
        return select('.gLFyf.gsfi');
    },
    googleSearchButton: function() {
        return select('[name="btnK"]');
    },
    googleFirstResult: function() {
        return Selector('div.r').find('h3').with({boundTestRun: testController});
    },
    googleLogo: function() {
        return select('#hplogo');
    },
};