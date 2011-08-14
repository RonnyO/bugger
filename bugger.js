var bugger = (function(){
	var bag = [
		function(){console.log('0')}, function(){console.log('1')}, function(){console.log('2')}, function(){console.log('3')}, function(){console.log('4')}, function(){console.log('5')}, function(){console.log('6')}, function(){console.log('7')}
	];
	var active = [];
	var chooseBugs = function(){
		active = Cookie.get('bugger.active');
		if( active !== null ) return;
		var velocity = Cookie.get('bugger.velocity') || Math.floor( Math.random() * 10 ),
			expires = Cookie.get('bugger.expires') || Math.random();
		Cookie.set('bugger.velocity', velocity, expires, '/');
		Cookie.set('bugger.expires', expires, expires, '/');
		
		for(var i = 0; i < velocity; i++) {
			var level = Math.floor( Math.random() * bag.length );
			if(active.indexOf(level) > -1){ i-- } else { active.push(level) };
		}
			
		console.log('velocity', velocity, active);
		Cookie.set('bugger.active', active);
	};
	
	var init = function(){
		chooseBugs();
		console.info('active bugs are', active);
		for(var i = 0; i < active.length; i++){
			if (typeof bag[active[i]] === 'function') bag[active[i]]();
		}
	};
	
	return {
		init: init,
		active: active
	};
})();