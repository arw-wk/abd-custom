/**
 * Explore plugin.
 */
Draw.loadPlugin(function(ui)
{
	// Adds resource for action
	mxResources.parse('exploreFromHere=Explore from here...');
	mxResources.parse('blockTop=Block')
	mxResources.parse('blockSubMCU=MCU')
	mxResources.parse('blockSubMCU=Memory')
	mxResources.parse('blockSubMCU=Power')
	mxResources.parse('blockSubMCU=Protection')
	
	mxResources.parse('blockSubSubMCU=DC-DC')
	mxResources.parse('blockSubSubMCU=AC-DC')
	mxResources.parse('blockSubSubMCU=Modulee')
	mxResources.parse('blockSubSubMCU=Processor')
	mxResources.parse('blockSubSubMCU=SOM')
	mxResources.parse('blockSubSubMCU=SBC')
	mxResources.parse('blockSubSubMCU=TVS')
	mxResources.parse('blockSubSubMCU=ESD')
	
	// Max number of edges per page
	var pageSize = 20;

	var uiCreatePopupMenu = ui.menus.createPopupMenu;
	ui.menus.createPopupMenu = function(menu, cell, evt)
	{
		uiCreatePopupMenu.apply(this, arguments);
		
		var graph = ui.editor.graph;
		
		if (graph.model.isVertex(graph.getSelectionCell()))
		{
			//this.addMenuItems(menu, ['-', 'exploreFromHere'], null, evt);
			this.addMenuItems(menu, ['-', 'blockTop'], null, evt);
			//this.addMenuItems(menu, ['-', 'blockTop', '-','MCU'], null, evt);
		}
	};



});
