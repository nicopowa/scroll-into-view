function scrollIntoView(el) {
	/*
	let bounds = el.getBoundingClientRect(), parent = el.parentNode, pbounds = parent.getBoundingClientRect();
	while(parent != document) {
		pbounds = parent.getBoundingClientRect();
		if(pbounds.height < parent.scrollHeight) break;
		parent = parent.parentNode;
	}
	console.log(parent);
	parent.scrollTop = parent.scrollTop + bounds.top - pbounds.top;
	*/
	
	for(
		var p = el.parentNode, e = el.getBoundingClientRect(), t = p.getBoundingClientRect(), s = window.getComputedStyle(p)["overflow-y"]; 
		p != document.body && (s === "visible" || Math.round(t.height) >= p.scrollHeight); // wtf firefox *.5 rect height
		p = p.parentNode, t = p.getBoundingClientRect(), s = window.getComputedStyle(p)["overflow-y"]
	) {}
	if(p === document.body) document.documentElement.scrollTop = p.scrollTop = p.scrollTop + e.top - t.top; // body.scrollTop deprecated
	else p.scrollTop = p.scrollTop + e.top - t.top;
	
}

