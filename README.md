# ABB Challenge
## Testing Challenge 

This repo contains the answer to exercise 2 of the ABB challenge proposed:

>_**Integration testing**_
>
>For the given stack in the virtual machine write an integration test script to check all QRT components (front-end, back-end, db) works well together

The proposed solution is to automate certain end to end tests that would cover behavior on all components, aiming to focus on things that ought to be difficult to test by other means, keeping attention on the behavior of the logic and response of the system.

Proposed tests are under the file *integration.js*, and initial effort focused on the following:

1. _**When**_ the user accesses QRT, 3D View _**should**_ be the default view.
    * 3D View has a tab with items and has a canvas embedded.
2. _**When**_ clicking on a point on the left tab, a new modal  _**should**_ be shown.
    * The modal contains a list of checkboxes and a graph next to it.
3. _**When**_ unselecting a checkbox on the left tab of the modal, the legend on the right  _**should**_ update and not show the unselected item.
4. _**When**_ selecting the Limit Scale checkbox, a new input  _**should**_ be shown
5. _**When**_ selecting the Use time scale checkbox, the canvas  _**should**_ contain dates on the x-axis
6. _**When**_ clicking on the Close button (X), the modal  _**should**_ be closed.

POM is taken into consideration, defining files to regard to different areas, to know:
* **home.page.js**: Model for the 3D view, default page when logging into the QRT tool
* **point.modal.js**: Model for the modal that pops up when selecting a certain point

Other files:
* **integration.js**: Definition of tests, making use of the models defined above.
* **assertions.js**: Custom assertions library. This could be improved by using improved libraries for this purpose, such as Jasmine or Mocha.
* **config.js**: Protractor configuration file, launcher of the tests in _integration.js_.
* **literals.js**: Helper to control literals that may change, so they are not hardcoded onto the tests - equivalently to the POM concept.



