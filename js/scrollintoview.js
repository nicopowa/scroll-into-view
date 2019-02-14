function scrollIntoView(el) {
	for(
		var p = el.parentNode, e = el.getBoundingClientRect(), t = p.getBoundingClientRect(), s = window.getComputedStyle(p)["overflow-y"]; 
		p != document.body && (s === "visible" || Math.round(t.height) >= p.scrollHeight); // wtf firefox *.5 rect height
		p = p.parentNode, t = p.getBoundingClientRect(), s = window.getComputedStyle(p)["overflow-y"]
	) {}
	if(p === document.body) document.documentElement.scrollTop = p.scrollTop = p.scrollTop + e.top - t.top; // body.scrollTop deprecated
	else p.scrollTop = p.scrollTop + e.top - t.top;
}

