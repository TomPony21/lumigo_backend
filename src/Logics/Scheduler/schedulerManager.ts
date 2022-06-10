import { sleepFunction } from '../Functions';

const startSleepFunction = async (message: string): Promise<void> => {
    sleepFunction.runWrapper(message);
}

export { startSleepFunction }
