$(document).ready(function() {
	// 订单详情页顶部导航切换
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

	//参团倒计时
	timer(86399);
});

/**
 * [timer 倒计时函数]
 * @param  {[type]} time [总秒数]
 * @return {[type]}      [description]
 */
function timer(time){
	window.setInterval(function(){
		var day = 0, hour = 0, minute = 0, second = 0;
		if (time > 0) 
		{
			day = Math.floor(time / (24 * 60 * 60));
			hour = Math.floor(time / (60 * 60) - (day * 24));
			minute = Math.floor(time / 60 - (day * 24 *60) - (hour * 60));
			second = Math.floor(time - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60));
		}
		if(hour <= 9)
		{
			hour = '0' + hour;
		}
		if(minute <= 9)
		{
			minute = '0' + minute;
		}
		if(second <= 9)
		{
			second = '0' + second;
		}
		$('#cd_hour').html(hour);
		$('#cd_minute').html(minute);
		$('#cd_second').html(second);
		time--;
	},1000)
}
