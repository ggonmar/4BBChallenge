/* Guillermo Gonzalez Martin  */
/* ABB Challenge              */
/* ggonmar@gmail.com          */


exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['integration.js'],
  onPrepare: function () {
    browser.manage().window().maximize();
  }

}
