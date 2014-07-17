/**
 * Created with IntelliJ IDEA.
 * User: v-eruzhitskaya
 * Date: 6/18/14
 * Time: 7:21 AM
 * To change this template use File | Settings | File Templates.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        nightwatch: {
            options: {
                settings:{
                    "src_folders" : ["./tests"],
                    "output_folder" : "./report",
                    "custom_commands_path" : "",
                    "custom_assertions_path" : "",
                    "globals_path" : "",
                    "live_output" : false,

                    "selenium" : {
                        "start_process" : false,
                        "server_path" : "./node_modules/grunt-nightwatch/selenium-server-standalone-2.40.0.jar",
                        "log_path" : "",
                        "host" : "127.0.0.1",
                        "port" : 4444,
                        "cli_args" : {
                            "webdriver.chrome.driver" : "",
                            "webdriver.ie.driver" : "",
                            "webdriver.firefox.profile" : ""
                        }
                    },

                    "test_settings" : {
                        "default" : {
                            "launch_url" : "http://localhost",
                            "selenium_host" : "localhost",
                            "selenium_port" : 4444,
                            "silent" : true,
                            "output": true,
                            "disable_colors": false,
//                            "firefox_profile": false,
                            "chrome_driver": "./node_modules/nightwatch/chromedriver.exe",
//                            "ie_driver": "./node_modules/nightwatch/IEDriverServer.exe",
                            "screenshots" : {
                                "enabled" : false,
                                "path" : "./screenshots_error"
                            },
                            "desiredCapabilities" : {
                                "browserName" : "chrome",
                                "javascriptEnabled" : true,
                                "acceptSslCerts" : true
                            },
                            "selenium": {
                                "start_process": true,
                                "firefox_profile": false,
                                "chrome_driver": "./node_modules/nightwatch/chromedriver.exe",
                                "ie_driver": "./node_modules/nightwatch/IEDriverServer.exe"
                            }
                        }
                      }
                    },
                chrome: {
                    desiredCapabilities: {
                        broserName:'chrome'
                    },
                    standalone: true,
                    jar_path: './node_modules/grunt-nightwatch/selenium-server-standalone-2.40.0.jar'
                },
                firefox: {
                    desiredCapabilities: {
                        broserName:'firefox'
                    },
                    standalone: true,
                    jar_path: './node_modules/grunt-nightwatch/selenium-server-standalone-2.40.0.jar'
                }, ie: {
                    desiredCapabilities: {
                        browserName: 'ie'
                    },
                    standalone: true,
                    jar_path: './node_modules/grunt-nightwatch/selenium-server-standalone-2.40.0.jar'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-nightwatch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('run-tests', ['nightwatch:firefox','nightwatch:chrome', 'nightwatch:ie' ]);
};
