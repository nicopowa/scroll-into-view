/**
* @nocollapse
* @method scrollIntoView: element.scrollIntoView polyfill
*/
(function() {
	if(!HTMLElement.prototype.scrollIntoView) {
		HTMLElement.prototype.scrollIntoView = function() {
			for(var p = this.parentNode, t = p.getBoundingClientRect(); p != document.documentElement; p = p.parentNode, t = p.getBoundingClientRect()) {
				if(!(Math.round(t.height) >= p.scrollHeight)) {
					p.scrollIntoView();
					break;
				}
			}
			let s = p.scrollTop + this.getBoundingClientRect().top - t.top;
			if(p === document.body) document.documentElement.scrollTop = p.scrollTop = s;
			else p.scrollTop = s;
		}
	}
})();