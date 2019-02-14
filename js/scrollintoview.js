/**
* @nocollapse
* @method scrollIntoView: element.scrollIntoView polyfill
*/
(function() {
	if(!HTMLElement.prototype.scrollIntoView) {
		HTMLElement.prototype.scrollIntoView = function() {
			for(var p = this.parentNode, e = this.getBoundingClientRect(), t = p.getBoundingClientRect(), s; p != document.documentElement; p = p.parentNode, t = p.getBoundingClientRect()) {
				if(!(Math.round(t.height) >= p.scrollHeight)) {
					p.scrollIntoView();
					break;
				}
			}
			s = p.scrollTop + e.top - t.top;
			if(p === document.body) document.documentElement.scrollTop = p.scrollTop = s;
			else p.scrollTop = s;
		}
	}
	else console.log("native element.scrollIntoView() ok");
})();