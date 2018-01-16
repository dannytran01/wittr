self.addEventListener('fetch', function(event) {
  	// TODO: only respond 'to requests with a
  	// url ending in ".jpg
  	let url = event.request.url;

	if(url.substr(url.length - 4) === ".jpg"){
  		event.respondWith(
  			fetch('/imgs/dr-evil.gif'));
  	}

});
