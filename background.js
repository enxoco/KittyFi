chrome.tabs.onUpdated.addListener(function (tab) {
	chrome.storage.sync.get('kitty', function (data) {
		var enabled = data.kitty;
		var icon = (enabled === true) ? 'icon-128.png' : 'icon-128-disabled.png'
		chrome.browserAction.setIcon({
			path: icon,
			tabId: tab.id
		});

	});
})
chrome.browserAction.onClicked.addListener(function (tab) {

	chrome.storage.sync.get('kitty', function (data) {
		var enabled = !data.kitty;

		chrome.storage.sync.set({
			'kitty': enabled
		});
	});
	if (typeof enabled === 'undefined') {
		var enabled = false
	}
	if (enabled === true) {
		chrome.tabs.executeScript(tab.id, {
			file: 'cats.js'
		})
		chrome.tabs.executeScript(tab.id, {
			file: 'inject.js'
		});
	} else {

		chrome.tabs.update(tab.id, { url: tab.url })
	}

});

