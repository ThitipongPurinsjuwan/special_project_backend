import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import sbshopRouter from './routes/sbshop';

const NAMESPACE = 'Server';
const router = express();

router.use((req, res, next) => {
    console.info(NAMESPACE, `METHOD - [${req.method}] , URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on('finish', () => {
        console.info(NAMESPACE, `METHOD - [${req.method}] , URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });
    next();
});

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/** Routes go here */
router.use('/', sbshopRouter);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const app = http.createServer(router);
const { port, hostname } = config.server;
app.listen(port, () => console.info(NAMESPACE, `Server is running ${hostname}:${port}`));
