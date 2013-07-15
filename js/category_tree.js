(function (category_tree) {
	category_tree = document.getElementById('category_tree');
	var cs = category_tree.children;
	for(var i=0,item;item = cs[i];i+=1){
		var title = item.innerText;
		var nodes = item.childNodes;
		for(var j=0,node;node=nodes[j];j+=1){
			if (node.nodeType===8) {
				var textContent = node.textContent;
				createPlan(item,textContent,i);
				bindEvent(item);
				break;
			}
		}
	}
	function createPlan (el,textContent,i) {
		var div = document.createElement("div");
		div.className="plan"
		var style = div.style;
		var offset = getElementoffSet(el);
		style.position = "absolute";
		console.log(offset);
		style.left = offset.left+200+"px";
		if(i===0) {
			style.top = offset.top-1+"px";
		}else{
			style.top = offset.top+3+"px";
		}
		style.background="#FFF";
		div.innerHTML = "<h3>精品推荐啊！</h3>"+textContent;
		el.appendChild(div);
		el.style.width = "100%";
	}
	function getElementoffSet(el){
        var pos = {"top":0, "left":0};
         if (el.offsetParent){
           while (el.offsetParent){
             pos.top += el.offsetTop;
             pos.left += el.offsetLeft;
             el = el.offsetParent;
           }
         }else if(el.x){
           pos.left += el.x;
         }else if(el.x){
           pos.top += el.y;
         }
         return {left:pos.left, top:pos.top};
	}
	function bindEvent (el) {
		var ti;
		el.onmouseover = function (e) {
			var cl = el.children[1];
			console.log(el.children[1])
			cl.style.display = "block";
		}
		el.onmouseout = function (e) {
			var cl = el.children[1];
			console.log(el.children[1])
			cl.style.display = "none";
		}
	}
	document.head.innerHTML+='<style type="text/css">'+"#category_tree .plan{margin-left: -12px; margin-top: -10px; width: 300px; display: none; border: 1px solid #D94A4A; } #category_tree .plan h3{margin-left: -1px; } #category_tree .plan dd{float: left; padding: 0.5em 1.75em; } #category_tree .plan a{font-size: 12px; }"+'</style>'
}(document.getElementById('category_tree')))