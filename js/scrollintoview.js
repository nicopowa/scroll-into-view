/**
* @nocollapse
* @export
* @method scrollIntoView: 
*/
function scrollIntoView(el) {
	let p = el.parentNode, e = el.getBoundingClientRect(), t = p.getBoundingClientRect(), o = window.getComputedStyle(p)["overflow-y"], s;
	for(; p != document.documentElement; p = p.parentNode, t = p.getBoundingClientRect(), o = window.getComputedStyle(p)["overflow-y"]) {
		 if(Math.round(t.height) <= p.scrollHeight) {
			 scrollIntoView(p);
			 break;
		 }
	}
	s = p.scrollTop + e.top - t.top;
	if(p === document.body) document.documentElement.scrollTop = p.scrollTop = s;
	else p.scrollTop = s;
}