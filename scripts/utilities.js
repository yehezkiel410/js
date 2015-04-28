// Clones any given variable
function clone(x){
	if(!x) return null;

	if(x.constructor === Object){
		var cloned = new Object();

		for(var key in x){
			cloned[key] = clone(x[key]);
		}

		return cloned;
	}
	else if(x.constructor === Array){
		var cloned = new Array();

		x.forEach(function(val, idx){
			cloned.push(clone(val));
		});

		return cloned;
	} else {
		return x;
	}
}