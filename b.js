var d = $('<div>',{css:{'width':'100%','height':'100%','margin':0,'position':'absolute','top':0,'z-index':88888,'background-color':'black'}}).appendTo('body');
var v = $('#videoView').appendTo(d);

var o = true;
$(v).click(function(){
	o = o ? false : true;
	fitScreen(o);
});

function fitScreen(o){
	let w = $(window).width();
	let h = $(window).height();
	let r = $('#ResizablePane').height() / $('#ResizablePane').width();
	$(v).css({
		'width': Math.round(o ? w : h/r) + 'px',
		'height': Math.round(o ? r*w : h) + 'px',
		'margin-top': Math.round(o ? (h-(r*w))/2 : 0) + 'px',
		'margin-left': Math.round(o ? 0 : (w-(h/r))/2) + 'px'
	});
}
fitScreen(o);
