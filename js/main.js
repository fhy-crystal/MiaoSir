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
			second = Math.floor(time - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60));//Math.floor()向下取整
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


/**
 * 自动向上轮播
 */
function AutoScroll(obj){
    $(obj).find("ul:first").animate({
        marginTop:"-40px"
    },500,function(){
        $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
    });
}
