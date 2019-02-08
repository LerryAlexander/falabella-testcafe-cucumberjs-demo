# Falabella website automated test demo using TestCafe and Cucumber JS 

This is a demonstration of integration [TestCafé](https://github.com/DevExpress/testcafe) into [CucumberJS](https://github.com/cucumber/cucumber-js) tests using TestCafe and Cucumber for Falabella website

## Versions
<table>
<tr>
    <td>TestCafé</td>
    <td>0.22.0</td>
</tr>
<tr>
    <td>CucumberJS</td>
    <td>4.2.1</td>
</tr>
</table>

## Download and Installation 

1. Click the "Clone or download" button
2. Click "Download ZIP"
3. When the download completes unzip the file
4. The unziped file contains all the contents of this repo
5. Make sure [Node.js](https://nodejs.org/) is installed
6. Open a terminal command pront
6. Navigate to the root of the repo
3. Execute the `npm install` command

## Running tests

### Windows
Tests can be run either on Chrome or Internet Explorer browsers by executing `npm run test-chrome` or `npm run test-ie` commands in command prompt. 
Note: test can also run by default on Chrome typing either `.\node_modules\.bin\cucumber-js.cmd` or `npm test` commands in command prompt. 

### Mac or Linux
Tests can be run by executing `node_modules/cucumber/bin/cucumber-js` (it will be executed on chrome browser by default)

## Running reports (only Windows support)

For running a JSON Cucumber report and specify the browser (either chrome or internet explorer) you can use the following command:
`npm run test-chrome-report` or `npm run test-ie-report`.
Note: JSON Cucumber repor can also run by default on chrome by using the command `./node_modules/.bin/cucumber-js.cmd --format json:./reports/report.json`


