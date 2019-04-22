var GoogleHome = function() {
  var inputField = element(by.className("gLFyf gsfi"));
  var buttonSearch = element(by.name("btnK"));

this.get = function() {
    browser.get('https://www.google.com/');
  };
this.setSearchText = function(text) {
    inputField.sendKeys(text).sendKeys(protractor.Key.ESCAPE);
  };
this.clickSearchButton = function() {
    browser.wait(ExpectedConditions.visibilityOf(buttonSearch));
    return buttonSearch.click();
  };
};
module.exports = GoogleHome;