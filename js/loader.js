(function($){

	/**
	 * [loader make a mask while loading]
	 * @param  {[type]} options [the target]
	 * @return {[type]}         [description]
	 */
	$.fn.loader = function(options){
		//defaults
		var settings = $.extend({
			timeToHide: 1000, // default time to hide loader
			pos: 'fixed', // default position
			top: '0px', // default top value
			left: '0px', // default left value
			width: '100%', //default width
			height: '100%', //default height
			zIndex: '1000', //default z-index
			bgColor: 'rgba(0,0,0,.5)', //default background color
			type: 'type_rec' //default loader type
		},options);

		//loader type
		var type_rec = '<div class="loader_type type_rec"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
		var type_cir = '<div class="loader_type type_cir"><div class="loader_con container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="loader_con container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="loader_con container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>'
		var type_cir2 = '<div class="loader_type type_cir2"><div class="double_bounce1"></div><div class="double_bounce2"></div></div>';

		//target
		var _this = $(this);

		// init styles
		var initStyles = {
			'position': settings.pos,
			'top': settings.top,
			'left': settings.left,
			'zIndex': settings.zIndex,
			'width': settings.width,
			'height': settings.height,
			'backgroundColor': settings.bgColor
		};
		_this.css(initStyles);

		_this.each(function(){
			var typeTemp = settings.type;
			switch(typeTemp){
				case 'type_rec'://当传入type_rec，则使用rectangle图案的loading
					_this.html(type_rec);
					break;
				case'type_cir'://当传入type_cir，则使用circle图案的loading
					_this.html(type_cir);
					break;
				case'type_cir2'://当传入type_cir2，则使用两个圆图案的loading
					_this.html(type_cir2);
					break;
				default://默认使用rectangle图案的loading
					_this.html(type_rec);
			}
		});

		// set time to hide loader
		setTimeout(function(){
			_this.fadeOut();
		},settings.timeToHide);
	}

	/**
	 * [center center loader_type]
	 * @return {[type]} [description]
	 */
	function center(){
		var winWidth = $(window).width();//计算窗口的宽度
		var winHeight = $(window).height();//计算窗口的高度

		var conWidth = $('.loader_type').outerWidth();//计算容器的宽度
		var conHeight = $('.loader_type').outerHeight();//计算容器的高度

		$('.loader_type').css({
			'position': 'absolute',
			'top': (winHeight/2)-(conHeight/2)+'px',
			'left': (winWidth/2)-(conWidth/2)+'px'
		});
	}

	$(window).load(function() {
		center();
	});

})(jQuery);