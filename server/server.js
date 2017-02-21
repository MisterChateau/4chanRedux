const express = require('express');
const r = require('ramda');
const timer = require('timers');
var cors = require('cors')

const log = r.tap(r.bind(console.log, console));

const axios = require('axios').create({
    headers: { 'If-Modified-Since': (new Date()).toUTCString(), 'User-Agent': 'nodeChanClient/0.0.1'}
});

const app = express().use(cors());


const mapThread = r.curry((board, thread) => {
    return {
        name: thread.name,
        replies: thread.replies,
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

const mapBoard = (board) => (console.log(board), { board: board.board, title: board.title });
app.get('/boards', function (req, res) {
    axios.get(`http://a.4cdn.org/boards.json`)
        .then((response) => r.compose(r.map(mapBoard), r.path(['boards']))(response.data))
        .then((boards) => res.send(boards))
        .catch(err => console.log(err));
})

app.listen(3000, function () {
  console.log('Server running on port 3000!')
})
