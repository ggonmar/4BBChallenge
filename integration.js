/* Guillermo Gonzalez Martin  */
/* ABB Challenge              */
/* ggonmar@gmail.com          */


browser.waitForAngularEnabled(false);
var page3D = require(`./home.page.js`);
var pointSelectionModal = require (`./point.modal.js`);
var Assertions = require(`./assertions.js`);
var literals = require(`./literals.js`);

var literal = new literals('EN');

describe(`ABB Challenge: QRT 3D View`, function () {

  it(`should load onto the 3D View by default - 3D View has a tab with items and has a canvas embedded.`, function () {
    var page = new page3D();
    page.navigate();

    Assertions.assertPromiseEquals(`Page has the expected title`, page.getTitle(), literal.LOGIN_TITLE);
    Assertions.assertPromiseContains('Page has tab with sensible points', page.getPointsTab());
    Assertions.assertPromiseContains('Page has a canvas in it', page.getDrawing());
  });
  
  
  it(`Should show a modal when a point is selected`, function () {
    var page = new page3D();
    page.selectPoint(0);

    var modal = new pointSelectionModal();
    modal.waitUntilLoaded();

    Assertions.assertPromiseEquals(`Title of modal is equal to the name of the point selected`, modal.getModalTitle(), page.getPointsTab().get(0).text());
    Assertions.assertPromiseContains(`Variables are shown`, modal.getVariablesTab());
    Assertions.assertPromiseContains(`Graph is shown`, modal.getGraph());
  });


  it(`Should change the graph when unselecting a variable`, function() {
    var modal = new pointSelectionModal();

    var beforeToggleLegendCount = modal.getNumberOfVariables();
    modal.toggleVariableSelection('X');

    var afterToggleLegendCount = modal.getNumberOfVariables();
    Assertions.assertEquals(`Legend hasn one less element when unselecting a variable`, beforeToggleLegendCount-1, afterToggleLegendCount);
  });

  it(`Should show a new input when limit scale is selected`, function() {
    var modal = new pointSelectionModal();
    modal.selectLimitScale();


    //TODO : complete the test 
  });

  it(`Should show the dates on the graph when time scale is selected`, function() {
    var modal = new pointSelectionModal();
    modal.selectTimeScale();

   //TODO : complete the test
  });

  it(`Should close the modal when the close button is clicked`, function() {
    var modal = new pointSelectionModal();  
    Assertions.assertPromiseEquals('Modal is closed', modal.close(), true);

  });

});