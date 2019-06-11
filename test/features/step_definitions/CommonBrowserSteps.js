'use strict';
const testConfig = require('../../../test.config');
const assert = require('assert');
const { Before, After, Given, When, Then, setDefaultTimeout } = require('cucumber');
const Authentication = require('menora.libs.infrastructure-testing/common/Authentication');
const Browser = require('menora.libs.infrastructure-testing/common/Browser');
const path = require('path');

let browser;

const WAIT_TIME = 200;
setDefaultTimeout(60 * 10000);

Before((scenario, callback) => {
  try {
    console.log(`************ Start of ${scenario.sourceLocation.uri.split('\\')[2]} ************`);
    console.log(`************ ${scenario.pickle.name} ************`);
    console.log(` `);
    callback(null);
  } catch (e) {
    console.log(`${e.message || JSON.stringify(e)}`);
  }
});

After((scenario, callback) => {
  try {
    console.log(` `);
    console.log(`************ End of  ${scenario.sourceLocation.uri.split('\\')[2]} ************`);
    callback(null);
  } catch (e) {
    console.log(`${e.message || JSON.stringify(e)}`);
  }
});

// *** CLOSE BROWSER AFTER
// use function to be able access 'this'
After(async function(scenario)  {
  try {
    //add screenshot if scenario failed
    if(scenario.result.status === 'failed'){
      let img = await browser.takeScreenshot();
      this.attach(img, 'image/png');  
    }
    await browser.closeBrowser();
  } catch (e) {
    console.log(`${e.message || JSON.stringify(e)}`);
  }
});

///////////////////// *** Handle Browser Steps *** /////////////////////

// *** OPEN DESKTOP BROWSER
// Example : I enter the webpage "www.menoramivt.co.il"
// Example : I enter the webpage "myWebPage" (will take the url value from test.config.js)
Given('I enter the webpage {string}', async url => {
  try {
    browser = new Browser();
    const targetUrl = testConfig[url] || url;
    await browser.openBrowser(targetUrl);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** OPEN MOBILE BROWSER
// Example : I enter the webpage "www.menoramivt.co.il" in "iPad" platform
// Example : I enter the webpage "myWebPage" in "iPad" platform (will url take the value from test.config.js)
Given('I enter the webpage {string} in {string} platform', async (url, platform) => {
  try {
    browser = new Browser(platform);
    const targetUrl = testConfig[url] || url;
    await browser.openBrowser(targetUrl);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** OPEN DESKTOP BROWSER WITH TOKEN
// Example : I enter the webpage "www.menoramivt.co.il" with a token with values
// Example : I enter the webpage "myWebPage" with a token with values (will url take the value from test.config.js)
// |   username       |   DIGITAL_SHORT_IDENTIFICATION |
// |   password       |   digitalShortIdentification1  |
// |   uuid           |   5b8298afda1043ec95323aba     |
When('I enter the webpage {string} with a token with values', async (url, data) => {
  try {
    browser = new Browser();
    const body = Authentication.token.buildTokenBodyFromRawTable(data);
    const token = await Authentication.token.createToken(body);
    const targetUrl = testConfig[url] || url;
    const fullURL = `${targetUrl}?token=${token.data.data}`;
    await browser.openBrowser(fullURL);
    return;
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** OPEN MOBILE BROWSER WITH TOKEN (choose supported devices from mobile browserOptions.js)
// Example : I enter the webpage "www.menoramivt.co.il" in "iPad" platform with a token with values
// Example : I enter the webpage "myWebPage" in "iPad" platform with a token with values (will url take the value from test.config.js)
// |   username       |   DIGITAL_SHORT_IDENTIFICATION |
// |   password       |   digitalShortIdentification1  |
// |   uuid           |   5b8298afda1043ec95323aba     |
When('I enter the webpage {string} in {string} platform with a token with values', async (url, platform, data) => {
  try {
    browser = new Browser(platform);
    const body = Authentication.token.buildTokenBodyFromRawTable(data);
    const token = await Authentication.token.createToken(body);
    const targetUrl = testConfig[url] || url;
    const fullURL = `${targetUrl}?token=${token.data.data}`;
    await browser.openBrowser(fullURL);
    return;
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** CLOSE BROWSER
// Example : I close the webpage
When('I close the webpage', async () => {
  try {
    await browser.closeBrowser();
    return;
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});
///////////////////// *** Handle Browser Steps *** /////////////////////

///////////////////// *** Wait Steps *** /////////////////////

// *** TIME WAIT (In milliseconds)
// Example : Then I wait for 2000
Then('I wait for {int}', async sleepInMillis => {
  try {
    await browser.sleep(sleepInMillis);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** WAIT FOR ITEM TO SHOW (Default BO Attribute) (In milliseconds, the maximum time to wait, when it shows test continues)
// Example : Then I wait for 10000 for the item "Title" to show
Then('I wait for {int} for the item {string} to show', async (sleepInMillis, itemName) => {
  try {
    const isElementFound = await browser.input.waitForElement(itemName, sleepInMillis);
    if (!isElementFound) assert.fail(`The item ${itemName} was not found.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** WAIT FOR ITEM TO SHOW (Custom BO Attribute) (In milliseconds, the maximum time to wait, when it shows test continues)
// Example : Then I wait for 10000 for the custom item "menora_bo" with value "Title" to show
Then('I wait for {int} for the custom item {string} with value {string} to show', async (sleepInMillis, attr, itemName) => {
  try {
    const isElementFound = await browser.input.waitForElement(itemName, sleepInMillis, attr);
    if (!isElementFound) assert.fail(`The item ${itemName} was not found.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** WAIT FOR ITEM TO DISSAPEAR (Default BO Attribute) (In milliseconds, the maximum time to wait, when it gone test continues)
// Example : Then I wait for 10000 for the item "loader" to disappear
Then('I wait for {int} for the item {string} to disappear', async (sleepInMillis, itemName) => {
  try {
    const isElementFound = await browser.input.waitForElement(itemName, sleepInMillis);
    if (isElementFound) assert.fail(`The item ${itemName} was found.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** WAIT FOR ITEM TO DISSAPEAR (Custom BO Attribute) (In milliseconds, the maximum time to wait, when it gone test continues)
// Example : Then I wait for 10000 for the custom item "menora_bo" with value "loader" to disappear
Then('I wait for {int} for the custom item {string} with value {string} to disappear', async (sleepInMillis, attr, itemName) => {
  try {
    const isElementFound = await browser.input.waitForElement(itemName, sleepInMillis, attr);
    if (isElementFound) assert.fail(`The item ${itemName} was found.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** WAIT FOR ITEM TO BE ENABLED (Default BO Attribute) (In milliseconds, the maximum time to wait, when it's enabled test continues)
// Element must exist when the test begins, otherwise use "I wait ... to show" before this test
// Example : Then I wait for 10000 for the item "Title" to be enabled
Then('I wait for {int} for the item {string} to be enabled', async (sleepInMillis, itemName) => {
  try {
    const enabled = await browser.input.waitForElementToBeEnabled(itemName, sleepInMillis);
    if (!enabled) {
      assert.fail(`The item [menora_bo=${itemName}] was not enabled after ${sleepInMillis} ms.`);
    }
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** WAIT FOR ITEM TO BE ENABLED (Custom BO Attribute); see default step above for more details
// Example : Then I wait for 4000 for the custom attribute "menora_bo" with value "press-me" to be enabled
Then('I wait for {int} for the custom attribute {string} with value {string} to be enabled', async (sleepInMillis, attr, itemName) => {
  try {
    const enabled = await browser.input.waitForElementToBeEnabled(itemName, sleepInMillis, attr);    
    if (!enabled) {
      assert.fail(`The item [${attr}=${itemName}] was not enabled after ${sleepInMillis} ms.`);
    }
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});
///////////////////// *** Wait Steps *** /////////////////////

///////////////////// *** Item Existance Steps *** /////////////////////

// *** SEE THE TEXT (Default BO Attribute)
// Example : Then 'I see for the item "id-input" the text "293485444"'
Then('I see for the item {string} the text {string}', async (itemName, ItemText) => {
  try {
    const response = await browser.input.isElementHasGivenText(ItemText, itemName);
    if (!response) assert.fail(`The text ${ItemText} was not found for the item ${itemName}.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** SEE THE TEXT (Custom BO Attribute)
// Example : Then 'I see for the custom "menora_bo" item "id-input" the text "293485444"'
Then('I see for the custom {string} item {string} the text {string}', async (attr, itemName, ItemText) => {
  try {
    const response = await browser.input.isElementHasGivenText(ItemText, itemName, undefined, attr);
    if (!response) assert.fail(`The text ${ItemText} was not found for the item ${itemName}.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** SEE THE VALUE (Default BO Attribute)
// Example : Then 'I see for the item "id-input" the value "293485444"'
Then('I see for the item {string} the value {string}', async (itemName, ItemValue) => {
  try {
    const response = await browser.input.isElementHasGivenValue(ItemValue, itemName);
    if (!response) assert.fail(`The value ${ItemValue} was not found for the item ${itemName}.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** SEE THE VALUE (Custom BO Attribute)
// Example : Then 'I see for the custom "menora_bo" item "id-input" the value "293485444"'
Then('I see for the custom {string} item {string} the value {string}', async (attr, itemName, ItemValue) => {
  try {
    const response = await browser.input.isElementHasGivenValue(ItemValue, itemName, undefined, attr);
    if (!response) assert.fail(`The value ${ItemValue} was not found for the item ${itemName}.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** SEE THE ITEM (Default BO Attribute)
// Example : Then 'I see the item "error-message"
Then('I see the item {string}', async itemName => {
  try {
    const response = await browser.input.isDomElementExists(itemName);
    if (!response) assert.fail(`The item ${itemName} was not found.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** SEE THE ITEM (Custom BO Attribute)
// Example : Then 'I see the custom "menora_bo" item with value "error-message"
Then('I see the custom {string} item with value {string}', async (attr, itemName) => {
  try {
    const response = await browser.input.isDomElementExists(itemName, undefined, attr);
    if (!response) assert.fail(`The item ${itemName} was not found.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** DONT SEE THE ITEM (Default BO Attribute)
// Example : Then 'I dont see the item "error-message"
Then('I dont see the item {string}', async itemName => {
  try {
    const response = await browser.input.isDomElementExists(itemName);
    if (response) assert.fail(`The item ${itemName} was found.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** DONT SEE THE ITEM (Custom BO Attribute)
// Example : Then 'I dont see the custom "menora_bo" item with value "error-message"
Then('I dont see the custom {string} item with value {string}', async (attr, itemName) => {
  try {
    const response = await browser.input.isDomElementExists(itemName, undefined, attr);
    if (response) assert.fail(`The item ${itemName} was found.`);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});
///////////////////// *** Item Existance Steps *** /////////////////////

///////////////////// *** Input Steps *** /////////////////////

// *** ENTER INPUT (Default BO Attribute)
// Example : Then I enter the input "340268492" to the item "id-input"
Then('I enter the input {string} to the item {string}', async (inputValue, itemName) => {
  try {
    await browser.input.writeToInputDomElement(inputValue, itemName);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** ENTER INPUT (Custom BO Attribute)
// Example : Then I enter the input "340268492" to the custom "menora_bo" item with value "id-input"
Then('I enter the input {string} to the custom {string} item with value {string}', async (inputValue, attr, itemName) => {
  try {
    await browser.input.writeToInputDomElement(inputValue, itemName, undefined, attr);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});
///////////////////// *** Input Steps *** /////////////////////

///////////////////// *** Click Steps *** /////////////////////

// *** ITEM CLICK (Default BO Attribute)
// Example : Then I click the item with value "submit-button"
Then('I click the item {string}', async itemName => {
  try {
    await browser.mouse.clickOnDomElement(itemName, WAIT_TIME);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** ITEM CLICK (Custom BO Attribute)
// Example : Then I click the custom "menora_bo" item with value "submit-button"
Then('I click the custom {string} item with value {string}', async (attr, itemName) => {
  try {
    await browser.mouse.clickOnDomElement(itemName, WAIT_TIME, attr);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});
// *** ITEM SCRIPT CLICK (Default BO Attribute)
// Example : Then I click the item with value "submit-button"
Then('I click script the item {string}', async itemName => {
  try {
    await browser.mouse.clickOnDomElementScript(itemName, WAIT_TIME);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** ITEM CLICK (Custom BO Attribute)
// Example : Then I click the custom "menora_bo" item with value "submit-button"
Then('I click the custom {string} item with value {string}', async (attr, itemName) => {
  try {
    await browser.mouse.clickOnDomElementScript(itemName, WAIT_TIME, attr);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** MOVE CURSOR ON ITEM AND CLICK (Default BO Attribute)
// Example : Then I move the cursor to the item "edit-row-button-1" and click it
Then('I move the cursor to the item {string} and click it', async itemName => {
  try {
    await browser.mouse.moveAndClickOnDomElement(itemName, WAIT_TIME);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** MOVE CURSOR ON ITEM AND CLICK (Custom BO Attribute)
// Example : Then I move the cursor to the custom "menora_bo" item "edit-row-button-1" and click it
Then('I move the cursor to the custom {string} item with value {string} and click it', async (attr, itemName) => {
  try {
    await browser.mouse.moveAndClickOnDomElement(itemName, WAIT_TIME, attr);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** SELECT OPTION AT GIVEN INDEX (Default BO Attribute) (1st choice in dropdown is 1)
// Example : Then I select the option at the 1 index of the item "select-input"
Then('I select the option at the {int} index of the item {string}', async (index, itemName) => {
  try {
    await browser.input.clickOnSelectOptionByIndex(itemName, index, WAIT_TIME);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** SELECT OPTION AT GIVEN INDEX (Custom BO Attribute)
// Example : Then I select the option at the 1 index of the custom "menora_bo" item "select-input"
Then('I select the option at the {int} index of the custom {string} item {string}', async (index, attr, itemName) => {
  try {
    await browser.input.clickOnSelectOptionByIndex(itemName, index, WAIT_TIME, attr);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** SELECT OPTION USING BO VALUE (Default BO Attribute)
// Example : Then I select the option "option-input-1" from the item "select-input"
Then('I select the option {string} from the item {string}', async (optionName, itemName) => {
  try {
    await browser.input.clickOnSelectOptionByAttribute(itemName, optionName, WAIT_TIME);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});

// *** SELECT OPTION USING BO VALUE (Custom BO Attribute)
// Example : Then I select the custom "menora_bo" option "option-input-1" from the custom "menora_bo" item "select-input"
Then('I select the custom {string} option {string} from the custom {string} item {string}', async (optionName, itemName) => {
  try {
    await browser.input.clickOnSelectOptionByAttribute(itemName, optionName, WAIT_TIME);
  } catch (e) {
    assert.fail(`${e.message || JSON.stringify(e)}`);
  }
});
///////////////////// *** Click Steps *** /////////////////////
///////////////////// *** File upload Steps *** /////////////////////

// *** ENTER INPUT (Default BO Attribute)
// add to your project folder in path test/samples with files that you will upload
// Example : Then I upload file from path "menora-logo.jpg" to the item "id-input"
Then('I upload file from path {string} to the item {string}', async (fileSource, itemName) => {
  try {
    const filePath = path.resolve(__dirname, `../../samples/${fileSource}`);
    console.log(`filePath ${filePath}`);
    await browser.input.uploadFileByAttribute(itemName, filePath);
  } catch (e) {
    assert.fail(`${e.message || e}`);
  }
});

// *** ENTER INPUT (Custom BO Attribute)
// add to your project folder in path test/samples with files that you will upload
// Example : Then I upload file from path "menora-logo.jpg" to the custom "menora_bo" item with value "id-input"
Then('I upload file from path {string} to the custom {string} item with value {string}', async (fileSource, attr, itemName) => {
  try {
    console.log(`filePath ${filePath}`);
    await browser.input.uploadFileByAttribute(itemName, itemName, attr);
  } catch (e) {
    assert.fail(`${e.message || e}`);
  }
});
///////////////////// *** File upload Steps *** /////////////////////