var GmailLogIn = function() {
  var inputUserName = element(by.className("whsOnd zHQkBf"));
  var inputPassword = element(by.xpath("//input[@type='password']"));
  var nextButton = element(by.className("RveJvd snByac"));

this.setUserName = function(userName) {
    inputUserName.sendKeys(userName);
  };

this.setPassword = function(password) {
    browser.wait(ExpectedConditions.visibilityOf(inputPassword));
    inputUserName.sendKeys(password);
  };

this.clickNextButton = function() {
    return nextButton.click();
  };
};
module.exports = GmailLogIn;