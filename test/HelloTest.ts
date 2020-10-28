import {helloHandler} from "../src/Hello";

const log = require('simple-node-logger').createLogManager().createLogger(__filename.split(/[\\/]/).pop());

describe('Test Hello', () => {
    it('Hello returns a 200 success code', () => {
        log.info('Testing');
        helloHandler({})
            .then(response => {
                log.info(response.statusCode);
            });
    });
});
