# ABBChallenge
##Testing Challenge 

This repo contains the answer to exercise 2 of the ABB challenge proposed:

>*Integration testing*
>
>For the given stack in the virtual machine write an integration test script to check all QRT components (front-end, back-end, db) works well together

The proposed solution is to automate certain end to end tests that would cover behavior on all components, aiming to focus on things that ought to be difficult to test by other means, keeping attention on the behavior of the logic and response of the system.

Proposed tests are under the file *integration.js*, and initial effort focused on the following:

1. When the user accesses QRT, 3D View should be the default view.
* o 3D View has a tab with items and has a canvas embedded.
2. When clicking on a point on the left tab, a new modal should be shown.
* o The modal contains a list of checkboxes and a graph next to it.
3. When unselecting a checkbox on the left tab of the modal, the legend on the right updates and should not show the unselected item.
4. When selecting the Limit Scale checkbox, a new input should be shown
5. When selecting the Use time scale checkbox, the canvas contains dates on the x-axis
6. When clicking on the Close button (X), the modal should be closed.

POM is taken into consideration, defining files to regard to different areas, to know:
* home.page.js


