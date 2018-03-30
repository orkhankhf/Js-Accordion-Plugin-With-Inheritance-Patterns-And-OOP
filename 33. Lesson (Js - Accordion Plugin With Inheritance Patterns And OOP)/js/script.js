var $ = function (selector){
	var element = document.querySelector(selector);
	return element;
}
Element.prototype.css = function(property,value){
	if(property && value){
		this.style[property] = value;
		console.log('dfv')
	}else if(!value && typeof property == "object"){
		for(var prop in property){
			this.style[prop] = property[prop];
		}
	}
	return this;
}
function accordion(headings,texts,appendTo){
	var accordion = document.createElement("div");
	var appendTo = $(appendTo)
	accordion.setAttribute("id", "accordion");
	appendTo.appendChild(accordion);
	for(a=0; a<headings.length; a++){
		var div = document.createElement("div");
		var h1 = document.createElement("h1");
		var p = document.createElement("p");
		h1.innerHTML = headings[a];
		p.innerHTML = texts[a];
		div.appendChild(h1);
		div.appendChild(p);
		h1.onclick = function(){
			allTexts = accordion.querySelectorAll("p");
			for(a=0; a<allTexts.length; a++){
				allTexts[a].css("display","none");
			}
			this.parentElement.querySelector("p").css("display","block");
		}
		accordion.appendChild(div);
	}
}
