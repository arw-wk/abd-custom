/**
 * Explore plugin.
 */
Draw.loadPlugin(function(ui)
{
	// Adds resource for action
	mxResources.parse('exploreFromHere=Explore from here...');
	mxResources.parse('blockTop=Block')
	mxResources.parse('blockSubMCU=MCU')
	mxResources.parse('blockSubMemory=Memory')
	mxResources.parse('blockSubPower=Power')
	mxResources.parse('blockSubProtect=Protection')
	
	mxResources.parse('blockSubSubMCU=DC-DC')
	mxResources.parse('blockSubSubMCU=AC-DC')
	mxResources.parse('blockSubSubMCU=Modulee')
	mxResources.parse('blockSubSubMCU=Processor')
	mxResources.parse('blockSubSubSom=SOM')
	mxResources.parse('blockSubSubSbc=SBC')
	mxResources.parse('blockSubSubTvs=TVS')
	mxResources.parse('blockSubSubEsd=ESD')
	
	// Max number of edges per page
	var pageSize = 20;

// Adds resource for action
	    mxResources.parse('menuBlock=Blocks');
	    mxResources.parse('menuBlockItems=Block Items');
	
	    // Adds action
	    ui.actions.addAction('helloWorldAction', function() {
	        var ran = Math.floor((Math.random() * 100) + 1);
	        mxUtils.alert('A random number is ' + ran);
	    });
	
	    // Adds menu
	    ui.menubar.addMenu('Blocks', function(menu, parent) {
	        ui.menus.addMenuItem(menu, 'blockSubMCU', parent);
		ui.menus.addMenuItem(menu, 'blockSubMemory, parent');
		ui.menus.addMenuItem(menu, 'blockSubPower, parent');
		ui.menus.addMenuItem(menu, 'blockSubProtect, parent');
	    });



});
