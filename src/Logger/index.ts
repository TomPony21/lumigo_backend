import * as fs from 'fs'
import config from '../Config';

const logToFile = (message: String): void => {
    const stream = fs.createWriteStream(config['logFilePath'], {
        'flags': 'a'
    });
    stream.write(message + '\n');
    stream.end();
}

export { logToFile }