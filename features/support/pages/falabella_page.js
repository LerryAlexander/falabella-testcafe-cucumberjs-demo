const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.falabella = {
   
    searchBox: function() {
        return Selector('#searchQuestionSolr');
    },
    firstSearchResult: function() {
        return Selector('.fb-masthead-search-results--listitems-items').child('div').nth(0).with({boundTestRun: testController});
    },
    productImage: function() {
        return select('.pod-head__image');
    },
    productTitle: function() {
        return select('.fb-product-cta__title');
    },
    plusButton: function() {
        return select('.fb-quantity-input__plus');
    },
    YearGuaranteeDropDown: function() {
        return Selector('.fb-inline-dropdown__link js-inline-dropdown__link');
    },
    oneYearGuaranteeOption: function() {
        return Selector('.fb-inline-dropdown__list').child('li').nth(1).with({boundTestRun: testController});
    },
    twoYearGuaranteeOption: function() {
        return Selector('.fb-inline-dropdown__list').child('li').nth(2).with({boundTestRun: testController});
    },
    threeYearGuaranteeOption: function() {
        return Selector('.fb-inline-dropdown__list').child('li').nth(3).with({boundTestRun: testController});
    },
    oneYearGuaranteeCheckBox: function() {
        return Selector('.extended-warranty__checkoxes-container').child('div').nth(0).with({boundTestRun: testController});
    },
    twoYearGuaranteeCheckBox: function() {
        return Selector('.extended-warranty__checkoxes-container').child('div').nth(1).with({boundTestRun: testController});
    },
    threeYearGuaranteeCheckBox: function() {
        return Selector('.extended-warranty__checkoxes-container').child('div').nth(2).with({boundTestRun: testController});
    },
    addToBasketButton: function() {
        return select('.fb-btn fb-btn-primary fb-product-cta__controls--actions--choose full-width-btn');
    },
    addToBasketLink: function() {
        return select('.fb-masthead-basket__link');
    },
    goToBasketButton: function() {
        return select('.fb-btn fb-btn-primary fb-added-to-basket__cta fb-added-to-basket__cta--basket');
    },
    buyProductButton: function() {
        return select('.fb-btn fb-btn-primary fb-btn-icon fb-order-status__continue-purchase js-fb-continue-purchase');
    },
    moreBenefitsLink: function() {
        return select('.extended-warranty__link-container');
    },
    welcomeToFalabellaMessage: function() {
        return Selector('div.fbra_unrecognizedUser fbra_test_unrecognizedUser').find('h1');
    }
};