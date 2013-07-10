
(function ($) {
	var default_opction = {
		keepTop:false,
		animateTime:200
	}
	var animateTi;

	$.fn.shopNav = function(opction){
		var shopNav = this;
		opction = $.extend({},default_opction,opction||{});
		var navItems = shopNav.find(".navItem");
		navItems.each(function(){
			var self = $(this);
			var navTitle = self.find(".navTitle");
			self.height(navTitle.height());
			self.width(navTitle.width());
			self.find(".navContent").addClass("hidden");
		})
		navItems.on("mouseenter",function mouseover(event){
			var self = $(this);
			var navContent = self.find(".navContent");
			self.addClass("active");
			self.find(".after").addClass("hover");
			navContent.css({
				opacity: 0
			}).removeClass("hidden");

			var offSet_width = self.width();//-parseInt(self.css("borderTopWidth"));
			var offSet_height = self.height()+parseInt(self.css("borderTopWidth"));//-parseInt(navContent.css("borderTop"))-parseInt(self.css("borderBottom"));
			if (opction.keepTop) {
				var selfOffSet = self.offset();
				var shopNavOffSet = shopNav.offset();
				offSet_height += selfOffSet.top-shopNavOffSet.top;
				var keepTop = navContent.height()+parseInt(self.css("borderBottomWidth"));
				if(offSet_height-keepTop>0){
					offSet_height = keepTop;
				}
			}
			navContent.css({
				"z-index":"",
				left:offSet_width,
				top:-offSet_height
			})
			navContent.stop().animate({
				opacity: 100
			},opction.animateTime,function(){
			});
			event.stopPropagation();
		});
		navItems.on("mouseleave",function(event){
			var self = $(this);
			var navContent = self.find(".navContent");
			self.find(".after").removeClass("hover");
			self.removeClass("active");
			navContent.stop().animate({
				"z-index":-1,
				opacity: 0
			},opction.animateTime,function(){
				navContent.addClass("hidden");

			});
			event.stopPropagation();
		});

		navItems.mouseleave();
	}
}(jQuery))