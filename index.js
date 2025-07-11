require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns');
const urlParser = require('url');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

let urls = {};
let id = 1;

app.post("/api/shorturl", function(req, res) {
  const originalUrl = req.body.url;

  const urlPattern = /^https?:\/\/.+/;
  if (!urlPattern.test(originalUrl)) {
    return res.json({ error: 'invalid url' });
  }

  const hostname = urlParser.parse(originalUrl).hostname;
  dns.lookup(hostname, (err) => {
    if (err) {
      return res.json({ error: 'invalid url' });
    } else {
    
      const short = id++;
      urls[short] = originalUrl;

      return res.json({
        original_url: originalUrl,
        short_url: short
      });
    }
  });
});

app.get("/api/shorturl/:id", function(req, res) {
  const shortId = req.params.id;
  const originalUrl = urls[shortId];

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.json({ error: 'No short URL found for given input' });
  }
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
