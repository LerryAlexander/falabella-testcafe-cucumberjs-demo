const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const googlePage = require('../support/pages/google_page');
const falabellaPage = require('../support/pages/falabella_page');

  Given('I open the Google page', async function () {
    await testController.setPageLoadTimeout(40000)
                        .navigateTo('https://www.google.cl/');
  });

  When('I type {string} on the Google Search text field', async function (string) {
    await testController.typeText(googlePage.google.searchBox(),string)
  });

  When('I press enter', async function () {
    await testController.pressKey('enter')
  });

  When('I click on {string}', async function (string) {
    await testController.click(Selector('div.r').find('h3'))
                        //.expect(googlePage.google.googleFirstResult.innerText).contains('string')
  });

  When('I look for {string} product', async function (string) {
    await testController.click(falabellaPage.falabella.searchBox())
                        .typeText(falabellaPage.falabella.searchBox(),string)
  });

  When('I select the first product result from the suggestions list', async function () {
    await testController.click(falabellaPage.falabella.firstSearchResult())  
                        .click(falabellaPage.falabella.productImage())
  });

  When('I should see a new page with {string} product detail info', async function (string) {
    await testController.expect(falabellaPage.falabella.productTitle().innerText).contains(string.toUpperCase())   
  });

  When('I add the selected product to LA BOLSA', async function () {
    await testController.click(falabellaPage.falabella.addToBasketLink())
                        //.click(Selector('.extended-warranty__title--bold'),{ offsetX: 568 })
                        //.click(await testController.hover(Selector('.extended-warranty__title--bold').with({boundTestRun: testController}),{ offsetX: 580 }))
  });

  When('I click on VER BOLSA DE COMPRAS', async function () {
    await testController.click(falabellaPage.falabella.goToBasketButton())
  });

  When('I increase the product quantity to {string}', async function (string) {
    var quantity = parseInt(string,10);
    var i;
    for(i=0; i < quantity-1; i++){
      await testController.click(falabellaPage.falabella.plusButton())
    }
  });

  When('I select {string} years of extented guarantee', async function (string) {
    var yearGuarantee = parseInt(string, 10);
    if (yearGuarantee==1){
      await testController.click(falabellaPage.falabella.oneYearGuaranteeCheckBox())
    }else if(yearGuarantee==2){
      await testController.click(falabellaPage.falabella.twoYearGuaranteeCheckBox())
    }else if(yearGuarantee==3){
      await testController.click(falabellaPage.falabella.threeYearGuaranteeCheckBox())
    }else{
      console.log('invalid option');
    }
  });

  When('I click on the button IR A COMPRAR', async function () {
    await testController.click(falabellaPage.falabella.buyProductButton())   
  });

  Then('I should be redirected to a new page with the phrase {string} message written on the page', async function(string){
    await testController.expect(falabellaPage.falabella.welcomeToFalabellaMessage.innerText).contains(string)
  });