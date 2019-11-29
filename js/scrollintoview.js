/**
* @nocollapse
* @method scrollIntoView: element.scrollIntoView polyfill
*/
(function() {
	if(!HTMLElement.prototype.scrollIntoView) {
		HTMLElement.prototype.scrollIntoView = function() {
			for(var p = this.parentNode, r = p.getBoundingClientRect(); p != document.documentElement; p = p.parentNode, r = p.getBoundingClientRect()) {
				if(!(Math.round(r.height) >= p.scrollHeight)) { // || !(Math.round(r.width) >= p.scrollWidth)
					p.scrollIntoView();
					break;
				}
			}
			let e = this.getBoundingClientRect(), l = p.scrollLeft + e.left - r.left, t = p.scrollTop + e.top - r.top;
			if(p === document.body) {
				document.documentElement.scrollLeft = p.scrollLeft = l;
				document.documentElement.scrollTop = p.scrollTop = t;
			}
			else {
				p.scrollLeft = l;
				p.scrollTop = t;
			}
		}
	}
})();