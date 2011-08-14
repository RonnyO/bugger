// methods to override
var methods = [console.log, alert, document.getElementById, $],
	muhaha = {};
for(var i = 0, l = methods.length; i < l; i++){
	_original = methods[i];
	methods[i] = ( Math.random() > 0.5 ) ? Function() : _original;
}





// ui & stability bugs
ie6ify
crash browser
remove event listeners
remove dom elements
fuck up text direction
flip!

// coding bugs
define undefined
null common functions
switch between common, similar functions (e.g. appendTo and prepend, [].push and [].shift)
mess with the natives
mess with with
aop - instrument common functions with weird methods of your own
silence errors

// how? architecture
Routing - Filtering targets by url patterns
Incosistent bugs - bugs that randomly come and go
Half-sticky bugs - e.g. consistently appear for half an hour
Ghost bugs - bugs that appear when switching back to the tab, and dissolve when blurring it again
Secret shortcuts to debug to impress your qa colleages
Secret shrotcuts to activating or seeding bugs for later activation
Remote activation (ajax polling, node.js events, whatever)
Controllable - Needs to be easily deactivated for both current page and for life
Signature - An ability to sign your bugs (i.e. after ie6ifying three times, add a label "Joe says Hi")