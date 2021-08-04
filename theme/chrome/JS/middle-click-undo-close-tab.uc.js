(function() {

if (!window.gBrowser) return;

var UndoTab = function(aEvent) {

	if (aEvent.button != 1 || aEvent.detail != 1 ) return;

	let Node = aEvent.originalTarget;

	if (Node.className == 'tabbrowser-tab' || Node.className == 'tab-close-button' || Node.className == 'toolbarbutton-icon' || Node.className == 'tab-throbber' || Node.className == 'tab-close-button close-icon' || Node.className == 'tab-text tab-label' || Node.className == 'tab-icon-image' || Node.className == 'toolbarbutton-1' || Node.className == 'tab-content') return;

	else if(Node.localName == 'scrollbox') {

		undoCloseTab(0);

		aEvent.preventDefault();

		aEvent.stopPropagation();

		return;

	}

	return;

}

gBrowser.tabContainer.addEventListener('click', UndoTab, true);

})();