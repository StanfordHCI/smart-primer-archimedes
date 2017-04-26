function resizeIframe(iframe) {
	iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}

function expositionOnLoad() {
	$(".exposition").mouseenter( function (eventObject) {
		var target = $(eventObject.target);
		//console.log(target.attr("data-link"))
		$('<iframe>', {
			src: target.attr("data-link"),
			id: target.attr("data-link"),
			width: 300,
			scrolling: 'no',
			style: "position: absolute; box-shadow: 5px 5px 15px #888888; " + 
				"border: 0px solid black;",
			onload: "resizeIframe(this)"
		}).appendTo(target);
	}).mouseleave( function (eventObject) {
		$("iframe").remove();
	})
}