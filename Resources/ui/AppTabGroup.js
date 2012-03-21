function AppTabGroup() {
	//declare module dependencies
	var searchWindow = require('ui/SearchWindow');
    var scheduleWindow = require('ui/ScheduleWindow');
    var historyWindow = require('ui/HistoryWindow');
    var accountWindow = require('ui/AccountWindow');
    
	
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new searchWindow(L('Search')),
        win2 = new scheduleWindow(L('Schedule')),
		win3 = new historyWindow(L('History')),
		win4 = new accountWindow(L('Account'));
	
	var tab1 = Ti.UI.createTab({
		title: L('Search'),
		icon: '/images/nav_find.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('Schedule'),
		icon: '/images/nav_schedule.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
        title: L('History'),
        icon: '/images/nav_history.png',
        window: win3
    });
    win3.containingTab = tab3;
    
    var tab4 = Ti.UI.createTab({
        title: L('Account'),
        icon: '/images/nav_profile.png',
        window: win4
    });
    win4.containingTab = tab4;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	self.addTab(tab4);
	
	return self;
};

module.exports = AppTabGroup;
