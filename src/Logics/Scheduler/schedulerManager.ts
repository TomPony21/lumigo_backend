import { addActiveInstance } from '../../AppStorage';
import { sleepFunction } from '../Functions';

const startSleepFunction = (message: string): void => {
    const sleepFunc = new sleepFunction(message)
    sleepFunc.currentProcess.start();
    addActiveInstance();
}

export { startSleepFunction }



