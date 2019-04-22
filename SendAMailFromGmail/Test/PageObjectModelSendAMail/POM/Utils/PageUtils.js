var PageUtils = function() {
  var handlePromise = browser.driver.getAllWindowHandles();


this.switchTab = function() {
    handlePromise.then(function (handles) {
	        // parentHandle = handles[0];
	        var popUpHandle = handles[1];

	        // Change to new handle
	        browser.driver.switchTo().window(popUpHandle);

	        var popUpHandleFinal = browser.driver.getWindowHandle();
	        expect(popUpHandleFinal).toEqual(popUpHandle);
	    });
        
  };
};
module.exports = PageUtils;      
        