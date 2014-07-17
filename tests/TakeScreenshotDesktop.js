/**
 * Created with IntelliJ IDEA.
 * User: v-eruzhitskaya
 * Date: 6/17/14
 * Time: 6:38 AM
 * To change this template use File | Settings | File Templates.
 */

/*global require:false */

var envSettings = {
    width: 1280,
    height: 800,
    baseUrl: 'http://www.qa.hotwire.com/en/content/',
    pictureBaseUrl: './screenshotsDesktop/'
};

var testData = require ('./TestData.js');

module.exports ={
    "take screenshots on Desktop": function(browser){
        var locationData;
        for (var i= 0;i < testData.length; i++){
            locationData= testData[i];
        browser
            .resizeWindow(envSettings.width, envSettings.height)
            .url(envSettings.baseUrl + locationData.testUrl)
            .pause(8000)
            .saveScreenshot(envSettings.pictureBaseUrl + locationData.pictureName)
        }
            browser.end();
    },
    //also taking screenshots of "Mobile app" and "About us"

    "take screenshot of \"Mobile app\" on Desktop": function(browser){
            browser
                .resizeWindow(envSettings.width, envSettings.height)
                .url('http://www.qa.hotwire.com/app')
                .pause(8000)
                .saveScreenshot('./screenshotsDesktop/MobApp.png')
                .end();
    },

    "take screenshot of \"About us\" on Desktop": function(browser){
        browser
            .resizeWindow(envSettings.width, envSettings.height)
            .url('http://www.hotwire.com/en/content/mission?cc=us')
            .pause(8000)
            .saveScreenshot('./screenshotsDesktop/AboutUs.png')
            .end();
    }


};
