var bugger = (function(){
	var bag = {
		'name0': function(){},
		'hello': function(){},
		'goodbye': function(){},
		'damn': function(){},
		'toughluck': function(){}
	};
	var active = {};
	var chooseBugs = function(){
		if( Cookie.get('bugger.active') !== null ) return;
		var velocity = Cookie.get('bugger.velocity') || parseInt(Math.random() * 10, 10),
			expires = Cookie.get('bugger.expires') || Math.random()
		Cookie.set('bugger.velocity', velocity, expires, '/');
		Cookie.set('bugger.expires', expires, expires, '/');
		
		var percent = Math.random() * (velocity - 1) + 1,
			howMany = Math.ceil( Object.size(bag) * (percent / 10)),
			names = [],
			which = [],
			whichNo;
			
		for(var i = 1; i <= howMany; i++){
			
			for(var bug in bag) {
				if(bag.hasOwnProperty(bug))
					names.push(bug);
			}
			whichNo = Math.floor( Math.random() * Object.size(bag) );
			which.push( whichNo );
			
			console.log('which?', which, bag[names[whichNo]]);
			for(var j = 0; j < which.length; j++){
				console.log('which?', which[j]);
				active[names[j]] = bag[names[j]];
			}
		}
		
		console.log(active);
			
		
		//Cookie.set('bugger.active', active.join());
	};
	
	var init = function(){
		chooseBugs();
		console.info('active bugs are', active);
	};
	
	return {
		init: init,
		active: active
	};
})();