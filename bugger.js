var bugger = (function(){
	var bag = [
		/* IE6ify, from http://ie6ify.com/ */
		function(){
			var ie6ify = function(){var i=0,r=function(n){return Math.floor(Math.random()*n)},f=document.getElementsByTagName('body')[0].getElementsByTagName('*'),o=function(e){return typeof(e.style)=='object'&&e.tagName!='SCRIPT'},s=function(){while(!o(e=f[r(f.length)])){}return e.style};while(i++<5){s().display=r(2)?'block':'inline';s().position=r(2)?'absolute':'relative';s().margin=r(2)?'0':'1em';s().padding=r(2)?'0':'1em';s().width=r(2)?'':'auto';}};
			//bugger.attach(ie6ify, clicks);
		},
		/* Null Methods */
		function(){
			var methods = [console.log, alert, document.getElementById, $],
				muhaha = {};
			for(var i = 0, l = methods.length; i < l; i++){
				if(typeof methods[i] === 'function') {
					_original = methods[i];
					methods[i] = ( Math.random() > 0.5 ) ? Function() : _original;
				}
			}
		},
		// Defined undefined
		function(){
			undefined = {};
		},
		function(){console.log('3')}, function(){console.log('4')}, function(){console.log('5')}, function(){console.log('6')}, function(){console.log('7')}
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
			
		Cookie.set('bugger.active', active);
	};
	
	var init = function(){
		chooseBugs();		
		for(var i = 0; i < active.length; i++){
			if (typeof bag[active[i]] === 'function') bag[active[i]]();
		}
	};
	
	return {
		init: init,
		active: active
	};
})();