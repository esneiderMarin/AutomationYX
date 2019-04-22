var GoogleHomePage = require('./../Google/GoogleHome.js');
var GoogleResultPage = require('./../Google/GoogleResult.js');
var GmailHomePage = require('./../Gmail/GmailHome.js');
var GmailLogInPage = require('./../Gmail/GmailLogIn.js');
var GmailInboxPage = require('./../Gmail/GmailInbox.js');
var GmailNewSentMessagePage = require('./../Gmail/GmailNewSentMessage.js');
var PageUtils = require('./../Utils/PageUtils.js');
describe("This App will send an Email by Gmail", function() {
	
	it("Open the browser on Google home page and search for gmail", function() 
	{
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        var googleHomePage = new GoogleHomePage();
        googleHomePage.get();
        googleHomePage.setSearchText('Gmail');
        googleHomePage.clickSearchButton();
        
    });
            
    it("goes to gmail home page", function() 
	{
        var googleResultPage = new GoogleResultPage();
        googleResultPage.clickGmailResultLink();
        
    });

    it("goes to gmail login page", function() 
	{
        var gmailHomePage = new GmailHomePage();
        gmailHomePage.clickGmailLogInButton();
        var pageUtils = new PageUtils();
        pageUtils.switchTab();

        
    });

    it("Fills the login fields and login", function() 
	{
        var gmailLogInPage = new GmailLogInPage();
        gmailLogInPage.setUserName('esneider.selenium@gmail.com');
        gmailLogInPage.clickNextButton();
        gmailLogInPage.setPassword('1234567890S_');
        gmailLogInPage.clickNextButton();
        
    });

    it("composes a new email, fill all the fields and send the Email and goes to sent message page", function() 
	{
        var gmailInboxPage = new GmailInboxPage();
        gmailInboxPage.clickComposeAnEmailButton();
        gmailInboxPage.setReceiver('esneider.m97@gmail.com');
        gmailInboxPage.setSubject('test');
        gmailInboxPage.setTextMessage('test');
        gmailInboxPage.clickSendButton();
        gmailInboxPage.clickViewMessageButton();      
    });

    it("checks that the message has been sent and closes session", function() 
	{
        var gmailNewSentMessagePage = new GmailNewSentMessagePage();
        var messageText = gmailNewSentMessagePage.readNewSentMessageField();
        expect(messageText).toEqual('test');
        gmailNewSentMessagePage.clickAccountButton();
        gmailNewSentMessagePage.clickSignOutButton();
        browser.switchTo().alert().accept();
        browser.switchTo().window;
    });


	
});
		
		
		
		
		
		
		/*
		
		
		

	      
		
		//redactar button
		
		browser.wait(ExpectedConditions.visibilityOf(element(by.id("link_vsm"))));
		element(by.id("link_vsm")).click();
		
		element(by.className("gb_ya gbii")).click();
		element(by.className("gb_0 gb_Ef gb_Mf gb_le gb_kb")).click();
		
		
		//		element(by.xpath("//div[@class='a3s aXjCH ']//div[./text()='test']"));
		browser.switchTo().alert().accept();
		browser.switchTo().window;
		
		
		browser.sleep(10000);
		//expect(element(by.className("ng-binding")).getText()).toEqual("10");*/
		
