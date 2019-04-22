 exports.config = {
		 jasmineNodeOpts: {
			 defaultTimeoutInterval: 2500000
			 },
			 seleniumAddress: 'http://localhost:4444/wd/hub',
             specs: ['Test//PageObjectModelSendAMail//POM/Test//gmailTest.js'],
             "moduleResolution": "node",
             "module": "commonjs" 
};
 
 