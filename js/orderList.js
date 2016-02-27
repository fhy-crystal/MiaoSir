$(document).ready(function() {
	// 顶部导航切换
	var $nav_li = $('.top_nav li');
	var $nav_con = $('.content .con_item');
	$nav_li.click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active')
		var data_nav = $(this).attr('data-nav');//top_nav li 的data-nav
		$nav_con.each(function(i) {
			if($(this).attr('data-con') == data_nav)
			{

				$(this).show();
			}
			else
			{
				$(this).hide();
			}

		});
	});
});