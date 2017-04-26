function expositionOnLoad() {
	$(".exposition").mouseenter( function (eventObject) {
		var target = $(eventObject.target);
		//console.log(target.attr("data-link"))
		$('<iframe>', {
			src: target.attr("data-link"),
			id: target.attr("data-link"),
			frameborder: 1,
			scrolling: 'yes',
			style: "position: fixed; border: 2px solid red"
		}).appendTo(target);
	}).mouseleave( function (eventObject) {
		$("iframe").remove();
	})
}