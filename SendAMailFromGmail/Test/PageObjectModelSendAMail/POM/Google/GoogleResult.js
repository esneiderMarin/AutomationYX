var GoogleResult = function() {
  var gmailLinkResult = element(by.xpath("//h3[./text()='Gmail - Google']"));


this.clickGmailResultLink = function() {
    browser.wait(ExpectedConditions.visibilityOf(gmailLinkResult));
    return gmailLinkResult.click();
  };
};
module.exports = GoogleResult;