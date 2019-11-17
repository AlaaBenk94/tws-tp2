const ADD_SLIDE = "ADD_SLIDE";
const REMOVE_SLIDE = "REMOVE_SLIDE";
const SET_SLIDE = 'SET_SLIDE';
const ADD_DRAW_POINTS = 'ADD_DRAW_POINTS';
const RESET_DRAW_POINTS = 'RESET_DRAW_POINTS';

const express = require('express');
const path = require('path');
const http = require('http');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const app = express();
const port = process.env.PORT || 8080;
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};
app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.get('/', (req, res) => {
    res.status(200).sendFile(HTML_FILE);
});

// app.listen(port, function () {
//     console.log('App listening on port: ' + port);
// });

app.use(express.static(DIST_DIR));

const server = http.Server(app);
const io = require('socket.io')(server);
server.listen(port);

let lastSetSlideAction = -1;

io.on('connection', function (socket) {
    console.log(`connected clients : ${io.sockets.server.eio.clientsCount}`);

    socket.on(SET_SLIDE, (action) => {
        console.log(`received set slide action ${JSON.stringify(action)} from ${socket.id}`);
        if( lastSetSlideAction.index !== action.index) {
            console.log(`${lastSetSlideAction} !== ${action}`);
            lastSetSlideAction = action;
            socket.broadcast.emit(SET_SLIDE, action);
        }
        console.log(`${lastSetSlideAction} === ${action}`);
    });

    socket.on(ADD_DRAW_POINTS, (action) => {
        console.log(`received add draw points action ${JSON.stringify(action)} from ${socket.id}`);
        socket.broadcast.emit(ADD_DRAW_POINTS, action);
    });

    socket.on(RESET_DRAW_POINTS, (action) => {
        console.log(`received reset draw points action ${JSON.stringify(action)} from ${socket.id}`);
        socket.broadcast.emit(RESET_DRAW_POINTS, action);
    });

    socket.on(REMOVE_SLIDE, (action) => {
        console.log(`received remove slide action ${JSON.stringify(action)} from ${socket.id}`);
        socket.broadcast.emit(REMOVE_SLIDE, action);
    });

    socket.on(ADD_SLIDE, (action) => {
        console.log(`received add slide action ${JSON.stringify(action)} from ${socket.id}`);
        socket.broadcast.emit(ADD_SLIDE, action);
    });

});
