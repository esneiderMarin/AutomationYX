var GmailHome = function() {
  var gmailLogInButton = element(by.xpath("//div[@class='hercules-header h-c-header h-c-header--product-marketing-one-tier header--desktop']//a[@class='h-c-header__nav-li-link ' and contains(text(),'Iniciar sesión')]"));


this.clickGmailLogInButton = function() {
    return gmailLogInButton.click();
  };
};
module.exports = GmailHome;