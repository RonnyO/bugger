var bugger = (function(){
	
	var init = function(){
		var velocity = Cookie.get('bugger.velocity') || parseInt(Math.random() * 10, 10),
			expires = Cookie.get('bugger.expires') || Math.random(),
			active = [];
		Cookie.set('bugger.velocity', velocity, expires, '/');
		Cookie.set('bugger.expires', expires, expires, '/');
		console.log(velocity, expires);
		
		var bag = {
			name: function(){},
			name2: function(){},
			name3: function(){}
		};
		
		var howMany = Math.floor(Math.random() * (velocity - 1) + 1);
		console.log('howmany?', howMany, 'length?', Object.size(bag));
		/*$.each(bag, function(i, bug){
			//console.log('\
		});*/
	};
	
	return {
		init: init
	};
})();