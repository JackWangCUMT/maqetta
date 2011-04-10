dojo.provide("davinci.review.actions.EllipseAction");

dojo.require("davinci.review.actions._DrawingCommon");

dojo.declare("davinci.review.actions.EllipseAction", davinci.review.actions._DrawingCommon, {
	run: function(context){
		this.inherited(arguments);
		var commentPalette = dijit.byId("davinci.review.comment");
		if(!commentPalette._commentForm.isShowing) return;
		var surface = this.doc.annotationSurface, createTool = surface.createTool;
		createTool.deactivate();
		createTool.setShape("Ellipse", {
			colorAlias: surface.currentReviewer,
			a2c: dojo.hitch(davinci.review.Runtime, davinci.review.Runtime.getColor),
			commentId: surface.commentId,
			state: ""
		});
		createTool.activate();
	}
});
