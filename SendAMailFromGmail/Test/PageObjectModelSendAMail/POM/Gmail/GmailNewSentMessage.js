var GmailNewSentMessage = function() {
  var messageField = element(by.xpath("//div[@class='a3s aXjCH ']//div[@dir='ltr']"));
  var accountButton = element(by.className("gb_ya gbii"));
  var signOutButton = element(by.className("gb_0 gb_Ef gb_Mf gb_le gb_kb"));

		
  this.readNewSentMessageField = function() {
    browser.wait(ExpectedConditions.visibilityOf(messageField));
    return messageField.getText();
  };

  this.clickAccountButton = function() {
    return accountButton.click();
  };

  this.clickSignOutButton = function() {
    return signOutButton.click();
  };



};
module.exports = GmailNewSentMessage;