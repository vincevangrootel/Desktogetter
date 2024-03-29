function SearchWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'red'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			url: 'ui/ResultWindow.js'
		}));
	});

	return self;
};

module.exports = SearchWindow;
