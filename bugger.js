var bugger = (function(){
	var bag = [
		/* IE6ify, from http://ie6ify.com/ */
		function(){
			function ie6ify(){var i=0,r=function(n){return Math.floor(Math.random()*n)},f=document.getElementsByTagName('body')[0].getElementsByTagName('*'),o=function(e){return typeof(e.style)=='object'&&e.tagName!='SCRIPT'},s=function(){while(!o(e=f[r(f.length)])){}return e.style};while(i++<5){s().display=r(2)?'block':'inline';s().position=r(2)?'absolute':'relative';s().margin=r(2)?'0':'1em';s().padding=r(2)?'0':'1em';s().width=r(2)?'':'auto';}}
			var body = document.getElementsByTagName('body')[0];
			body.onclick = function(){
				if(Math.random() * 10 < 3) ie6ify();
			};
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
		// Define undefined
		function(){
			undefined = {};
		},
		// Flip! from http://userscripts.org/scripts/show/100110
		function(){
			var addStyle = function(css) {
				var head = document.getElementsByTagName('head')[0], style = document.createElement('style');
				if (!head) return;
				style.type = 'text/css';
				style.textContent = css;
				head.appendChild(style);
			}
			var css = "body{-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1)}img{-moz-transform: scaleY(-1);-o-transform: scaleY(-1);-webkit-transform: scaleY(-1);transform: scaleY(-1)}";
			addStyle(css);
		},
		// Small, repetitive loops - Make the page unresponsive for small chunks of time
		function(){
			var i = 10,
			x = 500000000,
			func = function(){
				if(i){
					i--
					while(x--);
					x = 500000000;
					setTimeout(func, 2000);
				} else {
					clearTimeout(func);
				}
			};
			setTimeout(func, 2000);
		},
		// Override every other link's onclick handler
		function(){
			var links = document.getElementsByTagName('a');
			for(var i = 0, l = links.length; i < l; i += 2) {
				links[i].onclick = function(){
					return false;
				};
			}
		}
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