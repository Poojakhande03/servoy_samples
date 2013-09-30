/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"913AD9DC-726D-4D4D-8DD2-A97C861917FF"}
 */
function onBack(event) {
	history.back();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E344D223-26F7-475A-8883-1BC5DE79AD5A"}
 */
function onDetail(event) {
	forms.product_details.controller.showRecords(foundset);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DB819B4E-4C03-48BD-BCBA-12AE7DBDE2D2"}
 */
function loadAll(event) {
	foundset.loadAllRecords();
}
