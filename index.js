const http = require("http");

const oneLinerJoke = require('one-liner-joke');

const port = 3000;


const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	  
	if (req.url.includes('joke') ) {
	  const randomJoke = oneLinerJoke.getRandomJoke({
	    'exclude_tags': ['dirty', 'racist', 'marriage']
	  });
	
	  res.write(`${randomJoke.body}\npowered by one-liner-joke`)
	} else {
	  res.write('Hello World!');
	}
	res.end()
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });