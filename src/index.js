const express = require('express');
const livereload = require('livereload');
const connectLR = require('connect-livereload');
const path = require('path');

const PORT = 5000;
const server = express();
const lrServer = livereload.createServer();
const publicPath = path.join(__dirname, '../docs');
const htmlFiles = path.join(publicPath, 'samples');

server.use(connectLR());
server.use(express.static(publicPath));
lrServer.watch(publicPath);

server.get('/timeline-scroll', (req, res) => {
        res.sendFile(path.join(htmlFiles, 'timeline-scroll.html'));
    })
    .get('/overlapping-cards', (req, res) => {
        res.sendFile(path.join(htmlFiles, 'overlapping-cards.html'));
    });


server.listen(PORT, () => {
    console.log(`Server up on port ${PORT}.`);
});