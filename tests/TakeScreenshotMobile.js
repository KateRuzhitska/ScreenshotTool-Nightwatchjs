/**
 * Created with IntelliJ IDEA.
 * User: v-eruzhitskaya
 * Date: 6/16/14
 * Time: 8:47 AM
 * To change this template use File | Settings | File Templates.
 */

/*global require:false */

var envSettings = {
    width: 480,
    height: 800,
    baseUrl: 'http://www.qa.hotwire.com/en/content/',
    pictureBaseUrl: './screenshotsMobile/'
};

var testData = require ('./TestData.js');

module.exports ={
    "take screenshots on Mobile": function(browser){
        var locationData;
        for (var i=0;i < testData.length; i++) {
            locationData = testData[i];

            browser
                .resizeWindow(envSettings.width, envSettings.height)
                .url(envSettings.baseUrl + locationData.testUrl)
                .pause(8000)
                .saveScreenshot(envSettings.pictureBaseUrl + locationData.pictureName);
        }
        browser.end();
    }
};



