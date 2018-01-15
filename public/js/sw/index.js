self.addEventListener('fetch', function(event) {

  event.respondWith(
    fetch(event.request)
        //For success
        .then(function(response) {
            //page not found
      if (response.status === 404) {
        // TODO: instead, respond with the gif at
        // /imgs/dr-evil.gif
        // using a network request
          return fetch('/imgs/dr-evil.gif');
      }
      return response;
      //for failures
    }).catch(function() {
      return new Response("Uh oh, that totally failed!");
    })
  );
});