window.addEventListener("load", main);

var scrolltable;
var overflowtable;

function main(event) {
	console.log("main");
	
	document.documentElement.scrollTop = 0;
	
	setTimeout(test, 1000);
}

function test() {
	var div = document.createElement("div");
	div.style.overflow = "scroll";
	div.style.position = "absolute";
	div.style.width = "200px";
	div.style.height = "200px";
	div.style.top = "200px";
	div.style.left = "350px";
	document.body.appendChild(div);
	
	scrolltable = makeTable();
	div.appendChild(scrolltable);
	
	overflowtable = makeTable();
	document.body.appendChild(overflowtable);
	
	setTimeout(function scroll() {
		var el = scrolltable.childNodes[800];
		scrollIntoView(el);
	}, 2000);
	
	setTimeout(function scroll() {
		var el = overflowtable.childNodes[800];
		scrollIntoView(el);
	}, 4000);
}

function makeTable() {
	
	
	var table = document.createElement("table");
	table.setAttribute("border", 1);
	
	
	var i, j, line, cell;
	
	line = document.createElement("tr");
	
	cell = document.createElement("td");
	cell.innerHTML = "line";
	line.appendChild(cell);
	
	for(i = 0; i < 4; i++) {
		cell = document.createElement("td");
		cell.innerHTML = "field " + i;
		line.appendChild(cell);
	}
	table.appendChild(line);
	
	for(i = 0; i < 1000; i++) {
		
		line = document.createElement("tr");
		
		cell = document.createElement("td");
		cell.innerHTML = "line " + i;
		line.appendChild(cell);
		
		for(j = 0; j < 4; j++) {
			cell = document.createElement("td");
			cell.innerHTML = "data " + j;
			line.appendChild(cell);
		}
		table.appendChild(line);
		
	}
	
	return table;
}

