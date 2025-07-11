# URL Shortener Microservice

Build a full stack JavaScript app that is functionally similar to this: https://url-shortener-microservice.freecodecamp.rocks. Working on this project will involve you writing your code using one of the following methods:

  > Clone this GitHub repo and complete your project locally.
  > Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

HINT: Do not forget to use a body parsing middleware to handle the POST requests. Also, you can use the function dns.lookup(host, cb) from the dns core module to verify a submitted URL.

Tests : 

1. You should provide your own project, not the example URL.
2. You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}.
3. When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.
4. If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }.
