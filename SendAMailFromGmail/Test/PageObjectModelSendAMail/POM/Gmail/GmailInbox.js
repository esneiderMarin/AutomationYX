var GmailInbox = function() {
  var composeAnEmailButton = element(by.className("T-I J-J5-Ji T-I-KE L3"));
  var inputReceiver = element(by.xpath("//textarea[@class='vO' and @name='to']"));
  var inputSubject = element(by.name("subjectbox"));
  var inputTextMessaje = element(by.className("Am Al editable LW-avf"));
  var sendButton = element(by.className("T-I J-J5-Ji aoO v7 T-I-atl L3"));
  var viewMessage = element(by.id("link_vsm"));
		
this.clickComposeAnEmailButton = function() {
    browser.wait(ExpectedConditions.visibilityOf(composeAnEmailButton));
	return composeAnEmailButton.click();
  };
this.setReceiver = function(receiver) {
    return inputReceiver.sendKeys(receiver);
  };

this.setSubject = function(subject) {
    return inputSubject.sendKeys(subject);
  };

this.setTextMessage = function(message) {
    return inputTextMessaje.sendKeys(message);
  };

this.clickSendButton = function() {
    return sendButton.click();
  };

this.clickViewMessageButton = function() {
    browser.wait(ExpectedConditions.visibilityOf(viewMessage));
	return viewMessage.click();
  };



};
module.exports = GmailInbox;