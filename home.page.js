/* Guillermo Gonzalez Martin  */
/* ABB Challenge              */
/* ggonmar@gmail.com          */


var page3D = function () {
    
    var EC = protractor.ExpectedConditions;

    this.loadingLogo = element(by.className(`loading-screen`));

    this.elementsInLeftTab = element.all(by.className(`elements`)); // lost connection to find correct definition
    this.imageCanvas = element(by.css('canvas'));           // lost connection to find correct definition
    this.leftTab = element(by.xpath(`.//*[@href="/account/personal-details"]`));    // lost connection to find correct definition



    this.getTitle = function () {
        return browser.getTitle();
    };

    this.getPointsTab = function () {
        return obtain(this.elementsInLeftTab);
    };

    this.waitUntilLoaded = function () {
        return browser.wait(EC.not(EC.presenceOf(loadingLogo)));
    };

    this.selectPoint = function(pointIndex) {
        return this.clickOn(this.elementsInLeftTab.get(pointIndex));
    };

    this.getDrawing = function()
    {
        return obtain(this.imageCanvas);
    }

    this.clickOn = function(elem){
        return obtain(elem).click();
    };

    function obtain(element)
    {
        browser.wait( EC.elementToBeClickable(element), 10000);
        return element
    }
};
module.exports = page3D;