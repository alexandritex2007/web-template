$(function(){
	// go_top
	$('.gotop').css('opacity',0);
	$('.gotop > a').click(function(){
		$('html,body').animate(
			{'scrollTop': $('body').offset().top },
			{'duration':'normal','easing':'swing','queue':false}
		);
		return false;
	});
	$(window).scroll(function(){ moveGoTop(); });
	function moveGoTop(){
		var x = $('.l-footer').offset().top - $(window).scrollTop();
		if( x <= $(window).height() ){ $('.gotop').css( 'position', 'absolute' );
		$('.gotop').addClass('change');
		}
		else{ $('.gotop').css( 'position', 'fixed' );
		$('.gotop').removeClass('change');
		}
		if( $(window).scrollTop() < 200 )
			$('.gotop').animate({'opacity':0}, {'duration':'fast','easing':'linear','queue':false});
		else
			$('.gotop').animate({'opacity':1}, {'duration':'fast','easing':'linear','queue':false});
	}
	//3点リーダー
	$('.text_overflow').each(function() {
		var $target = $(this);
		var html = $target.html();
		var $clone = $target.clone();
		$clone
			.css({
				display: 'none',
				position : 'absolute',
				overflow : 'visible'
			})
			.width($target.width())
			.height('auto');
		$target.after($clone);
		while((html.length > 0) && ($clone.height() > $target.height())) {
			html = html.substr(0, html.length - 1);
			$clone.html(html + '...');
		}
		$target.html($clone.html());
		$clone.remove();
	});
	// img switch
	var $setElem = $('.switch'),
	pcName = '_pc',
	spName = '_sp',
	replaceWidth = 641;

	$setElem.each(function(){
		var $this = $(this);
		function imgSize(){
			var windowWidth = parseInt($(window).width());
			if(windowWidth >= replaceWidth) {
				$this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
			} else if(windowWidth < replaceWidth) {
				$this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
			}
		}
		$(window).resize(function(){imgSize();});
		imgSize();
	});
});