Feature: Buy an article with two years extended guarantee from www.falabella.com website 
    As a user I want to open Chrome or Internet Explorer web browser and then
    As a user I want to search and open falabella website from Google page and then
    As a user I want to find a ps4 article, add two of them to the shopping car and buy them with two years guarante option

    Scenario: Buy two ps4 with two years extented guarantee on falabella.com
        Given I open the Google page
        When I type "falabella" on the Google Search text field  
        And I press enter
        And I click on "Falabella.com - Mejor Compra Online"
        When I look for "ps4" product 
        And I select the first product result from the suggestions list
        And I should see a new page with "ps4" product detail info
        And I select "2" years of extented guarantee
        And I add the selected product to LA BOLSA
        And I increase the product quantity to "2"
        And I click on the button IR A COMPRAR
        Then I should be redirected to a new page with the phrase "Bienvenid@ a Falabella.com!" message written on the page
