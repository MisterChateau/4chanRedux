const express = require('express');
const r = require('ramda');
const timer = require('timers');

const axios = require('axios').create({
    headers: { 'If-Modified-Since': (new Date()).toUTCString(), 'User-Agent': 'nodeChanClient/0.0.1'}
});

const app = express();

const mapThread = r.curry((board, thread) => {
    return {
        message: thread.com,
        imageUrl: `http://i.4cdn.org/${board}/${thread.tim}${thread.ext}`,
        imageThumbnailUrl: `http://i.4cdn.org/${board}/${thread.tim}s.jpg`
    }
});

app.get('/catalog/:board', function (req, res) {
    axios.get(`http://a.4cdn.org/${req.params.board}/catalog.json`)
        .then((response) => {
            return r.compose(
                        r.map(mapThread(req.params.board)),
                        r.take(100),
                        r.flatten,
                        r.pluck('threads')
                    )(response.data);
        })
        .then((threads) => res.send(threads))
        .catch(err => console.log(err));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})